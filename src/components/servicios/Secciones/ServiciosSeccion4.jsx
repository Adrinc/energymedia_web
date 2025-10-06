// ServiciosSeccion4.jsx
// Proceso General - Timeline de 4 pasos

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { motion } from 'framer-motion';
import { isEnglish } from '../../../data/variables';
import { translationsServicios } from '../../../data/translationsServicios';
import styles from '../css/serviciosSeccion4.module.css';

const ServiciosSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en.process : translationsServicios.es.process;

  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer para animación al scroll
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
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.h2}>{t.sectionTitle}</h2>
          <p className={styles.subtitle}>{t.sectionSubtitle}</p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {/* Línea conectora vertical */}
          <div className={`${styles.timelineLine} ${isVisible ? styles.lineGrow : ''}`} />

          {/* Steps */}
          {t.steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`${styles.stepWrapper} ${activeStep === index ? styles.stepActive : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Número del paso (círculo grande) */}
              <div className={styles.stepNumber}>
                <div className={styles.numberCircle}>
                  <span className={styles.number}>{step.number}</span>
                </div>
                {/* Conector al siguiente paso */}
                {index < t.steps.length - 1 && (
                  <div className={styles.connector} />
                )}
              </div>

              {/* Contenido del paso */}
              <div className={styles.stepContent}>
                <div className={styles.stepCard}>
                  {/* Título */}
                  <h3 className={styles.stepTitle}>{step.title}</h3>

                  {/* Descripción */}
                  <p className={styles.stepDescription}>{step.description}</p>

                  {/* Entregable */}
                  <div className={styles.deliverable}>
                    <svg className={styles.deliverableIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={styles.deliverableText}>
                      <strong>{ingles ? "Deliverable:" : "Entregable:"}</strong> {step.deliverable}
                    </span>
                  </div>

                  {/* Badge de paso */}
                  <div className={styles.stepBadge}>
                    {ingles ? "Step" : "Paso"} {step.number}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA final de la sección */}
        <div className={`${styles.ctaWrapper} ${isVisible ? styles.fadeInUp : ''}`}>
          <p className={styles.ctaText}>
            {ingles 
              ? "Ready to start your growth journey?" 
              : "¿Listo para comenzar tu camino de crecimiento?"}
          </p>
          <a href="/contacto" className={styles.ctaButton}>
            {ingles ? "Schedule consultation" : "Agenda tu consultoría"}
            <svg className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion4;
