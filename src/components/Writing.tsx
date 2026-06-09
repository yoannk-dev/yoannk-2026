import { useLocale } from '../hooks/useLocale';
import styles from './Writing.module.scss';

export function Writing() {
  const { t } = useLocale();
  const w = t.writing;

  return (
    <section id="writing" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.shead}>
          <h2>{w.title}</h2>
          <span className={styles.idx}>(05)</span>
        </div>

        <p className={styles.pintro}>{w.intro}</p>

        <div className={styles.wlist}>
          {w.items.map((article, idx) => (
            <div key={idx} className={styles.wrow}>
              <div className={styles.t}>{article.title}</div>
              <div className={styles.metaR}>
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
