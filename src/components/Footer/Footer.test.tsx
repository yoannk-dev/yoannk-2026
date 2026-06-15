import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Footer from './Footer';
import { renderWithProviders } from '../../test/helpers';

describe('Footer', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('affiche l\'année courante', () => {
    renderWithProviders(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('le lien retour haut de page pointe vers #top', () => {
    renderWithProviders(<Footer />);
    const link = screen.getByRole('link', { name: /haut de page/i });
    expect(link).toHaveAttribute('href', '#top');
  });

  it('le lien "Back to top" pointe vers #top en EN', () => {
    renderWithProviders(<Footer />, { locale: 'en' });
    const link = screen.getByRole('link', { name: /back to top/i });
    expect(link).toHaveAttribute('href', '#top');
  });

  it('le colophon est rendu', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/Space Grotesk/)).toBeInTheDocument();
  });

  it('en EN, "All rights reserved." est visible', () => {
    renderWithProviders(<Footer />, { locale: 'en' });
    expect(screen.getByText(/All rights reserved\./)).toBeInTheDocument();
  });

  it('en FR, "Tous droits réservés." est visible', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/Tous droits réservés\./)).toBeInTheDocument();
  });
});
