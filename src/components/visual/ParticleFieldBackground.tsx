"use client";

import { useEffect, useRef } from "react";

type ParticlePoint = {
  baseX: number;
  baseY: number;
  baseZ: number;
  dashLength: number;
};

/**
 * Nền canvas 3D particle tương tác chuột.
 * - Canvas chỉ để hiển thị nên không chặn click UI (pointer-events: none)
 * - Tối ưu resize cho màn hình retina bằng devicePixelRatio
 */
export function ParticleFieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const PARTICLE_COUNT = 1500;
    const SPHERE_RADIUS = 700;
    const FOV = 800;
    const Z_OFFSET = 1000;

    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;

    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let time = 0;

    let frameId = 0;

    const rotate3D = (x: number, y: number, z: number, rotX: number, rotY: number) => {
      const x1 = x * Math.cos(rotY) - z * Math.sin(rotY);
      const z1 = z * Math.cos(rotY) + x * Math.sin(rotY);
      const y2 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
      const z2 = z1 * Math.cos(rotX) + y * Math.sin(rotX);
      return [x1, y2, z2] as const;
    };

    const project = (x: number, y: number, z: number) => {
      const scale = FOV / (FOV + z + Z_OFFSET);
      return {
        x: cx + x * scale,
        y: cy + y * scale,
        scale,
      };
    };

    const particles: ParticlePoint[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = SPHERE_RADIUS * (0.5 + Math.random() * 0.5);

      return {
        baseX: r * Math.sin(phi) * Math.cos(theta),
        baseY: r * Math.sin(phi) * Math.sin(theta),
        baseZ: r * Math.cos(phi),
        dashLength: 0.03 + Math.random() * 0.04,
      };
    });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      cx = width / 2;
      cy = height / 2;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - cx) / cx;
      mouseY = (event.clientY - cy) / cy;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.002;

      targetRotY = mouseX * 0.5 + time;
      targetRotX = mouseY * 0.5 + time * 0.5;

      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      particles.sort((a, b) => {
        const zA = rotate3D(a.baseX, a.baseY, a.baseZ, currentRotX, currentRotY)[2];
        const zB = rotate3D(b.baseX, b.baseY, b.baseZ, currentRotX, currentRotY)[2];
        return zB - zA;
      });

      for (const particle of particles) {
        const [x, y, z] = rotate3D(particle.baseX, particle.baseY, particle.baseZ, currentRotX, currentRotY);
        const p1 = project(x, y, z);

        const [nx, ny, nz] = rotate3D(
          particle.baseX,
          particle.baseY,
          particle.baseZ,
          currentRotX + particle.dashLength,
          currentRotY + particle.dashLength,
        );
        const p2 = project(nx, ny, nz);

        if (z + Z_OFFSET < 100) continue;

        const angle = Math.atan2(p1.y - cy, p1.x - cx);
        const hue = ((angle * 180) / Math.PI + 360) % 360;
        const normalizedZ = (z + SPHERE_RADIUS) / (SPHERE_RADIUS * 2);
        const alpha = Math.max(0.1, 1 - normalizedZ);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `hsla(${hue + 40}, 80%, 60%, ${alpha})`;
        ctx.lineWidth = 2.5 * p1.scale;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      frameId = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    frameId = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas-bg"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
