import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Reveal } from './Reveal';

describe('Reveal', () => {
  it('rend les enfants sans crash', () => {
    render(<Reveal><span>Contenu</span></Reveal>);
    expect(screen.getByText('Contenu')).toBeInTheDocument();
  });

  it('ajoute la classe "reveal" à l\'élément après mount', () => {
    const { container } = render(<Reveal>Test</Reveal>);
    expect(container.firstChild).toHaveClass('reveal');
  });

  it('avec delay={2}, la classe "d2" est ajoutée', () => {
    const { container } = render(<Reveal delay={2}>Test</Reveal>);
    expect(container.firstChild).toHaveClass('d2');
  });

  it('sans delay, la classe "d0" n\'est pas ajoutée', () => {
    const { container } = render(<Reveal>Test</Reveal>);
    expect(container.firstChild).not.toHaveClass('d0');
  });

  it('prop as="article" rend un <article>', () => {
    const { container } = render(<Reveal as="article">Test</Reveal>);
    expect(container.querySelector('article')).toBeInTheDocument();
  });

  it('prop as par défaut rend un <div>', () => {
    const { container } = render(<Reveal>Test</Reveal>);
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('la prop className est transmise à l\'élément', () => {
    const { container } = render(<Reveal className="my-class">Test</Reveal>);
    expect(container.firstChild).toHaveClass('my-class');
  });
});
