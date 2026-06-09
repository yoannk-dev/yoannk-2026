import { useState, type ReactNode } from 'react';
import { LocaleContext } from '../i18n/localeContext';
import { type Locale, translations } from '../i18n/translations';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    return (localStorage.getItem('yk-locale') as Locale) || 'fr';
  });

  const toggle = () => {
    const next: Locale = locale === 'fr' ? 'en' : 'fr';
    setLocale(next);
    localStorage.setItem('yk-locale', next);
  };

  return (
    <LocaleContext.Provider value={{ locale, toggle, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}
