"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "../LangProvider";
import { usePrefersReducedMotion } from "@/lib/hooks";
import type { SceneColors, StackScene } from "./stackScene";

function readColors(): SceneColors {
  const css = getComputedStyle(document.documentElement);
  return {
    line: css.getPropertyValue("--color-text").trim() || "#1d1f20",
    accent: css.getPropertyValue("--color-accent").trim() || "#4c718f",
  };
}

function supportsWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") ?? c.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Espera o navegador ficar ocioso para não disputar a primeira pintura. */
function whenIdle(cb: () => void) {
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(cb, { timeout: 1200 });
    return () => window.cancelIdleCallback(id);
  }
  const id = setTimeout(cb, 250);
  return () => clearTimeout(id);
}

/**
 * Desenho estático das três camadas: aparece enquanto o three.js carrega,
 * e fica de vez se o navegador não tiver WebGL.
 */
function SceneFallback() {
  const plane = (y: number) =>
    `M 50 ${y - 14} L 88 ${y} L 50 ${y + 14} L 12 ${y} Z`;
  return (
    <svg className="scene-fallback" viewBox="0 0 100 100" aria-hidden="true" fill="none">
      {[28, 50, 72].map((y) => (
        <path key={y} d={plane(y)} stroke="currentColor" strokeWidth="0.35" opacity="0.8" />
      ))}
      <path d="M 50 36 V 64" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
    </svg>
  );
}

export default function HeroScene() {
  const { t } = useLang();
  const reducedMotion = usePrefersReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas || !supportsWebGL()) return;

    let scene: StackScene | null = null;
    let disposed = false;
    const cleanups: (() => void)[] = [];

    const cancelIdle = whenIdle(async () => {
      const { createStackScene } = await import("./stackScene");
      if (disposed) return;

      const lowPower =
        window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;

      try {
        scene = createStackScene({
          canvas,
          colors: readColors(),
          reducedMotion,
          lowPower,
          onFrame: (anchors) => {
            // espaço até a borda da janela: o rótulo pode sair do canvas,
            // mas encosta na borda da tela em vez de vazar
            const room = document.documentElement.clientWidth - wrap.getBoundingClientRect().left;
            anchors.forEach((p, i) => {
              const el = labelRefs.current[i];
              if (!el) return;
              const x = Math.min(p.x + 10, room - el.offsetWidth - 12);
              el.style.transform = `translate(${x}px, ${p.y}px) translateY(-50%)`;
            });
          },
        });
      } catch {
        return; // sem contexto WebGL: o desenho estático continua no lugar
      }
      const s = scene;

      // tamanho
      const ro = new ResizeObserver(([entry]) => {
        s.resize(entry.contentRect.width, entry.contentRect.height);
      });
      ro.observe(wrap);
      cleanups.push(() => ro.disconnect());

      // só anima enquanto estiver visível e com a aba em primeiro plano
      let onScreen = true;
      const sync = () => (onScreen && !document.hidden ? s.start() : s.stop());
      const io = new IntersectionObserver(([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      });
      io.observe(wrap);
      document.addEventListener("visibilitychange", sync);
      cleanups.push(() => {
        io.disconnect();
        document.removeEventListener("visibilitychange", sync);
      });

      // ponteiro: só mouse/trackpad
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const onPointer = (e: PointerEvent) =>
          s.setPointer(
            (e.clientX / window.innerWidth) * 2 - 1,
            (e.clientY / window.innerHeight) * 2 - 1
          );
        window.addEventListener("pointermove", onPointer, { passive: true });
        cleanups.push(() => window.removeEventListener("pointermove", onPointer));
      }

      // rolagem: as camadas se afastam enquanto o hero sai da tela
      const hero = wrap.closest("section");
      const onScroll = () => {
        const h = hero?.offsetHeight ?? window.innerHeight;
        s.setScroll(window.scrollY / h);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));

      // tema: troca pelo toggle (data-theme) ou pelo sistema
      const onTheme = () => s.setColors(readColors());
      const mo = new MutationObserver(onTheme);
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", onTheme);
      cleanups.push(() => {
        mo.disconnect();
        mq.removeEventListener("change", onTheme);
      });

      sync();
      setReady(true);
    });

    return () => {
      disposed = true;
      cancelIdle();
      cleanups.forEach((fn) => fn());
      scene?.dispose();
      setReady(false);
    };
  }, [reducedMotion]);

  const layers = [
    { name: t.layerUi, tech: "React, Next.js, TypeScript" },
    { name: t.layerApi, tech: "Go, Java, NestJS" },
    { name: t.layerData, tech: "PostgreSQL, MongoDB, Redis" },
  ];

  return (
    <div
      ref={wrapRef}
      className="hero-scene"
      data-ready={ready}
      role="img"
      aria-label={t.sceneLabel}
    >
      <SceneFallback />
      <canvas ref={canvasRef} aria-hidden="true" />
      {layers.map((layer, i) => (
        <div
          key={i}
          ref={(el) => {
            labelRefs.current[i] = el;
          }}
          className="scene-label"
          aria-hidden="true"
        >
          <strong>{layer.name}</strong>
          <span>{layer.tech}</span>
        </div>
      ))}
    </div>
  );
}
