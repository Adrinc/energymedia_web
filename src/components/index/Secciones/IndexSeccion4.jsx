import { useState, useEffect, useRef, memo, useMemo } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish, isDarkMode } from '../../../data/variables';
import { useMediaVideos, splitVideosIntoRows, incrementVideoReproduction } from '../../../hooks/useMediaVideos';
import VideoLightbox from '../components/VideoLightbox';
import styles from '../css/indexSeccion4.module.css';

// Cache global para thumbnails generados (persiste entre re-renders)
const thumbnailCache = new Map();

// Componente VideoThumbnail memoizado (extraído fuera del componente principal)
const VideoThumbnail = memo(({ video, alt }) => {
  const videoId = video.id;
  const [thumbnailSrc, setThumbnailSrc] = useState(
    video.posterUrl || thumbnailCache.get(videoId) || null
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const hasGeneratedRef = useRef(false);

  useEffect(() => {
    // Si ya tiene poster o ya se generó/intentó generar, no hacer nada
    if (video.posterUrl || hasGeneratedRef.current || !video.fileUrl) {
      return;
    }

    // Si ya existe en caché, usar ese
    if (thumbnailCache.has(videoId)) {
      setThumbnailSrc(thumbnailCache.get(videoId));
      hasGeneratedRef.current = true;
      return;
    }

    // Si ya está generando o hay error, no reintentar
    if (isGenerating || loadError) {
      return;
    }

    // Marcar como generando
    setIsGenerating(true);
    hasGeneratedRef.current = true;

    const videoElement = document.createElement('video');
    videoElement.crossOrigin = 'anonymous';
    videoElement.muted = true;
    videoElement.preload = 'metadata';
    
    const handleLoadedData = () => {
      // Ir a un frame random en el primer tercio del video
      const seekTime = Math.random() * Math.min(videoElement.duration * 0.3, 5);
      videoElement.currentTime = seekTime;
    };

    const handleSeeked = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth || 640;
        canvas.height = videoElement.videoHeight || 360;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
        
        // Guardar en caché
        thumbnailCache.set(videoId, dataUrl);
        setThumbnailSrc(dataUrl);
        setIsGenerating(false);
        
        // Limpiar
        videoElement.removeEventListener('loadeddata', handleLoadedData);
        videoElement.removeEventListener('seeked', handleSeeked);
        videoElement.removeEventListener('error', handleError);
      } catch (err) {
        console.warn('Could not generate thumbnail:', err);
        setLoadError(true);
        setIsGenerating(false);
      }
    };

    const handleError = () => {
      setLoadError(true);
      setIsGenerating(false);
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('seeked', handleSeeked);
      videoElement.removeEventListener('error', handleError);
    };

    videoElement.addEventListener('loadeddata', handleLoadedData);
    videoElement.addEventListener('seeked', handleSeeked);
    videoElement.addEventListener('error', handleError);
    videoElement.src = video.fileUrl;

    // Cleanup
    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('seeked', handleSeeked);
      videoElement.removeEventListener('error', handleError);
      videoElement.src = '';
    };
  }, [videoId, video.posterUrl, video.fileUrl]); // Solo depende de estas props estables

  // Placeholder mientras carga o si hay error
  if (!thumbnailSrc || loadError) {
    return (
      <div className={styles.thumbnailPlaceholder}>
        <div className={styles.placeholderIcon}>
          {isGenerating ? '⏳' : '🎬'}
        </div>
      </div>
    );
  }

  return (
    <img 
      src={thumbnailSrc} 
      alt={alt} 
      className={styles.videoThumbnail}
      loading="lazy"
      onError={() => {
        if (!loadError) {
          setLoadError(true);
        }
      }}
    />
  );
});

VideoThumbnail.displayName = 'VideoThumbnail';

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

  // Duplicar para loop infinito (memoizado para evitar re-renders)
  const duplicatedRowOne = useMemo(
    () => rowOneVideos.length > 0 ? [...rowOneVideos, ...rowOneVideos] : [],
    [rowOneVideos]
  );
  const duplicatedRowTwo = useMemo(
    () => rowTwoVideos.length > 0 ? [...rowTwoVideos, ...rowTwoVideos] : [],
    [rowTwoVideos]
  );
  const duplicatedRowThree = useMemo(
    () => rowThreeVideos.length > 0 ? [...rowThreeVideos, ...rowThreeVideos] : [],
    [rowThreeVideos]
  );

  // Renderizar card de video (memoizado)
  const renderVideoCard = useMemo(() => (video, index, rowKey, videosArray, carouselType) => (
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
    )
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
