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

  it('thème par défaut est "dark" sans localStorage', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('dark');
  });

  it('lit le thème depuis localStorage au montage', () => {
    localStorage.setItem('yk-theme', 'light');
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('light');
  });

  it('toggle() passe de dark à light', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggle();
    });
    expect(result.current.theme).toBe('light');
  });

  it('toggle() met à jour localStorage', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggle();
    });
    expect(localStorage.getItem('yk-theme')).toBe('light');
  });

  it('toggle() twice revient à dark', () => {
    const { result } = renderHook(() => useTheme());
    act(() => { result.current.toggle(); });
    act(() => { result.current.toggle(); });
    expect(result.current.theme).toBe('dark');
  });

  it('l\'attribut data-theme de <html> est mis à jour', () => {
    const { result } = renderHook(() => useTheme());
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    act(() => {
      result.current.toggle();
    });
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
