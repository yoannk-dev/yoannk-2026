import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Experience from './Experience';
import { renderWithProviders } from '../../test/helpers';
import { EXPERIENCE } from '../../i18n/translations';

describe('Experience', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it(`rend ${EXPERIENCE.length} expériences`, () => {
    renderWithProviders(<Experience />);
    expect(screen.getAllByRole('article')).toHaveLength(EXPERIENCE.length);
  });

  it('chaque job affiche sa période', () => {
    renderWithProviders(<Experience />);
    for (const job of EXPERIENCE) {
      expect(screen.getByText(job.period)).toBeInTheDocument();
    }
  });

  it('chaque job affiche son rôle (FR)', () => {
    renderWithProviders(<Experience />);
    for (const job of EXPERIENCE) {
      expect(screen.getAllByText(job.role.fr).length).toBeGreaterThan(0);
    }
  });

  it('chaque job affiche son entreprise', () => {
    renderWithProviders(<Experience />);
    for (const job of EXPERIENCE) {
      expect(screen.getByText(job.company)).toBeInTheDocument();
    }
  });

  it('jobs avec url → lien <a> ; sans url → pas de lien', () => {
    renderWithProviders(<Experience />);
    for (const job of EXPERIENCE) {
      if (job.url) {
        const link = screen.getByRole('link', { name: new RegExp(job.company.split(' ')[0], 'i') });
        expect(link).toHaveAttribute('href', job.url);
      } else {
        // Le nom d'entreprise est présent dans un div, pas dans un lien
        const text = screen.getByText(job.company);
        expect(text.tagName.toLowerCase()).not.toBe('a');
      }
    }
  });

  it('les tags sont rendus pour chaque job', () => {
    renderWithProviders(<Experience />);
    for (const job of EXPERIENCE) {
      for (const tag of job.tags) {
        // Certains tags peuvent apparaître dans plusieurs jobs : on utilise getAllByText
        expect(screen.getAllByText(tag).length).toBeGreaterThan(0);
      }
    }
  });

  it('en EN, le titre de section affiche Experience', () => {
    renderWithProviders(<Experience />, { locale: 'en' });
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  });
});
