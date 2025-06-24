import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/preciosSeccion3.module.css";

const PreciosSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.precios.comparison : translations.es.precios.comparison;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className={styles.comparisonSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>

        <div className={styles.categoryTabs}>
          {textos.categories.map((category, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${activeCategory === index ? styles.active : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={styles.comparisonTable}>
          <div className={styles.tableHeader}>
            <div className={styles.featureColumn}>
              <span className={styles.columnTitle}>
                {ingles ? "Features" : "Características"}
              </span>
            </div>
            <div className={styles.planColumn}>
              <span className={styles.planName}>Starter</span>
            </div>
            <div className={styles.planColumn}>
              <span className={styles.planName}>Professional</span>
              <span className={styles.popularTag}>
                {ingles ? "Popular" : "Popular"}
              </span>
            </div>
            <div className={styles.planColumn}>
              <span className={styles.planName}>Enterprise</span>
            </div>
          </div>

          <div className={styles.tableBody}>
            {textos.categories[activeCategory].features.map((feature, index) => (
              <div key={index} className={styles.featureRow}>
                <div className={styles.featureCell}>
                  <span className={styles.featureName}>{feature.name}</span>
                </div>
                <div className={styles.valueCell}>
                  <span className={styles.featureValue}>{feature.starter}</span>
                </div>
                <div className={`${styles.valueCell} ${styles.highlighted}`}>
                  <span className={styles.featureValue}>{feature.pro}</span>
                </div>
                <div className={styles.valueCell}>
                  <span className={styles.featureValue}>{feature.enterprise}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Need a custom solution?" : "¿Necesitas una solución personalizada?"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Contact our sales team for enterprise pricing and custom features tailored to your organization."
                : "Contacta a nuestro equipo de ventas para precios empresariales y funcionalidades personalizadas para tu organización."
              }
            </p>
            <button className={styles.ctaButton}>
              {ingles ? "Contact Sales Team" : "Contactar Equipo de Ventas"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreciosSeccion3;