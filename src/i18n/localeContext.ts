import { createContext } from 'react';
import { type Translations, translations } from './translations';
import type { Locale } from '../types/locale';

export type LocaleContextValue = {
  locale: Locale;
  toggle: () => void;
  setLocale: (l: Locale) => void;
  t: Translations;
};

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'fr',
  toggle: () => {},
  setLocale: () => {},
  t: translations.fr,
});
