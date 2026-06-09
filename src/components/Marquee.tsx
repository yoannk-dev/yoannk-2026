import { useLocale } from '../hooks/useLocale';
import styles from './Marquee.module.scss';

export function Marquee() {
  const { t } = useLocale();
  const keywords = t.marquee;

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {[...keywords, ...keywords].map((kw, idx) => (
          <div key={idx} className={styles.kw}>
            {kw}
          </div>
        ))}
      </div>
    </div>
  );
}
