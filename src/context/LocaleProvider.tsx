import { useEffect, useState, type ReactNode } from 'react';
import { LocaleContext } from '../i18n/localeContext';
import { translations } from '../i18n/translations';

import type { Locale } from '../types/locale';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    return (localStorage.getItem('yk-lang') as Locale) || 'fr';
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('yk-lang', newLocale);
  };

  const toggle = () => setLocale(locale === 'fr' ? 'en' : 'fr');

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);

  return (
    <LocaleContext value={{ locale, toggle, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext>
  );
}
