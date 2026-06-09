import styles from './Marquee.module.scss';

const KEYWORDS = [
  'React',
  'TypeScript',
  'JavaScript',
  'Frontend',
  'Web Design',
  'CSS',
  'Performance',
  'Accessibility',
];

export function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {[...KEYWORDS, ...KEYWORDS].map((kw, idx) => (
          <div key={idx} className={styles.kw}>
            {kw}
          </div>
        ))}
      </div>
    </div>
  );
}
