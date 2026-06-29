import '@testing-library/jest-dom';
import { vi } from 'vitest';

const store: Record<string, string> = {};
vi.stubGlobal('localStorage', {
  getItem: (k: string) => store[k] ?? null,
  setItem: (k: string, v: string) => { store[k] = v; },
  removeItem: (k: string) => { delete store[k]; },
  clear: () => Object.keys(store).forEach(k => delete store[k]),
});

vi.stubGlobal('IntersectionObserver', class {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
});

vi.stubGlobal('matchMedia', vi.fn().mockImplementation((query: string) => ({
  matches: false,
  media: query,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
})));

HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
  clearRect: vi.fn(),
  drawImage: vi.fn(),
  getImageData: vi.fn().mockReturnValue({ data: new Uint8ClampedArray() }),
  putImageData: vi.fn(),
  createImageData: vi.fn(),
  scale: vi.fn(),
  fillRect: vi.fn(),
  fillText: vi.fn(),
  beginPath: vi.fn(),
  arc: vi.fn(),
  fill: vi.fn(),
  clip: vi.fn(),
  save: vi.fn(),
  restore: vi.fn(),
});
