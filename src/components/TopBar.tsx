import { useEffect, useState } from 'react';
import { useLocale } from '../hooks/useLocale';
import styles from './TopBar.module.scss';

interface TopBarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export function TopBar({ theme, onThemeToggle }: TopBarProps) {
  const { locale, toggle: toggleLocale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.bar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.barIn}>
        <div className={styles.brand}>
          <div className={styles.dot} />
          YK
        </div>

        <nav className={styles.nav}>
          <a href="#about">{t.nav.about}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#stack">{t.nav.stack}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#writing">{t.nav.writing}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className={styles.controls}>
          <div className={styles.langSwitch}>
            <button
              className={locale === 'fr' ? styles.langActive : ''}
              onClick={() => locale !== 'fr' && toggleLocale()}
              aria-label="Français"
            >
              FR
            </button>
            <span className={styles.langSlash}>/</span>
            <button
              className={locale === 'en' ? styles.langActive : ''}
              onClick={() => locale !== 'en' && toggleLocale()}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <button
            className={styles.tbtn}
            onClick={onThemeToggle}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </div>
  );
}
