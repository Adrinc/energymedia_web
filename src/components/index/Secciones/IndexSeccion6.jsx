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
          icon: "🔍",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
          color: "#667eea"
        },
        {
          number: 2,
          title: "Estrategia & Roadmap",
          duration: "Semana 2",
          description: "Creamos plan de crecimiento 90 días con KPIs medibles",
          deliverable: "Roadmap detallado + propuesta de inversión",
          icon: "🗺️",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
          color: "#f093fb"
        },
        {
          number: 3,
          title: "Implementación & Setup",
          duration: "Semanas 3-4",
          description: "Configuramos herramientas, tracking, martech stack, producción inicial",
          deliverable: "Infraestructura digital + primeras campañas live",
          icon: "⚙️",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          color: "#4facfe"
        },
        {
          number: 4,
          title: "Optimización Continua",
          duration: "Mes 2+",
          description: "A/B testing, iteración creativa, mejora de CTR/CVR",
          deliverable: "Reports quincenales + ajustes basados en data",
          icon: "📈",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          color: "#fa709a"
        },
        {
          number: 5,
          title: "Reporting & Transparencia",
          duration: "Ongoing",
          description: "Dashboards en tiempo real + calls de revisión estratégica",
          deliverable: "Reports personalizados + acceso analytics 24/7",
          icon: "📊",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          color: "#30cfd0"
        },
        {
          number: 6,
          title: "Escalamiento & Crecimiento",
          duration: "Mes 3+",
          description: "Expansión a nuevos canales, audiencias, formatos basados en resultados",
          deliverable: "Plan de escalamiento + inversión incremental",
          icon: "🚀",
          image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
          color: "#a8edea"
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
          icon: "🔍",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
          color: "#667eea"
        },
        {
          number: 2,
          title: "Strategy & Roadmap",
          duration: "Week 2",
          description: "We create 90-day growth plan with measurable KPIs",
          deliverable: "Detailed roadmap + investment proposal",
          icon: "🗺️",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
          color: "#f093fb"
        },
        {
          number: 3,
          title: "Implementation & Setup",
          duration: "Weeks 3-4",
          description: "We configure tools, tracking, martech stack, initial production",
          deliverable: "Digital infrastructure + first campaigns live",
          icon: "⚙️",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          color: "#4facfe"
        },
        {
          number: 4,
          title: "Continuous Optimization",
          duration: "Month 2+",
          description: "A/B testing, creative iteration, CTR/CVR improvement",
          deliverable: "Biweekly reports + data-driven adjustments",
          icon: "📈",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          color: "#fa709a"
        },
        {
          number: 5,
          title: "Reporting & Transparency",
          duration: "Ongoing",
          description: "Real-time dashboards + strategic review calls",
          deliverable: "Custom reports + 24/7 analytics access",
          icon: "📊",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          color: "#30cfd0"
        },
        {
          number: 6,
          title: "Scaling & Growth",
          duration: "Month 3+",
          description: "Expansion to new channels, audiences, formats based on results",
          deliverable: "Scaling plan + recommended investment",
          icon: "🚀",
          image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
          color: "#a8edea"
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
    <section ref={sectionRef} className={styles.processSection}>
      {/* Background Shapes */}
      <div className={styles.bgShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <span className={styles.badge}>{t.badge}</span>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        {/* Steps Container with Alternating Layout */}
        <div className={styles.stepsContainer}>
          {t.steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.stepRow} ${index % 2 !== 0 ? styles.reverse : ''} ${
                isVisible ? styles.fadeInUp : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                '--step-color': step.color
              }}
            >
              {/* Image Container */}
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className={styles.stepImage}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay}></div>
                  <div className={styles.glowEffect}></div>
                </div>
                
                {/* Number Badge */}
                <div className={styles.numberBadge}>
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>

                {/* Icon Badge */}
                <div className={styles.iconBadge}>
                  <span className={styles.badgeIcon}>{step.icon}</span>
                </div>
              </div>

              {/* Content Container */}
              <div className={styles.contentContainer}>
                <div className={styles.contentWrapper}>
                  <span className={styles.durationBadge}>{step.duration}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  
                  <div className={styles.deliverableBox}>
                    <div className={styles.deliverableIcon}>✓</div>
                    <div className={styles.deliverableContent}>
                      <strong>Entregable:</strong> {step.deliverable}
                    </div>
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
