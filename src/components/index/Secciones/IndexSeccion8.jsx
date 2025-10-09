import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/indexSeccion8.module.css';

const IndexSeccion8 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      badge: "NUESTROS PARTNERS",
      title: "Certificados por los Mejores",
      subtitle: "Socios oficiales de las plataformas líderes en marketing y tecnología",
      partners: [
        {
          name: "Google Partner",
          logo: "/image/brands/google.png"
        },
        {
          name: "Meta Business Partner",
          logo: "/image/brands/meta.jfif"
        },
        {
          name: "HubSpot Partner",
          logo: "/image/brands/hubspot.png"
        },
        {
          name: "Shopify Partner",
          logo: "/image/brands/shopyfy.png"
        },
        {
          name: "LinkedIn Marketing",
          logo: "/image/brands/linkelin.png"
        },
        {
          name: "Microsoft Advertising",
          logo: "/image/brands/microsoft.png"
        }
      ],
      footerText: "Capacitación continua en las últimas herramientas y estrategias del mercado"
    },
    en: {
      badge: "OUR PARTNERS",
      title: "Certified by the Best",
      subtitle: "Official partners of leading marketing and technology platforms",
      partners: [
        {
          name: "Google Partner",
          logo: "/image/brands/google.png"
        },
        {
          name: "Meta Business Partner",
          logo: "/image/brands/meta.jfif"
        },
        {
          name: "HubSpot Partner",
          logo: "/image/brands/hubspot.png"
        },
        {
          name: "Shopify Partner",
          logo: "/image/brands/shopyfy.png"
        },
        {
          name: "LinkedIn Marketing",
          logo: "/image/brands/linkelin.png"
        },
        {
          name: "Microsoft Advertising",
          logo: "/image/brands/microsoft.png"
        }
      ],
      footerText: "Continuous training in the latest market tools and strategies"
    }
  };
  
  const t = ingles ? content.en : content.es;
  
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
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <span className={styles.badge}>{t.badge}</span>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.partnersGrid}>
          {t.partners.map((partner, index) => (
            <div
              key={index}
              className={styles.partnerCard}
            >
              <div className={styles.logoContainer}>
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className={styles.logoImage}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.partnerName}>{partner.name}</h3>
            </div>
          ))}
        </div>

        <div className={styles.footerNote}>
          <p><strong>{t.footerText}</strong></p>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion8;
