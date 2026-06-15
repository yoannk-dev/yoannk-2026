import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Reveal } from './Reveal';

describe('Reveal', () => {
  it('renders children without crashing', () => {
    render(<Reveal><span>Content</span></Reveal>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('adds the "reveal" class to the element after mount', () => {
    const { container } = render(<Reveal>Test</Reveal>);
    expect(container.firstChild).toHaveClass('reveal');
  });

  it('adds the "d2" class when delay={2}', () => {
    const { container } = render(<Reveal delay={2}>Test</Reveal>);
    expect(container.firstChild).toHaveClass('d2');
  });

  it('does not add a delay class when no delay is set', () => {
    const { container } = render(<Reveal>Test</Reveal>);
    expect(container.firstChild).not.toHaveClass('d0');
  });

  it('renders an <article> when as="article"', () => {
    const { container } = render(<Reveal as="article">Test</Reveal>);
    expect(container.querySelector('article')).toBeInTheDocument();
  });

  it('renders a <div> by default', () => {
    const { container } = render(<Reveal>Test</Reveal>);
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('passes className through to the element', () => {
    const { container } = render(<Reveal className="my-class">Test</Reveal>);
    expect(container.firstChild).toHaveClass('my-class');
  });
});
