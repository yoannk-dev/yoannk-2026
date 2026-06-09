import { useContext } from 'react';
import { LocaleContext } from '../i18n/localeContext';

export function useLocale() {
  return useContext(LocaleContext);
}
