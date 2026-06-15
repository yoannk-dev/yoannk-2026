import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import type { ReactElement } from 'react';
import { LocaleProvider } from '../context/LocaleProvider';
import type { Locale } from '../types/locale';

interface ProviderOptions {
  locale?: Locale;
}

export function renderWithProviders(
  ui: ReactElement,
  { locale = 'fr' }: ProviderOptions = {},
): RenderResult {
  localStorage.clear();
  if (locale !== 'fr') {
    localStorage.setItem('yk-lang', locale);
  }
  return render(<LocaleProvider>{ui}</LocaleProvider>);
}
