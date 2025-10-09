// MetodologiaSeccion1.jsx
// Hero de Metodología - Intro breve del proceso

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsMetodologia } from '../../../data/translationsMetodologia';
import styles from '../css/metodologiaSeccion1.module.css';

const MetodologiaSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsMetodologia.en.hero : translationsMetodologia.es.hero;
  
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
    <section ref={sectionRef} className={styles.heroSection}>
      {/* Video de fondo en loop */}
      <video
        className={styles.bgVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero4.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay oscuro para legibilidad */}
      <div className={styles.videoOverlay}></div>
      
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.badge}>{t.badge}</div>
          
          <h1 className={styles.title}>
            {t.h1}
          </h1>
          
          <p className={styles.subtitle}>
            {t.subtitle}
          </p>

          <div className={styles.ctaGroup}>
            <div className={styles.ctaPrimary}>
              {t.ctaPrimary}
            </div>
            <div className={styles.ctaSecondary}>
              {t.ctaSecondary}
            </div>
          </div>
        {/*   <div className={styles.ctaGroup}>
            <a href="/portfolio" className={styles.ctaPrimary}>
              {t.ctaPrimary}
            </a>
            <a href="/contacto" className={styles.ctaSecondary}>
              {t.ctaSecondary}
            </a>
          </div> */}
        </div>

        {/* Decoración */}
        <div className={styles.decoration}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  );
};

export default MetodologiaSeccion1;
