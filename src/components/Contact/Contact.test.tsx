import { screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Contact from './Contact';
import { renderWithProviders } from '../../test/helpers';

describe('Contact', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders section heading in FR locale', () => {
    renderWithProviders(<Contact />);
    expect(screen.getByRole('heading', { name: /travaillons ensemble/i })).toBeInTheDocument();
  });

  it('renders section heading in EN locale', () => {
    renderWithProviders(<Contact />, { locale: 'en' });
    expect(screen.getByRole('heading', { name: /let's work together/i })).toBeInTheDocument();
  });

  it('email yoannk.dev@gmail.com is a clickable mailto link', () => {
    renderWithProviders(<Contact />);
    const emailLink = screen.getByRole('link', { name: 'yoannk.dev@gmail.com' });
    expect(emailLink).toHaveAttribute('href', 'mailto:yoannk.dev@gmail.com');
  });

  it('LinkedIn link has the correct href', () => {
    renderWithProviders(<Contact />);
    const liLink = screen.getByRole('link', { name: /in\/yoannkermet/i });
    expect(liLink).toHaveAttribute('href', 'https://linkedin.com/in/yoannkermet');
  });

  it('GitHub link has the correct href', () => {
    renderWithProviders(<Contact />);
    const ghLink = screen.getByRole('link', { name: /yoannk-dev/i });
    expect(ghLink).toHaveAttribute('href', 'https://github.com/yoannk-dev');
  });

  it('location row (Paris) does not render as a link', () => {
    renderWithProviders(<Contact />);
    const links = screen.queryAllByRole('link');
    const parisLink = links.find(link => link.textContent?.includes('Paris'));
    expect(parisLink).toBeUndefined();
  });
});
