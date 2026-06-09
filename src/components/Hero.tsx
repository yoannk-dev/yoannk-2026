import { useLocale } from '../hooks/useLocale';
import styles from './Hero.module.scss';

export function Hero() {
  const { t } = useLocale();
  const h = t.hero;

  return (
    <section className={styles.hero}>
      <div className={styles.wrap}>
        <div className={styles.heroGrid}>
          <div>
            <div className={`${styles.eyebrow} hl a1`}>
              <div className={styles.av}>
                <i className={styles.online} />
                {h.available}
              </div>
            </div>

            <h1 className={`${styles.name} hl a2`}>
              Yoann<br />
              <span className={styles.l2}>Kermet</span>
            </h1>

            <p className={`${styles.statement} hl a3`}>
              {h.statementPre} <b>{h.statementBold}</b> {h.statementPost}
              <br />
              {h.statementLine2} React &amp; TypeScript.
            </p>

            <div className={`${styles.heroFoot} hl a4`}>
              <a href="#contact" className={styles.btn}>
                {h.cta} <span className={styles.arr}>↗</span>
              </a>
              <a href="#projects" className={`${styles.btn} ${styles.ghost}`}>
                {h.seeWork}
              </a>
            </div>
          </div>

          <div className={styles.heroside}>
            <div className={styles.blk}>
              <div className={styles.mono}>{h.expLabel}</div>
              <div className={styles.v}>
                <div className={styles.big}>15+</div>
                <div>{h.expValue}</div>
              </div>
            </div>
            <div className={styles.blk}>
              <div className={styles.mono}>{h.stackLabel}</div>
              <div className={styles.v}>
                <div>React, TypeScript,<br />Vite, SCSS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
