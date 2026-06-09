import styles from './Writing.module.scss';

const ARTICLES = [
  {
    id: 1,
    title: 'Building Performant React Applications',
    date: 'March 2024',
    readTime: '8 min',
  },
  {
    id: 2,
    title: 'CSS Grid vs Flexbox: When to Use What',
    date: 'February 2024',
    readTime: '5 min',
  },
  {
    id: 3,
    title: 'Accessibility-First Design Principles',
    date: 'January 2024',
    readTime: '7 min',
  },
  {
    id: 4,
    title: 'TypeScript Patterns for Large Codebases',
    date: 'December 2023',
    readTime: '10 min',
  },
];

export function Writing() {
  return (
    <section id="writing" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.shead}>
          <h2>Writing</h2>
          <span className={styles.idx}>(05)</span>
        </div>

        <p className={styles.pintro}>
          Thoughts on frontend engineering, design systems, and web performance.
        </p>

        <div className={styles.wlist}>
          {ARTICLES.map((article) => (
            <div key={article.id} className={styles.wrow}>
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
