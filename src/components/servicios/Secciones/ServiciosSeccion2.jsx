// ServiciosSeccion2.jsx
// Grid de 5 servicios con cards interactivas

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { motion } from 'framer-motion';
import { isEnglish } from '../../../data/variables';
import { translationsServicios } from '../../../data/translationsServicios';
import styles from '../css/serviciosSeccion2.module.css';

const ServiciosSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en.servicesGrid : translationsServicios.es.servicesGrid;

  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  // Handler para tooltip de "Próximamente"
  const handleLearnMoreClick = (e, serviceId) => {
    e.preventDefault();
    // Mostrar tooltip temporal
    const tooltip = e.currentTarget.querySelector(`.${styles.tooltip}`);
    if (tooltip) {
      tooltip.classList.add(styles.tooltipVisible);
      setTimeout(() => {
        tooltip.classList.remove(styles.tooltipVisible);
      }, 3000);
    }
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.h2}>{t.sectionTitle}</h2>
          <p className={styles.subtitle}>{t.sectionSubtitle}</p>
        </div>

        {/* Grid de Servicios */}
        <div className={styles.grid}>
          {t.services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${styles.card} ${hoveredCard === service.id ? styles.cardHovered : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icono */}
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>

              {/* Badge */}
              <div className={styles.badge}>{service.badge}</div>

              {/* Título y Tagline */}
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.tagline}>{service.tagline}</p>

              {/* Descripción */}
              <p className={styles.description}>{service.description}</p>

              {/* Bullets */}
              <ul className={styles.bulletList}>
                {service.bullets.map((bullet, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <svg className={styles.bulletIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className={styles.ctaGroup}>
                {/* Botón "Ver más" - DESHABILITADO con tooltip */}
                <button
                  className={`${styles.btnLearnMore} ${styles.btnDisabled}`}
                  onClick={(e) => handleLearnMoreClick(e, service.id)}
                >
                  {service.ctaLearnMore}
                  <span className={styles.tooltip}>
                    {service.comingSoon}
                  </span>
                </button>

                {/* Botón "Agendar" - ACTIVO */}
                <a
                  href="/contacto"
                  className={styles.btnSchedule}
                >
                  {service.ctaSchedule}
                  <svg className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion2;
