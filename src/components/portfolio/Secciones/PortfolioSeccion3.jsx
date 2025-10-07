// PortfolioSeccion3.jsx
// Grid de videos con filtrado dinámico y lightbox

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsPortfolio } from '../../../data/translationsPortfolio';
import { portfolioVideos } from '../../../data/portfolioData';
import VideoLightbox from '../components/VideoLightbox';
import styles from '../css/portfolioSeccion3.module.css';

const PortfolioSeccion3 = ({ filters }) => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsPortfolio.en : translationsPortfolio.es;
  
  const [isVisible, setIsVisible] = useState(false);
  const [filteredVideos, setFilteredVideos] = useState(portfolioVideos);
  const [displayedVideos, setDisplayedVideos] = useState([]);
  const [videosToShow, setVideosToShow] = useState(9);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
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

  // Aplicar filtros
  useEffect(() => {
    let filtered = portfolioVideos;

    if (filters.industry && filters.industry !== 'Todos') {
      filtered = filtered.filter(video => video.industry === filters.industry);
    }

    if (filters.format && filters.format !== 'all') {
      filtered = filtered.filter(video => video.format === filters.format);
    }

    if (filters.style && filters.style !== 'Todos') {
      filtered = filtered.filter(video => video.style === filters.style);
    }

    setFilteredVideos(filtered);
    setVideosToShow(9); // Reset pagination
  }, [filters]);

  // Update displayed videos
  useEffect(() => {
    setDisplayedVideos(filteredVideos.slice(0, videosToShow));
  }, [filteredVideos, videosToShow]);

  const loadMore = () => {
    setVideosToShow(prev => prev + 6);
  };

  const openLightbox = (video) => {
    setSelectedVideo(video);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  // Obtener thumbnail de Vimeo usando API pública (mismo patrón que IndexSeccion7)
  const getVimeoThumbnail = (videoId) => {
    return `https://vumbnail.com/${videoId}.jpg`;
  };

  // Construir URL de Vimeo con parámetros (mismo patrón que IndexSeccion7)
  const getVimeoUrl = (videoId, autoplay = 0, muted = 0, loop = 0, controls = 1) => {
    return `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay}&muted=${muted}&loop=${loop}&autopause=0&controls=${controls}&title=0&byline=0&portrait=0`;
  };

  const hasMoreVideos = displayedVideos.length < filteredVideos.length;
  const resultsText = filteredVideos.length === 1 ? t.videoGrid.resultsCountSingle : t.videoGrid.resultsCount;

  return (
    <section ref={sectionRef} id="portfolio-grid" className={styles.gridSection}>
      <div className={styles.container}>
        {/* Contador de resultados */}
        <div className={`${styles.resultsCounter} ${isVisible ? styles.fadeIn : ''}`}>
          <span className={styles.resultsNumber}>{filteredVideos.length}</span>
          <span className={styles.resultsLabel}>{resultsText}</span>
        </div>

        {/* Grid de videos */}
        {filteredVideos.length > 0 ? (
          <>
            <div className={`${styles.videoGrid} ${isVisible ? styles.fadeInUp : ''}`}>
              {displayedVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={styles.videoCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openLightbox(video)}
                >
                  {/* Thumbnail */}
                  <div className={styles.videoThumbnail}>
                    {/* Usar thumbnail estático en lugar de iframe embebido */}
                    <img 
                      src={getVimeoThumbnail(video.vimeoId)}
                      alt={video.title}
                      className={styles.videoThumbImg}
                      loading="lazy"
                    />
                    <div className={styles.videoOverlay}>
                      <button className={styles.playButton}>
                        ▶ {t.videoGrid.playButton}
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className={styles.videoInfo}>
                    <h3 className={styles.videoTitle}>{video.title}</h3>
                    <div className={styles.videoMeta}>
                      <span className={styles.metaBadge}>{video.industry}</span>
                      <span className={styles.metaBadge}>{video.format}</span>
                      <span className={styles.metaDuration}>{video.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón Cargar Más */}
            {hasMoreVideos && (
              <div className={styles.loadMoreWrapper}>
                <button onClick={loadMore} className={styles.loadMoreBtn}>
                  {t.videoGrid.loadMore} ({filteredVideos.length - displayedVideos.length})
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>🔍</div>
            <p className={styles.noResultsText}>{t.videoGrid.noResults}</p>
            <p className={styles.noResultsHint}>{t.videoGrid.tryAgain}</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedVideo && (
        <VideoLightbox
          video={selectedVideo}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
};

export default PortfolioSeccion3;
