import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/indexSeccion2.module.css';

const IndexSeccion2 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      badge: "POR QUÉ ELEGIRNOS",
      title: "Transformamos tu Negocio con Resultados Medibles",
      subtitle: "Experiencia comprobada, tecnología de punta y equipo multidisciplinario para tu éxito digital",
      reasons: [
        {
          icon: "🏆",
          title: "Experiencia Comprobada",
          description: "+8 años transformando negocios digitales con +200 clientes satisfechos"
        },
        {
          icon: "📊",
          title: "Enfoque Data-Driven",
          description: "Decisiones basadas en datos reales, no corazonadas. ROI medible en cada campaña."
        },
        {
          icon: "👥",
          title: "Equipo Multidisciplinario",
          description: "Marketers + Diseñadores + Desarrolladores + Especialistas en IA trabajando juntos"
        },
        {
          icon: "⚡",
          title: "Tecnología de Punta",
          description: "Stack completo: CRM, automatización, IA, analytics en tiempo real"
        },
        {
          icon: "�",
          title: "Soporte Prioritario",
          description: "Respuesta en <2 horas. Sin esperas, sin excusas."
        },
        {
          icon: "�",
          title: "Planes Flexibles",
          description: "Desde startups hasta enterprises. Crece a tu ritmo."
        }
      ]
    },
    en: {
      badge: "WHY CHOOSE US",
      title: "We Transform Your Business with Measurable Results",
      subtitle: "Proven experience, cutting-edge technology and multidisciplinary team for your digital success",
      reasons: [
        {
          icon: "🏆",
          title: "Proven Experience",
          description: "+8 years transforming digital businesses with 200+ satisfied clients"
        },
        {
          icon: "📊",
          title: "Data-Driven Approach",
          description: "Decisions based on real data, not hunches. Measurable ROI in every campaign."
        },
        {
          icon: "👥",
          title: "Multidisciplinary Team",
          description: "Marketers + Designers + Developers + AI Specialists working together"
        },
        {
          icon: "⚡",
          title: "Cutting-Edge Technology",
          description: "Complete stack: CRM, automation, AI, real-time analytics"
        },
        {
          icon: "�",
          title: "Priority Support",
          description: "Response in <2 hours. No waiting, no excuses."
        },
        {
          icon: "�",
          title: "Flexible Plans",
          description: "From startups to enterprises. Grow at your pace."
        }
      ]
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

        <div className={styles.reasonsGrid}>
          {t.reasons.map((reason, index) => (
            <div
              key={index}
              className={styles.reasonCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.numberBadge}>{index + 1}</div>
              
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{reason.icon}</span>
              </div>
              
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion2;
