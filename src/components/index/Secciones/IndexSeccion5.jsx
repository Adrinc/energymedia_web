import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion5.module.css';

/**
 * IndexSeccion5 - Metodología Timeline
 * 5 pasos del proceso de trabajo con animación vertical/horizontal
 * Sistema "Cine-Data Multicultural" - Energy Media
 */
const IndexSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en.methodology : translationsIndex.es.methodology;
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer para animar al scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  // Auto-progreso de steps (visual)
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % t.steps.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [isVisible, t.steps.length]);

  return (
    <CinematicSection variant="light" withAnimation={true}>
      <div ref={sectionRef} className={styles.methodologyContainer}>
        {/* Título de sección */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        {/* Timeline de 5 pasos */}
        <div className={styles.timeline}>
          {/* Línea conectora */}
          <div className={styles.timelineConnector}></div>

          {/* Steps */}
          {t.steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.timelineStep} ${
                isVisible ? styles.visible : ''
              } ${activeStep === index ? styles.active : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Número del paso con círculo */}
              <div className={styles.stepNumber}>
                <div className={styles.numberCircle}>
                  <span className={styles.number}>{step.number}</span>
                  <div className={styles.pulseRing}></div>
                </div>
                <span className={styles.stepIcon}>{step.icon}</span>
              </div>

              {/* Contenido del paso */}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                
                {/* Deliverable badge */}
                <div className={styles.deliverableBadge}>
                  <span className={styles.deliverableLabel}>
                    {ingles ? "Deliverable:" : "Entregable:"}
                  </span>
                  <span className={styles.deliverableText}>{step.deliverable}</span>
                </div>
              </div>

              {/* Conector al siguiente paso */}
              {index < t.steps.length - 1 && (
                <div className={styles.stepConnector}></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaContainer}>
          <a href="/metodologia" className={styles.btnLearnMore}>
            {t.cta}
          </a>
        </div>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion5;
