// PortfolioSeccion4.jsx
// Capacidades de producción (4 bloques)

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsPortfolio } from '../../../data/translationsPortfolio';
import styles from '../css/portfolioSeccion4.module.css';

const PortfolioSeccion4 = () => {
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
    <section ref={sectionRef} className={styles.capabilitiesSection}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.badge}>
            {t.capabilities.badge}
          </div>
          <h2 className={styles.title}>{t.capabilities.title}</h2>
          <p className={styles.subtitle}>{t.capabilities.subtitle}</p>
        </div>

        <div className={styles.capabilitiesGrid}>
          {t.capabilities.items.map((capability, index) => (
            <div
              key={index}
              className={`${styles.capabilityCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.capabilityIcon}>{capability.icon}</div>
              <div className={styles.capabilityNumber}>{capability.number}</div>
              <h3 className={styles.capabilityTitle}>{capability.title}</h3>
              <p className={styles.capabilityDescription}>{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSeccion4;
