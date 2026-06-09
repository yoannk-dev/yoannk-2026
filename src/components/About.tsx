import styles from './About.module.scss';

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.shead}>
          <h2>About</h2>
          <span className={styles.idx}>(01)</span>
        </div>

        <div className={styles.about}>
          <div>
            <p>
              I'm a frontend engineer with 15 years of experience crafting intuitive,
              performant web interfaces. I specialize in React and TypeScript, focusing on
              clean code, accessibility, and user experience.
            </p>
            <p>
              Currently based in Paris, I work with teams to solve complex frontend
              challenges and deliver pixel-perfect implementations that scale.
            </p>
          </div>

          <div className={styles.meta}>
            <div className={styles.row}>
              <div className={styles.mono}>Location</div>
              <div className={styles.v}>Paris, France</div>
            </div>
            <div className={styles.row}>
              <div className={styles.mono}>Email</div>
              <div className={styles.v}>
                <a href="mailto:y.kermet@gmail.com">y.kermet@gmail.com</a>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.mono}>Available</div>
              <div className={styles.v}>For new opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
