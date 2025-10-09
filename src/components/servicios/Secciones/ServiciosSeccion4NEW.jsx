// ServiciosSeccion4NEW.jsx
// MARKETING DIGITAL EXPANDIDO - SEO/SEM + Redes Sociales + Email Marketing

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/serviciosSeccion4NEW.module.css';

const ServiciosSeccion4NEW = () => {
  const ingles = useStore(isEnglish);
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0); // 0: SEO/SEM, 1: Redes, 2: Email
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);

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

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rect = parallaxRef.current.getBoundingClientRect();
        const speed = 0.5;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          parallaxRef.current.style.transform = `translateY(${scrolled * speed}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'seo-sem',
      title: ingles ? 'SEO & SEM - Master Search Engines' : 'SEO & SEM - Domina los Motores de Búsqueda',
      tagline: ingles ? 'Advanced strategies to rank your brand in top positions and generate qualified traffic' : 'Estrategias avanzadas para posicionar tu marca en las primeras posiciones de Google y generar tráfico cualificado constante',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      sections: [
        {
          title: ingles ? 'SEO (Organic Optimization)' : 'SEO (Optimización Orgánica)',
          icon: '🔍',
          features: [
            ingles ? 'Complete technical audit' : 'Auditoría técnica completa',
            ingles ? 'Keyword research' : 'Investigación de palabras clave',
            ingles ? 'On-page and off-page optimization' : 'Optimización on-page y off-page',
            ingles ? 'Strategic link building' : 'Link building estratégico',
            ingles ? 'SEO-optimized content' : 'Contenido optimizado para SEO',
            ingles ? 'Detailed monthly reports' : 'Reportes mensuales detallados'
          ]
        },
        {
          title: ingles ? 'SEM (Search Advertising)' : 'SEM (Publicidad en Buscadores)',
          icon: '💰',
          features: [
            ingles ? 'Google Ads campaigns' : 'Campañas en Google Ads',
            ingles ? 'Advanced segmentation' : 'Segmentación avanzada',
            ingles ? 'Conversion optimization' : 'Optimización de conversiones',
            ingles ? 'Intelligent remarketing' : 'Remarketing inteligente',
            ingles ? 'Continuous A/B testing' : 'A/B testing continuo',
            ingles ? 'Real-time ROI tracking' : 'ROI tracking en tiempo real'
          ]
        }
      ],
      metrics: [
        { value: '+200%', label: ingles ? 'Organic Traffic' : 'Tráfico Orgánico' },
        { value: '4:1', label: 'ROAS' },
        { value: '-35%', label: ingles ? 'Cost per Click' : 'Costo por Clic' }
      ]
    },
    {
      id: 'social-media',
      title: ingles ? 'Social Media & Content Marketing' : 'Redes Sociales & Content Marketing',
      tagline: ingles ? 'Build a digital presence that connects and converts' : 'Construye una presencia digital que conecte y convierta',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
      sections: [
        {
          title: ingles ? 'Social Media Management' : 'Gestión de Redes Sociales',
          icon: '📱',
          features: [
            ingles ? 'Personalized content strategy' : 'Estrategia de contenido personalizado',
            ingles ? 'Facebook, Instagram, LinkedIn, TikTok management' : 'Gestión de Facebook, Instagram, LinkedIn, TikTok',
            ingles ? 'Professional editorial calendar' : 'Calendario editorial profesional',
            ingles ? 'Active community management' : 'Community management activo',
            ingles ? 'Optimized advertising campaigns' : 'Campañas publicitarias optimizadas',
            ingles ? 'Engagement and growth analysis' : 'Análisis de engagement y crecimiento'
          ]
        },
        {
          title: 'Content Marketing',
          icon: '✍️',
          features: [
            ingles ? 'Professional corporate blog' : 'Blog corporativo profesional',
            ingles ? 'Promotional and educational videos' : 'Videos promocionales y educativos',
            ingles ? 'Infographics and visual content' : 'Infografías y contenido visual',
            ingles ? 'Automated email marketing' : 'Email marketing automatizado',
            ingles ? 'Downloadable eBooks and resources' : 'eBooks y recursos descargables',
            ingles ? 'Effective brand storytelling' : 'Storytelling de marca efectivo'
          ]
        }
      ],
      metrics: [
        { value: '+300%', label: 'Engagement' },
        { value: '+150%', label: ingles ? 'Followers' : 'Seguidores' },
        { value: '4.5x', label: ingles ? 'Reach' : 'Alcance' }
      ]
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing & Marketing Automation',
      tagline: ingles ? 'Personalized communication that converts' : 'Comunicación personalizada que convierte',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
      sections: [
        {
          title: ingles ? 'Included Services' : 'Servicios Incluidos',
          icon: '📧',
          features: [
            ingles ? 'Responsive email campaign design' : 'Diseño de campañas email responsivas',
            ingles ? 'Advanced audience segmentation' : 'Segmentación avanzada de audiencias',
            ingles ? 'Nurture flow automation' : 'Automatización de flujos de nutrición',
            ingles ? 'A/B testing of subjects and content' : 'A/B testing de asuntos y contenido',
            ingles ? 'CRM and database integration' : 'Integración con CRM y bases de datos',
            ingles ? 'Detailed performance reports' : 'Reportes de rendimiento detallados'
          ]
        },
        {
          title: ingles ? 'Automation Process' : 'Proceso Automation',
          icon: '🤖',
          features: [
            ingles ? '1. Automated welcome' : '1. Bienvenida automatizada',
            ingles ? '2. Interest-based nurturing' : '2. Nurturing por intereses',
            ingles ? '3. Cart recovery' : '3. Recuperación de carritos',
            ingles ? '4. Inactive reactivation' : '4. Reactivación de inactivos'
          ]
        }
      ],
      metrics: [
        { value: '42:1', label: ingles ? 'Average ROI' : 'ROI Promedio' },
        { value: '+65%', label: ingles ? 'Open Rate' : 'Tasa de Apertura' },
        { value: '+45%', label: ingles ? 'Click Rate' : 'Tasa de Clics' },
        { value: '+30%', label: ingles ? 'Conversions' : 'Conversiones' }
      ]
    }
  ];

  const currentService = services[activeService];

  return (
    <CinematicSection 
      variant="light" 
      withAnimation={true}
      id="marketing-digital"
    >
      <section ref={sectionRef} className={styles.marketingSection}>
        {/* Parallax Background Image */}
        <div className={styles.parallaxBg} ref={parallaxRef}>
          <img 
            src={currentService.image} 
            alt={currentService.title}
            className={styles.bgImage}
          />
          <div className={styles.overlay}></div>
        </div>

        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.badge}>
            {ingles ? 'COMPREHENSIVE DIGITAL MARKETING' : 'MARKETING DIGITAL INTEGRAL'}
          </div>
          <h2 className={styles.sectionTitle}>
            {ingles ? 'Comprehensive Solutions to Grow Your Business' : 'Soluciones Completas para Hacer Crecer tu Negocio'}
          </h2>
          <p className={styles.sectionSubtitle}>
            {ingles ? 'From organic positioning to automated conversions, we cover every channel' : 'Desde posicionamiento orgánico hasta conversiones automatizadas, cubrimos cada canal'}
          </p>
        </div>

        {/* Service Tabs */}
        <div className={`${styles.tabsContainer} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.2s' }}>
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`${styles.tabButton} ${activeService === index ? styles.active : ''}`}
              onClick={() => setActiveService(index)}
            >
              <span className={styles.tabIcon}>{service.sections[0].icon}</span>
              <span className={styles.tabText}>{service.title.split(' - ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className={`${styles.serviceContent} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.4s' }}>
          <h3 className={styles.serviceTitle}>{currentService.title}</h3>
          <p className={styles.serviceTagline}>{currentService.tagline}</p>

          {/* Feature Columns */}
          <div className={styles.featuresGrid}>
            {currentService.sections.map((section, idx) => (
              <div 
                key={idx} 
                className={styles.featureColumn}
                style={{ animationDelay: `${0.6 + (idx * 0.1)}s` }}
              >
                <div className={styles.columnHeader}>
                  <div className={styles.columnIcon}>{section.icon}</div>
                  <h4 className={styles.columnTitle}>{section.title}</h4>
                </div>
                
                <ul className={styles.featureList}>
                  {section.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <div className={styles.checkIcon}>✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className={styles.metricsRow}>
            {currentService.metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className={styles.metricCard}
                style={{ animationDelay: `${0.8 + (idx * 0.1)}s` }}
              >
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
                <div className={styles.metricGlow}></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`${styles.ctaWrapper} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '1s' }}>
          <a href="/contacto" className={styles.ctaButton}>
            <span>{ingles ? 'Request Custom Strategy' : 'Solicitar Estrategia Personalizada'}</span>
            <div className={styles.buttonShine}></div>
          </a>
        </div>
      </section>
    </CinematicSection>
  );
};

export default ServiciosSeccion4NEW;
