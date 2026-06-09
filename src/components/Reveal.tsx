import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  as?: ElementType;
  d?: number;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export function Reveal({ as: Tag = 'div', d = 0, className = '', style, children }: RevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    el.classList.add('reveal');
    if (d) el.classList.add('d' + d);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    const fb = setTimeout(() => el.classList.add('in'), 1600);
    return () => { io.disconnect(); clearTimeout(fb); };
  }, [d]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AnyTag = Tag as any;
  return (
    <AnyTag ref={ref} className={className} style={style}>
      {children}
    </AnyTag>
  );
}
