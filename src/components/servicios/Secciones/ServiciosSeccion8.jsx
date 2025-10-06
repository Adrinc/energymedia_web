// ServiciosSeccion8.jsx
// CTA Final Épico - Última conversión de la página de Servicios

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsServicios } from '../../../data/translationsServicios';
import styles from '../css/serviciosSeccion8.module.css';

const ServiciosSeccion8 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en.ctaFinal : translationsServicios.es.ctaFinal;

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
      {/* Círculos decorativos flotantes */}
      <div className={styles.decorativeCircle1} />
      <div className={styles.decorativeCircle2} />
      <div className={styles.decorativeCircle3} />

      <div className={styles.container}>
        {/* Badge */}
        <div className={`${styles.badge} ${isVisible ? styles.fadeInUp : ''}`}>
          {t.badge}
        </div>

        {/* Título Principal */}
        <h2 className={`${styles.h2} ${isVisible ? styles.fadeInUp : ''}`}>
          {t.title}
        </h2>

        {/* Subtitle */}
        <p className={`${styles.subtitle} ${isVisible ? styles.fadeInUp : ''}`}>
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className={`${styles.ctaGroup} ${isVisible ? styles.fadeInUp : ''}`}>
          {/* CTA Primario */}
          <a href="/contacto" className={styles.btnPrimary}>
            <span className={styles.btnText}>{t.ctaPrimary}</span>
            <svg className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* CTA Secundario */}
          <a href="/contacto?type=proposal" className={styles.btnSecondary}>
            <span className={styles.btnText}>{t.ctaSecondary}</span>
            <svg className={styles.emailIcon} viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>

        {/* Trust indicators mini */}
        <div className={`${styles.trustMini} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.trustItem}>
            <svg className={styles.trustIcon} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className={styles.trustText}>
              {ingles ? "Free 30-min consultation" : "Consultoría gratuita de 30 min"}
            </span>
          </div>
          <div className={styles.trustItem}>
            <svg className={styles.trustIcon} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className={styles.trustText}>
              {ingles ? "No long-term contracts" : "Sin contratos a largo plazo"}
            </span>
          </div>
          <div className={styles.trustItem}>
            <svg className={styles.trustIcon} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className={styles.trustText}>
              {ingles ? "Transparent reporting" : "Reporting transparente"}
            </span>
          </div>
        </div>
      </div>

      {/* Efecto de brillo animado */}
      <div className={styles.shineEffect} />
    </section>
  );
};

export default ServiciosSeccion8;
