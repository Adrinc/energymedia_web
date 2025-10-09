// ServiciosSeccion7NEW.jsx
// SERVICIOS ESPECIALIZADOS - Grid 3x2 Colorido con Pricing

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/serviciosSeccion7NEW.module.css';

const ServiciosSeccion7NEW = () => {
  const ingles = useStore(isEnglish);
  
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

  const services = [
    {
      id: 'ai-marketing',
      title: ingles ? 'AI Marketing' : 'Marketing con IA',
      icon: '🤖',
      color: '#3EC8F7',
      bgColor: 'rgba(62, 200, 247, 0.12)',
      features: [
        ingles ? 'Intelligent chatbots' : 'Chatbots inteligentes',
        ingles ? 'Automated personalization' : 'Personalización automatizada',
        ingles ? 'Predictive analysis' : 'Análisis predictivo',
        ingles ? 'Campaign automation' : 'Automatización de campañas'
      ],
      badge: ingles ? 'From $3,200/month' : 'Desde $3,200/mes',
      badgeColor: '#3EC8F7'
    },
    {
      id: 'influencer-marketing',
      title: ingles ? 'Influencer Marketing' : 'Marketing de Influencers',
      icon: '🌟',
      color: '#F56831',
      bgColor: 'rgba(245, 104, 49, 0.12)',
      features: [
        ingles ? 'Relevant influencer identification' : 'Identificación de influencers relevantes',
        ingles ? 'Campaign negotiation and management' : 'Negociación y gestión de campañas',
        ingles ? 'ROI measurement' : 'Medición de ROI',
        ingles ? 'Collaborative content' : 'Contenido colaborativo'
      ],
      badge: ingles ? 'ROI: $5.78 per $1 invested' : 'ROI: $5.78 por $1 invertido',
      badgeColor: '#F56831'
    },
    {
      id: 'digital-consulting',
      title: ingles ? 'Digital Consulting' : 'Consultoría Digital',
      icon: '💼',
      color: '#1A1024',
      bgColor: 'rgba(103, 46, 146, 0.12)',
      features: [
        ingles ? 'Specialized audits' : 'Auditorías especializadas',
        ingles ? 'Digital transformation strategies' : 'Estrategias de transformación digital',
        ingles ? 'Internal team training' : 'Capacitación de equipos internos',
        ingles ? 'MarTech technology advisory' : 'Asesoría en tecnología MarTech'
      ],
      badge: ingles ? 'From $2,000/hour' : 'Desde $2,000/hora',
      badgeColor: '#672E92'
    },
    {
      id: 'video-marketing',
      title: 'Video Marketing',
      icon: '🎬',
      color: '#A47EB9',
      bgColor: 'rgba(164, 126, 185, 0.12)',
      features: [
        ingles ? 'Corporate video production' : 'Producción de videos corporativos',
        ingles ? 'Animations and motion graphics' : 'Animaciones y motion graphics',
        ingles ? 'Video marketing on social media' : 'Video marketing en redes sociales',
        ingles ? 'Live streaming and webinars' : 'Live streaming y webinars'
      ],
      badge: ingles ? '+80% Engagement' : 'Incremento engagement: +80%',
      badgeColor: '#A47EB9'
    },
    {
      id: 'cro',
      title: ingles ? 'CRO (Conversion Rate Optimization)' : 'CRO (Conversion Rate Optimization)',
      icon: '📊',
      color: '#00D9A0',
      bgColor: 'rgba(0, 217, 160, 0.12)',
      features: [
        ingles ? 'User experience analysis' : 'Análisis de experiencia de usuario',
        ingles ? 'Advanced A/B testing' : 'A/B testing avanzado',
        ingles ? 'Landing page optimization' : 'Optimización de landing pages',
        ingles ? 'Heatmaps and user journey' : 'Heatmaps y user journey'
      ],
      badge: ingles ? '+40% Average Conversions' : 'Mejora conversiones: +40% promedio',
      badgeColor: '#00D9A0'
    },
    {
      id: 'programmatic',
      title: ingles ? 'Programmatic Marketing' : 'Marketing Programático',
      icon: '🎯',
      color: '#FAB03D',
      bgColor: 'rgba(250, 176, 61, 0.12)',
      features: [
        ingles ? 'Automated space buying' : 'Compra automatizada de espacios',
        ingles ? 'Advanced targeting with AI' : 'Targeting avanzado con IA',
        ingles ? 'Real-time optimization' : 'Optimización en tiempo real',
        ingles ? 'DSP and RTB management' : 'Manejo de DSP y RTB'
      ],
      badge: ingles ? 'CPM Reduction: up to 30%' : 'Reducción CPM: hasta 30%',
      badgeColor: '#FAB03D'
    }
  ];

  return (
    <CinematicSection 
      variant="light" 
      withAnimation={true}
      id="servicios-especializados"
    >
      <section ref={sectionRef} className={styles.specializedSection}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.sectionTitle}>
            {ingles ? 'Additional & Specialized Services' : 'Servicios Adicionales & Especializados'}
          </h2>
          <p className={styles.sectionSubtitle}>
            {ingles ? 'Complementary solutions to maximize your digital success' : 'Soluciones complementarias para maximizar tu éxito digital'}
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`${styles.serviceCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ 
                animationDelay: `${0.2 + (index * 0.1)}s`,
                '--card-bg-color': service.bgColor,
                '--card-border-color': service.color
              }}
            >
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div 
                  className={styles.iconWrapper}
                  style={{ background: service.color }}
                >
                  <span className={styles.icon}>{service.icon}</span>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>

              {/* Features List */}
              <ul className={styles.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <div 
                      className={styles.bulletIcon}
                      style={{ background: service.color }}
                    >•</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Badge */}
              <div 
                className={styles.priceBadge}
                style={{ 
                  background: service.bgColor,
                  borderColor: service.color,
                  color: service.badgeColor
                }}
              >
                {service.badge}
              </div>

              {/* Hover Gradient */}
              <div 
                className={styles.hoverGradient}
                style={{ background: `linear-gradient(135deg, ${service.color}22, transparent)` }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.bottomCta} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '1s' }}>
          <p className={styles.ctaText}>
            {ingles ? 'Need a combination of multiple specialized services?' : '¿Necesitas una combinación de varios servicios especializados?'}
          </p>
          <a href="/contacto" className={styles.ctaButton}>
            <span>{ingles ? 'Request Custom Quote' : 'Solicitar Cotización Personalizada'}</span>
            <div className={styles.buttonShine}></div>
          </a>
        </div>
      </section>
    </CinematicSection>
  );
};

export default ServiciosSeccion7NEW;
