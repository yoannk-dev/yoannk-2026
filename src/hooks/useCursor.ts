import { useEffect, useRef } from 'react';

export function useCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!dot || !ring) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let mouseX = -200, mouseY = -200;
    let ringX = -200, ringY = -200;
    let glowX = -200, glowY = -200;
    let rafId: number;
    let shown = false;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!shown) {
        shown = true;
        if (glow) glow.style.opacity = '1';
      }
    };

    const over = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [data-cursor]')) {
        ring.classList.add('is-hovering');
      }
    };

    const out = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [data-cursor]')) {
        ring.classList.remove('is-hovering');
      }
    };

    const leave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      if (glow) glow.style.opacity = '0';
    };

    const enter = () => {
      dot.style.opacity = '';
      ring.style.opacity = '';
      if (glow) glow.style.opacity = '1';
    };

    const tick = () => {
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      if (glow) {
        glowX += (mouseX - glowX) * 0.04;
        glowY += (mouseY - glowY) * 0.04;
        glow.style.setProperty('--gx', `${glowX}px`);
        glow.style.setProperty('--gy', `${glowY}px`);
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { dotRef, ringRef, glowRef };
}
