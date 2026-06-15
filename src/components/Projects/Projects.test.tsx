import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Projects from './Projects';
import { renderWithProviders } from '../../test/helpers';
import { PROJECTS } from '../../i18n/translations';

describe('Projects', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it(`rend ${PROJECTS.length} cartes projet`, () => {
    const { container } = renderWithProviders(<Projects />);
    // Tous les projets ont un href ici, donc ce sont tous des <a> ; on compte les cards
    const cards = container.querySelectorAll('a[target="_blank"]');
    expect(cards.length).toBeGreaterThanOrEqual(PROJECTS.length);
  });

  it('les projets avec href sont des <a> avec target _blank', () => {
    renderWithProviders(<Projects />);
    for (const project of PROJECTS) {
      if (project.href) {
        const link = screen.getByRole('link', { name: new RegExp(project.name.fr, 'i') });
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('href', project.href);
      }
    }
  });

  it('tous les projets live affichent le badge "Live"', () => {
    renderWithProviders(<Projects />);
    const liveBadges = screen.getAllByText('Live');
    const liveCount = PROJECTS.filter(p => !!p.href).length;
    expect(liveBadges).toHaveLength(liveCount);
  });

  it('en FR, t.soon ("Bientôt") n\'est pas affiché comme badge (tous les projets sont live)', () => {
    renderWithProviders(<Projects />);
    expect(screen.queryByText('Bientôt')).not.toBeInTheDocument();
  });

  it('en EN, "View site" est visible pour chaque projet live', () => {
    renderWithProviders(<Projects />, { locale: 'en' });
    const viewSiteLinks = screen.getAllByText('View site');
    const liveCount = PROJECTS.filter(p => !!p.href).length;
    expect(viewSiteLinks).toHaveLength(liveCount);
  });

  it('en EN, "Soon" n\'est pas affiché (tous les projets sont live)', () => {
    renderWithProviders(<Projects />, { locale: 'en' });
    expect(screen.queryByText('Soon')).not.toBeInTheDocument();
  });
});
