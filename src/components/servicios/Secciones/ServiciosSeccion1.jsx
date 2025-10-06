// ServiciosSeccion1.jsx
// Hero Banner con video parallax para página de Servicios

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsServicios } from '../../../data/translationsServicios';
import styles from '../css/serviciosSeccion1.module.css';

const ServiciosSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en.hero : translationsServicios.es.hero;

  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Parallax effect: video se mueve más lento que el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        
        // Solo aplicar parallax cuando la sección está visible
        if (sectionTop < windowHeight && sectionTop > -rect.height) {
          const scrolled = window.scrollY;
          setScrollY(scrolled * 0.3); // Parallax factor 0.3 (más sutil)
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar una vez al montar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      {/* Video Background con Parallax */}
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            transform: `translate(-50%, -50%) translateY(${scrollY}px)` 
          }}
        >
          <source src="/videos/v_bg_2.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay oscuro para legibilidad */}
        <div className={styles.overlay} />
      </div>

      {/* Contenido */}
      <div className={styles.contentWrapper}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <a href="/" className={styles.breadcrumbLink}>
            {ingles ? "Home" : "Inicio"}
          </a>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>
            {ingles ? "Services" : "Servicios"}
          </span>
        </nav>

        {/* Badge */}
        <div className={styles.badge}>
          {t.badge}
        </div>

        {/* Título Principal */}
        <h1 className={styles.h1}>
          {t.h1}
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          {t.subtitle}
        </p>

        {/* Decorative line */}
        <div className={styles.decorativeLine} />
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
};

export default ServiciosSeccion1;
