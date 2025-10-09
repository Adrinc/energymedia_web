// ServiciosSeccion6NEW.jsx
// DESARROLLO WEB & E-COMMERCE - Diseño Visual Alternado

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/serviciosSeccion6NEW.module.css';

const ServiciosSeccion6NEW = () => {
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
      id: 'web-dev',
      title: ingles ? 'Web Development' : 'Desarrollo Web',
      subtitle: ingles ? 'High-performance websites that captivate and convert' : 'Sitios web de alto rendimiento que cautivan y convierten',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      color: '#667eea',
      features: [
        { 
          icon: '⚡', 
          text: ingles ? 'Speed optimized (Core Web Vitals)' : 'Optimización de velocidad (Core Web Vitals)'
        },
        { 
          icon: '📱', 
          text: ingles ? '100% responsive design' : 'Diseño 100% responsive'
        },
        { 
          icon: '🔍', 
          text: ingles ? 'Technical SEO included' : 'SEO técnico incluido'
        },
        { 
          icon: '🔗', 
          text: ingles ? 'CRM/ERP integration' : 'Integración CRM/ERP'
        },
        { 
          icon: '🎨', 
          text: ingles ? 'Custom design (no templates)' : 'Diseño a medida (sin plantillas)'
        },
        { 
          icon: '🛡️', 
          text: ingles ? 'Security & SSL included' : 'Seguridad & SSL incluido'
        }
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      subtitle: ingles ? 'Online stores that sell 24/7 on autopilot' : 'Tiendas online que venden 24/7 en piloto automático',
      icon: '🛒',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      color: '#f093fb',
      features: [
        { 
          icon: '💳', 
          text: ingles ? 'Secure multi-payment gateway' : 'Pasarela de pagos múltiple segura'
        },
        { 
          icon: '📦', 
          text: ingles ? 'Automated inventory management' : 'Gestión de inventario automatizada'
        },
        { 
          icon: '🚚', 
          text: ingles ? 'Shipping integration (FedEx, DHL, etc.)' : 'Integración envíos (FedEx, DHL, etc.)'
        },
        { 
          icon: '📊', 
          text: ingles ? 'Sales analytics dashboard' : 'Dashboard de analítica de ventas'
        },
        { 
          icon: '🏪', 
          text: ingles ? 'Marketplace sync (Amazon, MercadoLibre)' : 'Sincronización marketplaces (Amazon, MercadoLibre)'
        },
        { 
          icon: '📧', 
          text: ingles ? 'Abandoned cart automation' : 'Automatización de carritos abandonados'
        }
      ]
    },
    {
      id: 'web-apps',
      title: ingles ? 'Mobile & Web Apps' : 'Apps Móviles & Web',
      subtitle: ingles ? 'Custom apps that scale with your business' : 'Apps a medida que escalan con tu negocio',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      color: '#4facfe',
      features: [
        { 
          icon: '⚙️', 
          text: ingles ? 'iOS + Android (React Native)' : 'iOS + Android (React Native)'
        },
        { 
          icon: '🌐', 
          text: ingles ? 'Progressive Web Apps (PWA)' : 'Progressive Web Apps (PWA)'
        },
        { 
          icon: '🔌', 
          text: ingles ? 'REST APIs & GraphQL' : 'APIs REST & GraphQL'
        },
        { 
          icon: '☁️', 
          text: ingles ? 'Cloud deployment (AWS, Azure, GCP)' : 'Despliegue en nube (AWS, Azure, GCP)'
        },
        { 
          icon: '🔔', 
          text: ingles ? 'Push notifications' : 'Notificaciones push'
        },
        { 
          icon: '📈', 
          text: ingles ? 'Real-time analytics' : 'Analítica en tiempo real'
        }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className={styles.webSection} id="desarrollo-web">
      {/* Gradient Background Shapes */}
      <div className={styles.bgShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>

      {/* Header */}
      <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
        <h2 className={styles.sectionTitle}>
          {ingles ? 'Web Development & E-commerce' : 'Desarrollo Web & E-commerce'}
        </h2>
        <p className={styles.sectionSubtitle}>
          {ingles ? 'We build digital experiences that convert visitors into customers' : 'Creamos experiencias digitales que convierten visitantes en clientes'}
        </p>
      </div>

      {/* Services - Alternating Layout */}
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div 
            key={service.id}
            className={`${styles.serviceRow} ${index % 2 === 1 ? styles.reverse : ''} ${isVisible ? styles.fadeInUp : ''}`}
            style={{ animationDelay: `${0.2 + (index * 0.2)}s` }}
          >
            {/* Image Side */}
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper} style={{ '--service-color': service.color }}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className={styles.serviceImage}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.glowEffect}></div>
              </div>
              <div className={styles.iconBadge} style={{ background: service.color }}>
                <span className={styles.badgeIcon}>{service.icon}</span>
              </div>
            </div>

            {/* Content Side */}
            <div className={styles.contentContainer}>
              <div className={styles.contentWrapper}>
                <h3 className={styles.serviceTitle} style={{ color: service.color }}>
                  {service.title}
                </h3>
                <p className={styles.serviceSubtitle}>
                  {service.subtitle}
                </p>

                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className={styles.featureItem}
                      style={{ animationDelay: `${0.4 + (index * 0.2) + (idx * 0.05)}s` }}
                    >
                      <span className={styles.featureIcon} style={{ background: service.color }}>
                        {feature.icon}
                      </span>
                      <span className={styles.featureText}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Pills */}
      <div className={`${styles.techStack} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.8s' }}>
        <h4 className={styles.techTitle}>
          {ingles ? 'Technologies We Master' : 'Tecnologías que Dominamos'}
        </h4>
        <div className={styles.techPills}>
          {['React', 'Next.js', 'Node.js', 'WordPress', 'Shopify', 'WooCommerce', 'Laravel', 'Python', 'React Native'].map((tech, idx) => (
            <span key={idx} className={styles.techPill}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={`${styles.ctaWrapper} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '1s' }}>
        <a href="/contacto" className={styles.ctaButton}>
          <span>{ingles ? 'Start Your Project' : 'Inicia tu Proyecto'}</span>
          <span className={styles.ctaArrow}>→</span>
        </a>
      </div>
    </section>
  );
};

export default ServiciosSeccion6NEW;
