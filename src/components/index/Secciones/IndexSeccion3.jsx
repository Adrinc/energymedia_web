import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/indexSeccion3.module.css';

const IndexSeccion3 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      title: "Resultados que Transforman Negocios",
      subtitle: "No prometemos magia. Entregamos crecimiento medible respaldado por garantía de 90 días.",
      metrics: [
        {
          value: "+200%",
          label: "Tráfico Web",
          description: "Promedio en primeros 6 meses"
        },
        {
          value: "+150%",
          label: "Generación de Leads",
          description: "Con optimización continua"
        },
        {
          value: "+300%",
          label: "Engagement",
          description: "En redes sociales"
        },
        {
          value: "4-6x",
          label: "ROI Email",
          description: "En campañas bien ejecutadas"
        }
      ],
      guarantee: {
        badge: "🛡️ GARANTÍA 90 DÍAS",
        text: "Si no ves resultados medibles en 90 días, reembolso completo. Sin preguntas.",
        features: [
          "✓ Primeros resultados en 30 días",
          "✓ Respuesta <2 horas",
          "✓ Satisfacción garantizada"
        ]
      }
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
          description: "Across social media"
        },
        {
          value: "4-6x",
          label: "Email ROI",
          description: "In well-executed campaigns"
        }
      ],
      guarantee: {
        badge: "🛡️ 90-DAY GUARANTEE",
        text: "If you don't see measurable results in 90 days, full refund. No questions asked.",
        features: [
          "✓ First results in 30 days",
          "✓ Response <2 hours",
          "✓ Satisfaction guaranteed"
        ]
      }
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
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.metricsGrid}>
          {t.metrics.map((metric, index) => (
            <div 
              key={index} 
              className={styles.metricCard}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
              <div className={styles.metricDescription}>{metric.description}</div>
            </div>
          ))}
        </div>

        <div className={styles.guaranteeContainer}>
          <div className={styles.guaranteeBadge}>
            <span className={styles.shieldIcon}>🛡️</span>
            {t.guarantee.badge.replace('🛡️ ', '')}
          </div>
          <p className={styles.guaranteeText}>{t.guarantee.text}</p>
          <div className={styles.featuresList}>
            {t.guarantee.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span>
                {feature.replace('✓ ', '')}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Degradado de transición a siguiente sección oscura (IA) */}
{/*       <div className={styles.transitionGradient}></div> */}
    </section>
  );
};

export default IndexSeccion3;
