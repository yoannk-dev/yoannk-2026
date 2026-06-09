import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrap}>
        <div className={styles.heroGrid}>
          <div>
            <div className={`${styles.eyebrow} hl a1`}>
              <div className={styles.av}>
                <i className={styles.online} />
                Available for work
              </div>
            </div>

            <h1 className={`${styles.name} hl a2`}>
              Yoann<br />
              <span className={styles.l2}>Kermet</span>
            </h1>

            <p className={`${styles.statement} hl a3`}>
              Senior <b>Front-End Engineer</b> based in Paris.
              <br />
              15 years building fast, accessible web interfaces with
              React &amp; TypeScript.
            </p>

            <div className={`${styles.heroFoot} hl a4`}>
              <a href="#contact" className={styles.btn}>
                Get in touch <span className={styles.arr}>↗</span>
              </a>
              <a href="#projects" className={`${styles.btn} ${styles.ghost}`}>
                See my work
              </a>
            </div>
          </div>

          <div className={styles.heroside}>
            <div className={styles.blk}>
              <div className={styles.mono}>Experience</div>
              <div className={styles.v}>
                <div className={styles.big}>15+</div>
                <div>years in frontend</div>
              </div>
            </div>
            <div className={styles.blk}>
              <div className={styles.mono}>Stack</div>
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
