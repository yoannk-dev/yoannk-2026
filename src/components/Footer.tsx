import { useLocale } from '../hooks/useLocale';
import styles from './Footer.module.scss';

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.foot}>
          <span className="mono">© {new Date().getFullYear()} Yoann Kermet — {t.rights}</span>
          <span className="mono" style={{ textTransform: 'none', letterSpacing: '.04em' }}>{t.colophon}</span>
          <a className={styles.totop} href="#top">
            <Arrow /> {t.backTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
