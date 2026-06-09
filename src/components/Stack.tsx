import styles from './Stack.module.scss';

const STACK = {
  frontend: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'],
  tools: ['Vite', 'Webpack', 'Git', 'VS Code', 'Figma', 'Chrome DevTools'],
};

export function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.shead}>
          <h2>Stack</h2>
          <span className={styles.idx}>(03)</span>
        </div>

        <div className={styles.stackgrid}>
          <div className={styles.cell}>
            <h4>Frontend</h4>
            <ul>
              {STACK.frontend.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.cell}>
            <h4>Tools & Dev</h4>
            <ul>
              {STACK.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
