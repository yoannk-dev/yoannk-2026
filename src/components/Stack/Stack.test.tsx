import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Stack from './Stack';
import { renderWithProviders } from '../../test/helpers';
import { STACK_GROUPS } from '../../i18n/translations';

describe('Stack', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it(`rend ${STACK_GROUPS.length} groupes`, () => {
    const { container } = renderWithProviders(<Stack />);
    // Chaque groupe est un <div> dans la grille ; on vérifie via les <h4>
    expect(container.querySelectorAll('h4')).toHaveLength(STACK_GROUPS.length);
  });

  it('les headings de groupes sont visibles en FR', () => {
    renderWithProviders(<Stack />);
    for (const group of STACK_GROUPS) {
      const heading = typeof group.heading === 'string' ? group.heading : group.heading.fr;
      expect(screen.getByText(heading)).toBeInTheDocument();
    }
  });

  it('les headings de groupes sont visibles en EN', () => {
    renderWithProviders(<Stack />, { locale: 'en' });
    for (const group of STACK_GROUPS) {
      const heading = typeof group.heading === 'string' ? group.heading : group.heading.en;
      expect(screen.getByText(heading)).toBeInTheDocument();
    }
  });

  it('tous les items de chaque groupe sont listés', () => {
    renderWithProviders(<Stack />);
    for (const group of STACK_GROUPS) {
      for (const item of group.items) {
        expect(screen.getByText(item)).toBeInTheDocument();
      }
    }
  });

  it('en FR, le heading "Au-delà du code" est visible', () => {
    renderWithProviders(<Stack />);
    expect(screen.getByText('Au-delà du code')).toBeInTheDocument();
  });

  it('en EN, le heading "Beyond code" est visible', () => {
    renderWithProviders(<Stack />, { locale: 'en' });
    expect(screen.getByText('Beyond code')).toBeInTheDocument();
  });
});
