import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/indexSeccion6.module.css';

const IndexSeccion6 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      badge: "NUESTRO PROCESO",
      title: "Cómo Transformamos tu Negocio",
      subtitle: "Proceso probado en +200 clientes. Sin sorpresas, solo resultados.",
      steps: [
        {
          number: 1,
          title: "Descubrimiento & Auditoría",
          duration: "Semana 1",
          description: "Analizamos tu negocio, competencia, audiencia, situación digital actual",
          deliverable: "Diagnóstico completo con oportunidades identificadas",
          icon: "🔍"
        },
        {
          number: 2,
          title: "Estrategia & Roadmap",
          duration: "Semana 2",
          description: "Creamos plan de crecimiento 90 días con KPIs medibles",
          deliverable: "Roadmap detallado + propuesta de inversión",
          icon: "🗺️"
        },
        {
          number: 3,
          title: "Implementación & Setup",
          duration: "Semanas 3-4",
          description: "Configuramos herramientas, tracking, martech stack, producción inicial",
          deliverable: "Infraestructura digital + primeras campañas live",
          icon: "⚙️"
        },
        {
          number: 4,
          title: "Optimización Continua",
          duration: "Mes 2+",
          description: "A/B testing, iteración creativa, mejora de CTR/CVR",
          deliverable: "Reports quincenales + ajustes basados en data",
          icon: "📈"
        },
        {
          number: 5,
          title: "Reporting & Transparencia",
          duration: "Ongoing",
          description: "Dashboards en tiempo real + calls de revisión estratégica",
          deliverable: "Reports personalizados + acceso analytics 24/7",
          icon: "📊"
        },
        {
          number: 6,
          title: "Escalamiento & Crecimiento",
          duration: "Mes 3+",
          description: "Expansión a nuevos canales, audiencias, formatos basados en resultados",
          deliverable: "Plan de escalamiento + inversión incremental",
          icon: "🚀"
        }
      ]
    },
    en: {
      badge: "OUR PROCESS",
      title: "How We Transform Your Business",
      subtitle: "Process proven with +200 clients. No surprises, only results.",
      steps: [
        {
          number: 1,
          title: "Discovery & Audit",
          duration: "Week 1",
          description: "We analyze your business, competition, audience, current digital situation",
          deliverable: "Complete diagnosis with identified opportunities",
          icon: "🔍"
        },
        {
          number: 2,
          title: "Strategy & Roadmap",
          duration: "Week 2",
          description: "We create 90-day growth plan with measurable KPIs",
          deliverable: "Detailed roadmap + investment proposal",
          icon: "🗺️"
        },
        {
          number: 3,
          title: "Implementation & Setup",
          duration: "Weeks 3-4",
          description: "We configure tools, tracking, martech stack, initial production",
          deliverable: "Digital infrastructure + first campaigns live",
          icon: "⚙️"
        },
        {
          number: 4,
          title: "Continuous Optimization",
          duration: "Month 2+",
          description: "A/B testing, creative iteration, CTR/CVR improvement",
          deliverable: "Biweekly reports + data-driven adjustments",
          icon: "📈"
        },
        {
          number: 5,
          title: "Reporting & Transparency",
          duration: "Ongoing",
          description: "Real-time dashboards + strategic review calls",
          deliverable: "Custom reports + 24/7 analytics access",
          icon: "📊"
        },
        {
          number: 6,
          title: "Scaling & Growth",
          duration: "Month 3+",
          description: "Expansion to new channels, audiences, formats based on results",
          deliverable: "Scaling plan + recommended investment",
          icon: "🚀"
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

        <div className={styles.timeline}>
          {t.steps.map((step, index) => (
            <div
              key={index}
              className={styles.stepWrapper}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.numberNode}>{step.number}</div>
              
              <div className={styles.stepCard}>
                <span className={styles.stepIcon}>{step.icon}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <span className={styles.durationBadge}>{step.duration}</span>
                <p className={styles.stepDescription}>{step.description}</p>
                <div className={styles.deliverables}>
                  <div className={styles.deliverable}>
                    <span className={styles.checkIcon}>✓</span>
                    {step.deliverable}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion6;
