import React, { useRef, useEffect } from "react";
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import { useStore } from '@nanostores/react';
import RiveComponent from "../../global/animations/riveComponent";
import styles from '../css/serviciosExpanded.module.css';

const ServiciosExpanded = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  const rowRef = useRef(null);
  useEffect(() => {
    const row = rowRef.current;
    let hasAnimated = false;
    if (!row) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          row.classList.add(styles.fadeInUp);
          hasAnimated = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(row);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="servicios1" className={styles.sections}>
      <div className={`${styles.gradientBackground} ${styles.gradientTop}`}></div>
      <div className={`${styles.gradientBackground} ${styles.gradientBottom}`}></div>
      <div className={styles.rowContainer} ref={rowRef}>
        <div className={`${styles.col} ${styles.textColumn}`}>
          <h2>{t.serviciosExpanded.titulo1}</h2>
          <h3>{t.serviciosExpanded.titulo2}</h3>
          <p>{t.serviciosExpanded.descripcion1}</p>
          <h3>{t.serviciosExpanded.titulo3}</h3>
          <p>{t.serviciosExpanded.descripcion2}</p>
          <h3>{t.serviciosExpanded.titulo4}</h3>
          <p>{t.serviciosExpanded.descripcion3}</p>
        </div>
        <div className={`${styles.col} ${styles.rivecomp}`}>
          <RiveComponent
            src="/rive/macbook_animation.riv"
            artboard="macbook_animation"
            stateMachines="State Machine 1"
            autoplay={true}
            fit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiciosExpanded;
