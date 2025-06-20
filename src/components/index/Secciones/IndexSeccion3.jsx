import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "../css/indexSeccion3.module.css";

const HomeSeccion3 = () => {
  const ingles = useStore(isEnglish);

  const content = {
    es: {
      title: "Una nueva forma de visualizar tu infraestructura",
      description: "Descubre cómo NetHive transforma la gestión de tu infraestructura MDF/IDF con un panel de control intuitivo y potente.",
      stats: [
        { value: "100%", label: "Visibilidad de red" },
        { value: "24/7", label: "Monitoreo en tiempo real" },
        { value: "-60%", label: "Reducción de incidentes" },
        { value: "+95%", label: "Precisión de inventario" }
      ],
      demoButton: "Ver Demo Interactiva",
      imageAlt: "Dashboard de NetHive"
    },
    en: {
      title: "A new way to visualize your infrastructure",
      description: "Discover how NetHive transforms your MDF/IDF infrastructure management with an intuitive and powerful dashboard.",
      stats: [
        { value: "100%", label: "Network visibility" },
        { value: "24/7", label: "Real-time monitoring" },
        { value: "-60%", label: "Incident reduction" },
        { value: "+95%", label: "Inventory accuracy" }
      ],
      demoButton: "View Interactive Demo",
      imageAlt: "NetHive Dashboard"
    }
  };

  const textos = ingles ? content.en : content.es;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.description}>{textos.description}</p>
          <div className={styles.statsGrid}>
            {textos.stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
          <button className={styles.demoButton}>
            <span className={styles.demoIcon}>▶️</span>
            {textos.demoButton}
          </button>
        </div>
        <div className={styles.dashboardPreview}>
          <img 
            src="/image/global/dashboard1.png" 
            alt={textos.imageAlt} 
            className={styles.dashboardImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion3;