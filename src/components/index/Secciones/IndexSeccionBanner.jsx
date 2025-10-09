import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/indexSeccionBanner.module.css';

const IndexSeccionBanner = () => {
  const ingles = useStore(isEnglish);
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef(null);

  const content = {
    es: {
      title: "El Futuro es Inteligente",
      subtitle: "Transformamos datos en decisiones, código en crecimiento, y estrategias en resultados reales",
      cta: "Descubre cómo"
    },
    en: {
      title: "The Future is Intelligent",
      subtitle: "We transform data into decisions, code into growth, and strategies into real results",
      cta: "Discover how"
    }
  };

  const t = ingles ? content.en : content.es;

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        const bannerTop = rect.top;
        const bannerHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Solo calcular parallax cuando el banner está visible
        if (bannerTop < windowHeight && bannerTop + bannerHeight > 0) {
          const scrolled = (windowHeight - bannerTop) / (windowHeight + bannerHeight);
          setScrollY(scrolled);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Código snippets flotantes (simulan IA/datos)
  const codeSnippets = [
    'import ai from "neural-network"',
    'const model = train(data)',
    'predict(future)',
    'optimize(performance)',
    'analyze(behavior)',
    'transform(data)',
    'automate(process)',
    'scale(infinitely)'
  ];

  return (
    <section ref={bannerRef} className={styles.bannerSection}>
      {/* Imagen de fondo con parallax */}
      <div 
        className={styles.parallaxBg}
        style={{ transform: `translateY(${scrollY * -150}px)` }}
      >
        {/* Pattern de circuitos */}
        <div className={styles.circuitPattern}></div>
      </div>

      {/* Overlay oscuro para contraste */}
      <div className={styles.overlay}></div>

      {/* Snippets de código flotantes */}
      <div className={styles.codeSnippets}>
        {codeSnippets.map((snippet, idx) => (
          <div
            key={idx}
            className={styles.codeSnippet}
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--delay': `${Math.random() * 5}s`,
              '--duration': `${10 + Math.random() * 10}s`
            }}
          >
            {snippet}
          </div>
        ))}
      </div>

      {/* Partículas de datos */}
      <div className={styles.dataParticles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--size': `${2 + Math.random() * 3}px`,
              '--duration': `${8 + Math.random() * 8}s`,
              '--delay': `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Contenido central */}
      <div className={styles.content}>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.subtitle}>{t.subtitle}</p>
        <div className={styles.ctaContainer}>
          <a href="#ia-section" className={styles.cta}>
            {t.cta}
            <span className={styles.arrow}>↓</span>
          </a>
        </div>
      </div>

      {/* Degradado de transición a sección IA (blanco → oscuro) */}
      <div className={styles.transitionGradient}></div>

      {/* Línea divisoria tech */}
      <div className={styles.techDivider}>
        <div className={styles.dividerLine}></div>
        <div className={styles.dividerGlow}></div>
      </div>
    </section>
  );
};

export default IndexSeccionBanner;
