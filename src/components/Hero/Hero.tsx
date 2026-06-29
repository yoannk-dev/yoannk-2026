import { useLocale } from '../../hooks/useLocale';
import { STATS } from '../../i18n/translations';
import { Arrow } from '../Arrow';
import { Clock } from './Clock';
import { Marquee } from './Marquee';
import { ProfilePicture } from './ProfilePicture';
import styles from './Hero.module.scss';

function parseBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function Hero() {
  const { t } = useLocale();
  const { hero } = t;

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.wrap}>
        <div className={styles.heroGrid}>
          <div>
            <div className={`${styles.eyebrow} hl a1 mono`}>
              <span>{hero.role}</span>
              <span className={styles.separator}>·</span>
              <span className={styles.availabilityBadge}>
                <i className={styles.availabilityDot} />
                {hero.available}
              </span>
            </div>

            <h1 className={styles.name}>
              <span className="hl a2">Yoann</span>
              <span className={`${styles.nameSurname} hl a3`}>Kermet</span>
            </h1>

            <p className={`${styles.statement} hl a4`}>
              {parseBold(hero.statement)}
            </p>

            <div className={`${styles.heroActions} hl a5`}>
              <a className={styles.btn} href="#contact">{hero.contactCta}<Arrow className={styles.buttonArrow} /></a>
              <a className={`${styles.btn} ${styles.ghost}`} href="https://github.com/yoannk-dev" target="_blank" rel="noopener noreferrer">GitHub<Arrow className={styles.buttonArrow} /></a>
              <a className={`${styles.btn} ${styles.ghost}`} href="https://linkedin.com/in/yoannkermet" target="_blank" rel="noopener noreferrer">LinkedIn<Arrow className={styles.buttonArrow} /></a>
            </div>
          </div>

          <div className={`${styles.heroSidePanel} hl a4`}>
            <ProfilePicture />
            {STATS.map((stat, i) => (
              <div className={styles.statBlock} key={i}>
                <div className={styles.monoLabel}>{t[stat.labelKey]}</div>
                <div className={styles.statValue}>
                  <span className={styles.statValueLarge}>{stat.value}</span>
                </div>
              </div>
            ))}
            <div className={styles.statBlock}>
              <div className={styles.monoLabel}>{t.now}</div>
              <div className={`${styles.statValue} ${styles.clockValue} mono`}><Clock /></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrap}>
        <Marquee />
      </div>
    </section>
  );
}
