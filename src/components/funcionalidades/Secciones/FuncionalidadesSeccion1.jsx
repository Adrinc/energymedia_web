import React, { useEffect, useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/funcionalidadesSeccion1.module.css";

const FuncionalidadesSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.funcionalidades.hero : translations.es.funcionalidades.hero;
  
  const [activeFeature, setActiveFeature] = useState(0);

  // Características destacadas con rotación automática
  const features = [
    {
      icon: "📊",
      title: ingles ? "Real-time Monitoring" : "Monitoreo en Tiempo Real",
      description: ingles ? "Track your infrastructure 24/7" : "Supervisa tu infraestructura 24/7"
    },
    {
      icon: "🗺️", 
      title: ingles ? "Visual Topology" : "Topología Visual",
      description: ingles ? "Interactive network mapping" : "Mapeo interactivo de red"
    },
    {
      icon: "📋",
      title: ingles ? "Smart Documentation" : "Documentación Inteligente", 
      description: ingles ? "Automated cable management" : "Gestión automatizada de cables"
    },
    {
      icon: "🚨",
      title: ingles ? "Intelligent Alerts" : "Alertas Inteligentes",
      description: ingles ? "Proactive problem detection" : "Detección proactiva de problemas"
    }
  ];

  // Estadísticas destacadas
  const stats = [
    { 
      number: "500+", 
      label: ingles ? "Companies trust us" : "Empresas confían en nosotros" 
    },
    { 
      number: "99.9%", 
      label: ingles ? "System uptime" : "Tiempo de actividad" 
    },
    { 
      number: "24/7", 
      label: ingles ? "Technical support" : "Soporte técnico" 
    },
    { 
      number: "<24h", 
      label: ingles ? "Implementation time" : "Tiempo de implementación" 
    }
  ];

  // Rotación automática de características
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.particles}></div>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>⚡</span>
            {ingles ? "Next-generation infrastructure management" : "Gestión de infraestructura de nueva generación"}
          </div>
          
          <h1 className={styles.heroTitle}>
            {textos.title} <span className={styles.highlight}>{textos.subtitle}</span>
          </h1>
          
          <p className={styles.heroDescription}>
            {textos.description}
          </p>

          {/* Estadísticas */}
          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Botones de acción */}
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>
              <span className={styles.btnIcon}>🚀</span>
              {ingles ? "Start Free Trial" : "Prueba Gratuita"}
            </button>
            <button className={styles.secondaryBtn}>
              <span className={styles.btnIcon}>🎯</span>
              {ingles ? "Schedule Demo" : "Agendar Demo"}
            </button>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          {/* Características rotativas */}
          <div className={styles.featuresShowcase}>
            <div className={styles.activeFeature}>
              <div className={styles.featureIcon}>
                <span>{features[activeFeature].icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{features[activeFeature].title}</h3>
              <p className={styles.featureDescription}>{features[activeFeature].description}</p>
            </div>

            {/* Indicadores de características */}
            <div className={styles.featureIndicators}>
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === activeFeature ? styles.active : ''}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <span>{features[index].icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Elementos flotantes */}
          <div className={styles.floatingElements}>
            <div className={styles.floatingCard} style={{animationDelay: '0s'}}>
              <span className={styles.cardIcon}>📊</span>
              <span className={styles.cardText}>{ingles ? "Live Analytics" : "Análisis en Vivo"}</span>
            </div>
            <div className={styles.floatingCard} style={{animationDelay: '1s'}}>
              <span className={styles.cardIcon}>🔒</span>
              <span className={styles.cardText}>{ingles ? "Secure Access" : "Acceso Seguro"}</span>
            </div>
            <div className={styles.floatingCard} style={{animationDelay: '2s'}}>
              <span className={styles.cardIcon}>⚡</span>
              <span className={styles.cardText}>{ingles ? "Fast Setup" : "Configuración Rápida"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de características clave */}
      <div className={styles.keyFeatures}>
        <div className={styles.keyFeaturesGrid}>
          <div className={styles.keyFeature}>
            <div className={styles.keyFeatureIcon}>🔍</div>
            <h4>{ingles ? "Automatic Discovery" : "Descubrimiento Automático"}</h4>
            <p>{ingles ? "Automatically detect and catalog all network components" : "Detecta y cataloga automáticamente todos los componentes de red"}</p>
          </div>
          
          <div className={styles.keyFeature}>
            <div className={styles.keyFeatureIcon}>📱</div>
            <h4>{ingles ? "Mobile Access" : "Acceso Móvil"}</h4>
            <p>{ingles ? "Manage your infrastructure from anywhere" : "Gestiona tu infraestructura desde cualquier lugar"}</p>
          </div>
          
          <div className={styles.keyFeature}>
            <div className={styles.keyFeatureIcon}>🤖</div>
            <h4>{ingles ? "AI-Powered Insights" : "Insights con IA"}</h4>
            <p>{ingles ? "Intelligent recommendations for optimization" : "Recomendaciones inteligentes para optimización"}</p>
          </div>

          <div className={styles.keyFeature}>
            <div className={styles.keyFeatureIcon}>🔄</div>
            <h4>{ingles ? "Real-time Sync" : "Sincronización en Tiempo Real"}</h4>
            <p>{ingles ? "Instant updates across all devices" : "Actualizaciones instantáneas en todos los dispositivos"}</p>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>{ingles ? "Discover all features" : "Descubre todas las funcionalidades"}</span>
        <div className={styles.scrollIcon}></div>
      </div>
    </section>
  );
};

export default FuncionalidadesSeccion1;