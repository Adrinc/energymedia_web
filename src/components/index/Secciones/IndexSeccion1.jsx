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
  
  // Carrusel de frases dinámicas
  const slides = ingles ? [
    {
      title: "Multicultural creativity",
      highlight: "+ digital performance",
      subtitle: "Video that connects. Strategies that sell.",
      icon: "🎬"
    },
    {
      title: "Data-driven insights",
      highlight: "+ cultural authenticity",
      subtitle: "OYE Analytics: Real-time multicultural listening.",
      icon: "📊"
    },
    {
      title: "From TV to digital",
      highlight: "+ measurable ROI",
      subtitle: "Emmy-winning production meets performance marketing.",
      icon: "🏆"
    }
  ] : [
    {
      title: "Creatividad multicultural",
      highlight: "+ performance digital",
      subtitle: "Video que conecta. Estrategias que venden.",
      icon: "🎬"
    },
    {
      title: "Insights basados en datos",
      highlight: "+ autenticidad cultural",
      subtitle: "OYE Analytics: Listening multicultural en tiempo real.",
      icon: "📊"
    },
    {
      title: "De la TV a digital",
      highlight: "+ ROI medible",
      subtitle: "Producción Emmy meets marketing de performance.",
      icon: "🏆"
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