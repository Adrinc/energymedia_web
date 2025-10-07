import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsRecursos } from '../../../data/translationsRecursos';
import styles from '../css/recursosSeccion1.module.css';

const RecursosSeccion1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsRecursos.en.hero : translationsRecursos.es.hero;

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
      className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}
    >
      {/* Decorative elements */}
      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>
      <div className={styles.decorCircle3}></div>

      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          {t.badge}
        </div>

        <h1 className={styles.title}>
          {t.title}
        </h1>

        <p className={styles.subtitle}>
          {t.subtitle}
        </p>

        <p className={styles.description}>
          {t.description}
        </p>

        {/* Animated icon */}
        <div className={styles.iconWrapper}>
          <div className={styles.constructionIcon}>
            🚧
          </div>
          <div className={styles.iconGlow}></div>
        </div>
      </div>
    </section>
  );
};

export default RecursosSeccion1;
