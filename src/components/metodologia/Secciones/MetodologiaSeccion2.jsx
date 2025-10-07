// MetodologiaSeccion2.jsx
// Process Timeline - 6 pasos del workflow de Energy Media

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsMetodologia } from '../../../data/translationsMetodologia';
import styles from '../css/metodologiaSeccion2.module.css';

const MetodologiaSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsMetodologia.en.process : translationsMetodologia.es.process;
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
    <section ref={sectionRef} className={styles.processSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {t.steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setActiveStep(index)}
            >
              {/* Línea conectora */}
              {index < t.steps.length - 1 && (
                <div className={styles.connector}></div>
              )}

              {/* Paso */}
              <div className={`${styles.step} ${activeStep === index ? styles.active : ''}`}>
                {/* Número e ícono */}
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>
                    <span className={styles.numberBig}>{step.number}</span>
                    <span className={styles.icon}>{step.icon}</span>
                  </div>
                </div>

                {/* Contenido */}
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <div className={styles.duration}>{step.duration}</div>
                  <p className={styles.stepDescription}>{step.description}</p>

                  {/* Entregables (solo visible cuando es activo) */}
                  {activeStep === index && (
                    <div className={styles.deliverables}>
                      <h4 className={styles.deliverablesTitle}>
                        {ingles ? "Deliverables:" : "Entregables:"}
                      </h4>
                      <ul className={styles.deliverablesList}>
                        {step.deliverables.map((item, i) => (
                          <li key={i} className={styles.deliverableItem}>
                            <span className={styles.checkmark}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetodologiaSeccion2;
