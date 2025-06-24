import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/soporteSeccion1.module.css";

const SoporteSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.soporte.hero : translations.es.soporte.hero;
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí se implementaría la funcionalidad de búsqueda
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.backgroundPattern}></div>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.headerContent}>
          <div className={styles.iconContainer}>
            <span className={styles.helpIcon}>🛟</span>
          </div>
          
          <h1 className={styles.title}>{textos.title}</h1>
          <p className={styles.subtitle}>{textos.subtitle}</p>
          <p className={styles.description}>{textos.description}</p>
        </div>
        
        <div className={styles.searchContainer}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchInputContainer}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={textos.searchPlaceholder}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                {ingles ? "Search" : "Buscar"}
              </button>
            </div>
          </form>
          
          <div className={styles.quickActions}>
            <span className={styles.quickActionsLabel}>
              {ingles ? "Quick actions:" : "Acciones rápidas:"}
            </span>
            <div className={styles.actionButtons}>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>💬</span>
                {ingles ? "Live Chat" : "Chat en Vivo"}
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>🎫</span>
                {ingles ? "Create Ticket" : "Crear Ticket"}
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>📧</span>
                {ingles ? "Email Support" : "Email Soporte"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>{ingles ? "Explore help" : "Explorar ayuda"}</span>
        <div className={styles.scrollIcon}></div>
      </div>
    </section>
  );
};

export default SoporteSeccion1;