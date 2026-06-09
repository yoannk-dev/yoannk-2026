import { createContext } from 'react';
import { type Translations, translations } from './translations';
import type { Locale } from './translations';

export type LocaleContextValue = {
  locale: Locale;
  toggle: () => void;
  t: Translations;
};

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'fr',
  toggle: () => {},
  t: translations.fr,
});
