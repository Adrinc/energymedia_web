import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "../css/homeSeccion1.module.css";

const HomeSeccion1 = () => {
  const ingles = useStore(isEnglish);

  const content = {
    es: {
      title: "Administra tu infraestructura de red y tu inventario como nunca antes",
      subtitle: "El panel centralizado más moderno para gestionar MDF, IDF y todos tus activos de red. Preciso. Visual. Escalable.",
      cta: "¡Comienza gratis!",
      legal: "Sin tarjeta de crédito, solo toma 1 minuto."
    },
    en: {
      title: "Manage your network infrastructure and inventory like never before",
      subtitle: "The most modern centralized panel to manage MDF, IDF and all your network assets. Precise. Visual. Scalable.",
      cta: "Start for free!",
      legal: "No credit card required, takes only 1 minute."
    }
  };

  const textos = ingles ? content.en : content.es;

  return (
    <section className={styles.sections}>
      <div className={styles.backgroundIllustration}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>{textos.title}</h1>
        <p className={styles.subtitle}>{textos.subtitle}</p>
        <button className={styles.ctaButton}>
          {textos.cta}
        </button>
        <p className={styles.legalText}>{textos.legal}</p>
      </div>
    </section>
  );
};

export default HomeSeccion1;