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

  it('rend le nom Yoann Kermet', () => {
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />);
    expect(screen.getByRole('link', { name: /yoann\s*kermet/i })).toBeInTheDocument();
  });

  it('toggle locale FR→EN : les liens nav passent en anglais', async () => {
    const user = userEvent.setup();
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />);
    expect(screen.getByRole('link', { name: 'Parcours' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'EN' }));
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
  });

  it('toggle locale EN→FR : les liens nav reviennent en français', async () => {
    const user = userEvent.setup();
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />, { locale: 'en' });
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'FR' }));
    expect(screen.getByRole('link', { name: 'Parcours' })).toBeInTheDocument();
  });

  it('click thème appelle onThemeToggle', async () => {
    const user = userEvent.setup();
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />);
    await user.click(screen.getByRole('button', { name: 'Toggle theme' }));
    expect(onThemeToggle).toHaveBeenCalledOnce();
  });

  it('affiche SunIcon en mode dark (cercle dans le SVG)', () => {
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />);
    const btn = screen.getByRole('button', { name: 'Toggle theme' });
    expect(btn.querySelector('circle')).toBeTruthy();
  });

  it('affiche MoonIcon en mode light (pas de cercle dans le SVG)', () => {
    renderWithProviders(<TopBar theme="light" onThemeToggle={onThemeToggle} />);
    const btn = screen.getByRole('button', { name: 'Toggle theme' });
    expect(btn.querySelector('circle')).toBeNull();
  });

  it('affiche les liens nav en anglais en locale EN', () => {
    renderWithProviders(<TopBar theme="dark" onThemeToggle={onThemeToggle} />, { locale: 'en' });
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });
});
