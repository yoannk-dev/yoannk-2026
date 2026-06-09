import { useLocale } from '../hooks/useLocale';
import styles from './Stack.module.scss';

const STACK = {
  frontend: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'],
  tools: ['Vite', 'Webpack', 'Git', 'VS Code', 'Figma', 'Chrome DevTools'],
};

export function Stack() {
  const { t } = useLocale();
  const s = t.stack;

  return (
    <section id="stack" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.shead}>
          <h2>{s.title}</h2>
          <span className={styles.idx}>(03)</span>
        </div>

        <div className={styles.stackgrid}>
          <div className={styles.cell}>
            <h4>{s.frontendLabel}</h4>
            <ul>
              {STACK.frontend.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.cell}>
            <h4>{s.toolsLabel}</h4>
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
