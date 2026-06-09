import { useEffect, useState } from 'react';
import { useLocale } from '../../hooks/useLocale';
import styles from './TopBar.module.scss';

interface TopBarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8 8 0 119.5 4a6.3 6.3 0 0010.5 10.5z" />
    </svg>
  );
}

export default function TopBar({ theme, onThemeToggle }: TopBarProps) {
  const { locale, setLocale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.bar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.barIn}>
        <a href="#top" className={styles.brand}>
          <span className={styles.dot} />
          Yoann&nbsp;Kermet
        </a>

        <nav className={styles.nav}>
          <a href="#work">{t.nav.work}</a>
          <a href="#stack">{t.nav.stack}</a>
          <a href="#projects">{t.nav.projects}</a>
          {/* <a href="#writing">{t.nav.writing}</a> */}
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className={styles.controls}>
          <div className={styles.seg}>
            {(['fr', 'en'] as const).map((lang) => (
              <button
                key={lang}
                className={locale === lang ? styles.on : ''}
                onClick={() => setLocale(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className={styles.tbtn}
            aria-label="Toggle theme"
            onClick={onThemeToggle}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
