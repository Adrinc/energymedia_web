import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/preciosSeccion5.module.css";

const PreciosSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.precios.cta : translations.es.precios.cta;

  return (
    <section className={styles.ctaSection}>
      <div className={styles.background}>
        <div className={styles.backgroundPattern}></div>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🚀</span>
            <span className={styles.badgeText}>
              {ingles ? "Join 500+ Companies" : "Únete a 500+ Empresas"}
            </span>
          </div>
          
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
          
          <div className={styles.features}>
            {textos.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.featureText}>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              <span className={styles.buttonIcon}>⚡</span>
              {textos.primaryCta}
            </button>
            <button className={styles.secondaryButton}>
              <span className={styles.buttonIcon}>📅</span>
              {textos.secondaryCta}
            </button>
          </div>
          
          <div className={styles.guarantees}>
            <div className={styles.guaranteeItem}>
              <span className={styles.guaranteeIcon}>✅</span>
              <span className={styles.guaranteeText}>
                {ingles ? "No credit card required" : "Sin tarjeta de crédito"}
              </span>
            </div>
            <div className={styles.guaranteeItem}>
              <span className={styles.guaranteeIcon}>🔒</span>
              <span className={styles.guaranteeText}>
                {ingles ? "Enterprise security" : "Seguridad empresarial"}
              </span>
            </div>
            <div className={styles.guaranteeItem}>
              <span className={styles.guaranteeIcon}>📞</span>
              <span className={styles.guaranteeText}>
                {ingles ? "24/7 support" : "Soporte 24/7"}
              </span>
            </div>
          </div>
        </div>
        
        <div className={styles.visualElements}>
          <div className={styles.floatingCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>💎</div>
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>
                  {ingles ? "Premium Support" : "Soporte Premium"}
                </div>
                <div className={styles.cardSubtitle}>
                  {ingles ? "Included in all plans" : "Incluido en todos los planes"}
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>99.9%</div>
              <div className={styles.statLabel}>
                {ingles ? "Uptime" : "Disponibilidad"}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>
                {ingles ? "Companies" : "Empresas"}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24h</div>
              <div className={styles.statLabel}>
                {ingles ? "Setup Time" : "Tiempo Setup"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreciosSeccion5;