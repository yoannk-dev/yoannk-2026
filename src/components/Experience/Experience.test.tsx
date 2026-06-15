import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Experience from './Experience';
import { renderWithProviders } from '../../test/helpers';
import { EXPERIENCE } from '../../i18n/translations';

describe('Experience', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it(`renders ${EXPERIENCE.length} experience entries`, () => {
    renderWithProviders(<Experience />);
    expect(screen.getAllByRole('article')).toHaveLength(EXPERIENCE.length);
  });

  it('each job displays its period', () => {
    renderWithProviders(<Experience />);
    for (const job of EXPERIENCE) {
      expect(screen.getByText(job.period)).toBeInTheDocument();
    }
  });

  it('each job displays its role (FR)', () => {
    renderWithProviders(<Experience />);
    for (const job of EXPERIENCE) {
      expect(screen.getAllByText(job.role.fr).length).toBeGreaterThan(0);
    }
  });

  it('each job displays its company name', () => {
    renderWithProviders(<Experience />);
    for (const job of EXPERIENCE) {
      expect(screen.getByText(job.company)).toBeInTheDocument();
    }
  });

  it('jobs with url render as <a>; jobs without url are not links', () => {
    renderWithProviders(<Experience />);
    for (const job of EXPERIENCE) {
      if (job.url) {
        const link = screen.getByRole('link', { name: new RegExp(job.company.split(' ')[0], 'i') });
        expect(link).toHaveAttribute('href', job.url);
      } else {
        const text = screen.getByText(job.company);
        expect(text.tagName.toLowerCase()).not.toBe('a');
      }
    }
  });

  it('tags are rendered for each job', () => {
    renderWithProviders(<Experience />);
    for (const job of EXPERIENCE) {
      for (const tag of job.tags) {
        expect(screen.getAllByText(tag).length).toBeGreaterThan(0);
      }
    }
  });

  it('section heading reads "Experience" in EN locale', () => {
    renderWithProviders(<Experience />, { locale: 'en' });
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  });
});
