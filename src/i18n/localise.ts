import type { Locale } from '../types/locale';

export function localise(v: string | Record<Locale, string>, lang: Locale): string {
  return typeof v === 'string' ? v : v[lang];
}
