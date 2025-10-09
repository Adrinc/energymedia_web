import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion6.module.css';

/**
 * IndexSeccion6 - PROCESO DE TRABAJO
 * Timeline de 6 pasos con Intersection Observer
 * Sistema "Digital Performance" - Energy Media
 */
const IndexSeccion6 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      title: "Cómo Transformamos tu Negocio (Paso a Paso)",
      subtitle: "Proceso probado en +200 clientes. Sin sorpresas, solo resultados.",
      steps: [
        {
          number: 1,
          title: "Descubrimiento & Auditoría",
          description: "Analizamos tu negocio, competencia, audiencia, situación digital actual",
          duration: "Semana 1",
          deliverable: "Diagnóstico completo con oportunidades identificadas",
          icon: "🔍"
        },
        {
          number: 2,
          title: "Estrategia & Roadmap",
          description: "Creamos plan de crecimiento 90 días con KPIs medibles",
          duration: "Semana 2",
          deliverable: "Roadmap detallado + propuesta de inversión",
          icon: "🗺️"
        },
        {
          number: 3,
          title: "Implementación & Setup",
          description: "Configuramos herramientas, tracking, martech stack, producción inicial",
          duration: "Semanas 3-4",
          deliverable: "Infraestructura digital funcionando + primeras campañas live",
          icon: "⚙️"
        },
        {
          number: 4,
          title: "Optimización Continua",
          description: "A/B testing, iteración creativa, ajuste de segmentación, mejora de CTR/CVR",
          duration: "Mes 2+",
          deliverable: "Reports quincenales + ajustes basados en data",
          icon: "📈"
        },
        {
          number: 5,
          title: "Reporting & Transparencia",
          description: "Dashboards en tiempo real + calls de revisión estratégica",
          duration: "Ongoing",
          deliverable: "Reports personalizados + acceso a analytics 24/7",
          icon: "📊"
        },
        {
          number: 6,
          title: "Escalamiento & Crecimiento",
          description: "Expansión a nuevos canales, audiencias, formatos basados en resultados",
          duration: "Mes 3+",
          deliverable: "Plan de escalamiento + inversión incremental recomendada",
          icon: "🚀"
        }
      ]
    },
    en: {
      title: "How We Transform Your Business (Step by Step)",
      subtitle: "Process proven with +200 clients. No surprises, only results.",
      steps: [
        {
          number: 1,
          title: "Discovery & Audit",
          description: "We analyze your business, competition, audience, current digital situation",
          duration: "Week 1",
          deliverable: "Complete diagnosis with identified opportunities",
          icon: "🔍"
        },
        {
          number: 2,
          title: "Strategy & Roadmap",
          description: "We create 90-day growth plan with measurable KPIs",
          duration: "Week 2",
          deliverable: "Detailed roadmap + investment proposal",
          icon: "🗺️"
        },
        {
          number: 3,
          title: "Implementation & Setup",
          description: "We configure tools, tracking, martech stack, initial production",
          duration: "Weeks 3-4",
          deliverable: "Digital infrastructure running + first campaigns live",
          icon: "⚙️"
        },
        {
          number: 4,
          title: "Continuous Optimization",
          description: "A/B testing, creative iteration, segmentation adjustment, CTR/CVR improvement",
          duration: "Month 2+",
          deliverable: "Biweekly reports + data-driven adjustments",
          icon: "📈"
        },
        {
          number: 5,
          title: "Reporting & Transparency",
          description: "Real-time dashboards + strategic review calls",
          duration: "Ongoing",
          deliverable: "Custom reports + 24/7 analytics access",
          icon: "📊"
        },
        {
          number: 6,
          title: "Scaling & Growth",
          description: "Expansion to new channels, audiences, formats based on results",
          duration: "Month 3+",
          deliverable: "Scaling plan + recommended incremental investment",
          icon: "🚀"
        }
      ]
    }
  };
  
  const t = ingles ? content.en : content.es;
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
      <div ref={sectionRef} className={styles.processContainer}>
        {/* Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        {/* Timeline de 6 pasos */}
        <div className={styles.timeline}>
          {/* Línea conectora */}
          <div className={styles.timelineConnector}></div>

          {/* Steps */}
          {t.steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.timelineStep} ${
                isVisible ? styles.visible : ''
              } ${activeStep === index ? styles.active : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Número del paso con círculo */}
              <div className={styles.stepNumber}>
                <div className={styles.numberCircle}>
                  <span className={styles.number}>{step.number}</span>
                  <div className={styles.pulseRing}></div>
                </div>
                <span className={styles.stepIcon}>{step.icon}</span>
              </div>

              {/* Contenido del paso */}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                
                {/* Duration badge */}
                <div className={styles.durationBadge}>
                  <span className={styles.durationIcon}>⏱️</span>
                  <span className={styles.durationText}>{step.duration}</span>
                </div>

                {/* Deliverable badge */}
                <div className={styles.deliverableBadge}>
                  <span className={styles.deliverableLabel}>
                    {ingles ? "Deliverable:" : "Entregable:"}
                  </span>
                  <span className={styles.deliverableText}>{step.deliverable}</span>
                </div>
              </div>

              {/* Conector al siguiente paso */}
              {index < t.steps.length - 1 && (
                <div className={styles.stepConnector}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion6;
