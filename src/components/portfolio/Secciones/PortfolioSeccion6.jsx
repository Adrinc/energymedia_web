// PortfolioSeccion6.jsx
// CTA final del Portfolio

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsPortfolio } from '../../../data/translationsPortfolio';
import styles from '../css/portfolioSeccion6.module.css';

const PortfolioSeccion6 = () => {
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

  return (
    <section ref={sectionRef} className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={`${styles.badge} ${isVisible ? styles.fadeIn : ''}`}>
          {t.ctaFinal.badge}
        </div>

        <h2 className={`${styles.title} ${isVisible ? styles.fadeInUp : ''}`}>
          {t.ctaFinal.title}
        </h2>

        <p className={`${styles.subtitle} ${isVisible ? styles.fadeInUp : ''}`}>
          {t.ctaFinal.subtitle}
        </p>

        {/* Bullets de beneficios */}
        <div className={`${styles.benefits} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}>✓</span>
            <span className={styles.benefitText}>{t.ctaFinal.bulletPrimary}</span>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}>✓</span>
            <span className={styles.benefitText}>{t.ctaFinal.bulletSecondary}</span>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}>✓</span>
            <span className={styles.benefitText}>{t.ctaFinal.bulletTertiary}</span>
          </div>
        </div>

        {/* CTAs */}
        <div className={`${styles.ctaGroup} ${isVisible ? styles.fadeInUp : ''}`}>
          <a href="/contacto" className={styles.btnPrimary}>
            {t.ctaFinal.ctaPrimary}
          </a>
          <a href="/metodologia" className={styles.btnSecondary}>
            {t.ctaFinal.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className={styles.bgDecoration}></div>
    </section>
  );
};

export default PortfolioSeccion6;
