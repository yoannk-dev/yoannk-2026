import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Hero from './Hero';
import { renderWithProviders } from '../../test/helpers';
import { KEYWORDS } from '../../i18n/translations';

// Stabilise l'horloge pour éviter les flips de formatage durant les tests
vi.useFakeTimers();

describe('Hero', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('rend le prénom Yoann et le nom Kermet', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('Yoann')).toBeInTheDocument();
    expect(screen.getByText('Kermet')).toBeInTheDocument();
  });

  it('statement contient React & TypeScript en locale FR', () => {
    const { container } = renderWithProviders(<Hero />);
    const p = container.querySelector('p');
    expect(p?.textContent).toMatch(/React/);
    expect(p?.textContent).toMatch(/TypeScript/);
  });

  it('statement contient React & TypeScript en locale EN', () => {
    const { container } = renderWithProviders(<Hero />, { locale: 'en' });
    const p = container.querySelector('p');
    expect(p?.textContent).toMatch(/React/);
    expect(p?.textContent).toMatch(/TypeScript/);
  });

  it('affiche les 3 valeurs de stats : 15, 5, ∞', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('∞')).toBeInTheDocument();
  });

  it('le lien GitHub pointe vers le bon href', () => {
    renderWithProviders(<Hero />);
    const ghLink = screen.getByRole('link', { name: /github/i });
    expect(ghLink).toHaveAttribute('href', 'https://github.com/yoannk-dev');
  });

  it('le lien LinkedIn pointe vers le bon href', () => {
    renderWithProviders(<Hero />);
    const liLink = screen.getByRole('link', { name: /linkedin/i });
    expect(liLink).toHaveAttribute('href', 'https://linkedin.com/in/yoannkermet');
  });

  it('le CTA contact pointe vers #contact', () => {
    renderWithProviders(<Hero />);
    // Bouton principal qui contient le texte de contactCta
    const contactLink = screen.getByRole('link', { name: /écrivez-moi/i });
    expect(contactLink).toHaveAttribute('href', '#contact');
  });

  it('tous les keywords du marquee sont dans le DOM', () => {
    renderWithProviders(<Hero />);
    for (const keyword of KEYWORDS) {
      expect(screen.getAllByText(keyword).length).toBeGreaterThan(0);
    }
  });
});
