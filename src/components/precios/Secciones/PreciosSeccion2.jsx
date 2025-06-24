import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/preciosSeccion2.module.css";

const PreciosSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.precios.plans : translations.es.precios.plans;

  const plans = [
    { ...textos.starter, id: 'starter' },
    { ...textos.pro, id: 'pro' },
    { ...textos.enterprise, id: 'enterprise' }
  ];

  return (
    <section className={styles.plansSection} id="planes">
      <div className={styles.container}>
        <div className={styles.decorativeCircle}></div>
        
        <div className={styles.header}>
          <h2 className={styles.title}>
            {textos.title}
            <span className={styles.glowDot}></span>
          </h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
          <div className={styles.headerUnderline}></div>
        </div>

        <div className={styles.plansGrid}>
          {plans.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && (
                <>
                  <div className={styles.popularBadge}>
                    {ingles ? "Most Popular" : "Más Popular"}
                  </div>
                  <div className={styles.shine}></div>
                </>
              )}
              
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              <div className={styles.featuresContainer}>
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.ctaContainer}>
                <button className={`${styles.ctaButton} ${plan.popular ? styles.primaryCta : styles.secondaryCta}`}>
                  {plan.cta}
                </button>
              </div>

              {plan.popular && <div className={styles.glow}></div>}
            </div>
          ))}
        </div>

        <div className={styles.guaranteeSection}>
          <div className={styles.guaranteeContent}>
            <span className={styles.guaranteeIcon}>🛡️</span>
            <div className={styles.guaranteeText}>
              <h4 className={styles.guaranteeTitle}>
                {ingles ? "30-day money-back guarantee" : "Garantía de 30 días"}
              </h4>
              <p className={styles.guaranteeDescription}>
                {ingles 
                  ? "Try NetHive risk-free. If you're not completely satisfied, we'll refund your money."
                  : "Prueba NetHive sin riesgo. Si no estás completamente satisfecho, te devolvemos tu dinero."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreciosSeccion2;