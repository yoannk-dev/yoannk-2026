import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Projects from './Projects';
import { renderWithProviders } from '../../test/helpers';
import { PROJECTS } from '../../i18n/translations';

describe('Projects', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it(`renders ${PROJECTS.length} project cards`, () => {
    const { container } = renderWithProviders(<Projects />);
    const cards = container.querySelectorAll('a[target="_blank"]');
    expect(cards.length).toBeGreaterThanOrEqual(PROJECTS.length);
  });

  it('projects with href render as <a> with target _blank', () => {
    renderWithProviders(<Projects />);
    for (const project of PROJECTS) {
      if (project.href) {
        const link = screen.getByRole('link', { name: new RegExp(project.name.fr, 'i') });
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('href', project.href);
      }
    }
  });

  it('all live projects display the "Live" badge', () => {
    renderWithProviders(<Projects />);
    const liveBadges = screen.getAllByText('Live');
    const liveCount = PROJECTS.filter(p => !!p.href).length;
    expect(liveBadges).toHaveLength(liveCount);
  });

  it('soon badge is not shown when all projects are live (FR)', () => {
    renderWithProviders(<Projects />);
    expect(screen.queryByText('Bientôt')).not.toBeInTheDocument();
  });

  it('"View site" label is visible for each live project in EN locale', () => {
    renderWithProviders(<Projects />, { locale: 'en' });
    const viewSiteLinks = screen.getAllByText('View site');
    const liveCount = PROJECTS.filter(p => !!p.href).length;
    expect(viewSiteLinks).toHaveLength(liveCount);
  });

  it('"Soon" badge is not shown when all projects are live (EN)', () => {
    renderWithProviders(<Projects />, { locale: 'en' });
    expect(screen.queryByText('Soon')).not.toBeInTheDocument();
  });
});
