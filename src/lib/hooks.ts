"use client";

import { useEffect, useState, useSyncExternalStore, type RefObject } from "react";

function useMediaQuery(query: string, serverValue = false) {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => serverValue
  );
}

export const usePrefersReducedMotion = () =>
  useMediaQuery("(prefers-reduced-motion: reduce)");

/** Mouse ou trackpad: só aí vale a pena reagir a hover e inclinação. */
export const useFinePointer = () => useMediaQuery("(hover: hover) and (pointer: fine)");

/**
 * Marca como visíveis os elementos `[data-reveal]` quando entram na tela.
 * Montado uma vez na página; avisa o <head> que assumiu (data-reveal-ready),
 * senão o script de segurança do layout desliga as entradas animadas.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.revealReady = "true";
    if (root.dataset.motion !== "on") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const observeAll = () =>
      document
        .querySelectorAll("[data-reveal]:not(.is-visible)")
        .forEach((el) => io.observe(el));
    observeAll();

    // conteúdo que troca de idioma remonta nós; observa os novos também
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

/** Id da seção que ocupa o meio da tela, para marcar o link ativo do menu. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // faixa fina no meio da viewport: só uma seção cruza por vez
      { rootMargin: "-45% 0px -54% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return active;
}

const MAX_TILT = 5; // graus — suficiente para sentir profundidade sem enjoar

/**
 * Inclina o elemento seguindo o ponteiro, escrevendo --rx/--ry direto no
 * estilo (sem re-render). Desligado em toque e com movimento reduzido.
 */
export function useTilt(ref: RefObject<HTMLElement | null>, enabled: boolean) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    let frame = 0;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.dataset.tilting = "true";
        el.style.setProperty("--ry", `${(x * MAX_TILT * 2).toFixed(2)}deg`);
        el.style.setProperty("--rx", `${(-y * MAX_TILT * 2).toFixed(2)}deg`);
        el.style.setProperty("--lift", "10px");
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      delete el.dataset.tilting;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--lift", "0px");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      onLeave();
    };
  }, [ref, enabled]);
}
