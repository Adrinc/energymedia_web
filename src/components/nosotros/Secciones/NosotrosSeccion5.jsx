// NosotrosSeccion5.jsx
// Equipo Multicultural (versión genérica sin fotos)

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsNosotros } from '../../../data/translationsNosotros';
import styles from '../css/nosotrosSeccion5.module.css';

const NosotrosSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en.team : translationsNosotros.es.team;
  
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
    <section ref={sectionRef} className={styles.teamSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <p className={styles.description}>{t.description}</p>
        </div>

        {/* Expertise Grid */}
        <div className={styles.expertiseGrid}>
          {t.expertise.map((item, index) => (
            <div
              key={index}
              className={`${styles.expertiseCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon placeholder */}
              <div className={styles.iconCircle}>
                {index === 0 && '🎬'}
                {index === 1 && '📱'}
                {index === 2 && '📊'}
                {index === 3 && '🌎'}
              </div>

              <h3 className={styles.expertiseArea}>{item.area}</h3>
              <p className={styles.expertiseSkills}>{item.skills}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`${styles.ctaBlock} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.6s' }}>
          <a href="/contacto" className={styles.ctaButton}>
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSeccion5;
