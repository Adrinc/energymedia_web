// PortfolioSeccion5.jsx
// Reconocimientos (Emmy Award + estadísticas)

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsPortfolio } from '../../../data/translationsPortfolio';
import styles from '../css/portfolioSeccion5.module.css';

const PortfolioSeccion5 = () => {
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
    <section ref={sectionRef} className={styles.awardsSection}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.badge}>
            🏆 {t.awards.badge}
          </div>
          <h2 className={styles.title}>{t.awards.title}</h2>
          <p className={styles.subtitle}>{t.awards.subtitle}</p>
        </div>

        <div className={styles.content}>
          {/* Emmy Award destacado */}
          <div className={`${styles.emmyCard} ${isVisible ? styles.fadeInLeft : ''}`}>
            <div className={styles.emmyBadge}>
              <div className={styles.emmyIcon}>🏆</div>
              <div className={styles.emmyText}>
                <h3 className={styles.emmyTitle}>{t.awards.emmyTitle}</h3>
                <p className={styles.emmyYear}>{t.awards.emmyYear}</p>
              </div>
            </div>
            <p className={styles.emmyDescription}>{t.awards.emmyDescription}</p>
          </div>

          {/* Estadísticas */}
          <div className={`${styles.statsGrid} ${isVisible ? styles.fadeInRight : ''}`}>
            {t.awards.stats.map((stat, index) => (
              <div
                key={index}
                className={styles.statCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSeccion5;
