import { useState, useEffect } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translationsIndex } from '../../../data/translationsIndex';
import styles from "../css/indexSeccion1.module.css";

/**
 * IndexSeccion1 - Hero con Carrusel Cinematográfico
 * Sección 1 de la página principal de Energy Media
 * Sistema "Cine-Data Multicultural" con transiciones de texto dinámicas
 */
const IndexSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en.hero : translationsIndex.es.hero;
  
  // Carrusel de frases dinámicas - 5 PILARES
  const slides = ingles ? [
    {
      title: "Digital marketing",
      highlight: "+ web development",
      subtitle: "Complete tech stack for real growth.",
      icon: "🚀"
    },
    {
      title: "Data-driven strategies",
      highlight: "+ professional video",
      subtitle: "Metrics that matter. Video that converts.",
      icon: "📊"
    },
    {
      title: "Branding + AI",
      highlight: "+ strategic consulting",
      subtitle: "From identity to scalable digital solutions.",
      icon: "�"
    }
  ] : [
    {
      title: "Marketing digital",
      highlight: "+ desarrollo web",
      subtitle: "Stack tecnológico completo para crecimiento real.",
      icon: "🚀"
    },
    {
      title: "Estrategias data-driven",
      highlight: "+ video profesional",
      subtitle: "Métricas que importan. Video que convierte.",
      icon: "📊"
    },
    {
      title: "Branding + IA",
      highlight: "+ consultoría estratégica",
      subtitle: "De la identidad a soluciones digitales escalables.",
      icon: "�"
    }
  ];

  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState("fadeInUp");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slideDuration = 6000; // 6 segundos por slide
    const fadeOutDuration = 800; // Transición rápida
    const interval = 50;

    let progressTimer;

    const startTransition = () => {
      setAnim("fadeOutUp");
      
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnim("fadeInUp");
        setProgress(0);
      }, fadeOutDuration);
    };

    progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 * interval / (slideDuration - fadeOutDuration));
        
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          startTransition();
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => {
      clearInterval(progressTimer);
    };
  }, [index, slides.length]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Video de fondo */}
        <div className={styles.videoBackground}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.video}
          >
            <source src="/videos/v_bg_1.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay}></div>
        </div>

        {/* Contenido del Hero con Carrusel */}
        <div className={styles.heroContent}>
          {/* Ícono flotante animado */}
          <div className={`${styles.slideIcon} ${styles[anim]}`}>
            {slides[index].icon}
          </div>

          {/* Textos animados */}
          <div className={`${styles.textosAnimados} ${styles[anim]}`}>
            <h1 className={styles.heroTitle}>
              {slides[index].title}
              <br />
              <span className={styles.highlight}>{slides[index].highlight}</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              {slides[index].subtitle}
            </p>
          </div>

          {/* CTAs estáticos (siempre visibles) */}
          <div className={styles.ctaGroup}>
            <button className={styles.btnPrimary}>
              {t.ctaPrimary}
            </button>
            <button className={styles.btnSecondary}>
              {t.ctaSecondary}
            </button>
          </div>

          {/* Indicadores de progreso cinematográficos */}
          <div className={styles.indicators}>
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`${styles.indicator} ${i === index ? styles.active : ''}`}
              >
                <div 
                  className={styles.progressBar} 
                  style={{ 
                    width: i === index ? `${progress}%` : '0%',
                    transition: i === index ? 'width 0.05s linear' : 'none'
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Trust indicators estáticos debajo */}
          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <span className={styles.trustValue}>{t.trustIndicators.roas.value}</span>
              <span className={styles.trustLabel}>{t.trustIndicators.roas.label}</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustValue}>{t.trustIndicators.experience.value}</span>
              <span className={styles.trustLabel}>{t.trustIndicators.experience.label}</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustValue}>{t.trustIndicators.award.value}</span>
              <span className={styles.trustLabel}>{t.trustIndicators.award.label}</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>
            {ingles ? "Scroll down" : "Desliza hacia abajo"}
          </span>
          <div className={styles.scrollIcon}></div>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion1;