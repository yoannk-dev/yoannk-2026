import { useLocale } from '../hooks/useLocale';
import styles from './About.module.scss';

export function About() {
  const { t } = useLocale();
  const a = t.about;

  return (
    <section id="about" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.shead}>
          <h2>{a.title}</h2>
          <span className={styles.idx}>(01)</span>
        </div>

        <div className={styles.about}>
          <div>
            <p>{a.p1}</p>
            <p>{a.p2}</p>
          </div>

          <div className={styles.meta}>
            <div className={styles.row}>
              <div className={styles.mono}>{a.locationLabel}</div>
              <div className={styles.v}>Paris, France</div>
            </div>
            <div className={styles.row}>
              <div className={styles.mono}>{a.emailLabel}</div>
              <div className={styles.v}>
                <a href="mailto:y.kermet@gmail.com">y.kermet@gmail.com</a>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.mono}>{a.availableLabel}</div>
              <div className={styles.v}>{a.availableValue}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
