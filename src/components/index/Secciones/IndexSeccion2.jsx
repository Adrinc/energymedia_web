import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion2.module.css';

const IndexSeccion2 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      title: "¿Por Qué Elegirnos?",
      subtitle: "Beneficios comprobados para tu éxito digital",
      reasons: [
        {
          icon: "⭐",
          title: "Experiencia Comprobada",
          description: "+8 años transformando negocios digitales con +200 clientes satisfechos en múltiples industrias."
        },
        {
          icon: "📊",
          title: "Enfoque Data-Driven",
          description: "Decisiones basadas en datos reales, no corazonadas. ROI medible en cada campaña con transparencia total."
        },
        {
          icon: "👥",
          title: "Equipo Multidisciplinario",
          description: "Marketers + Diseñadores + Desarrolladores + Especialistas en IA trabajando juntos para tu éxito."
        },
        {
          icon: "🤖",
          title: "Tecnología de Punta",
          description: "Stack completo: CRM, automatización, IA, analytics en tiempo real. Siempre a la vanguardia."
        },
        {
          icon: "💬",
          title: "Soporte Prioritario",
          description: "Respuesta en <2 horas. Sin esperas, sin excusas. Tu éxito es nuestra prioridad."
        },
        {
          icon: "📦",
          title: "Planes Flexibles",
          description: "Desde startups hasta enterprises. Crece a tu ritmo con soluciones personalizables."
        }
      ]
    },
    en: {
      title: "Why Choose Us?",
      subtitle: "Proven benefits for your digital success",
      reasons: [
        {
          icon: "⭐",
          title: "Proven Experience",
          description: "+8 years transforming digital businesses with +200 satisfied clients across multiple industries."
        },
        {
          icon: "📊",
          title: "Data-Driven Approach",
          description: "Decisions based on real data, not hunches. Measurable ROI in every campaign with total transparency."
        },
        {
          icon: "👥",
          title: "Multidisciplinary Team",
          description: "Marketers + Designers + Developers + AI Specialists working together for your success."
        },
        {
          icon: "🤖",
          title: "Cutting-Edge Technology",
          description: "Complete stack: CRM, automation, AI, real-time analytics. Always at the forefront."
        },
        {
          icon: "💬",
          title: "Priority Support",
          description: "Response in <2 hours. No waiting, no excuses. Your success is our priority."
        },
        {
          icon: "📦",
          title: "Flexible Plans",
          description: "From startups to enterprises. Grow at your pace with customizable solutions."
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
    <CinematicSection variant='light' withAnimation={true}>
      <div ref={sectionRef} className={styles.whyUsContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.reasonsGrid}>
          {t.reasons.map((reason, index) => (
            <div key={index} className={isVisible ? styles.fadeInUp : ''} style={{ animationDelay: (index * 0.1)+'s' }}>
              <div className={styles.reasonCard}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{reason.icon || ''}</span>
                </div>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonDescription}>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion2;
