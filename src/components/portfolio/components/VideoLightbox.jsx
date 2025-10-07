// VideoLightbox.jsx
// Modal cinematográfico para reproducir videos en pantalla completa

import { useEffect } from 'react';
import styles from '../css/videoLightbox.module.css';

const VideoLightbox = ({ video, onClose }) => {
  useEffect(() => {
    // Cerrar con tecla ESC
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Construir URL de Vimeo con parámetros (mismo patrón que IndexSeccion7)
  const getVimeoUrl = (videoId, autoplay = 1) => {
    return `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay}&color=672E92&title=0&byline=0&portrait=0`;
  };

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        {/* Botón cerrar */}
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        {/* Video player */}
        <div className={styles.videoWrapper}>
          <iframe
            key={video.vimeoId}
            src={getVimeoUrl(video.vimeoId)}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className={styles.videoPlayer}
            title={video.title}
          />
        </div>

        {/* Sidebar con info */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <h2 className={styles.videoTitle}>{video.title}</h2>
            <p className={styles.videoDescription}>{video.description}</p>

            {/* Metadata */}
            <div className={styles.metadata}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Industria:</span>
                <span className={styles.metaValue}>{video.industry}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Formato:</span>
                <span className={styles.metaValue}>{video.format}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Estilo:</span>
                <span className={styles.metaValue}>{video.style}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Idioma:</span>
                <span className={styles.metaValue}>{video.language}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Duración:</span>
                <span className={styles.metaValue}>{video.duration}</span>
              </div>
            </div>

            {/* Tags */}
            <div className={styles.tags}>
              {video.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLightbox;
