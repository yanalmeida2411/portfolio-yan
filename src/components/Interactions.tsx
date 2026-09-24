"use client";

import { useEffect, useRef } from "react";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/hooks";

const MAGNET = 0.28; // fração da distância ao centro que o botão acompanha
const MAGNET_MAX = 8; // px
const FOLLOW = 0.22; // suavização do rótulo que segue o ponteiro (0–1)

/**
 * Interações que só fazem sentido com mouse/trackpad, ligadas por atributo
 * em vez de componente por componente — um listener só, por delegação:
 *
 * - `data-cursor="Texto"`: um rótulo acompanha o ponteiro sobre o elemento
 *   (some sobre links, botões e o painel de detalhes, que já dizem o que fazem);
 * - `data-magnetic`: o elemento é puxado de leve na direção do ponteiro;
 * - `data-parallax="0.06"`: desloca no eixo Y conforme rola a página.
 *
 * Nada disso roda em toque ou com prefers-reduced-motion. O cursor nativo
 * continua visível: o rótulo é um complemento, não um substituto.
 */
export default function Interactions() {
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();
  const labelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // rótulo + ímã
  useEffect(() => {
    const label = labelRef.current;
    const text = textRef.current;
    if (!fine || reduced || !label || !text) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    let lx = 0;
    let ly = 0;
    let showing = false;
    let magnet: HTMLElement | null = null;

    const tick = () => {
      lx += (x - lx) * FOLLOW;
      ly += (y - ly) * FOLLOW;
      label.style.transform = `translate3d(${lx.toFixed(1)}px, ${ly.toFixed(1)}px, 0)`;
      // para o laço quando alcança o ponteiro
      frame = Math.abs(x - lx) + Math.abs(y - ly) > 0.3 ? requestAnimationFrame(tick) : 0;
    };

    const release = () => {
      if (magnet) magnet.style.translate = "";
      magnet = null;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const target = e.target as Element | null;
      x = e.clientX;
      y = e.clientY;

      const host = target?.closest<HTMLElement>("[data-cursor]");
      const overControl = !!host && !!target?.closest("a, button, [data-cursor-off]");
      const show = !!host && !overControl;
      if (show && host) {
        if (!showing) {
          // aparece já no ponteiro, sem atravessar a tela
          lx = x;
          ly = y;
        }
        if (text.textContent !== host.dataset.cursor) text.textContent = host.dataset.cursor ?? "";
      }
      if (show !== showing) {
        showing = show;
        label.dataset.visible = String(show);
      }
      if (showing && !frame) frame = requestAnimationFrame(tick);

      const m = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (m !== magnet) release();
      if (m) {
        magnet = m;
        const r = m.getBoundingClientRect();
        const clamp = (v: number) => Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, v));
        const dx = clamp((x - (r.left + r.width / 2)) * MAGNET);
        const dy = clamp((y - (r.top + r.height / 2)) * MAGNET);
        m.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
      }
    };

    const onLeave = () => {
      showing = false;
      label.dataset.visible = "false";
      release();
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      onLeave();
    };
  }, [fine, reduced]);

  // parallax por rolagem, só nos elementos visíveis
  useEffect(() => {
    if (reduced || !window.matchMedia("(min-width: 768px)").matches) return;

    const visible = new Set<HTMLElement>();
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      visible.forEach((el) => {
        const r = el.getBoundingClientRect();
        // 0 quando o centro do elemento está no centro da tela
        const offset = r.top + r.height / 2 - vh / 2;
        const speed = Number(el.dataset.parallax) || 0.05;
        el.style.translate = `0 ${(-offset * speed).toFixed(1)}px`;
      });
    };
    const onScroll = () => {
      if (!frame && visible.size) frame = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) visible.add(el);
        else visible.delete(el);
      }
      onScroll();
    });
    const els = document.querySelectorAll<HTMLElement>("[data-parallax]");
    els.forEach((el) => io.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      els.forEach((el) => (el.style.translate = ""));
    };
  }, [reduced]);

  return (
    <div ref={labelRef} className="cursor-label" data-visible="false" aria-hidden="true">
      <span ref={textRef} />
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      </svg>
    </div>
  );
}
