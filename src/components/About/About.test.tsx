import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import About from './About';
import { renderWithProviders } from '../../test/helpers';
import { ABOUT_META } from '../../i18n/translations';
import { localise } from '../../i18n/localise';

describe('About', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('rend le titre de section en FR : Profil', () => {
    renderWithProviders(<About />);
    expect(screen.getByRole('heading', { name: /profil/i })).toBeInTheDocument();
  });

  it('rend le titre de section en EN : Profile', () => {
    renderWithProviders(<About />, { locale: 'en' });
    expect(screen.getByRole('heading', { name: /profile/i })).toBeInTheDocument();
  });

  it('rend les 2 paragraphes aboutBody', () => {
    renderWithProviders(<About />);
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThanOrEqual(2);
  });

  it('rend les 3 blocs méta de ABOUT_META', () => {
    renderWithProviders(<About />);
    for (const item of ABOUT_META) {
      const label = localise(item.label, 'fr');
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it('affiche la valeur M1 Info-Comm', () => {
    renderWithProviders(<About />);
    expect(screen.getByText(/M1 Info-Comm/)).toBeInTheDocument();
  });

  it('label FORMATION en FR', () => {
    renderWithProviders(<About />);
    expect(screen.getByText('FORMATION')).toBeInTheDocument();
  });

  it('label EDUCATION en EN', () => {
    renderWithProviders(<About />, { locale: 'en' });
    expect(screen.getByText('EDUCATION')).toBeInTheDocument();
  });
});
