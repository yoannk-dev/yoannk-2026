import { KEYWORDS } from '../../i18n/translations';
import styles from './Marquee.module.scss';

export function Marquee() {
  const renderKeywords = (prefix: string) =>
    KEYWORDS.map((keyword, i) => (
      <span className={styles.marqueeKeyword} key={prefix + i}>{keyword}</span>
    ));

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        {renderKeywords('a')}
        {renderKeywords('b')}
      </div>
    </div>
  );
}
