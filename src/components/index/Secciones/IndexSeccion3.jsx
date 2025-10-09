import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion3.module.css';

const IndexSeccion3 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      title: "Resultados que Transforman Negocios",
      subtitle: "No prometemos magia. Entregamos crecimiento medible respaldado por garantía de 90 días.",
      metrics: [
        {
          value: "200%",
          label: "Tráfico Web",
          description: "Promedio en primeros 6 meses"
        },
        {
          value: "150%",
          label: "Generación de Leads",
          description: "Con optimización continua"
        },
        {
          value: "300%",
          label: "Engagement",
          description: "En redes sociales orgánicas y pagadas"
        },
        {
          value: "4-6x",
          label: "ROI",
          description: "En campañas de email marketing ejecutadas"
        }
      ],
      guarantee: {
        badge: "GARANTÍA 90 DÍAS",
        text: "Si no ves resultados medibles en 90 días, reembolso completo. Sin preguntas.",
        features: [
          "Primeros resultados en 30 días",
          "Respuesta <2 horas",
          "Satisfacción garantizada"
        ]
      },
      microCopy: "Primeros resultados en 30 días. Respuesta <2 horas. Satisfacción garantizada."
    },
    en: {
      title: "Results That Transform Businesses",
      subtitle: "We don't promise magic. We deliver measurable growth backed by a 90-day guarantee.",
      metrics: [
        {
          value: "+200%",
          label: "Web Traffic",
          description: "Average in first 6 months"
        },
        {
          value: "+150%",
          label: "Lead Generation",
          description: "With continuous optimization"
        },
        {
          value: "+300%",
          label: "Engagement",
          description: "Across organic and paid social media"
        },
        {
          value: "400-600%",
          label: "ROI",
          description: "In executed email marketing campaigns"
        }
      ],
      guarantee: {
        badge: "90-DAY GUARANTEE",
        text: "If you don't see measurable results in 90 days, full refund. No questions asked.",
        features: [
          "First results in 30 days",
          "Response <2 hours",
          "Satisfaction guaranteed"
        ]
      },
      microCopy: "First results in 30 days. Response <2 hours. Satisfaction guaranteed."
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
      { threshold: 0.2 }
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
    <CinematicSection variant='dark' withGrain={true} withAnimation={true}>
      <div ref={sectionRef} className={styles.resultsContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.metricsGrid}>
          {t.metrics.map((metric, index) => (
            <div 
              key={index} 
              className={`${styles.metricCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
              <div className={styles.metricDescription}>{metric.description}</div>
            </div>
          ))}
        </div>

        <div className={`${styles.guaranteeBlock} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className={styles.guaranteeBadge}>{t.guarantee.badge}</div>
          <p className={styles.guaranteeText}>{t.guarantee.text}</p>
          <div className={styles.guaranteeFeatures}>
            {t.guarantee.features.map((feature, index) => (
              <span key={index} className={styles.feature}>{feature}</span>
            ))}
          </div>
        </div>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion3;
