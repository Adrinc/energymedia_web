// MetodologiaSeccion3.jsx
// OYE Section - Metodología detallada (anchor /metodologia#oye)

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsMetodologia } from '../../../data/translationsMetodologia';
import styles from '../css/metodologiaSeccion3.module.css';

const MetodologiaSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsMetodologia.en.oye : translationsMetodologia.es.oye;
  
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
    <section ref={sectionRef} id="oye" className={styles.oyeSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.badge}>{t.badge}</div>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <p className={styles.intro}>{t.intro}</p>
        </div>

        {/* Cómo funciona OYE */}
        <div className={`${styles.howItWorks} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.2s' }}>
          <h3 className={styles.sectionTitle}>{t.howItWorks.title}</h3>
          <div className={styles.stepsGrid}>
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className={`${styles.benefits} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className={styles.benefitsGrid}>
            {t.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Herramientas que usamos */}
        <div className={`${styles.toolsSection} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.6s' }}>
          <h3 className={styles.sectionTitle}>{t.tools.title}</h3>
          <p className={styles.toolsDescription}>{t.tools.description}</p>
          
          <div className={styles.toolsList}>
            {t.tools.list.map((tool, index) => (
              <div key={index} className={styles.toolCard}>
                <div className={styles.toolHeader}>
                  <h4 className={styles.toolName}>{tool.name}</h4>
                  <span className={styles.toolCategory}>{tool.category}</span>
                </div>
                <p className={styles.toolUse}>{tool.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`${styles.cta} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.8s' }}>
          <a href="/contacto" className={styles.ctaButton}>
            {t.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MetodologiaSeccion3;
