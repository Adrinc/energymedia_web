// NosotrosSeccion3.jsx
// Emmy Award Highlight con estadísticas

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsNosotros } from '../../../data/translationsNosotros';
import styles from '../css/nosotrosSeccion3.module.css';

const NosotrosSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en.emmy : translationsNosotros.es.emmy;
  
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
    <section ref={sectionRef} className={styles.emmySection}>
      <div className={styles.container}>
        {/* Emmy Card Principal */}
        <div className={`${styles.emmyCard} ${isVisible ? styles.fadeInUp : ''}`}>
          {/* Badge */}
          <div className={styles.badge}>{t.badge}</div>

          {/* Emmy Icon/Trophy */}
          <div className={styles.trophyIcon}>
            🏆
          </div>

          {/* Contenido */}
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.description}>{t.description}</p>

          {/* Estadísticas */}
          <div className={styles.statsGrid}>
            {t.stats.map((stat, index) => (
              <div
                key={index}
                className={`${styles.statCard} ${isVisible ? styles.fadeInUp : ''}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="/portfolio" className={styles.ctaButton}>
            {t.ctaText}
          </a>
        </div>

        {/* Elementos decorativos */}
        <div className={styles.decoration}>
          <div className={styles.glow1}></div>
          <div className={styles.glow2}></div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSeccion3;
