import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/soporteSeccion2.module.css";

const SoporteSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.soporte.search : translations.es.soporte.search;
  const [searchQuery, setSearchQuery] = useState("");

  const handlePopularSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
    // Aquí se implementaría la funcionalidad de búsqueda
    console.log("Searching for:", searchTerm);
  };

  return (
    <section className={styles.searchSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ingles ? "What can we help you with?" : "¿En qué podemos ayudarte?"}
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              {ingles ? "Search" : "Buscar"}
            </button>
          </div>
        </div>

        <div className={styles.popularSearches}>
          <h3 className={styles.popularTitle}>
            {ingles ? "Popular searches:" : "Búsquedas populares:"}
          </h3>
          <div className={styles.searchTags}>
            {textos.popularSearches.map((search, index) => (
              <button
                key={index}
                className={styles.searchTag}
                onClick={() => handlePopularSearch(search)}
              >
                <span className={styles.tagIcon}>🔥</span>
                {search}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.quickStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>
              {ingles ? "Articles" : "Artículos"}
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>
              {ingles ? "Support" : "Soporte"}
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>
              {ingles ? "Satisfaction" : "Satisfacción"}
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>2min</div>
            <div className={styles.statLabel}>
              {ingles ? "Avg Response" : "Respuesta Media"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoporteSeccion2;