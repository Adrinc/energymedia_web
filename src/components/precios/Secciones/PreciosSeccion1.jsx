import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/preciosSeccion1.module.css";

const PreciosSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.precios.hero : translations.es.precios.hero;

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.backgroundPattern}></div>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.titleContainer}>
            <h1 className={styles.heroTitle}>
              {textos.title} <span className={styles.highlight}>{textos.subtitle}</span>
            </h1>
          </div>
          <p className={styles.heroDescription}>
            {textos.description}
          </p>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.pricingIcons}>
            <div className={styles.iconCard}>
              <span className={styles.icon}>💰</span>
              <span className={styles.iconLabel}>{ingles ? "Starter" : "Inicial"}</span>
            </div>
            <div className={styles.iconCard}>
              <span className={styles.icon}>🚀</span>
              <span className={styles.iconLabel}>{ingles ? "Professional" : "Profesional"}</span>
            </div>
            <div className={styles.iconCard}>
              <span className={styles.icon}>🏢</span>
              <span className={styles.iconLabel}>{ingles ? "Enterprise" : "Empresarial"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>{ingles ? "Explore plans" : "Explora los planes"}</span>
        <div className={styles.scrollIcon}></div>
      </div>
    </section>
  );
};

export default PreciosSeccion1;