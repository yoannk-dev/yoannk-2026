import { useLocale } from '../hooks/useLocale';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.foot}>
          <div className={styles.copyright}>
            <span className={styles.mono}>© {currentYear}</span>
            <span>Yoann Kermet. {t.footer.rights}</span>
          </div>
          <button className={styles.totop} onClick={scrollToTop} title={t.footer.backToTop}>
            {t.footer.backToTop}
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
