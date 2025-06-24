import React, { useEffect, useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/funcionalidadesSeccion1.module.css";

const FuncionalidadesSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.funcionalidades.hero : translations.es.funcionalidades.hero;

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            {textos.title} <span className={styles.highlight}>{textos.subtitle}</span>
          </h1>
          <p className={styles.heroDescription}>
            {textos.description}
          </p>
        </div>
        
        <div className={styles.heroIcon}>
          <div className={styles.iconContainer}>
            <span className={styles.mainIcon}>🔧</span>
            <div className={styles.floatingIcons}>
              <span className={styles.floatingIcon}>📡</span>
              <span className={styles.floatingIcon}>🗺️</span>
              <span className={styles.floatingIcon}>📊</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>{ingles ? "Discover features" : "Descubre las funcionalidades"}</span>
        <div className={styles.scrollIcon}></div>
      </div>
    </section>
  );
};

export default FuncionalidadesSeccion1;