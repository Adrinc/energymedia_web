import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/soporteSeccion4.module.css";

const SoporteSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.soporte.guides : translations.es.soporte.guides;
  const [selectedGuide, setSelectedGuide] = useState(null);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'principiante':
      case 'beginner':
        return '#10b981';
      case 'intermedio':
      case 'intermediate':
        return '#f59e0b';
      case 'avanzado':
      case 'advanced':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <section className={styles.guidesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>

        <div className={styles.guidesGrid}>
          {textos.featured.map((guide, index) => (
            <div 
              key={index} 
              className={styles.guideCard}
              onClick={() => setSelectedGuide(guide)}
            >
              <div className={styles.guideImage}>
                <img 
                  src={guide.thumbnail} 
                  alt={guide.title}
                  className={styles.thumbnail}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.playButton}>
                    {guide.type === 'video' ? '▶️' : '📖'}
                  </div>
                </div>
                <div className={styles.typeTag}>
                  <span className={styles.typeIcon}>
                    {guide.type === 'video' ? '🎥' : '📄'}
                  </span>
                  {guide.type === 'video' 
                    ? (ingles ? 'Video' : 'Video')
                    : (ingles ? 'Article' : 'Artículo')
                  }
                </div>
              </div>

              <div className={styles.guideContent}>
                <div className={styles.guideHeader}>
                  <h3 className={styles.guideTitle}>{guide.title}</h3>
                  <div 
                    className={styles.difficultyBadge}
                    style={{ backgroundColor: getDifficultyColor(guide.difficulty) }}
                  >
                    {guide.difficulty}
                  </div>
                </div>

                <p className={styles.guideDescription}>{guide.description}</p>

                <div className={styles.guideMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaIcon}>⏱️</span>
                    <span className={styles.metaText}>
                      {guide.duration || guide.readTime}
                    </span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaIcon}>👤</span>
                    <span className={styles.metaText}>
                      {ingles ? 'Expert level' : 'Nivel experto'}
                    </span>
                  </div>
                </div>

                <button className={styles.startButton}>
                  <span className={styles.buttonIcon}>
                    {guide.type === 'video' ? '▶️' : '👀'}
                  </span>
                  {guide.type === 'video' 
                    ? (ingles ? 'Watch video' : 'Ver video')
                    : (ingles ? 'Read article' : 'Leer artículo')
                  }
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.moreGuides}>
          <div className={styles.moreGuidesContent}>
            <h3 className={styles.moreTitle}>
              {ingles ? "Looking for more tutorials?" : "¿Buscas más tutoriales?"}
            </h3>
            <p className={styles.moreDescription}>
              {ingles 
                ? "Explore our complete library with over 100 step-by-step guides for all skill levels."
                : "Explora nuestra biblioteca completa con más de 100 guías paso a paso para todos los niveles."
              }
            </p>
            <div className={styles.moreButtons}>
              <button className={styles.browseButton}>
                <span className={styles.buttonIcon}>📚</span>
                {ingles ? "Browse all guides" : "Ver todas las guías"}
              </button>
              <button className={styles.requestButton}>
                <span className={styles.buttonIcon}>💡</span>
                {ingles ? "Request tutorial" : "Solicitar tutorial"}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.learningPath}>
          <div className={styles.pathHeader}>
            <h3 className={styles.pathTitle}>
              {ingles ? "Recommended learning path" : "Ruta de aprendizaje recomendada"}
            </h3>
            <p className={styles.pathSubtitle}>
              {ingles 
                ? "Follow this sequence to master NetHive from basics to advanced features"
                : "Sigue esta secuencia para dominar NetHive desde lo básico hasta funciones avanzadas"
              }
            </p>
          </div>

          <div className={styles.pathSteps}>
            <div className={styles.pathStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>
                  {ingles ? "Initial Setup" : "Configuración Inicial"}
                </h4>
                <p className={styles.stepDescription}>
                  {ingles ? "Basic installation and configuration" : "Instalación y configuración básica"}
                </p>
              </div>
            </div>

            <div className={styles.pathStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>
                  {ingles ? "Inventory Management" : "Gestión de Inventario"}
                </h4>
                <p className={styles.stepDescription}>
                  {ingles ? "Add and organize your equipment" : "Agregar y organizar tu equipamiento"}
                </p>
              </div>
            </div>

            <div className={styles.pathStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>
                  {ingles ? "Advanced Features" : "Funciones Avanzadas"}
                </h4>
                <p className={styles.stepDescription}>
                  {ingles ? "Integrations and automation" : "Integraciones y automatización"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoporteSeccion4;