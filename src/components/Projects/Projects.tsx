import { useLocale } from '../../hooks/useLocale';
import { PROJECTS } from '../../i18n/translations';
import { Arrow } from '../Arrow';
import { Reveal } from '../Reveal';
import styles from './Projects.module.scss';

export default function Projects() {
  const { locale, t } = useLocale();

  return (
    <section id="projects">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.shead}>
            <h2>
              <span className={`${styles.num} mono`} style={{ fontSize: 13, verticalAlign: 'middle', marginRight: 14 }}>04</span>
              {t.sections.projects}
            </h2>
            <span className={`${styles.idx} mono`}>// projects</span>
          </div>
        </Reveal>

        <Reveal as="p" delay={1} className={styles.pintro}>{t.projectsIntro}</Reveal>

        <Reveal as="div" delay={1} className={styles.cards}>
          {PROJECTS.map((project, i) => {
            const live = !!project.href;
            const Wrapper = live ? 'a' : 'div';
            const wrapperProps = live
              ? { href: project.href, target: '_blank' as const, rel: 'noopener noreferrer' }
              : {};

            return (
              <Wrapper
                className={`${styles.card} ${live ? styles.live : ''}`}
                key={i}
                {...wrapperProps}
              >
                <div className={styles.thumb}>
                  <img className={styles.thumbImg} src={project.img} alt={project.name[locale]} />
                  {live && <span className={styles.badge}>{t.live}</span>}
                </div>

                <div className={styles.info}>
                  <span className={styles.n}>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{project.name[locale]}</h3>
                  <div className={styles.blurb}>{project.blurb[locale]}</div>
                  <span className={styles.go}>
                    {live ? t.viewSite : t.soon}
                    <Arrow className={styles.arr} />
                  </span>
                </div>
              </Wrapper>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
