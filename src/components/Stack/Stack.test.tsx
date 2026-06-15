import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Stack from './Stack';
import { renderWithProviders } from '../../test/helpers';
import { STACK_GROUPS } from '../../i18n/translations';

describe('Stack', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it(`renders ${STACK_GROUPS.length} groups`, () => {
    const { container } = renderWithProviders(<Stack />);
    expect(container.querySelectorAll('h4')).toHaveLength(STACK_GROUPS.length);
  });

  it('group headings are visible in FR locale', () => {
    renderWithProviders(<Stack />);
    for (const group of STACK_GROUPS) {
      const heading = typeof group.heading === 'string' ? group.heading : group.heading.fr;
      expect(screen.getByText(heading)).toBeInTheDocument();
    }
  });

  it('group headings are visible in EN locale', () => {
    renderWithProviders(<Stack />, { locale: 'en' });
    for (const group of STACK_GROUPS) {
      const heading = typeof group.heading === 'string' ? group.heading : group.heading.en;
      expect(screen.getByText(heading)).toBeInTheDocument();
    }
  });

  it('all items in each group are listed', () => {
    renderWithProviders(<Stack />);
    for (const group of STACK_GROUPS) {
      for (const item of group.items) {
        expect(screen.getByText(item)).toBeInTheDocument();
      }
    }
  });

  it('shows "Au-delà du code" heading in FR locale', () => {
    renderWithProviders(<Stack />);
    expect(screen.getByText('Au-delà du code')).toBeInTheDocument();
  });

  it('shows "Beyond code" heading in EN locale', () => {
    renderWithProviders(<Stack />, { locale: 'en' });
    expect(screen.getByText('Beyond code')).toBeInTheDocument();
  });
});
