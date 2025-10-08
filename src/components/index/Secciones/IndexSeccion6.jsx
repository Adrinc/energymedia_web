import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion6.module.css';

/**
 * IndexSeccion6 - LOGOS DE CLIENTES
 * Slider infinito de marcas que confían en Energy Media
 * Sistema "Digital Performance" - Energy Media
 */
const IndexSeccion6 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en.clients : translationsIndex.es.clients;
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  // Intersection Observer
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

  // Lista de logos de clientes (placeholder - usar logos reales en /public/image/clients/)
  const clientLogos = [
    "toyota", "mcdonalds", "cocacola", "walmart", "att",
    "verizon", "target", "wellsfargo", "bankofamerica", "univision",
    "tmobile", "nike", "pepsi", "amazon", "microsoft"
  ];

  return (
    <CinematicSection variant="light" withAnimation={true}>
      <div ref={sectionRef} className={styles.clientsContainer}>
        {/* Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        {/* Logo Slider */}
        <div className={styles.sliderWrapper}>
          <div ref={sliderRef} className={styles.logoSlider}>
            {/* Primera iteración de logos */}
            {clientLogos.map((logo, index) => (
              <div key={`logo-${index}`} className={styles.logoCard}>
                <div className={styles.logoImageWrapper}>
                  {/* Placeholder - reemplazar con imágenes reales */}
                  <div className={styles.logoPlaceholder}>
                    {logo.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicado para efecto infinito */}
            {clientLogos.map((logo, index) => (
              <div key={`logo-duplicate-${index}`} className={styles.logoCard}>
                <div className={styles.logoImageWrapper}>
                  <div className={styles.logoPlaceholder}>
                    {logo.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className={`${styles.trustBadge} ${isVisible ? styles.visible : ''}`}>
          <p className={styles.trustText}>
            {ingles 
              ? "Trusted by leading brands across industries" 
              : "Con la confianza de marcas líderes en diferentes industrias"}
          </p>
        </div>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion6;
