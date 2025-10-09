// NosotrosSeccion2.jsx - ACTUALIZADO 2025
// Who We Are - Equipo multidisciplinario con imagen

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsNosotros } from '../../../data/translationsNosotros';
import styles from '../css/nosotrosSeccion2.module.css';

const NosotrosSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en.whoWeAre : translationsNosotros.es.whoWeAre;
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
        {/* Imagen izquierda */}
        <div className={`${styles.imageWrapper} ${isVisible ? styles.fadeInLeft : ''}`}>
          <div className={styles.imageGlow}></div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
            alt={t.imageAlt}
            className={styles.teamImage}
            loading="lazy"
          />
        </div>

        {/* Contenido derecha */}
        <div className={`${styles.content} ${isVisible ? styles.fadeInRight : ''}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>{t.title}</h2>
            <p className={styles.subtitle}>{t.subtitle}</p>
            <p className={styles.description}>{t.description}</p>
          </div>

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            {t.features.map((feature, index) => (
              <div 
                key={index} 
                className={styles.featureCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.featureIcon}>{feature.icon}</span>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureText}>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            {t.stats.map((stat, index) => (
              <div 
                key={index} 
                className={styles.statCard}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSeccion2;
