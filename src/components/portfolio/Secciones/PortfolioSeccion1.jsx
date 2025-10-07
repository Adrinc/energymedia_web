// PortfolioSeccion1.jsx
// Hero de Portfolio con video de fondo y mensaje principal

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsPortfolio } from '../../../data/translationsPortfolio';
import styles from '../css/portfolioSeccion1.module.css';

const PortfolioSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsPortfolio.en : translationsPortfolio.es;
  
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

  const scrollToGrid = () => {
    const gridSection = document.getElementById('portfolio-grid');
    if (gridSection) {
      gridSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      {/* Video de fondo */}
      <div className={styles.videoBackground}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
        >
          <source src="/videos/v_bg_3.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Contenido */}
      <div className={styles.heroContent}>
        <div className={`${styles.badge} ${isVisible ? styles.fadeIn : ''}`}>
          🏆 {t.hero.badge}
        </div>

        <h1 className={`${styles.h1} ${isVisible ? styles.fadeInUp : ''}`}>
          {t.hero.h1}
        </h1>

        <p className={`${styles.subtitle} ${isVisible ? styles.fadeInUp : ''}`}>
          {t.hero.subtitle}
        </p>

        <div className={`${styles.ctaGroup} ${isVisible ? styles.fadeInUp : ''}`}>
          <button onClick={scrollToGrid} className={styles.btnPrimary}>
            {t.hero.ctaPrimary}
          </button>
          <a href="/contacto" className={styles.btnSecondary}>
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={`${styles.scrollIndicator} ${isVisible ? styles.fadeIn : ''}`}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
};

export default PortfolioSeccion1;
