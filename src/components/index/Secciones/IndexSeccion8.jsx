import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion8.module.css';

/**
 * IndexSeccion8 - CERTIFICACIONES & PARTNERS
 * Autoridad mediante logos de herramientas/certificaciones
 * Sistema "Cine-Data Multicultural" - Energy Media
 */
const IndexSeccion8 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      title: "Certificados por los Mejores",
      subtitle: "Socios oficiales de las plataformas líderes en marketing y tecnología",
      partners: [
        "Google Partner",
        "Meta Business Partner",
        "HubSpot Partner",
        "Shopify Partner",
        "LinkedIn Marketing Partner",
        "Microsoft Advertising"
      ],
      footer: "Capacitación continua en las últimas herramientas y estrategias del mercado"
    },
    en: {
      title: "Certified by the Best",
      subtitle: "Official partners of leading marketing and technology platforms",
      partners: [
        "Google Partner",
        "Meta Business Partner",
        "HubSpot Partner",
        "Shopify Partner",
        "LinkedIn Marketing Partner",
        "Microsoft Advertising"
      ],
      footer: "Continuous training in the latest market tools and strategies"
    }
  };
  
  const t = ingles ? content.en : content.es;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <CinematicSection variant="light" withAnimation={true}>
      <div ref={sectionRef} className={styles.certificationsContainer}>
        {/* Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        {/* Grid de partners */}
        <div className={styles.partnersGrid}>
          {t.partners.map((partner, index) => (
            <div
              key={index}
              className={`${styles.partnerCard} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.partnerIcon}>
                {/* Placeholder - Reemplazar con logos reales si se desean */}
                <span className={styles.partnerIconText}>
                  {partner.split(' ')[0]}
                </span>
              </div>
              <h3 className={styles.partnerName}>{partner}</h3>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
          {t.footer}
        </p>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion8;
