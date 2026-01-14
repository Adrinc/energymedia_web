import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish, isDarkMode } from '../../../data/variables';
import { useMediaVideos, splitVideosIntoRows, incrementVideoReproduction } from '../../../hooks/useMediaVideos';
import VideoLightbox from '../components/VideoLightbox';
import styles from '../css/indexSeccion4.module.css';

const IndexSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const darkMode = useStore(isDarkMode);
  const [pausedRow, setPausedRow] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentCarousel, setCurrentCarousel] = useState(null);

  // Obtener videos desde Supabase
  const { videos, loading, error } = useMediaVideos({ 
    limit: 50, 
    orderBy: 'created_at_timestamp',
    ascending: false 
  });

  // Dividir videos en 3 filas para el carrusel
  const [rowOneVideos, rowTwoVideos, rowThreeVideos] = splitVideosIntoRows(videos, 3);

  const content = ingles ? {
    header: {
      title: "Stories That Energize",
      subtitle: "Capturing moments with the energy that defines us.",
      seeMore: "See more"
    },
    loading: "Loading videos...",
    error: "Error loading videos",
    noVideos: "No videos available"
  } : {
    header: {
      title: "Historias Que Energizan",
      subtitle: "Capturando momentos con la energía que nos define.",
      seeMore: "Ver más"
    },
    loading: "Cargando videos...",
    error: "Error al cargar videos",
    noVideos: "No hay videos disponibles"
  };

  const t = content;

  // Abrir lightbox
  const openLightbox = async (video, carouselType, videosArray) => {
    const index = videosArray.findIndex(v => v.id === video.id);
    setCurrentVideoIndex(index);
    setSelectedVideo(video);
    setCurrentCarousel({ type: carouselType, videos: videosArray });
    document.body.style.overflow = 'hidden';
    
    // Incrementar contador de reproducciones
    await incrementVideoReproduction(video.id);
  };

  // Cerrar lightbox
  const closeLightbox = () => {
    setSelectedVideo(null);
    setCurrentCarousel(null);
    document.body.style.overflow = 'auto';
  };

  // Navegación en lightbox
  const goToNextVideo = () => {
    if (!currentCarousel) return;
    const nextIndex = (currentVideoIndex + 1) % currentCarousel.videos.length;
    setCurrentVideoIndex(nextIndex);
    setSelectedVideo(currentCarousel.videos[nextIndex]);
    
    // Incrementar reproducción del nuevo video
    incrementVideoReproduction(currentCarousel.videos[nextIndex].id);
  };

  const goToPrevVideo = () => {
    if (!currentCarousel) return;
    const prevIndex = (currentVideoIndex - 1 + currentCarousel.videos.length) % currentCarousel.videos.length;
    setCurrentVideoIndex(prevIndex);
    setSelectedVideo(currentCarousel.videos[prevIndex]);
    
    // Incrementar reproducción del nuevo video
    incrementVideoReproduction(currentCarousel.videos[prevIndex].id);
  };

  // Duplicar para loop infinito
  const duplicatedRowOne = rowOneVideos.length > 0 ? [...rowOneVideos, ...rowOneVideos] : [];
  const duplicatedRowTwo = rowTwoVideos.length > 0 ? [...rowTwoVideos, ...rowTwoVideos] : [];
  const duplicatedRowThree = rowThreeVideos.length > 0 ? [...rowThreeVideos, ...rowThreeVideos] : [];

  // Componente para renderizar thumbnail (con fallback si no hay poster)
  const VideoThumbnail = ({ video, alt }) => {
    const [thumbnailSrc, setThumbnailSrc] = useState(video.posterUrl);
    const [thumbnailGenerated, setThumbnailGenerated] = useState(false);
    const [loadError, setLoadError] = useState(false);

    useEffect(() => {
      // Si tiene poster, usarlo directamente
      if (video.posterUrl) {
        setThumbnailSrc(video.posterUrl);
        return;
      }

      // Si no tiene poster, generar thumbnail del video
      if (!thumbnailGenerated && video.fileUrl && !loadError) {
        const videoElement = document.createElement('video');
        videoElement.crossOrigin = 'anonymous';
        videoElement.muted = true;
        videoElement.preload = 'metadata';
        
        videoElement.onloadeddata = () => {
          // Ir a un frame random en el primer tercio del video
          const seekTime = Math.random() * Math.min(videoElement.duration * 0.3, 5);
          videoElement.currentTime = seekTime;
        };

        videoElement.onseeked = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth || 640;
            canvas.height = videoElement.videoHeight || 360;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
            setThumbnailSrc(dataUrl);
            setThumbnailGenerated(true);
          } catch (err) {
            console.warn('Could not generate thumbnail:', err);
            setLoadError(true);
          }
        };

        videoElement.onerror = () => {
          // Fallback: usar un placeholder
          setLoadError(true);
          setThumbnailSrc(null);
        };

        videoElement.src = video.fileUrl;
      }
    }, [video.posterUrl, video.fileUrl, thumbnailGenerated, loadError]);

    // Placeholder mientras carga o si hay error
    if (!thumbnailSrc || loadError) {
      return (
        <div className={styles.thumbnailPlaceholder}>
          <div className={styles.placeholderIcon}>🎬</div>
        </div>
      );
    }

    return (
      <img 
        src={thumbnailSrc} 
        alt={alt} 
        className={styles.videoThumbnail}
        loading="lazy"
        onError={() => setLoadError(true)}
      />
    );
  };

  // Renderizar card de video
  const renderVideoCard = (video, index, rowKey, videosArray, carouselType) => (
    <div 
      key={`${rowKey}-${index}`} 
      className={styles.videoCard}
      onClick={() => openLightbox(video, carouselType, videosArray)}
    >
      <VideoThumbnail video={video} alt={video.title} />
      <div className={styles.playOverlay}>
        <div className={styles.playIcon}>▶</div>
      </div>
      <div className={styles.videoInfo}>
        <span className={styles.videoCategory}>{video.category}</span>
        {video.tags && video.tags.length > 1 && (
          <span className={styles.videoTags}>
            +{video.tags.length - 1}
          </span>
        )}
      </div>
    </div>
  );

  // Si está cargando
  if (loading) {
    return (
      <section className={`${styles.section} ${!darkMode ? styles.sectionLight : ''}`}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div>
              <h2 className={styles.title}>{t.header.title}</h2>
              <p className={styles.subtitle}>{t.header.subtitle}</p>
            </div>
          </div>
          <div className={styles.loadingState}>
            <div className={styles.spinner}></div>
            <p>{t.loading}</p>
          </div>
        </div>
      </section>
    );
  }

  // Si hay error
  if (error) {
    return (
      <section className={`${styles.section} ${!darkMode ? styles.sectionLight : ''}`}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div>
              <h2 className={styles.title}>{t.header.title}</h2>
              <p className={styles.subtitle}>{t.header.subtitle}</p>
            </div>
          </div>
          <div className={styles.errorState}>
            <p>{t.error}: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Si no hay videos
  if (videos.length === 0) {
    return (
      <section className={`${styles.section} ${!darkMode ? styles.sectionLight : ''}`}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div>
              <h2 className={styles.title}>{t.header.title}</h2>
              <p className={styles.subtitle}>{t.header.subtitle}</p>
            </div>
          </div>
          <div className={styles.emptyState}>
            <p>{t.noVideos}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className={`${styles.section} ${!darkMode ? styles.sectionLight : ''}`}>
        <div className={styles.wrapper}>
          {/* Header */}
          <div className={styles.header}>
            <div>
              <h2 className={styles.title}>{t.header.title}</h2>
              <p className={styles.subtitle}>{t.header.subtitle}</p>
            </div>
          </div>

          {/* Contenedor con overlay para fade masks */}
          <div className={styles.carouselsOverlay}>
            {/* Contenedor 3D con perspectiva + skew */}
            <div className={styles.carouselsWrapper}>
              {/* Carrusel 1 */}
              {duplicatedRowOne.length > 0 && (
                <div className={styles.carouselContainer}>
                  <div 
                    className={`${styles.carouselTrack} ${styles.rowOne} ${pausedRow === 1 ? styles.paused : ''}`}
                    onMouseEnter={() => setPausedRow(1)}
                    onMouseLeave={() => setPausedRow(null)}
                  >
                    {duplicatedRowOne.map((video, index) => 
                      renderVideoCard(video, index, 'row1', rowOneVideos, 'row1')
                    )}
                  </div>
                </div>
              )}

              {/* Carrusel 2 */}
              {duplicatedRowTwo.length > 0 && (
                <div className={styles.carouselContainer}>
                  <div 
                    className={`${styles.carouselTrack} ${styles.rowTwo} ${pausedRow === 2 ? styles.paused : ''}`}
                    onMouseEnter={() => setPausedRow(2)}
                    onMouseLeave={() => setPausedRow(null)}
                  >
                    {duplicatedRowTwo.map((video, index) => 
                      renderVideoCard(video, index, 'row2', rowTwoVideos, 'row2')
                    )}
                  </div>
                </div>
              )}

              {/* Carrusel 3 */}
              {duplicatedRowThree.length > 0 && (
                <div className={styles.carouselContainer}>
                  <div 
                    className={`${styles.carouselTrack} ${styles.rowThree} ${pausedRow === 3 ? styles.paused : ''}`}
                    onMouseEnter={() => setPausedRow(3)}
                    onMouseLeave={() => setPausedRow(null)}
                  >
                    {duplicatedRowThree.map((video, index) => 
                      renderVideoCard(video, index, 'row3', rowThreeVideos, 'row3')
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedVideo && currentCarousel && (
        <VideoLightbox
          selectedVideo={selectedVideo}
          currentVideoIndex={currentVideoIndex}
          totalVideos={currentCarousel.videos.length}
          onClose={closeLightbox}
          onNext={goToNextVideo}
          onPrev={goToPrevVideo}
          ingles={ingles}
        />
      )}
    </>
  );
};

export default IndexSeccion4;
