// ServiciosSeccion2NEW.jsx
// NUESTROS SERVICIOS - Grid Expandido con Detalles Completos

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsServiciosNEW } from '../../../data/translationsServiciosNEW';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/serviciosSeccion2NEW.module.css';

const ServiciosSeccion2NEW = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServiciosNEW.en.pilares : translationsServiciosNEW.es.pilares;

  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const sectionRef = useRef(null);

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

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <CinematicSection 
      variant="light" 
      withAnimation={true}
      id="servicios"
    >
      <section ref={sectionRef} className={styles.pilaresSection}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.sectionTitle}>{t.sectionTitle}</h2>
          <p className={styles.sectionSubtitle}>{t.sectionSubtitle}</p>
        </div>

        {/* Grid de 5 Servicios */}
        <div className={styles.pilaresGrid}>
          {t.services.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.pilarCard} ${isVisible ? styles.fadeInUp : ''} ${expandedCard === service.id ? styles.expanded : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header de la Card */}
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{service.icon}</span>
                  <div className={styles.iconGlow}></div>
                </div>
                
                <div className={styles.numberBadge}>
                  {service.number}
                </div>
              </div>

              {/* Contenido Principal */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.tagline}>{service.tagline}</p>
                <p className={styles.description}>{service.description}</p>

                {/* Features List */}
                <ul className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <div className={styles.checkIcon}>
                        <span>{service.emoji}</span>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Results Badge */}
                <div className={styles.resultsBadge}>
                  <span className={styles.resultsIcon}>📈</span>
                  <span className={styles.resultsText}>{service.results}</span>
                </div>

                {/* CTA */}
                <a href={`#${service.id}`} className={styles.cardCta}>
                  <span>{service.cta}</span>
                  <span className={styles.ctaArrow}>→</span>
                </a>
              </div>

              {/* Imagen de Fondo */}
              <div className={styles.cardImage}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className={styles.imageOverlay}></div>
              </div>

              {/* Efecto de brillo al hover */}
              <div className={styles.cardShine}></div>
            </div>
          ))}
        </div>

        {/* CTA General al final */}
        <div className={`${styles.ctaWrapper} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '1s' }}>
          <p className={styles.ctaText}>
            {ingles ? "Need a custom solution combining multiple services?" : "¿Necesitas una solución personalizada combinando varios servicios?"}
          </p>
          <a href="/contacto" className={styles.ctaButton}>
            <span>{ingles ? "Schedule Free Consultation" : "Agenda Consultoría Gratuita"}</span>
            <div className={styles.buttonShine}></div>
          </a>
        </div>
      </section>
    </CinematicSection>
  );
};

export default ServiciosSeccion2NEW;
