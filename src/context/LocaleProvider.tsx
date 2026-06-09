import { useEffect, useState, type ReactNode } from 'react';
import { LocaleContext } from '../i18n/localeContext';
import { type Locale, translations } from '../i18n/translations';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    return (localStorage.getItem('yk-lang') as Locale) || 'fr';
  });

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('yk-lang', l);
  };

  const toggle = () => setLocale(locale === 'fr' ? 'en' : 'fr');

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, toggle, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}
