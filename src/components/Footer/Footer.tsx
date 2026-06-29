import { useLocale } from '../../hooks/useLocale';
import { Arrow } from '../Arrow';
import styles from './Footer.module.scss';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.foot}>
          <span className="mono">© {new Date().getFullYear()} Yoann Kermet — {t.rights}</span>
          <span className={`mono ${styles.colophon}`}>{t.colophon}</span>
          <a className={styles.totop} href="#top">
            <Arrow /> {t.backTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
