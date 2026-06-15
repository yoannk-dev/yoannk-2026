import { renderHook, act } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useLocale } from './useLocale';
import { LocaleProvider } from '../context/LocaleProvider';

function wrapper({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}

describe('useLocale (via LocaleProvider)', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('lang');
  });

  it('defaults to "fr" when localStorage is empty', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    expect(result.current.locale).toBe('fr');
  });

  it('reads locale from localStorage on mount', () => {
    localStorage.setItem('yk-lang', 'en');
    const { result } = renderHook(() => useLocale(), { wrapper });
    expect(result.current.locale).toBe('en');
  });

  it('toggle() switches from fr to en', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    act(() => { result.current.toggle(); });
    expect(result.current.locale).toBe('en');
  });

  it('toggle() twice returns to fr', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    act(() => { result.current.toggle(); });
    act(() => { result.current.toggle(); });
    expect(result.current.locale).toBe('fr');
  });

  it('setLocale("en") forces the locale and persists to localStorage', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    act(() => { result.current.setLocale('en'); });
    expect(result.current.locale).toBe('en');
    expect(localStorage.getItem('yk-lang')).toBe('en');
  });

  it('setLocale updates the lang attribute on <html>', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    act(() => { result.current.setLocale('en'); });
    expect(document.documentElement.getAttribute('lang')).toBe('en');
  });

  it('t reflects the translations of the active locale', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    expect(result.current.t.nav.work).toBe('Parcours');
    act(() => { result.current.setLocale('en'); });
    expect(result.current.t.nav.work).toBe('Work');
  });
});
