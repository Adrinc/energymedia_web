import React, { useState, useEffect } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import { searchArticles, searchData, getPopularSearches } from '../../../data/searchData';
import styles from "../css/soporteSeccion1.module.css";

const SoporteSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.soporte.hero : translations.es.soporte.hero;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const language = ingles ? 'en' : 'es';

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchArticles(searchQuery, language);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchQuery, language]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navegar a la página de resultados de búsqueda
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handlePopularSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
    // Navegar directamente a la página de resultados
    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
  };

  const handleResultClick = (article) => {
    // Por ahora, mostrar el contenido del artículo en una alerta
    // En el futuro podrías crear páginas individuales para cada artículo
    alert(`${article.title}\n\n${article.content}\n\nCategoría: ${searchData[language].categories.find(cat => cat.id === article.category)?.name}\nDificultad: ${article.difficulty}\nTiempo de lectura: ${article.readTime}`);
    setShowResults(false);
  };

  const handleViewAllResults = () => {
    // Navegar a la página de resultados completa
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  const popularSearches = getPopularSearches(language);

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
            
            {/* Resultados de búsqueda en tiempo real */}
            {showResults && searchResults.length > 0 && (
              <div className={styles.searchResultsDropdown}>
                <div className={styles.resultsHeader}>
                  <span className={styles.resultsCount}>
                    {searchResults.length} {ingles ? "results found" : "resultados encontrados"}
                  </span>
                </div>
                <div className={styles.resultsList}>
                  {searchResults.slice(0, 5).map((article) => (
                    <div 
                      key={article.id} 
                      className={styles.resultItem}
                      onClick={() => handleResultClick(article)}
                    >
                      <div className={styles.resultContent}>
                        <h4 className={styles.resultTitle}>{article.title}</h4>
                        <p className={styles.resultSnippet}>
                          {article.content.substring(0, 100)}...
                        </p>
                        <div className={styles.resultMeta}>
                          <span className={styles.resultCategory}>
                            {searchData[language].categories.find(cat => cat.id === article.category)?.icon} {" "}
                            {searchData[language].categories.find(cat => cat.id === article.category)?.name}
                          </span>
                          <span className={styles.resultTime}>{article.readTime}</span>
                          <span className={`${styles.resultDifficulty} ${styles[article.difficulty]}`}>
                            {article.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {searchResults.length > 5 && (
                  <div className={styles.viewAllResults}>
                    <button 
                      className={styles.viewAllButton}
                      onClick={handleViewAllResults}
                    >
                      {ingles ? `View all ${searchResults.length} results` : `Ver todos los ${searchResults.length} resultados`}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mensaje cuando no hay resultados */}
            {showResults && searchResults.length === 0 && (
              <div className={styles.noResults}>
                <div className={styles.noResultsIcon}>🔍</div>
                <p className={styles.noResultsText}>
                  {ingles ? "No results found" : "No se encontraron resultados"}
                </p>
                <p className={styles.noResultsSubtext}>
                  {ingles ? "Try searching for MDF, IDF, installation, or maintenance" : "Intenta buscar MDF, IDF, instalación o mantenimiento"}
                </p>
              </div>
            )}
          </form>
          
          {/* Búsquedas populares */}
          <div className={styles.popularSearches}>
            <h3 className={styles.popularTitle}>
              {ingles ? "Popular searches:" : "Búsquedas populares:"}
            </h3>
            <div className={styles.searchTags}>
              {popularSearches.map((search, index) => (
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

        {/* Estadísticas de soporte de SoporteSeccion2 */}
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

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>{ingles ? "Explore help" : "Explorar ayuda"}</span>
        <div className={styles.scrollIcon}></div>
      </div>
    </section>
  );
};

export default SoporteSeccion1;