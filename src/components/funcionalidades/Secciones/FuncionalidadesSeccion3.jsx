import React, { useState, useEffect } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/funcionalidadesSeccion3.module.css";

const FuncionalidadesSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.funcionalidades.screenshots : translations.es.funcionalidades.screenshots;
  
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Configuración expandida de screenshots con más detalles
  const screenshots = [
    {
      id: 'dashboard',
      title: textos.dashboard,
      icon: "📊",
      image: '/image/global/dashboard1.png',
      description: ingles 
        ? "Complete control panel with real-time metrics and infrastructure status overview."
        : "Panel de control completo con métricas en tiempo real y vista general del estado de la infraestructura.",
      features: [
        ingles ? "Real-time monitoring" : "Monitoreo en tiempo real",
        ingles ? "Custom widgets" : "Widgets personalizables", 
        ingles ? "Alert management" : "Gestión de alertas",
        ingles ? "Performance metrics" : "Métricas de rendimiento"
      ],
      stats: {
        devices: "1,247",
        uptime: "99.9%",
        alerts: "3"
      }
    },
    {
      id: 'topology',
      title: textos.topology,
      icon: "🌐",
      image: '/image/global/topology.png',
      description: ingles
        ? "Interactive network topology visualization with drag-and-drop functionality."
        : "Visualización interactiva de topología de red con funcionalidad de arrastrar y soltar.",
      features: [
        ingles ? "Interactive mapping" : "Mapeo interactivo",
        ingles ? "Drag & drop interface" : "Interfaz arrastrar y soltar",
        ingles ? "Auto-discovery" : "Descubrimiento automático",
        ingles ? "Visual connections" : "Conexiones visuales"
      ],
      stats: {
        nodes: "342",
        connections: "1,156",
        sites: "15"
      }
    },
    {
      id: 'equipment',
      title: textos.equipment,
      icon: "🔌",
      image: '/image/global/equipment.png',
      description: ingles
        ? "Detailed equipment cards with specifications, status, and maintenance history."
        : "Fichas detalladas de equipos con especificaciones, estado e historial de mantenimiento.",
      features: [
        ingles ? "Equipment inventory" : "Inventario de equipos",
        ingles ? "Maintenance tracking" : "Seguimiento de mantenimiento",
        ingles ? "Specification management" : "Gestión de especificaciones",
        ingles ? "Status monitoring" : "Monitoreo de estado"
      ],
      stats: {
        equipment: "856",
        active: "847",
        maintenance: "9"
      }
    }
  ];

  // Características adicionales del sistema
  const systemFeatures = [
    {
      icon: "⚡",
      title: ingles ? "Lightning Fast" : "Súper Rápido",
      description: ingles ? "< 200ms response time" : "< 200ms tiempo de respuesta"
    },
    {
      icon: "🔒",
      title: ingles ? "Enterprise Security" : "Seguridad Empresarial", 
      description: ingles ? "Bank-level encryption" : "Encriptación nivel bancario"
    },
    {
      icon: "📱",
      title: ingles ? "Mobile Ready" : "Listo para Móvil",
      description: ingles ? "Responsive design" : "Diseño responsivo"
    },
    {
      icon: "🌐",
      title: ingles ? "Global Access" : "Acceso Global",
      description: ingles ? "Available worldwide" : "Disponible mundialmente"
    }
  ];

  // Testimonios de usuarios
  const userTestimonials = [
    {
      name: "Sarah Chen",
      role: ingles ? "Network Manager" : "Gerente de Red",
      company: "TechCorp",
      quote: ingles 
        ? "The visualization tools have transformed how we manage our infrastructure"
        : "Las herramientas de visualización han transformado cómo gestionamos nuestra infraestructura",
      avatar: "/image/testimonials/avatar1.png"
    },
    {
      name: "Miguel Rodriguez", 
      role: ingles ? "IT Director" : "Director de IT",
      company: "DataFlow Inc",
      quote: ingles
        ? "NetHive's interface is intuitive and incredibly powerful"
        : "La interfaz de NetHive es intuitiva e increíblemente poderosa",
      avatar: "/image/testimonials/avatar2.png"
    }
  ];

  // Auto-play funcionalidad
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, screenshots.length]);

  return (
    <section className={styles.screenshotsSection}>
      <div className={styles.container}>
        {/* Header mejorado */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>👁️</span>
            {ingles ? "Visual Experience" : "Experiencia Visual"}
          </div>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>

        {/* Sistema de pestañas y visualización mejorado */}
        <div className={styles.screenshotsContainer}>
          <div className={styles.tabNavigation}>
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
                onClick={() => {
                  setActiveTab(index);
                  setIsAutoPlaying(false);
                }}
              >
                <span className={styles.tabIcon}>{screenshot.icon}</span>
                <span className={styles.tabText}>{screenshot.title}</span>
                {activeTab === index && <div className={styles.tabIndicator}></div>}
              </button>
            ))}
            
            {/* Control de auto-play */}
            <button 
              className={styles.autoPlayBtn}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              <span className={styles.autoPlayIcon}>
                {isAutoPlaying ? "⏸️" : "▶️"}
              </span>
              {ingles ? "Auto" : "Auto"}
            </button>
          </div>

          <div className={styles.screenshotDisplay}>
            <div className={styles.imageContainer}>
              <img 
                src={screenshots[activeTab].image} 
                alt={screenshots[activeTab].title}
                className={styles.screenshot}
              />
              
              {/* Overlay con información */}
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.overlayHeader}>
                    <span className={styles.overlayIcon}>{screenshots[activeTab].icon}</span>
                    <h3 className={styles.overlayTitle}>{screenshots[activeTab].title}</h3>
                  </div>
                  <p className={styles.overlayDescription}>{screenshots[activeTab].description}</p>
                  
                  {/* Estadísticas en vivo */}
                  <div className={styles.liveStats}>
                    {Object.entries(screenshots[activeTab].stats).map(([key, value]) => (
                      <div key={key} className={styles.statItem}>
                        <div className={styles.statValue}>{value}</div>
                        <div className={styles.statLabel}>
                          {key === 'devices' ? (ingles ? 'Devices' : 'Dispositivos') :
                           key === 'uptime' ? (ingles ? 'Uptime' : 'Actividad') :
                           key === 'alerts' ? (ingles ? 'Alerts' : 'Alertas') :
                           key === 'nodes' ? (ingles ? 'Nodes' : 'Nodos') :
                           key === 'connections' ? (ingles ? 'Connections' : 'Conexiones') :
                           key === 'sites' ? (ingles ? 'Sites' : 'Sitios') :
                           key === 'equipment' ? (ingles ? 'Equipment' : 'Equipos') :
                           key === 'active' ? (ingles ? 'Active' : 'Activos') :
                           key === 'maintenance' ? (ingles ? 'Maintenance' : 'Mantenimiento') : key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Indicadores de progreso */}
              <div className={styles.progressIndicators}>
                {screenshots.map((_, index) => (
                  <div 
                    key={index}
                    className={`${styles.progressDot} ${index === activeTab ? styles.active : ''}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Panel de características */}
            <div className={styles.featuresPanel}>
              <h4 className={styles.featuresPanelTitle}>
                {ingles ? "Key Features:" : "Características Clave:"}
              </h4>
              <div className={styles.featuresList}>
                {screenshots[activeTab].features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <span className={styles.featureIcon}>✓</span>
                    <span className={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Características del sistema */}
        <div className={styles.systemFeaturesSection}>
          <h3 className={styles.systemFeaturesTitle}>
            {ingles ? "Why choose our platform?" : "¿Por qué elegir nuestra plataforma?"}
          </h3>
          <div className={styles.systemFeaturesGrid}>
            {systemFeatures.map((feature, index) => (
              <div key={index} className={styles.systemFeatureCard}>
                <div className={styles.systemFeatureIcon}>{feature.icon}</div>
                <h4 className={styles.systemFeatureTitle}>{feature.title}</h4>
                <p className={styles.systemFeatureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonios de usuarios */}
        <div className={styles.testimonialsSection}>
          <h3 className={styles.testimonialsTitle}>
            {ingles ? "What our users say" : "Lo que dicen nuestros usuarios"}
          </h3>
          <div className={styles.testimonialsGrid}>
            {userTestimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                  <div className={styles.testimonialAuthor}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className={styles.authorAvatar}
                    />
                    <div className={styles.authorInfo}>
                      <div className={styles.authorName}>{testimonial.name}</div>
                      <div className={styles.authorRole}>{testimonial.role}</div>
                      <div className={styles.authorCompany}>{testimonial.company}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.testimonialRating}>
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Ready to see it in action?" : "¿Listo para verlo en acción?"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Experience the power of visual infrastructure management firsthand"
                : "Experimenta el poder de la gestión visual de infraestructura de primera mano"
              }
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCtaBtn}>
                <span className={styles.btnIcon}>🎮</span>
                {ingles ? "Try Interactive Demo" : "Probar Demo Interactivo"}
              </button>
              <button className={styles.secondaryCtaBtn}>
                <span className={styles.btnIcon}>📅</span>
                {ingles ? "Schedule Walkthrough" : "Agendar Recorrido"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuncionalidadesSeccion3;