import React, { useState, useEffect, useRef } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/funcionalidadesSeccion2.module.css";

const FuncionalidadesSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.funcionalidades.features : translations.es.funcionalidades.features;
  const [activeCard, setActiveCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  // Configuración de beneficios adicionales
  const benefits = [
    {
      number: "85%",
      text: ingles ? "Reduction in documentation time" : "Reducción en tiempo de documentación",
      icon: "⏱️"
    },
    {
      number: "99.9%",
      text: ingles ? "Network visibility accuracy" : "Precisión de visibilidad de red",
      icon: "🎯"
    },
    {
      number: "24/7",
      text: ingles ? "Real-time monitoring" : "Monitoreo en tiempo real",
      icon: "👁️"
    },
    {
      number: "50+",
      text: ingles ? "Supported device types" : "Tipos de dispositivos soportados",
      icon: "🔌"
    }
  ];

  // Características adicionales con más detalle
  const enhancedFeatures = [
    {
      category: ingles ? "Monitoring & Control" : "Monitoreo y Control",
      items: [
        { icon: "📡", name: ingles ? "Real-time status tracking" : "Seguimiento de estado en tiempo real" },
        { icon: "🚨", name: ingles ? "Proactive alert system" : "Sistema de alertas proactivo" },
        { icon: "📊", name: ingles ? "Performance analytics" : "Análisis de rendimiento" }
      ]
    },
    {
      category: ingles ? "Documentation & Compliance" : "Documentación y Cumplimiento",
      items: [
        { icon: "📋", name: ingles ? "Automated documentation" : "Documentación automatizada" },
        { icon: "✅", name: ingles ? "Compliance reporting" : "Reportes de cumplimiento" },
        { icon: "🔍", name: ingles ? "Audit trail management" : "Gestión de pistas de auditoría" }
      ]
    },
    {
      category: ingles ? "Integration & Scalability" : "Integración y Escalabilidad",
      items: [
        { icon: "🔄", name: ingles ? "API integrations" : "Integraciones API" },
        { icon: "📈", name: ingles ? "Unlimited scalability" : "Escalabilidad ilimitada" },
        { icon: "🌐", name: ingles ? "Multi-site management" : "Gestión multi-sitio" }
      ]
    }
  ];

  // Intersection Observer para animaciones en scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.featuresSection} id="funcionalidades" ref={sectionRef}>
      <div className={styles.container}>
        {/* Header mejorado */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>⚡</span>
            {ingles ? "Powerful Features" : "Funcionalidades Poderosas"}
          </div>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>

        {/* Estadísticas de beneficios */}
        <div className={styles.benefitsContainer}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard} data-index={`benefit-${index}`}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <div className={styles.benefitNumber}>{benefit.number}</div>
              <div className={styles.benefitText}>{benefit.text}</div>
            </div>
          ))}
        </div>

        {/* Grid principal de características */}
        <div className={styles.featuresGrid}>
          {textos.cards.map((feature, index) => (
            <div 
              key={index} 
              className={`${styles.featureCard} ${visibleCards.has(index) ? styles.visible : ''} ${activeCard === index ? styles.active : ''}`}
              data-index={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{feature.icon}</span>
                  <div className={styles.iconGlow}></div>
                </div>
                <div className={styles.cardBadge}>
                  {ingles ? "Featured" : "Destacado"}
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
                
                <div className={styles.cardFeatures}>
                  <div className={styles.featureTag}>
                    <span className={styles.tagIcon}>🚀</span>
                    {ingles ? "Enterprise Ready" : "Listo para Empresa"}
                  </div>
                  <div className={styles.featureTag}>
                    <span className={styles.tagIcon}>⚡</span>
                    {ingles ? "Real-time" : "Tiempo Real"}
                  </div>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <button className={styles.learnMoreBtn}>
                  {ingles ? "Learn More" : "Saber Más"}
                  <span className={styles.btnArrow}>→</span>
                </button>
              </div>

              <div className={styles.cardOverlay}></div>
            </div>
          ))}
        </div>

        {/* Sección de características avanzadas */}
        <div className={styles.enhancedFeaturesSection}>
          <div className={styles.enhancedHeader}>
            <h3 className={styles.enhancedTitle}>
              {ingles ? "Complete Infrastructure Management Suite" : "Suite Completa de Gestión de Infraestructura"}
            </h3>
            <p className={styles.enhancedSubtitle}>
              {ingles 
                ? "Discover all the advanced capabilities that make NetHive the leading choice for network infrastructure management"
                : "Descubre todas las capacidades avanzadas que hacen de NetHive la opción líder para gestión de infraestructura de red"
              }
            </p>
          </div>

          <div className={styles.enhancedGrid}>
            {enhancedFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.categoryCard}>
                <div className={styles.categoryHeader}>
                  <h4 className={styles.categoryTitle}>{category.category}</h4>
                  <div className={styles.categoryIcon}>
                    {categoryIndex === 0 ? "🎛️" : categoryIndex === 1 ? "📄" : "🔗"}
                  </div>
                </div>
                
                <div className={styles.categoryItems}>
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={styles.categoryItem}>
                      <span className={styles.itemIcon}>{item.icon}</span>
                      <span className={styles.itemName}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>🚀</div>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Ready to revolutionize your infrastructure management?" : "¿Listo para revolucionar la gestión de tu infraestructura?"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Join thousands of companies already using NetHive to optimize their network operations"
                : "Únete a miles de empresas que ya usan NetHive para optimizar sus operaciones de red"
              }
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCtaBtn}>
                <span className={styles.btnIcon}>🎯</span>
                {ingles ? "Start Free Trial" : "Comenzar Prueba Gratuita"}
              </button>
              <button className={styles.secondaryCtaBtn}>
                <span className={styles.btnIcon}>📞</span>
                {ingles ? "Schedule Demo" : "Agendar Demo"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuncionalidadesSeccion2;