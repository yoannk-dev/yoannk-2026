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

  it('renders section heading in FR: Profil', () => {
    renderWithProviders(<About />);
    expect(screen.getByRole('heading', { name: /profil/i })).toBeInTheDocument();
  });

  it('renders section heading in EN: Profile', () => {
    renderWithProviders(<About />, { locale: 'en' });
    expect(screen.getByRole('heading', { name: /profile/i })).toBeInTheDocument();
  });

  it('renders the 2 aboutBody paragraphs', () => {
    renderWithProviders(<About />);
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThanOrEqual(2);
  });

  it('renders all 3 ABOUT_META blocks with their labels', () => {
    renderWithProviders(<About />);
    for (const item of ABOUT_META) {
      const label = localise(item.label, 'fr');
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it('renders the M1 Info-Comm education value', () => {
    renderWithProviders(<About />);
    expect(screen.getByText(/M1 Info-Comm/)).toBeInTheDocument();
  });

  it('shows FORMATION label in FR locale', () => {
    renderWithProviders(<About />);
    expect(screen.getByText('FORMATION')).toBeInTheDocument();
  });

  it('shows EDUCATION label in EN locale', () => {
    renderWithProviders(<About />, { locale: 'en' });
    expect(screen.getByText('EDUCATION')).toBeInTheDocument();
  });
});
