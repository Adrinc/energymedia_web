import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/funcionalidadesSeccion3.module.css";

const FuncionalidadesSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.funcionalidades.screenshots : translations.es.funcionalidades.screenshots;
  
  const [activeTab, setActiveTab] = useState(0);

  const screenshots = [
    {
      id: 'dashboard',
      title: textos.dashboard,
      image: '/image/global/dashboard1.png',
      description: ingles 
        ? "Complete control panel with real-time metrics and infrastructure status overview."
        : "Panel de control completo con métricas en tiempo real y vista general del estado de la infraestructura."
    },
    {
      id: 'topology',
      title: textos.topology,
      image: '/image/global/dashboard1.png', // Placeholder - puedes cambiar por la imagen correcta
      description: ingles
        ? "Interactive network topology visualization with drag-and-drop functionality."
        : "Visualización interactiva de topología de red con funcionalidad de arrastrar y soltar."
    },
    {
      id: 'equipment',
      title: textos.equipment,
      image: '/image/global/dashboard1.png', // Placeholder - puedes cambiar por la imagen correcta
      description: ingles
        ? "Detailed equipment cards with specifications, status, and maintenance history."
        : "Fichas detalladas de equipos con especificaciones, estado e historial de mantenimiento."
    }
  ];

  return (
    <section className={styles.screenshotsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>

        <div className={styles.screenshotsContainer}>
          <div className={styles.tabNavigation}>
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {screenshot.title}
              </button>
            ))}
          </div>

          <div className={styles.screenshotDisplay}>
            <div className={styles.imageContainer}>
              <img 
                src={screenshots[activeTab].image} 
                alt={screenshots[activeTab].title}
                className={styles.screenshot}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h3 className={styles.overlayTitle}>{screenshots[activeTab].title}</h3>
                  <p className={styles.overlayDescription}>{screenshots[activeTab].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuncionalidadesSeccion3;