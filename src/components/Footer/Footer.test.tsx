import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Footer from './Footer';
import { renderWithProviders } from '../../test/helpers';

describe('Footer', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('displays the current year', () => {
    renderWithProviders(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('back-to-top link points to #top in FR locale', () => {
    renderWithProviders(<Footer />);
    const link = screen.getByRole('link', { name: /haut de page/i });
    expect(link).toHaveAttribute('href', '#top');
  });

  it('back-to-top link points to #top in EN locale', () => {
    renderWithProviders(<Footer />, { locale: 'en' });
    const link = screen.getByRole('link', { name: /back to top/i });
    expect(link).toHaveAttribute('href', '#top');
  });

  it('shows "All rights reserved." in EN locale', () => {
    renderWithProviders(<Footer />, { locale: 'en' });
    expect(screen.getByText(/All rights reserved\./)).toBeInTheDocument();
  });

  it('shows "Tous droits réservés." in FR locale', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/Tous droits réservés\./)).toBeInTheDocument();
  });
});
