// ServiciosSeccion1NEW.jsx
// HERO - Video de fondo + Presentación de servicios

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsServiciosNEW } from '../../../data/translationsServiciosNEW';
import styles from '../css/serviciosSeccion1NEW.module.css';

const ServiciosSeccion1NEW = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServiciosNEW.en.hero : translationsServiciosNEW.es.hero;

  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      {/* Video de Fondo */}
      <div className={styles.videoContainer}>
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/v_bg_3.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay oscuro para legibilidad */}
        <div className={styles.overlay} />
        
        {/* Partículas flotantes sutiles */}
        <div className={styles.particles}>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className={`${styles.contentWrapper} ${isVisible ? styles.fadeInUp : ''}`}>
    

        {/* Badge Premium */}
        <div className={`${styles.badge} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.1s' }}>
          {t.badge}
        </div>

        {/* Título Principal */}
        <h1 className={`${styles.h1} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.2s' }}>
          {t.h1}
        </h1>

        {/* Subtítulo con los 5 Servicios */}
        <p className={`${styles.subtitle} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.3s' }}>
          {t.subtitle}
        </p>

        {/* Descripción */}
        <p className={`${styles.description} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.4s' }}>
          {t.description}
        </p>

        {/* CTAs */}
        <div className={`${styles.ctaGroup} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.5s' }}>
          <a href="#servicios" className={styles.ctaPrimary}>
            <span>{t.ctaPrimary}</span>
            <div className={styles.buttonShine}></div>
          </a>
          
          <a href="/contacto" className={styles.ctaSecondary}>
            <span>{t.ctaSecondary}</span>
          </a>
        </div>

        {/* Indicador de Scroll */}
        <div className={`${styles.scrollIndicator} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>
            {ingles ? "Scroll to discover" : "Scroll para descubrir"}
          </span>
        </div>
      </div>

      {/* Stats flotantes (badges informativos) */}
      <div className={`${styles.floatingStats} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.7s' }}>
        <div className={styles.statBadge}>
          <span className={styles.statValue}>500+</span>
          <span className={styles.statLabel}>
            {ingles ? "Projects" : "Proyectos"}
          </span>
        </div>
        
        <div className={styles.statBadge}>
          <span className={styles.statValue}>5</span>
          <span className={styles.statLabel}>
            {ingles ? "Services" : "Servicios"}
          </span>
        </div>
        
        <div className={styles.statBadge}>
          <span className={styles.statValue}>98%</span>
          <span className={styles.statLabel}>
            {ingles ? "Satisfaction" : "Satisfacción"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion1NEW;
