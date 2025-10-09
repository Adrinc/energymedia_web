import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion5.module.css';

/**
 * IndexSeccion5 - Paquetes & Soluciones
 * 3 planes: STARTER / GROWTH / PREMIUM
 * Sistema "Cine-Data Multicultural" - Energy Media
 */
const IndexSeccion5 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      title: "Elige tu Plan de Crecimiento",
      subtitle: "Soluciones escalables desde $8,000 MXN/mes. Planes personalizables según tus objetivos.",
      disclaimer: "* Planes personalizables. Agenda consultoría gratuita para cotización exacta.",
      plans: [
        {
          name: "STARTER",
          subtitle: "Primeros Pasos Digitales",
          price: "$8,000 - $15,000 MXN/mes",
          forWho: "Para pequeñas empresas iniciando en digital o con presupuesto limitado",
          features: [
            "Sitio web profesional responsive (hasta 5 páginas)",
            "SEO básico + Google My Business optimizado",
            "Gestión de 2 redes sociales (contenido orgánico)",
            "Configuración de analytics y tracking",
            "Report mensual con métricas clave",
            "Soporte por email (<24hrs)"
          ],
          cta: "Solicitar propuesta personalizada"
        },
        {
          name: "GROWTH",
          subtitle: "Escalamiento con Data",
          price: "$16,000 - $30,000 MXN/mes",
          badge: "⭐ MÁS POPULAR",
          forWho: "Para empresas en crecimiento que buscan maximizar ROI y escalar con estrategia",
          features: [
            "Todo en STARTER +",
            "Campañas pagadas multicanal (Meta, Google, LinkedIn)",
            "Email marketing automatizado (hasta 10K contactos)",
            "Producción de video mensual (2-3 piezas para social ads)",
            "A/B testing creativo y de copy",
            "Landing pages optimizadas para conversión",
            "Report quincenal + call de estrategia",
            "Soporte prioritario (<2hrs)"
          ],
          cta: "Solicitar propuesta personalizada"
        },
        {
          name: "PREMIUM",
          subtitle: "Liderazgo Digital Total",
          price: "$31,000 - $50,000+ MXN/mes",
          forWho: "Para empresas establecidas con presupuesto 6 figuras que buscan dominar su industria",
          features: [
            "Todo en GROWTH +",
            "Desarrollo web/app avanzado (portales, CRM, e-commerce)",
            "Implementación de IA (chatbots, automatización, análisis predictivo)",
            "Producción de video ilimitada + equipo creativo dedicado",
            "Consultoría estratégica mensual (roadmap trimestral)",
            "Campañas en todos los canales disponibles",
            "Report semanal + optimización continua",
            "Account Manager dedicado + soporte 24/7"
          ],
          cta: "Solicitar propuesta personalizada"
        }
      ]
    },
    en: {
      title: "Choose Your Growth Plan",
      subtitle: "Scalable solutions starting from $400 USD/month. Customizable plans according to your goals.",
      disclaimer: "* Customizable plans. Schedule free consultation for exact quote.",
      plans: [
        {
          name: "STARTER",
          subtitle: "First Digital Steps",
          price: "$400 - $750 USD/month",
          forWho: "For small businesses starting in digital or with limited budget",
          features: [
            "Professional responsive website (up to 5 pages)",
            "Basic SEO + Optimized Google My Business",
            "Management of 2 social networks (organic content)",
            "Analytics and tracking configuration",
            "Monthly report with key metrics",
            "Email support (<24hrs)"
          ],
          cta: "Request custom proposal"
        },
        {
          name: "GROWTH",
          subtitle: "Data-Driven Scaling",
          price: "$800 - $1,500 USD/month",
          badge: "⭐ MOST POPULAR",
          forWho: "For growing companies looking to maximize ROI and scale with strategy",
          features: [
            "Everything in STARTER +",
            "Multi-channel paid campaigns (Meta, Google, LinkedIn)",
            "Automated email marketing (up to 10K contacts)",
            "Monthly video production (2-3 pieces for social ads)",
            "Creative and copy A/B testing",
            "Conversion-optimized landing pages",
            "Biweekly report + strategy call",
            "Priority support (<2hrs)"
          ],
          cta: "Request custom proposal"
        },
        {
          name: "PREMIUM",
          subtitle: "Total Digital Leadership",
          price: "$1,550 - $2,500+ USD/month",
          forWho: "For established companies with 6-figure budget looking to dominate their industry",
          features: [
            "Everything in GROWTH +",
            "Advanced web/app development (portals, CRM, e-commerce)",
            "AI implementation (chatbots, automation, predictive analysis)",
            "Unlimited video production + dedicated creative team",
            "Monthly strategic consulting (quarterly roadmap)",
            "Campaigns on all available channels",
            "Weekly report + continuous optimization",
            "Dedicated Account Manager + 24/7 support"
          ],
          cta: "Request custom proposal"
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
      <div ref={sectionRef} className={styles.packagesContainer}>
        {/* Título de sección */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        {/* Grid de 3 paquetes */}
        <div className={styles.plansGrid}>
          {t.plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.planCard} ${
                isVisible ? styles.visible : ''
              } ${plan.badge ? styles.featured : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Badge destacado */}
              {plan.badge && (
                <div className={styles.popularBadge}>{plan.badge}</div>
              )}

              {/* Header del plan */}
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planSubtitle}>{plan.subtitle}</p>
                <p className={styles.planPrice}>{plan.price}</p>
              </div>

              {/* Para quién es */}
              <p className={styles.forWho}>{plan.forWho}</p>

              {/* Features */}
              <ul className={styles.featuresList}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={styles.feature}>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="/contacto" className={styles.btnPlan}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className={styles.disclaimer}>{t.disclaimer}</p>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion5;
