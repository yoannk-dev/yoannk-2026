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

  it('locale par défaut est "fr" sans localStorage', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    expect(result.current.locale).toBe('fr');
  });

  it('lit la locale depuis localStorage au montage', () => {
    localStorage.setItem('yk-lang', 'en');
    const { result } = renderHook(() => useLocale(), { wrapper });
    expect(result.current.locale).toBe('en');
  });

  it('toggle() passe de fr à en', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    act(() => {
      result.current.toggle();
    });
    expect(result.current.locale).toBe('en');
  });

  it('toggle() twice revient à fr', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    act(() => { result.current.toggle(); });
    act(() => { result.current.toggle(); });
    expect(result.current.locale).toBe('fr');
  });

  it('setLocale("en") force la locale en et persiste dans localStorage', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    act(() => {
      result.current.setLocale('en');
    });
    expect(result.current.locale).toBe('en');
    expect(localStorage.getItem('yk-lang')).toBe('en');
  });

  it('setLocale met à jour l\'attribut lang de <html>', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    act(() => {
      result.current.setLocale('en');
    });
    expect(document.documentElement.getAttribute('lang')).toBe('en');
  });

  it('t contient les traductions de la locale active', () => {
    const { result } = renderHook(() => useLocale(), { wrapper });
    expect(result.current.t.nav.work).toBe('Parcours');
    act(() => {
      result.current.setLocale('en');
    });
    expect(result.current.t.nav.work).toBe('Work');
  });
});
