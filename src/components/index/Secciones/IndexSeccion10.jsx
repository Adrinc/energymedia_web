import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import { motion } from 'framer-motion';
import styles from '../css/indexSeccion10.module.css';

/**
 * IndexSeccion10 - PLANES / PRICING
 * 3 niveles de servicio: Start / Grow / Scale
 * Sistema "Cine-Data Multicultural" - Energy Media
 */

const PRICING_PLANS = {
  es: [
    {
      id: 'start',
      name: 'START',
      tagline: 'Para marcas que inician',
      description: 'Ideal para empresas que comienzan su viaje en marketing digital multicultural',
      priceNote: 'Desde $3,500/mes',
      recommended: false,
      features: [
        '2-3 piezas de video ads piloto',
        'Setup de tracking y analytics básico',
        'Campaña en 1 canal (Meta o Google)',
        'Segmentación cultural inicial',
        'Report mensual con KPIs clave',
        '1 ronda de optimización',
        'Soporte por email'
      ],
      cta: 'Solicitar propuesta',
      icon: '🚀'
    },
    {
      id: 'grow',
      name: 'GROW',
      tagline: 'Para marcas escalando',
      description: 'El plan más popular para empresas que buscan crecimiento medible y sostenible',
      priceNote: 'Desde $8,500/mes',
      recommended: true,
      features: [
        '6-8 piezas de video mensuales',
        'Campaña multi-canal (Meta, Google, TikTok)',
        'A/B testing creativo continuo',
        'OYE Insights y listening cultural',
        'Landing pages optimizadas',
        'Report quincenal + consultoría',
        'Optimización semanal',
        'Soporte prioritario'
      ],
      cta: 'Comenzar ahora',
      icon: '📈'
    },
    {
      id: 'scale',
      name: 'SCALE',
      tagline: 'Para marcas enterprise',
      description: 'Solución completa para empresas con presupuesto 6 figuras y objetivos ambiciosos',
      priceNote: 'Personalizado',
      recommended: false,
      features: [
        'Producción ilimitada + equipo dedicado',
        'Campañas en todos los canales disponibles',
        'OYE + consultoría estratégica continua',
        'Desarrollo web/app integrado',
        'Influencer marketing coordinado',
        'Report semanal + optimización diaria',
        'Account Manager dedicado',
        'Soporte 24/7'
      ],
      cta: 'Agendar consultoría',
      icon: '🏆'
    }
  ],
  en: [
    {
      id: 'start',
      name: 'START',
      tagline: 'For brands getting started',
      description: 'Ideal for companies beginning their multicultural digital marketing journey',
      priceNote: 'From $3,500/mo',
      recommended: false,
      features: [
        '2-3 pilot video ads',
        'Basic tracking and analytics setup',
        'Campaign on 1 channel (Meta or Google)',
        'Initial cultural segmentation',
        'Monthly report with key KPIs',
        '1 round of optimization',
        'Email support'
      ],
      cta: 'Request proposal',
      icon: '🚀'
    },
    {
      id: 'grow',
      name: 'GROW',
      tagline: 'For scaling brands',
      description: 'The most popular plan for companies seeking measurable and sustainable growth',
      priceNote: 'From $8,500/mo',
      recommended: true,
      features: [
        '6-8 video pieces per month',
        'Multi-channel campaign (Meta, Google, TikTok)',
        'Continuous creative A/B testing',
        'OYE Insights and cultural listening',
        'Optimized landing pages',
        'Bi-weekly report + consulting',
        'Weekly optimization',
        'Priority support'
      ],
      cta: 'Get started',
      icon: '📈'
    },
    {
      id: 'scale',
      name: 'SCALE',
      tagline: 'For enterprise brands',
      description: 'Complete solution for companies with 6-figure budgets and ambitious goals',
      priceNote: 'Custom',
      recommended: false,
      features: [
        'Unlimited production + dedicated team',
        'Campaigns across all available channels',
        'OYE + continuous strategic consulting',
        'Integrated web/app development',
        'Coordinated influencer marketing',
        'Weekly report + daily optimization',
        'Dedicated Account Manager',
        '24/7 support'
      ],
      cta: 'Schedule consultation',
      icon: '🏆'
    }
  ]
};

const IndexSeccion10 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const plans = ingles ? PRICING_PLANS.en : PRICING_PLANS.es;

  return (
    <section className={styles.pricingSection}>
      <div className={styles.pricingContainer}>
        {/* Título */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>
            {ingles ? "Choose your growth plan" : "Elige tu plan de crecimiento"}
          </h2>
          <p className={styles.sectionSubtitle}>
            {ingles 
              ? "Flexible plans designed to grow with your business. All plans are customizable based on your goals."
              : "Planes flexibles diseñados para crecer con tu negocio. Todos los planes son personalizables según tus objetivos."
            }
          </p>
        </motion.div>

        {/* Grid de Planes */}
        <div className={styles.plansGrid}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`${styles.planCard} ${plan.recommended ? styles.planRecommended : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Badge de recomendado */}
              {plan.recommended && (
                <div className={styles.recommendedBadge}>
                  {ingles ? "MOST POPULAR" : "MÁS POPULAR"}
                </div>
              )}

              {/* Header del plan */}
              <div className={styles.planHeader}>
                <div className={styles.planIcon}>{plan.icon}</div>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTagline}>{plan.tagline}</p>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              {/* Precio */}
              <div className={styles.planPrice}>
                <span className={styles.priceNote}>{plan.priceNote}</span>
                {plan.id !== 'scale' && (
                  <span className={styles.priceDisclaimer}>
                    {ingles ? "*Minimum 3-month commitment" : "*Compromiso mínimo 3 meses"}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className={styles.featuresList}>
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.05) }}
                  >
                    <span className={styles.checkIcon}>✓</span>
                    <span className={styles.featureText}>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <a 
                href="/contacto" 
                className={`${styles.planCta} ${plan.recommended ? styles.ctaRecommended : ''}`}
              >
                {plan.cta}
              </a>

              {/* Nota personalizable */}
              <p className={styles.customNote}>
                {ingles 
                  ? "All plans are customizable"
                  : "Planes personalizables según objetivos"
                }
              </p>
            </motion.div>
          ))}
        </div>

        {/* Información adicional */}
        <motion.div
          className={styles.infoBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>💬</div>
            <h4 className={styles.infoTitle}>
              {ingles ? "Not sure which plan?" : "¿No estás seguro qué plan elegir?"}
            </h4>
            <p className={styles.infoText}>
              {ingles 
                ? "Schedule a free 30-minute consultation and we'll help you find the perfect solution for your business."
                : "Agenda una consultoría gratuita de 30 minutos y te ayudaremos a encontrar la solución perfecta para tu negocio."
              }
            </p>
            <a href="/contacto" className={styles.infoButton}>
              {ingles ? "Schedule free consultation" : "Agendar consultoría gratuita"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndexSeccion10;
