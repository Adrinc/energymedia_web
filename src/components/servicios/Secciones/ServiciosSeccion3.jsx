// ServiciosSeccion3.jsx
// ¿Por qué elegirnos? - Diferenciadores clave

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { motion } from 'framer-motion';
import { isEnglish } from '../../../data/variables';
import { translationsServicios } from '../../../data/translationsServicios';
import styles from '../css/serviciosSeccion3.module.css';

const ServiciosSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en.whyUs : translationsServicios.es.whyUs;

  const [isVisible, setIsVisible] = useState(false);
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

        {/* Grid de Diferenciadores */}
        <div className={styles.grid}>
          {t.differentiators.map((diff, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Icono grande */}
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{diff.icon}</span>
              </div>

              {/* Número del diferenciador */}
              <div className={styles.number}>
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Título */}
              <h3 className={styles.cardTitle}>{diff.title}</h3>

              {/* Descripción */}
              <p className={styles.description}>{diff.description}</p>

              {/* Decorative bottom line */}
              <div className={styles.bottomLine} />
            </motion.div>
          ))}
        </div>

        {/* Badge de confianza */}
        <div className={`${styles.trustBadge} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.trustContent}>
            <span className={styles.trustIcon}>✓</span>
            <span className={styles.trustText}>
              {ingles 
                ? "Trusted by 50+ brands across industries" 
                : "Confianza de 50+ marcas en diversas industrias"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion3;
