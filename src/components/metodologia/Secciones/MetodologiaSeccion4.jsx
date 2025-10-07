// MetodologiaSeccion4.jsx
// Mini Case Studies - OYE en acción (2-3 casos reales)

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsMetodologia } from '../../../data/translationsMetodologia';
import styles from '../css/metodologiaSeccion4.module.css';

const MetodologiaSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsMetodologia.en.cases : translationsMetodologia.es.cases;
  
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCase, setSelectedCase] = useState(0);
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
    <section ref={sectionRef} className={styles.casesSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        {/* Cases Grid */}
        <div className={styles.casesGrid}>
          {t.items.map((caseItem, index) => (
            <div
              key={index}
              className={`${styles.caseCard} ${isVisible ? styles.fadeInUp : ''} ${selectedCase === index ? styles.active : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setSelectedCase(index)}
            >
              {/* Industry badge */}
              <div className={styles.industry}>{caseItem.industry}</div>

              {/* Challenge */}
              <div className={styles.section}>
                <h4 className={styles.sectionLabel}>
                  {ingles ? "Challenge" : "Reto"}
                </h4>
                <p className={styles.sectionText}>{caseItem.challenge}</p>
              </div>

              {/* OYE Insight */}
              <div className={styles.section}>
                <h4 className={styles.sectionLabel}>
                  💡 {ingles ? "OYE Insight" : "Insight OYE"}
                </h4>
                <p className={`${styles.sectionText} ${styles.highlight}`}>
                  {caseItem.oyeInsight}
                </p>
              </div>

              {/* Action */}
              <div className={styles.section}>
                <h4 className={styles.sectionLabel}>
                  {ingles ? "Action" : "Acción"}
                </h4>
                <p className={styles.sectionText}>{caseItem.action}</p>
              </div>

              {/* Result */}
              <div className={styles.resultSection}>
                <div className={styles.metricBig}>
                  <span className={styles.metricValue}>{caseItem.result.metric}</span>
                  <span className={styles.metricLabel}>{caseItem.result.label}</span>
                </div>
                <p className={styles.resultDetail}>{caseItem.result.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetodologiaSeccion4;
