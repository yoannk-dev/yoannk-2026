import { useCallback, useEffect, useRef } from 'react';
import styles from './ProfilePicture.module.scss';

const PIXEL_SIZE_MAX = 10;
const CANVAS_RES = 320;

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function ProfilePicture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);
  const offCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rafRef = useRef<number>(0);
  const pixelSizeRef = useRef(PIXEL_SIZE_MAX);
  const targetRef = useRef(PIXEL_SIZE_MAX);

  const render = useCallback((size: number) => {
    const ctx = ctxRef.current;
    const img = imgRef.current;
    const off = offscreenRef.current;
    const offCtx = offCtxRef.current;
    if (!ctx || !img || !off || !offCtx) return;
    ctx.clearRect(0, 0, CANVAS_RES, CANVAS_RES);
    if (size <= 1) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, CANVAS_RES, CANVAS_RES);
      return;
    }
    const cols = Math.max(1, Math.round(CANVAS_RES / size));
    const rows = Math.max(1, Math.round(CANVAS_RES / size));
    offCtx.clearRect(0, 0, CANVAS_RES, CANVAS_RES);
    offCtx.drawImage(img, 0, 0, cols, rows);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(off, 0, 0, cols, rows, 0, 0, CANVAS_RES, CANVAS_RES);
  }, []);

  const animatePixels = useCallback(() => {
    const diff = targetRef.current - pixelSizeRef.current;
    if (Math.abs(diff) < 0.2) {
      pixelSizeRef.current = targetRef.current;
      render(targetRef.current);
      return;
    }
    pixelSizeRef.current += diff * 0.16;
    render(pixelSizeRef.current);
    rafRef.current = requestAnimationFrame(animatePixels);
  }, [render]);

  useEffect(() => {
    ctxRef.current = canvasRef.current!.getContext('2d');

    const off = document.createElement('canvas');
    off.width = CANVAS_RES;
    off.height = CANVAS_RES;
    offscreenRef.current = off;
    offCtxRef.current = off.getContext('2d');

    const img = new Image();
    img.src = '/profile.jpg';
    img.onload = () => {
      imgRef.current = img;
      render(PIXEL_SIZE_MAX);
    };
    img.onerror = () => {
      console.warn('[ProfilePicture] Failed to load /profile.jpg');
    };

    return () => cancelAnimationFrame(rafRef.current);
  }, [render]);

  const setPixelTarget = useCallback((target: number) => {
    targetRef.current = target;
    cancelAnimationFrame(rafRef.current);
    if (reducedMotion()) {
      pixelSizeRef.current = target;
      render(target);
      return;
    }
    rafRef.current = requestAnimationFrame(animatePixels);
  }, [animatePixels, render]);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_RES}
      height={CANVAS_RES}
      className={styles.profilePicture}
      onMouseEnter={() => setPixelTarget(1)}
      onMouseLeave={() => setPixelTarget(PIXEL_SIZE_MAX)}
      role="img"
      aria-label="Yoann Kermet"
    />
  );
}
