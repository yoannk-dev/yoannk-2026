import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import TopBar from './TopBar';
import { renderWithProviders } from '../../test/helpers';

describe('TopBar', () => {
  const onThemeToggle = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    onThemeToggle.mockClear();
  });

  it('renders the name Yoann Kermet', () => {
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />);
    expect(screen.getByRole('link', { name: /yoann\s*kermet/i })).toBeInTheDocument();
  });

  it('locale toggle FR→EN: nav links switch to English', async () => {
    const user = userEvent.setup();
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />);
    expect(screen.getByRole('link', { name: 'Parcours' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'EN' }));
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
  });

  it('locale toggle EN→FR: nav links switch back to French', async () => {
    const user = userEvent.setup();
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />, { locale: 'en' });
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'FR' }));
    expect(screen.getByRole('link', { name: 'Parcours' })).toBeInTheDocument();
  });

  it('theme button click calls onThemeToggle', async () => {
    const user = userEvent.setup();
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />);
    await user.click(screen.getByRole('button', { name: 'Toggle theme' }));
    expect(onThemeToggle).toHaveBeenCalledOnce();
  });

  it('shows SunIcon in dark mode (circle in SVG)', () => {
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />);
    const btn = screen.getByRole('button', { name: 'Toggle theme' });
    expect(btn.querySelector('circle')).toBeTruthy();
  });

  it('shows MoonIcon in light mode (no circle in SVG)', () => {
    renderWithProviders(<TopBar theme="light" onThemeToggle={onThemeToggle} />);
    const btn = screen.getByRole('button', { name: 'Toggle theme' });
    expect(btn.querySelector('circle')).toBeNull();
  });

  it('shows English nav labels in EN locale', () => {
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />, { locale: 'en' });
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });
});
