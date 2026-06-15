import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { useTheme } from './useTheme';

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    document.documentElement.removeAttribute('data-theme');
  });

  it('defaults to "dark" when localStorage is empty', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('dark');
  });

  it('reads theme from localStorage on mount', () => {
    localStorage.setItem('yk-theme', 'light');
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('light');
  });

  it('toggle() switches from dark to light', () => {
    const { result } = renderHook(() => useTheme());
    act(() => { result.current.toggle(); });
    expect(result.current.theme).toBe('light');
  });

  it('toggle() persists the new theme in localStorage', () => {
    const { result } = renderHook(() => useTheme());
    act(() => { result.current.toggle(); });
    expect(localStorage.getItem('yk-theme')).toBe('light');
  });

  it('toggle() twice returns to dark', () => {
    const { result } = renderHook(() => useTheme());
    act(() => { result.current.toggle(); });
    act(() => { result.current.toggle(); });
    expect(result.current.theme).toBe('dark');
  });

  it('updates data-theme attribute on <html>', () => {
    const { result } = renderHook(() => useTheme());
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    act(() => { result.current.toggle(); });
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
