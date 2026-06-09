import { useEffect, useState } from 'react';
import { useLocale } from '../../hooks/useLocale';
import { STATS, KEYWORDS } from '../../i18n/translations';
import { Arrow } from '../Arrow';
import styles from './Hero.module.scss';

function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Intl.DateTimeFormat('fr-FR', {
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'Europe/Paris',
          }).format(new Date())
        );
      } catch {
        setTime(new Date().toLocaleTimeString());
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

function Marquee() {
  const mk = (prefix: string) =>
    KEYWORDS.map((k, i) => <span className={styles.kw} key={prefix + i}>{k}</span>);
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>{mk('a')}{mk('b')}</div>
    </div>
  );
}

export default function Hero() {
  const { locale, t } = useLocale();
  const h = t.hero;

  return (
    <section className={styles.hero} id="top">
      <div className={styles.wrap}>
        <div className={styles.heroGrid}>
          <div>
            <div className={`${styles.eyebrow} hl a1 mono`}>
              <span>{h.role}</span>
              <span>·</span>
              <span className={styles.av}><i className={styles.online} />{h.available}</span>
            </div>

            <h1 className={styles.name}>
              <span className="hl a2" style={{ display: 'block' }}>Yoann</span>
              <span className={`${styles.l2} hl a3`} style={{ display: 'block' }}>Kermet</span>
            </h1>

            <p className={`${styles.statement} hl a4`}>
              {locale === 'fr'
                ? <>Je conçois et construis des interfaces web rapides, accessibles et durables — surtout en <b>React</b> &amp; <b>TypeScript</b>.</>
                : <>I design and build fast, accessible, long-lasting web interfaces — mostly with <b>React</b> &amp; <b>TypeScript</b>.</>}
            </p>

            <div className={`${styles.heroFoot} hl a5`}>
              <a className={styles.btn} href="#contact">{h.contactCta}<Arrow className={styles.arr} /></a>
              <a className={`${styles.btn} ${styles.ghost}`} href="https://github.com/yoannk-dev" target="_blank" rel="noopener noreferrer">GitHub<Arrow className={styles.arr} /></a>
              <a className={`${styles.btn} ${styles.ghost}`} href="https://linkedin.com/in/yoannkermet" target="_blank" rel="noopener noreferrer">LinkedIn<Arrow className={styles.arr} /></a>
            </div>
          </div>

          <div className={`${styles.heroside} hl a4`}>
            {STATS.map((s, i) => (
              <div className={styles.blk} key={i}>
                <div className={`${styles.mono}`}>{t[s.labelKey]}</div>
                <div className={styles.v}>
                  <span className={styles.big}>{s.n}</span>
                </div>
              </div>
            ))}
            <div className={styles.blk}>
              <div className={styles.mono}>{t.now}</div>
              <div className={`${styles.v} mono`} style={{ letterSpacing: '.1em' }}><Clock /></div>
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
