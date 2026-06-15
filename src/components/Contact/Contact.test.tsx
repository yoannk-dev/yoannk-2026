import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Contact from './Contact';
import { renderWithProviders } from '../../test/helpers';

describe('Contact', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('rend le titre de section en FR', () => {
    renderWithProviders(<Contact />);
    expect(screen.getByRole('heading', { name: /travaillons ensemble/i })).toBeInTheDocument();
  });

  it('rend le titre de section en EN', () => {
    renderWithProviders(<Contact />, { locale: 'en' });
    expect(screen.getByRole('heading', { name: /let's work together/i })).toBeInTheDocument();
  });

  it('l\'email yoannk.dev@gmail.com est cliquable avec href mailto', () => {
    renderWithProviders(<Contact />);
    const emailLink = screen.getByRole('link', { name: 'yoannk.dev@gmail.com' });
    expect(emailLink).toHaveAttribute('href', 'mailto:yoannk.dev@gmail.com');
  });

  it('le lien LinkedIn a le bon href', () => {
    renderWithProviders(<Contact />);
    const liLink = screen.getByRole('link', { name: /in\/yoannkermet/i });
    expect(liLink).toHaveAttribute('href', 'https://linkedin.com/in/yoannkermet');
  });

  it('le lien GitHub a le bon href', () => {
    renderWithProviders(<Contact />);
    const ghLink = screen.getByRole('link', { name: /yoannk-dev/i });
    expect(ghLink).toHaveAttribute('href', 'https://github.com/yoannk-dev');
  });

  it('le lieu (Paris) ne génère pas de lien <a>', () => {
    renderWithProviders(<Contact />);
    // LIEU a href vide → filtré de la liste, pas de lien avec "Paris"
    const links = screen.queryAllByRole('link');
    const parisLink = links.find(link => link.textContent?.includes('Paris'));
    expect(parisLink).toBeUndefined();
  });
});
