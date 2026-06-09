import type { Locale } from '../types/locale';

export function localise(text: string | Record<Locale, string>, lang: Locale): string {
  return typeof text === 'string' ? text : text[lang];
}
