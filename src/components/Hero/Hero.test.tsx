import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Hero from './Hero';
import { renderWithProviders } from '../../test/helpers';
import { KEYWORDS } from '../../i18n/translations';

vi.useFakeTimers();

describe('Hero', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders first name Yoann and last name Kermet', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('Yoann')).toBeInTheDocument();
    expect(screen.getByText('Kermet')).toBeInTheDocument();
  });

  it('statement contains React & TypeScript in FR locale', () => {
    const { container } = renderWithProviders(<Hero />);
    const p = container.querySelector('p');
    expect(p?.textContent).toMatch(/React/);
    expect(p?.textContent).toMatch(/TypeScript/);
  });

  it('statement contains React & TypeScript in EN locale', () => {
    const { container } = renderWithProviders(<Hero />, { locale: 'en' });
    const p = container.querySelector('p');
    expect(p?.textContent).toMatch(/React/);
    expect(p?.textContent).toMatch(/TypeScript/);
  });

  it('displays all 3 stat values: 15, 5, ∞', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('∞')).toBeInTheDocument();
  });

  it('GitHub link points to the correct href', () => {
    renderWithProviders(<Hero />);
    const ghLink = screen.getByRole('link', { name: /github/i });
    expect(ghLink).toHaveAttribute('href', 'https://github.com/yoannk-dev');
  });

  it('LinkedIn link points to the correct href', () => {
    renderWithProviders(<Hero />);
    const liLink = screen.getByRole('link', { name: /linkedin/i });
    expect(liLink).toHaveAttribute('href', 'https://linkedin.com/in/yoannkermet');
  });

  it('contact CTA link points to #contact', () => {
    renderWithProviders(<Hero />);
    const contactLink = screen.getByRole('link', { name: /écrivez-moi/i });
    expect(contactLink).toHaveAttribute('href', '#contact');
  });

  it('all marquee keywords are present in the DOM', () => {
    renderWithProviders(<Hero />);
    for (const keyword of KEYWORDS) {
      expect(screen.getAllByText(keyword).length).toBeGreaterThan(0);
    }
  });

  it('renders the profile picture with accessible label', () => {
    renderWithProviders(<Hero />);
    const profilePic = screen.getByRole('img', { name: /yoann kermet/i });
    expect(profilePic).toBeInTheDocument();
    expect(profilePic.tagName).toBe('CANVAS');
  });
});
