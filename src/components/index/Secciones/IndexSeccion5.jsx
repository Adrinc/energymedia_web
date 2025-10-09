import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/indexSeccion5.module.css';

const IndexSeccion5 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      badge: "ELIGE TU PLAN",
      title: "Elige tu Plan de Crecimiento",
      subtitle: "Soluciones escalables desde $8,000 MXN/mes. Planes personalizables según tus objetivos.",
      priceNote: "Inversión mensual con facturación flexible",
      plans: [
        {
          name: "STARTER",
          subtitle: "Primeros Pasos Digitales",
          price: "$8,000 - $15,000 MXN/mes",
          target: "Para: Pequeñas empresas iniciando en digital o con presupuesto limitado",
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
          target: "Para: Empresas en crecimiento que buscan maximizar ROI y escalar con estrategia",
          popular: true,
          popularBadge: " MÁS POPULAR",
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
          target: "Para: Empresas establecidas con presupuesto 6 figuras que buscan dominar su industria",
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
      ],
      footerText: "* Planes personalizables. Agenda consultoría gratuita para cotización exacta."
    },
    en: {
      badge: "CHOOSE YOUR PLAN",
      title: "Choose Your Growth Plan",
      subtitle: "Scalable solutions from $400 USD/month. Customizable plans according to your goals.",
      priceNote: "Monthly investment with flexible billing",
      plans: [
        {
          name: "STARTER",
          subtitle: "Digital First Steps",
          price: "$400 - $750 USD/month",
          target: "For: Small businesses starting digitally or with limited budget",
          features: [
            "Professional responsive website (up to 5 pages)",
            "Basic SEO + Google My Business optimization",
            "Management of 2 social networks (organic content)",
            "Analytics and tracking setup",
            "Monthly report with key metrics",
            "Email support (<24hrs)"
          ],
          cta: "Request custom proposal"
        },
        {
          name: "GROWTH",
          subtitle: "Data-Driven Scaling",
          price: "$800 - $1,500 USD/month",
          target: "For: Growing businesses seeking to maximize ROI and scale strategically",
          popular: true,
          popularBadge: " MOST POPULAR",
          features: [
            "Everything in STARTER +",
            "Multi-channel paid campaigns (Meta, Google, LinkedIn)",
            "Automated email marketing (up to 10K contacts)",
            "Monthly video production (2-3 pieces for social ads)",
            "Creative and copy A/B testing",
            "Conversion-optimized landing pages",
            "Bi-weekly report + strategy call",
            "Priority support (<2hrs)"
          ],
          cta: "Request custom proposal"
        },
        {
          name: "PREMIUM",
          subtitle: "Total Digital Leadership",
          price: "$1,550 - $2,500+ USD/month",
          target: "For: Established companies with 6-figure budgets seeking industry dominance",
          features: [
            "Everything in GROWTH +",
            "Advanced web/app development (portals, CRM, e-commerce)",
            "AI implementation (chatbots, automation, predictive analysis)",
            "Unlimited video production + dedicated creative team",
            "Monthly strategic consulting (quarterly roadmap)",
            "Campaigns across all available channels",
            "Weekly report + continuous optimization",
            "Dedicated Account Manager + 24/7 support"
          ],
          cta: "Request custom proposal"
        }
      ],
      footerText: "* Customizable plans. Schedule free consultation for exact quote."
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
          <p className={styles.priceNote}>{t.priceNote}</p>
        </div>

        <div className={styles.plansGrid}>
          {t.plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popularBadge && (
                <div className={styles.popularBadge}>{plan.popularBadge}</div>
              )}

              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.planSubtitle}>{plan.subtitle}</div>
              <div className={styles.planPrice}>{plan.price}</div>
              <p className={styles.planTarget} dangerouslySetInnerHTML={{ __html: plan.target }} />

              <ul className={styles.featuresList}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={styles.feature}>
                    <span className={styles.checkIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={styles.ctaButton}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className={styles.footerNote}>
          <p><strong>{t.footerText}</strong></p>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion5;
