// ServiciosSeccion3NEW.jsx
// IA AL SERVICIO - Cómo usamos IA en cada pilar

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsServiciosNEW } from '../../../data/translationsServiciosNEW';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/serviciosSeccion3NEW.module.css';

const ServiciosSeccion3NEW = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServiciosNEW.en.ia : translationsServiciosNEW.es.ia;

  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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
    <CinematicSection 
      variant="dark" 
      withGrain={true}
      withAnimation={true}
    >
      <section ref={sectionRef} className={styles.iaSection}>
        {/* Header con Robot */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          {/* Badge */}
          <div className={styles.badge}>
            {t.badge}
          </div>

          {/* Título */}
          <h2 className={styles.sectionTitle}>{t.sectionTitle}</h2>
          
          {/* Subtítulo */}
          <p className={styles.sectionSubtitle}>{t.sectionSubtitle}</p>

          {/* Robot Image */}
          <div className={`${styles.robotContainer} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.3s' }}>
            <img 
              src="/image/global/robot.png" 
              alt="AI Robot" 
              className={styles.robotImage}
            />
            <div className={styles.robotGlow}></div>
          </div>
        </div>

        {/* Tabs de Servicios */}
        <div className={`${styles.tabsContainer} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.5s' }}>
          {t.pillars.map((pillar, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {pillar.pillar}
            </button>
          ))}
        </div>

        {/* Contenido de la Tab Activa */}
        <div className={`${styles.tabContent} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.7s' }}>
          <div className={styles.aiFeaturesList}>
            {t.pillars[activeTab].aiFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={styles.aiFeature}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.featureIcon}>
                  <span>🤖</span>
                </div>
                <p className={styles.featureText}>{feature}</p>
                <div className={styles.featureShine}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats de IA */}
        <div className={`${styles.statsGrid} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.9s' }}>
          {t.stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statGlow}></div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className={`${styles.ctaGroup} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '1.1s' }}>
          <a href="#desarrollo-web" className={styles.ctaPrimary}>
            <span>{t.cta}</span>
            <div className={styles.buttonShine}></div>
          </a>
          
          <a href="/contacto" className={styles.ctaSecondary}>
            <span>{t.ctaSecondary}</span>
          </a>
        </div>
      </section>
    </CinematicSection>
  );
};

export default ServiciosSeccion3NEW;
