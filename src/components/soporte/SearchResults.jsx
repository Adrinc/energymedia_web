import React, { useState, useEffect } from "react";
import { isEnglish } from '../../data/variables';
import { useStore } from '@nanostores/react';
import { searchArticles, searchData, getPopularSearches } from '../../data/searchData';
import styles from "./css/searchResults.module.css";

const SearchResults = () => {
  const ingles = useStore(isEnglish);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const language = ingles ? 'en' : 'es';
  const categories = searchData[language].categories;

  useEffect(() => {
    // Obtener parámetros de URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') || '';
    const category = urlParams.get('category') || 'all';
    const difficulty = urlParams.get('difficulty') || 'all';
    
    setSearchQuery(query);
    setSelectedCategory(category);
    setSelectedDifficulty(difficulty);
    
    performSearch(query, category, difficulty);
  }, [language]);

  const performSearch = (query, category = 'all', difficulty = 'all') => {
    let results = searchArticles(query, language);
    
    // Filtrar por categoría
    if (category !== 'all') {
      results = results.filter(article => article.category === category);
    }
    
    // Filtrar por dificultad
    if (difficulty !== 'all') {
      results = results.filter(article => article.difficulty === difficulty);
    }
    
    setSearchResults(results);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    performSearch(searchQuery, selectedCategory, selectedDifficulty);
    updateURL();
  };

  const handleCategoryFilter = (categoryId) => {
    setSelectedCategory(categoryId);
    performSearch(searchQuery, categoryId, selectedDifficulty);
    updateURL();
  };

  const handleDifficultyFilter = (difficulty) => {
    setSelectedDifficulty(difficulty);
    performSearch(searchQuery, selectedCategory, difficulty);
    updateURL();
  };

  const updateURL = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    if (selectedDifficulty !== 'all') params.set('difficulty', selectedDifficulty);
    
    const newURL = window.location.pathname + '?' + params.toString();
    window.history.pushState({}, '', newURL);
  };

  const handleArticleClick = (article) => {
    // Aquí podrías navegar a la página del artículo específico
    console.log("Opening article:", article.title);
    // Por ahora, mostrar una alerta con la información del artículo
    alert(`${article.title}\n\n${article.content}\n\nCategoría: ${categories.find(cat => cat.id === article.category)?.name}\nDificultad: ${article.difficulty}\nTiempo de lectura: ${article.readTime}`);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    performSearch(searchQuery, 'all', 'all');
    updateURL();
  };

  return (
    <div className={styles.searchPage}>
      <div className={styles.searchHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>
            {ingles ? "Search Results" : "Resultados de Búsqueda"}
          </h1>
          
          {/* Buscador principal */}
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchInputContainer}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ingles ? "Search for MDF, IDF, installation..." : "Buscar MDF, IDF, instalación..."}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                {ingles ? "Search" : "Buscar"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.searchContent}>
          {/* Sidebar con filtros */}
          <aside className={styles.sidebar}>
            <div className={styles.filtersSection}>
              <h3 className={styles.filtersTitle}>
                {ingles ? "Filters" : "Filtros"}
              </h3>
              
              {/* Filtro por categoría */}
              <div className={styles.filterGroup}>
                <h4 className={styles.filterLabel}>
                  {ingles ? "Category" : "Categoría"}
                </h4>
                <div className={styles.filterOptions}>
                  <button
                    className={`${styles.filterOption} ${selectedCategory === 'all' ? styles.active : ''}`}
                    onClick={() => handleCategoryFilter('all')}
                  >
                    {ingles ? "All Categories" : "Todas las Categorías"}
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`${styles.filterOption} ${selectedCategory === category.id ? styles.active : ''}`}
                      onClick={() => handleCategoryFilter(category.id)}
                    >
                      <span className={styles.categoryIcon}>{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro por dificultad */}
              <div className={styles.filterGroup}>
                <h4 className={styles.filterLabel}>
                  {ingles ? "Difficulty" : "Dificultad"}
                </h4>
                <div className={styles.filterOptions}>
                  <button
                    className={`${styles.filterOption} ${selectedDifficulty === 'all' ? styles.active : ''}`}
                    onClick={() => handleDifficultyFilter('all')}
                  >
                    {ingles ? "All Levels" : "Todos los Niveles"}
                  </button>
                  <button
                    className={`${styles.filterOption} ${selectedDifficulty === (ingles ? 'beginner' : 'principiante') ? styles.active : ''}`}
                    onClick={() => handleDifficultyFilter(ingles ? 'beginner' : 'principiante')}
                  >
                    <span className={styles.difficultyBadge}>🟢</span>
                    {ingles ? "Beginner" : "Principiante"}
                  </button>
                  <button
                    className={`${styles.filterOption} ${selectedDifficulty === (ingles ? 'intermediate' : 'intermedio') ? styles.active : ''}`}
                    onClick={() => handleDifficultyFilter(ingles ? 'intermediate' : 'intermedio')}
                  >
                    <span className={styles.difficultyBadge}>🟡</span>
                    {ingles ? "Intermediate" : "Intermedio"}
                  </button>
                  <button
                    className={`${styles.filterOption} ${selectedDifficulty === (ingles ? 'advanced' : 'avanzado') ? styles.active : ''}`}
                    onClick={() => handleDifficultyFilter(ingles ? 'advanced' : 'avanzado')}
                  >
                    <span className={styles.difficultyBadge}>🔴</span>
                    {ingles ? "Advanced" : "Avanzado"}
                  </button>
                </div>
              </div>

              {/* Botón limpiar filtros */}
              {(selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
                <button onClick={clearFilters} className={styles.clearFilters}>
                  {ingles ? "Clear Filters" : "Limpiar Filtros"}
                </button>
              )}
            </div>
          </aside>

          {/* Área principal de resultados */}
          <main className={styles.resultsArea}>
            <div className={styles.resultsHeader}>
              <div className={styles.resultsInfo}>
                <h2 className={styles.resultsTitle}>
                  {searchResults.length} {ingles ? "results found" : "resultados encontrados"}
                  {searchQuery && (
                    <span className={styles.searchTerm}> {ingles ? "for" : "para"} "{searchQuery}"</span>
                  )}
                </h2>
              </div>
            </div>

            {/* Lista de resultados */}
            <div className={styles.resultsList}>
              {searchResults.length > 0 ? (
                searchResults.map((article) => (
                  <article
                    key={article.id}
                    className={styles.resultCard}
                    onClick={() => handleArticleClick(article)}
                  >
                    <div className={styles.cardHeader}>
                      <h3 className={styles.cardTitle}>{article.title}</h3>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardCategory}>
                          {categories.find(cat => cat.id === article.category)?.icon} {" "}
                          {categories.find(cat => cat.id === article.category)?.name}
                        </span>
                        <span className={styles.cardTime}>{article.readTime}</span>
                        <span className={`${styles.cardDifficulty} ${styles[article.difficulty]}`}>
                          {article.difficulty}
                        </span>
                      </div>
                    </div>
                    <p className={styles.cardContent}>{article.content}</p>
                    <div className={styles.cardTags}>
                      {article.tags.slice(0, 4).map((tag, index) => (
                        <span key={index} className={styles.tag}>
                          #{tag}
                        </span>
                      ))}
                      {article.tags.length > 4 && (
                        <span className={styles.moreTags}>
                          +{article.tags.length - 4} {ingles ? "more" : "más"}
                        </span>
                      )}
                    </div>
                  </article>
                ))
              ) : (
                <div className={styles.noResults}>
                  <div className={styles.noResultsIcon}>🔍</div>
                  <h3 className={styles.noResultsTitle}>
                    {ingles ? "No results found" : "No se encontraron resultados"}
                  </h3>
                  <p className={styles.noResultsText}>
                    {ingles 
                      ? "Try adjusting your search terms or filters" 
                      : "Intenta ajustar tus términos de búsqueda o filtros"
                    }
                  </p>
                  {(selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
                    <button onClick={clearFilters} className={styles.clearFiltersButton}>
                      {ingles ? "Clear all filters" : "Limpiar todos los filtros"}
                    </button>
                  )}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;