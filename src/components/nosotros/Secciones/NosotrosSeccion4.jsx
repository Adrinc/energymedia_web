// NosotrosSeccion4.jsx
// Filosofía - 3 Pilares (Video primero, Cultura siempre, Resultados medibles)

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsNosotros } from '../../../data/translationsNosotros';
import styles from '../css/nosotrosSeccion4.module.css';

const NosotrosSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en.philosophy : translationsNosotros.es.philosophy;
  
  const [isVisible, setIsVisible] = useState(false);
  const [activePillar, setActivePillar] = useState(0);
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
    <section ref={sectionRef} className={styles.philosophySection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        {/* Pillars Grid */}
        <div className={styles.pillarsGrid}>
          {t.pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${styles.pillarCard} ${isVisible ? styles.fadeInUp : ''} ${activePillar === index ? styles.active : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setActivePillar(index)}
            >
              {/* Number */}
              <div className={styles.pillarNumber}>{pillar.number}</div>

              {/* Icon */}
              <div className={styles.pillarIcon}>{pillar.icon}</div>

              {/* Content */}
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>

              {/* Details (expandible) */}
              {activePillar === index && (
                <ul className={styles.detailsList}>
                  {pillar.details.map((detail, idx) => (
                    <li key={idx} className={styles.detailItem}>
                      <span className={styles.checkmark}>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosotrosSeccion4;
