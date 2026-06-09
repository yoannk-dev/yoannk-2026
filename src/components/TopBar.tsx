import { useEffect, useState } from 'react';
import styles from './TopBar.module.scss';

interface TopBarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export function TopBar({ theme, onThemeToggle }: TopBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

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
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.controls}>
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
