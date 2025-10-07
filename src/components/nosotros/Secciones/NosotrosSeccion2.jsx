// NosotrosSeccion2.jsx
// Timeline histórico de evolución (2008-2024)

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsNosotros } from '../../../data/translationsNosotros';
import styles from '../css/nosotrosSeccion2.module.css';

const NosotrosSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en.timeline : translationsNosotros.es.timeline;
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.timelineSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {t.phases.map((phase, index) => (
            <div
              key={index}
              className={`${styles.phaseCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Conector vertical */}
              {index < t.phases.length - 1 && (
                <div className={styles.connector}></div>
              )}

              {/* Ícono de la época */}
              <div className={styles.iconCircle}>
                <span className={styles.icon}>{phase.icon}</span>
              </div>

              {/* Contenido */}
              <div className={styles.phaseContent}>
                <div className={styles.years}>{phase.years}</div>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <p className={styles.phaseDescription}>{phase.description}</p>
                
                {/* Highlight badge */}
                {phase.highlight && (
                  <div className={styles.highlightBadge}>
                    ✨ {phase.highlight}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosotrosSeccion2;
