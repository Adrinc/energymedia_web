import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion4.module.css';

/**
 * IndexSeccion4 - Servicios Integrales
 * 6 servicios con énfasis en IA + Desarrollo Web/Apps
 * Sistema "Cine-Data Multicultural" - Energy Media
 */
const IndexSeccion4 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      title: "Servicios Integrales para Tu Crecimiento Digital",
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
          metric: "+200% tráfico orgánico en 6 meses (promedio)",
          link: "/servicios/seo-sem"
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
          metric: "+300% engagement con estrategia optimizada",
          link: "/servicios/social-ads"
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
          metric: "Marca completa en 2-3 semanas",
          link: "/servicios/branding"
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
          metric: "Lanzamiento profesional en 4-6 semanas",
          link: "/servicios/desarrollo-web",
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
          metric: "400-600% ROI en campañas de email",
          link: "/servicios/email-marketing"
        },
        {
          icon: "🤖",
          title: "Marketing con IA & Automatización",
          tagline: "Inteligencia artificial al servicio de tu negocio.",
          bullets: [
            "Chatbots inteligentes",
            "Automatización de procesos",
            "Análisis predictivo + Personalización a escala"
          ],
          metric: "Hasta 70% de tiempo ahorrado con automatización",
          link: "/servicios/ia-marketing",
          highlighted: true,
          badge: "⚡ DESTACADO"
        }
      ]
    },
    en: {
      title: "Comprehensive Services for Your Digital Growth",
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
          metric: "+200% organic traffic in 6 months (average)",
          link: "/en/services/seo-sem"
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
          metric: "+300% engagement with optimized strategy",
          link: "/en/services/social-ads"
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
          metric: "Complete brand in 2-3 weeks",
          link: "/en/services/branding"
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
          metric: "Professional launch in 4-6 weeks",
          link: "/en/services/web-development",
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
          metric: "400-600% ROI on email campaigns",
          link: "/en/services/email-marketing"
        },
        {
          icon: "🤖",
          title: "AI Marketing & Automation",
          tagline: "Artificial intelligence at your business service.",
          bullets: [
            "Intelligent chatbots",
            "Process automation",
            "Predictive analysis + Personalization at scale"
          ],
          metric: "Up to 70% time saved with automation",
          link: "/en/services/ai-marketing",
          highlighted: true,
          badge: "⚡ FEATURED"
        }
      ]
    }
  };
  
  const t = ingles ? content.en : content.es;
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer para animar al scroll
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
    <CinematicSection variant="light" withAnimation={true}>
      <div ref={sectionRef} className={styles.servicesContainer}>
        {/* Título de sección */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        {/* Grid de 6 servicios */}
        <div className={styles.servicesGrid}>
          {t.items.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className={`${styles.serviceCard} ${isVisible ? styles.visible : ''} ${service.highlighted ? styles.highlighted : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge destacado */}
              {service.badge && (
                <div className={styles.badge}>{service.badge}</div>
              )}

              {/* Ícono */}
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>

              {/* Contenido */}
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.tagline}>{service.tagline}</p>

                {/* Bullets */}
                <ul className={styles.bulletList}>
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className={styles.bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Métrica */}
                {service.metric && (
                  <div className={styles.metricBadge}>
                    {service.metric}
                  </div>
                )}
              </div>

              {/* CTA visual */}
              <div className={styles.cardFooter}>
                <span className={styles.ctaText}>
                  {ingles ? "Explore service" : "Explorar servicio"} →
                </span>
              </div>

              {/* Efecto de brillo en hover */}
              <div className={styles.cardShine}></div>
            </a>
          ))}
        </div>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion4;
