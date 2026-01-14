import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../css/videoLightbox.module.css';

/**
 * VideoLightbox - Modal reutilizable para reproducir videos de Supabase Storage
 * Incluye: Player HTML5, título, descripción, navegación prev/next, tags
 */

const VideoLightbox = ({
  selectedVideo,
  currentVideoIndex,
  totalVideos,
  onClose,
  onNext,
  onPrev,
  ingles = false
}) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Resetear estado cuando cambia el video
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    
    // Reproducir automáticamente cuando el video esté listo
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [selectedVideo?.id]);

  if (!selectedVideo) return null;

  // Handlers del video
  const handleVideoLoaded = () => {
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn('Autoplay blocked:', err);
      });
    }
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Formatear duración
  const formatDuration = (seconds) => {
    if (!seconds) return null;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Formatear reproducciones
  const formatReproductions = (count) => {
    if (!count) return '0';
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.lightboxBackdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        {/* Botones de navegación FUERA del modal, en el backdrop */}
        {totalVideos > 1 && (
          <>
            <button 
              className={styles.navButtonPrev}
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              aria-label={ingles ? "Previous video" : "Video anterior"}
            >
              ‹
            </button>
            
            <button 
              className={styles.navButtonNext}
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              aria-label={ingles ? "Next video" : "Video siguiente"}
            >
              ›
            </button>
          </>
        )}

        <motion.div
          className={styles.lightboxContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón de cierre (esquina superior derecha) */}
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label={ingles ? "Close" : "Cerrar"}
          >
            ✕
          </button>

          {/* Contenido principal */}
          <div className={styles.lightboxLayout}>
            {/* Título del video */}
            <div className={styles.videoHeader}>
              <h3 className={styles.videoTitle}>{selectedVideo.title}</h3>
              <div className={styles.videoCounter}>
                {currentVideoIndex + 1} / {totalVideos}
              </div>
            </div>

            {/* Player de Video HTML5 */}
            <div className={styles.playerWrapper}>
              {isLoading && (
                <div className={styles.loadingOverlay}>
                  <div className={styles.spinner}></div>
                  <p>{ingles ? "Loading video..." : "Cargando video..."}</p>
                </div>
              )}
              
              {hasError ? (
                <div className={styles.errorOverlay}>
                  <div className={styles.errorIcon}>⚠️</div>
                  <p>{ingles ? "Error loading video" : "Error al cargar el video"}</p>
                  <button 
                    className={styles.retryButton}
                    onClick={() => {
                      setHasError(false);
                      setIsLoading(true);
                      if (videoRef.current) {
                        videoRef.current.load();
                      }
                    }}
                  >
                    {ingles ? "Retry" : "Reintentar"}
                  </button>
                </div>
              ) : (
                <video
                  ref={videoRef}
                  key={selectedVideo.id}
                  className={styles.videoPlayer}
                  controls
                  playsInline
                  preload="auto"
                  poster={selectedVideo.posterUrl || undefined}
                  onLoadedData={handleVideoLoaded}
                  onError={handleVideoError}
                >
                  <source src={selectedVideo.fileUrl} type={selectedVideo.mimeType || 'video/mp4'} />
                  {ingles 
                    ? "Your browser does not support the video tag." 
                    : "Tu navegador no soporta el elemento de video."}
                </video>
              )}
            </div>

            {/* Descripción y metadata del video */}
            <div className={styles.videoDescription}>
              {selectedVideo.description && (
                <p className={styles.descriptionText}>{selectedVideo.description}</p>
              )}
              
              <div className={styles.videoMeta}>
                {/* Tags */}
                {selectedVideo.tags && selectedVideo.tags.length > 0 && (
                  <div className={styles.tagsContainer}>
                    {selectedVideo.tags.map((tag, index) => (
                      <span key={index} className={styles.tagBadge}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Stats */}
                <div className={styles.statsContainer}>
                  {selectedVideo.duration && (
                    <span className={styles.statItem}>
                      ⏱️ {formatDuration(selectedVideo.duration)}
                    </span>
                  )}
                  {selectedVideo.reproductions !== undefined && (
                    <span className={styles.statItem}>
                      👁️ {formatReproductions(selectedVideo.reproductions)} {ingles ? "views" : "vistas"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoLightbox;
