import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsRecursos } from '../../../data/translationsRecursos';
import styles from '../css/recursosSeccion4.module.css';

const RecursosSeccion4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsRecursos.en.alternativeCtas : translationsRecursos.es.alternativeCtas;

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
    <section 
      ref={sectionRef}
      className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.ctas.map((cta, index) => (
            <a 
              key={index}
              href={cta.link}
              className={styles.ctaCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{cta.icon}</span>
                <div className={styles.iconGlow}></div>
              </div>

              <h3 className={styles.ctaTitle}>{cta.title}</h3>
              
              <p className={styles.ctaDescription}>{cta.description}</p>

              <span className={styles.ctaButton}>
                {cta.buttonText}
                <span className={styles.arrow}>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecursosSeccion4;
