import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion3B.module.css';

/**
 * IndexSeccion3B - LOS 5 PILARES DE ENERGY MEDIA
 * Sección expandible con detalle de cada pilar de servicio
 * Sistema "Digital Performance" - Energy Media
 */

const PILLARS_DATA = {
  es: {
    sectionTitle: "Nuestros 5 Pilares de Servicio",
    sectionSubtitle: "Stack tecnológico completo para impulsar tu crecimiento digital",
    pillars: [
      {
        id: 1,
        icon: "🚀",
        title: "Marketing Digital Integral",
        tagline: "SEO, SEM, Redes Sociales, Email Marketing",
        shortDesc: "Estrategias integradas en todos los canales digitales para maximizar tu alcance y conversiones.",
        bullets: [
          "SEO técnico y de contenido para posicionamiento orgánico",
          "SEM (Google Ads, Bing Ads) con optimización continua",
          "Social Ads (Meta, LinkedIn, TikTok, Twitter)",
          "Email marketing automation con segmentación avanzada",
          "Influencer marketing y partnerships estratégicos",
          "CRO (Conversion Rate Optimization) y A/B testing"
        ],
        metrics: "+42% ROAS promedio en nuestros clientes",
        cta: "Ver casos de marketing →"
      },
      {
        id: 2,
        icon: "🎨",
        title: "Branding & Identidad Corporativa Completa",
        tagline: "De naming a manual de marca completo",
        shortDesc: "Construimos identidades visuales y verbales que conectan con tu audiencia y escalan con tu negocio.",
        bullets: [
          "Naming y estrategia de marca",
          "Diseño de logotipos e identidad visual",
          "Manuales de marca (brand guidelines completos)",
          "Diseño gráfico para print y digital",
          "Fotografía y producción de imagen corporativa",
          "Estrategia de comunicación y tono de voz"
        ],
        metrics: "20+ marcas creadas desde cero en 2024",
        cta: "Ver portfolio de branding →"
      },
      {
        id: 3,
        icon: "💻",
        title: "Desarrollo Web & E-commerce Profesional",
        tagline: "Portales, CRM, apps móviles y tiendas online",
        shortDesc: "Desarrollo de plataformas digitales escalables con enfoque en UX, performance y conversión.",
        bullets: [
          "Sitios web corporativos y portales empresariales",
          "E-commerce (Shopify, WooCommerce, custom)",
          "Desarrollo de apps móviles (iOS y Android)",
          "Integraciones con CRM y sistemas empresariales",
          "Landing pages de alta conversión",
          "Mantenimiento y optimización continua"
        ],
        metrics: "$2.8M+ revenue generado en e-commerce en 2024",
        cta: "Ver proyectos web →"
      },
      {
        id: 4,
        icon: "⚡",
        title: "Servicios Especializados",
        tagline: "IA, Video Marketing, CRO y Analítica Avanzada",
        shortDesc: "Soluciones de punta para marcas que buscan diferenciación y resultados medibles.",
        bullets: [
          "Video marketing profesional (social ads, reels, YouTube, corporativo)",
          "Inteligencia Artificial aplicada (chatbots, automatización, análisis predictivo)",
          "CRO y optimización de embudos de conversión",
          "Analítica avanzada (GA4, Looker Studio, dashboards custom)",
          "Programmatic advertising y RTB",
          "Marketing automation enterprise"
        ],
        metrics: "+3.1x conversiones con video vs. static ads",
        cta: "Explorar servicios especializados →"
      },
      {
        id: 5,
        icon: "🎯",
        title: "Consultoría Estratégica Personalizada",
        tagline: "Auditorías, roadmaps y acompañamiento continuo",
        shortDesc: "Te ayudamos a trazar la ruta de crecimiento digital con estrategias basadas en datos y mejores prácticas.",
        bullets: [
          "Auditorías digitales completas (marketing, web, SEO, UX)",
          "Roadmaps de crecimiento a 90/180 días",
          "Definición de KPIs y objetivos medibles",
          "Capacitación de equipos internos",
          "Acompañamiento estratégico mensual",
          "Optimización continua basada en datos"
        ],
        metrics: "87% de clientes renuevan consultoría anual",
        cta: "Solicitar consultoría →"
      }
    ]
  },
  en: {
    sectionTitle: "Our 5 Service Pillars",
    sectionSubtitle: "Complete tech stack to drive your digital growth",
    pillars: [
      {
        id: 1,
        icon: "🚀",
        title: "Integrated Digital Marketing",
        tagline: "SEO, SEM, Social Media, Email Marketing",
        shortDesc: "Integrated strategies across all digital channels to maximize your reach and conversions.",
        bullets: [
          "Technical and content SEO for organic positioning",
          "SEM (Google Ads, Bing Ads) with continuous optimization",
          "Social Ads (Meta, LinkedIn, TikTok, Twitter)",
          "Email marketing automation with advanced segmentation",
          "Influencer marketing and strategic partnerships",
          "CRO (Conversion Rate Optimization) and A/B testing"
        ],
        metrics: "+42% average ROAS across our clients",
        cta: "View marketing cases →"
      },
      {
        id: 2,
        icon: "🎨",
        title: "Complete Branding & Corporate Identity",
        tagline: "From naming to complete brand manual",
        shortDesc: "We build visual and verbal identities that connect with your audience and scale with your business.",
        bullets: [
          "Naming and brand strategy",
          "Logo and visual identity design",
          "Complete brand manuals (brand guidelines)",
          "Graphic design for print and digital",
          "Photography and corporate image production",
          "Communication strategy and tone of voice"
        ],
        metrics: "20+ brands built from scratch in 2024",
        cta: "View branding portfolio →"
      },
      {
        id: 3,
        icon: "💻",
        title: "Professional Web Development & E-commerce",
        tagline: "Portals, CRM, mobile apps and online stores",
        shortDesc: "Development of scalable digital platforms focused on UX, performance and conversion.",
        bullets: [
          "Corporate websites and enterprise portals",
          "E-commerce (Shopify, WooCommerce, custom)",
          "Mobile app development (iOS and Android)",
          "CRM and enterprise system integrations",
          "High-conversion landing pages",
          "Continuous maintenance and optimization"
        ],
        metrics: "$2.8M+ revenue generated in e-commerce in 2024",
        cta: "View web projects →"
      },
      {
        id: 4,
        icon: "⚡",
        title: "Specialized Services",
        tagline: "AI, Video Marketing, CRO and Advanced Analytics",
        shortDesc: "Cutting-edge solutions for brands seeking differentiation and measurable results.",
        bullets: [
          "Professional video marketing (social ads, reels, YouTube, corporate)",
          "Applied Artificial Intelligence (chatbots, automation, predictive analysis)",
          "CRO and conversion funnel optimization",
          "Advanced analytics (GA4, Looker Studio, custom dashboards)",
          "Programmatic advertising and RTB",
          "Enterprise marketing automation"
        ],
        metrics: "+3.1x conversions with video vs. static ads",
        cta: "Explore specialized services →"
      },
      {
        id: 5,
        icon: "🎯",
        title: "Personalized Strategic Consulting",
        tagline: "Audits, roadmaps and continuous support",
        shortDesc: "We help you chart your digital growth path with data-driven strategies and best practices.",
        bullets: [
          "Complete digital audits (marketing, web, SEO, UX)",
          "90/180-day growth roadmaps",
          "KPI definition and measurable objectives",
          "Internal team training",
          "Monthly strategic support",
          "Continuous data-driven optimization"
        ],
        metrics: "87% of clients renew annual consulting",
        cta: "Request consultation →"
      }
    ]
  }
};

const IndexSeccion3B = () => {
  const ingles = useStore(isEnglish);
  const data = ingles ? PILLARS_DATA.en : PILLARS_DATA.es;
  
  const [expandedPillar, setExpandedPillar] = useState(null);

  const togglePillar = (id) => {
    setExpandedPillar(expandedPillar === id ? null : id);
  };

  return (
    <CinematicSection variant="light" withAnimation={true}>
      <div className={styles.pillarsContainer}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{data.sectionTitle}</h2>
          <p className={styles.sectionSubtitle}>{data.sectionSubtitle}</p>
        </div>

        {/* Pillars Grid */}
        <div className={styles.pillarsGrid}>
          {data.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`${styles.pillarCard} ${expandedPillar === pillar.id ? styles.expanded : ''}`}
              onClick={() => togglePillar(pillar.id)}
            >
              {/* Compact View (Siempre visible) */}
              <div className={styles.pillarHeader}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <div className={styles.pillarHeaderContent}>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarTagline}>{pillar.tagline}</p>
                  <p className={styles.pillarShortDesc}>{pillar.shortDesc}</p>
                </div>
                <div className={styles.expandIcon}>
                  {expandedPillar === pillar.id ? '−' : '+'}
                </div>
              </div>

              {/* Expanded View (Condicional) */}
              {expandedPillar === pillar.id && (
                <div className={styles.pillarDetails}>
                  <div className={styles.bulletList}>
                    {pillar.bullets.map((bullet, idx) => (
                      <div key={idx} className={styles.bulletItem}>
                        <span className={styles.bulletIcon}>✓</span>
                        <span className={styles.bulletText}>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.pillarFooter}>
                    <div className={styles.metricBadge}>
                      📊 {pillar.metrics}
                    </div>
                    <a href="/servicios" className={styles.pillarCta}>
                      {pillar.cta}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>
            {ingles 
              ? "Need a custom combination? We integrate multiple services for maximum impact." 
              : "¿Necesitas una combinación personalizada? Integramos múltiples servicios para máximo impacto."
            }
          </p>
          <a href="/contacto" className={styles.btnSchedule}>
            {ingles ? "Schedule free consultation" : "Agenda consultoría gratuita"}
          </a>
        </div>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion3B;
