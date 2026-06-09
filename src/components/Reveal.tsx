import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children }: RevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    el.classList.add('reveal');
    if (delay) el.classList.add('d' + delay);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    const fallbackTimer = setTimeout(() => el.classList.add('in'), 1600);
    return () => { observer.disconnect(); clearTimeout(fallbackTimer); };
  }, [delay]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AnyTag = Tag as any;
  return (
    <AnyTag ref={ref} className={className} style={style}>
      {children}
    </AnyTag>
  );
}
