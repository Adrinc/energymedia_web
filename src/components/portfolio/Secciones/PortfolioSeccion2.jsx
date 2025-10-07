// PortfolioSeccion2.jsx
// Filtros de portfolio (industria, formato, estilo)

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsPortfolio } from '../../../data/translationsPortfolio';
import { industries, formats, styles as productionStyles } from '../../../data/portfolioData';
import styles from '../css/portfolioSeccion2.module.css';

const PortfolioSeccion2 = ({ onFilterChange }) => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsPortfolio.en : translationsPortfolio.es;
  
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('Todos');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('Todos');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Notificar al padre cuando cambian los filtros
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        industry: selectedIndustry,
        format: selectedFormat,
        style: selectedStyle
      });
    }
  }, [selectedIndustry, selectedFormat, selectedStyle, onFilterChange]);

  const resetFilters = () => {
    setSelectedIndustry('Todos');
    setSelectedFormat('all');
    setSelectedStyle('Todos');
  };

  const hasActiveFilters = selectedIndustry !== 'Todos' || selectedFormat !== 'all' || selectedStyle !== 'Todos';

  return (
    <section ref={sectionRef} id="portfolio-filters" className={styles.filtersSection}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.title}>{t.filters.title}</h2>
          <p className={styles.subtitle}>{t.filters.subtitle}</p>
        </div>

        <div className={`${styles.filtersWrapper} ${isVisible ? styles.fadeInUp : ''}`}>
          {/* Filtro de Industria */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>
              {t.filters.industryLabel}
            </label>
            <div className={styles.filterButtons}>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`${styles.filterBtn} ${selectedIndustry === industry ? styles.active : ''}`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro de Formato */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>
              {t.filters.formatLabel}
            </label>
            <div className={styles.filterButtons}>
              {formats.map((format) => (
                <button
                  key={format.id}
                  onClick={() => setSelectedFormat(format.id)}
                  className={`${styles.filterBtn} ${styles.formatBtn} ${selectedFormat === format.id ? styles.active : ''}`}
                  title={format.description}
                >
                  <span className={styles.formatIcon}>{format.icon}</span>
                  <span className={styles.formatLabel}>{format.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filtro de Estilo */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>
              {t.filters.styleLabel}
            </label>
            <div className={styles.filterButtons}>
              {productionStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`${styles.filterBtn} ${selectedStyle === style ? styles.active : ''}`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Botón Reset */}
          {hasActiveFilters && (
            <button onClick={resetFilters} className={styles.resetBtn}>
              ✕ {t.filters.resetFilters}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSeccion2;
