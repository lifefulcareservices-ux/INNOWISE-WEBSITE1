"use client";

import { useEffect, useRef } from "react";

const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map((row) => row.map((v) => (v + 0.5) / 16 - 0.5));

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

interface DitherGradientProps {
  className?: string;
  seed?: number;
  colors?: [string, string, string];
  animated?: boolean;
  resolution?: number;
}

export default function DitherGradient({
  className = "",
  seed = 0,
  colors = ["#2E1047", "#4A236F", "#7B4DA8"],
  animated = true,
  resolution = 90,
}: DitherGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;
    const ctx: CanvasRenderingContext2D = ctx2d;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let shouldAnimate = animated && !reduceMotion;

    const aspect = parent.clientHeight / Math.max(parent.clientWidth, 1) || 0.75;
    const w = resolution;
    const h = Math.max(1, Math.round(resolution * aspect));
    canvas.width = w;
    canvas.height = h;

    const [c0, c1, c2] = colors.map(hexToRgb);
    const image = ctx.createImageData(w, h);
    const startOffset = seed * 137.5;

    let raf = 0;
    let lastFrameTime = 0;
    let visible = true;

    function paint(t: number) {
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const nx = x / w;
          const ny = y / h;
          const field =
            Math.sin((nx * 2.6 + t) * Math.PI * 2) +
            Math.cos((ny * 2.1 - t * 0.7) * Math.PI * 2) +
            Math.sin(((nx + ny) * 1.7 + t * 1.3) * Math.PI * 2);
          const v = (field + 3) / 6;

          const threshold = BAYER_4X4[y % 4][x % 4];
          const dithered = Math.max(0, Math.min(1, v + threshold * 0.5));

          let r: number, g: number, b: number;
          if (dithered < 0.5) {
            const lt = dithered * 2;
            r = lerp(c0[0], c1[0], lt);
            g = lerp(c0[1], c1[1], lt);
            b = lerp(c0[2], c1[2], lt);
          } else {
            const lt = (dithered - 0.5) * 2;
            r = lerp(c1[0], c2[0], lt);
            g = lerp(c1[1], c2[1], lt);
            b = lerp(c1[2], c2[2], lt);
          }

          const i = (y * w + x) * 4;
          image.data[i] = r;
          image.data[i + 1] = g;
          image.data[i + 2] = b;
          image.data[i + 3] = 255;
        }
      }
      ctx.putImageData(image, 0, 0);
    }

    function render(time: number) {
      if (shouldAnimate) {
        if (time - lastFrameTime > 1000 / 24) {
          lastFrameTime = time;
          paint(time / 5000 + startOffset);
        }
        raf = requestAnimationFrame(render);
      }
    }

    paint(startOffset);
    if (shouldAnimate) raf = requestAnimationFrame(render);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && shouldAnimate && !raf) {
          raf = requestAnimationFrame(render);
        } else if (!visible && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    function onVisibilityChange() {
      if (document.hidden && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!document.hidden && visible && shouldAnimate && !raf) {
        raf = requestAnimationFrame(render);
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      shouldAnimate = false;
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [seed, colors, animated, resolution]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`w-full h-full bg-gray-900 ${className}`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}
