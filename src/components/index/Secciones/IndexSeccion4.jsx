import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/indexSeccion4.module.css';

const IndexSeccion4 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      badge: "SERVICIOS INTEGRALES",
      title: "Servicios para Tu Crecimiento Digital",
      subtitle: "De la estrategia a la ejecución. Todo en un solo lugar.",
      items: [
        {
          icon: "🎯",
          title: "SEO & SEM Profesional",
          tagline: "Domina Google. Más tráfico, más ventas.",
          bullets: [
            "Posicionamiento orgánico sostenible",
            "Google Ads optimizados con datos",
            "Analítica avanzada para decisiones"
          ],
          metric: "+200% tráfico orgánico (promedio 6 meses)"
        },
        {
          icon: "📱",
          title: "Redes Sociales & Paid Ads",
          tagline: "Convierte scrollers en clientes.",
          bullets: [
            "Meta Ads + TikTok Ads + LinkedIn Ads",
            "Gestión de comunidad",
            "A/B testing creativo"
          ],
          metric: "+300% engagement optimizado"
        },
        {
          icon: "🎨",
          title: "Branding & Diseño Gráfico",
          tagline: "Marca memorable que destaca.",
          bullets: [
            "Logos + Identidad corporativa",
            "Manual de marca + Sistema visual",
            "Diseño publicitario"
          ],
          metric: "Marca completa en 2-3 semanas"
        },
        {
          icon: "💻",
          title: "Desarrollo Web & Apps Móviles",
          tagline: "Portales web, CRM, apps móviles a medida.",
          bullets: [
            "Sitios web responsive + E-commerce",
            "Apps iOS/Android",
            "Portales empresariales + CRM personalizado"
          ],
          metric: "Lanzamiento en 4-6 semanas",
          highlighted: true,
          badge: "⚡ DESTACADO"
        },
        {
          icon: "📧",
          title: "Email Marketing & Automatización",
          tagline: "Nurturing que vende en piloto automático.",
          bullets: [
            "Campañas segmentadas",
            "Automatización avanzada",
            "A/B testing + Optimización"
          ],
          metric: "400-600% ROI en email"
        },
        {
          icon: "🤖",
          title: "Marketing con IA & Automatización",
          tagline: "Inteligencia artificial al servicio de tu negocio.",
          bullets: [
            "Chatbots inteligentes",
            "Automatización de procesos",
            "Análisis predictivo + Personalización"
          ],
          metric: "70% tiempo ahorrado",
          highlighted: true,
          badge: "⚡ DESTACADO"
        }
      ]
    },
    en: {
      badge: "COMPREHENSIVE SERVICES",
      title: "Services for Your Digital Growth",
      subtitle: "From strategy to execution. Everything in one place.",
      items: [
        {
          icon: "🎯",
          title: "Professional SEO & SEM",
          tagline: "Dominate Google. More traffic, more sales.",
          bullets: [
            "Sustainable organic positioning",
            "Data-optimized Google Ads",
            "Advanced analytics for decisions"
          ],
          metric: "+200% organic traffic (6mo avg)"
        },
        {
          icon: "📱",
          title: "Social Media & Paid Ads",
          tagline: "Turn scrollers into customers.",
          bullets: [
            "Meta Ads + TikTok Ads + LinkedIn Ads",
            "Community management",
            "Creative A/B testing"
          ],
          metric: "+300% optimized engagement"
        },
        {
          icon: "🎨",
          title: "Branding & Graphic Design",
          tagline: "Memorable brand that stands out.",
          bullets: [
            "Logos + Corporate identity",
            "Brand manual + Visual system",
            "Advertising design"
          ],
          metric: "Complete brand in 2-3 weeks"
        },
        {
          icon: "💻",
          title: "Web Development & Mobile Apps",
          tagline: "Web portals, CRM, custom mobile apps.",
          bullets: [
            "Responsive websites + E-commerce",
            "iOS/Android apps",
            "Business portals + Custom CRM"
          ],
          metric: "Launch in 4-6 weeks",
          highlighted: true,
          badge: "⚡ FEATURED"
        },
        {
          icon: "📧",
          title: "Email Marketing & Automation",
          tagline: "Nurturing that sells on autopilot.",
          bullets: [
            "Segmented campaigns",
            "Advanced automation",
            "A/B testing + Optimization"
          ],
          metric: "400-600% email ROI"
        },
        {
          icon: "🤖",
          title: "AI Marketing & Automation",
          tagline: "Artificial intelligence at your service.",
          bullets: [
            "Intelligent chatbots",
            "Process automation",
            "Predictive analysis + Personalization"
          ],
          metric: "70% time saved",
          highlighted: true,
          badge: "⚡ FEATURED"
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

        <div className={styles.servicesGrid}>
          {t.items.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard} ${service.highlighted ? styles.highlighted : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {service.badge && (
                <div className={styles.highlightBadge}>{service.badge}</div>
              )}

              <div className={styles.iconContainer}>
                <span className={styles.icon}>{service.icon}</span>
              </div>

              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.tagline}>{service.tagline}</p>

              <ul className={styles.bulletList}>
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className={styles.bullet}>
                    <span className={styles.bulletIcon}></span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className={styles.metric}>
                {service.metric}
              </div>

              <div className={styles.link}>
                {ingles ? "Explore service" : "Explorar servicio"}
                <span className={styles.arrow}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion4;
