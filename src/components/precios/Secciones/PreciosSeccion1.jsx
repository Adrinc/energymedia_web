import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/preciosSeccion1.module.css";

const PreciosSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.precios.hero : translations.es.precios.hero;

  const valueProps = [
    {
      icon: "⚡",
      title: ingles ? "Quick Setup" : "Configuración Rápida",
      description: ingles ? "24h implementation" : "Implementación en 24h"
    },
    {
      icon: "🔒",
      title: ingles ? "Enterprise Security" : "Seguridad Empresarial",
      description: ingles ? "SOC 2 compliant" : "Cumplimiento SOC 2"
    },
    {
      icon: "📈",
      title: ingles ? "Proven ROI" : "ROI Comprobado",
      description: ingles ? "Average 40% efficiency gain" : "40% más eficiencia promedio"
    }
  ];

  const planPreviews = [
    {
      name: ingles ? "Starter" : "Inicial",
      icon: "💰",
      startingPrice: "$99",
      description: ingles ? "Perfect for small teams" : "Perfecto para equipos pequeños",
      highlight: false
    },
    {
      name: ingles ? "Professional" : "Profesional",
      icon: "🚀",
      startingPrice: "$299",
      description: ingles ? "Most popular choice" : "Opción más popular",
      highlight: true
    },
    {
      name: ingles ? "Enterprise" : "Empresarial",
      icon: "🏢",
      startingPrice: ingles ? "Custom" : "Personalizado",
      description: ingles ? "For large organizations" : "Para grandes organizaciones",
      highlight: false
    }
  ];

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.backgroundPattern}></div>
        <div className={styles.overlay}></div>
        <div className={styles.floatingElements}>
          <div className={styles.floatingShape}></div>
          <div className={styles.floatingShape}></div>
          <div className={styles.floatingShape}></div>
        </div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.trustBadge}>
            <span className={styles.trustIcon}>✅</span>
            <span>{ingles ? "Trusted by 500+ companies" : "Confianza de 500+ empresas"}</span>
          </div>
          
          <div className={styles.titleContainer}>
            <h1 className={styles.heroTitle}>
              {textos.title} <span className={styles.highlight}>{textos.subtitle}</span>
            </h1>
          </div>
          
          <p className={styles.heroDescription}>
            {textos.description}
          </p>

          <div className={styles.valuePropositions}>
            {valueProps.map((prop, index) => (
              <div key={index} className={styles.valueProp}>
                <span className={styles.valueIcon}>{prop.icon}</span>
                <div className={styles.valueContent}>
                  <h4 className={styles.valueTitle}>{prop.title}</h4>
                  <p className={styles.valueDescription}>{prop.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99.9%</span>
              <span className={styles.statLabel}>{ingles ? "Uptime" : "Disponibilidad"}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24h</span>
              <span className={styles.statLabel}>{ingles ? "Setup" : "Configuración"}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>{ingles ? "Companies" : "Empresas"}</span>
            </div>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.plansPreviews}>
            {planPreviews.map((plan, index) => (
              <div key={index} className={`${styles.planPreview} ${plan.highlight ? styles.highlightedPlan : ''}`}>
                {plan.highlight && (
                  <div className={styles.popularBadge}>
                    {ingles ? "Most Popular" : "Más Popular"}
                  </div>
                )}
                <div className={styles.planIcon}>{plan.icon}</div>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planPrice}>
                  {plan.startingPrice}
                  {plan.startingPrice !== "Custom" && plan.startingPrice !== "Personalizado" && (
                    <span className={styles.priceNote}>/{ingles ? "mo" : "mes"}</span>
                  )}
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
                <div className={styles.planFeatures}>
                  <span className={styles.feature}>✓ {ingles ? "Setup included" : "Configuración incluida"}</span>
                  <span className={styles.feature}>✓ {ingles ? "24/7 support" : "Soporte 24/7"}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.testimonialPreview}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                "{ingles 
                  ? "NetHive transformed our infrastructure management. ROI in just 3 months." 
                  : "NetHive transformó nuestra gestión de infraestructura. ROI en solo 3 meses."
                }"
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>👨‍💼</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>Carlos Rodriguez</span>
                  <span className={styles.authorTitle}>IT Director, TechCorp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <button className={styles.primaryCta}>
          <span className={styles.ctaIcon}>🚀</span>
          {ingles ? "Start Free Trial" : "Comenzar Prueba Gratuita"}
        </button>
        <button className={styles.secondaryCta}>
          {ingles ? "View All Plans" : "Ver Todos los Planes"}
        </button>
      </div>


    </section>
  );
};

export default PreciosSeccion1;