import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "../css/indexSeccion5.module.css";

const HomeSeccion5 = () => {
  const ingles = useStore(isEnglish);

  const content = {
    es: {
      title: "Planes y Precios",
      subtitle: "Elige el plan que mejor se adapte a tus necesidades",
      plans: [
        {
          name: "Starter",
          price: "$99",
          period: "/mes",
          popular: false,
          features: [
            "Hasta 100 dispositivos",
            "1 MDF + 2 IDFs",
            "Alertas básicas",
            "Reportes mensuales",
            "Soporte por email",
            "1 usuario administrador"
          ],
          buttonText: "Comenzar prueba"
        },
        {
          name: "Pro",
          price: "$299",
          period: "/mes",
          popular: true,
          features: [
            "Hasta 500 dispositivos",
            "3 MDFs + 10 IDFs",
            "Alertas avanzadas",
            "Reportes personalizados",
            "Soporte prioritario 24/7",
            "5 usuarios con roles"
          ],
          buttonText: "Prueba gratuita de 14 días"
        },
        {
          name: "Enterprise",
          price: "Personalizado",
          period: "",
          popular: false,
          features: [
            "Dispositivos ilimitados",
            "MDFs + IDFs ilimitados",
            "Alertas personalizadas",
            "API completa",
            "Soporte dedicado",
            "Usuarios ilimitados"
          ],
          buttonText: "Contactar ventas"
        }
      ]
    },
    en: {
      title: "Plans & Pricing",
      subtitle: "Choose the plan that best fits your needs",
      plans: [
        {
          name: "Starter",
          price: "$99",
          period: "/month",
          popular: false,
          features: [
            "Up to 100 devices",
            "1 MDF + 2 IDFs",
            "Basic alerts",
            "Monthly reports",
            "Email support",
            "1 admin user"
          ],
          buttonText: "Start trial"
        },
        {
          name: "Pro",
          price: "$299",
          period: "/month",
          popular: true,
          features: [
            "Up to 500 devices",
            "3 MDFs + 10 IDFs",
            "Advanced alerts",
            "Custom reports",
            "24/7 priority support",
            "5 users with roles"
          ],
          buttonText: "14-day free trial"
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          popular: false,
          features: [
            "Unlimited devices",
            "Unlimited MDFs + IDFs",
            "Custom alerts",
            "Full API access",
            "Dedicated support",
            "Unlimited users"
          ],
          buttonText: "Contact sales"
        }
      ]
    }
  };

  const textos = ingles ? content.en : content.es;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.decorativeCircle}></div>
          <h2 className={styles.title}>
            {textos.title}
            <span className={styles.glowDot}></span>
          </h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
          <div className={styles.headerUnderline}></div>
        </div>
        <div className={styles.pricingGrid}>
          {textos.plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && (
                <>
                  <span className={styles.popularBadge}>
                    {ingles ? "Most popular" : "Más popular"}
                  </span>
                  <div className={styles.shine}></div>
                </>
              )}
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.price}>
                {plan.price}
                <span className={styles.period}>{plan.period}</span>
              </div>
              <ul className={styles.featuresList}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    <span className={styles.featureIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`${styles.ctaButton} ${plan.popular ? styles.primary : styles.secondary}`}
              >
                {plan.buttonText}
              </button>
              {plan.popular && <div className={styles.glow}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion5;