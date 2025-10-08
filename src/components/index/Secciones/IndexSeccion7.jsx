import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../css/indexSeccion7.module.css';

/**
 * IndexSeccion7 - VIDEO SHOWCASE
 * Galería de producción de video con lightbox profesional
 * Sistema "Digital Performance" - Energy Media
 */

// 9 videos seleccionados con metadata
const VIDEO_SHOWCASE = [
  {
    id: '897006857',
    client: 'E-commerce Moda',
    campaign: 'Campaña Black Friday',
    tag: 'Social Ads',
    metric: { value: '+42%', label: 'ROAS' },
    objective: 'Aumentar ROAS en campaña de temporada alta',
    solution: 'Video ads con segmentación precisa y A/B testing creativo',
    result: '+167% conversiones vs. campaña anterior',
    format: '16:9'
  },
  {
    id: '1119883818',
    client: 'Fintech',
    campaign: 'App de Remesas',
    tag: 'TikTok Native',
    metric: { value: '+67%', label: 'CTR' },
    objective: 'Lanzamiento de app en mercado competido',
    solution: 'Influencer marketing + TikTok Ads nativos verticales',
    result: '25K downloads en primeras 2 semanas',
    format: '9:16'
  },
  {
    id: '1114313177',
    client: 'Retail Alimenticio',
    campaign: 'Cadena de Restaurantes',
    tag: 'YouTube Ads',
    metric: { value: '+89%', label: 'Tráfico' },
    objective: 'Aumentar tráfico a tiendas físicas con campaña digital',
    solution: 'Video storytelling + geo-targeting + promociones localizadas',
    result: '92% brand recall en audiencia target',
    format: '16:9'
  },
  {
    id: '1113698153',
    client: 'Tech Startup',
    campaign: 'Lanzamiento SaaS',
    tag: 'Instagram Reels',
    metric: { value: '2.3M', label: 'Views' },
    objective: 'Awareness de producto en mercado B2B',
    solution: 'Reels educativos + testimoniales de clientes',
    result: '+156% engagement rate vs. industria',
    format: '9:16'
  },
  {
    id: '1107528153',
    client: 'Healthcare',
    campaign: 'Servicios Médicos',
    tag: 'Social Ads',
    metric: { value: '+3.1x', label: 'Leads' },
    objective: 'Generar leads calificados en sector salud',
    solution: 'Video testimoniales auténticos + landing pages optimizadas',
    result: '-34% costo por lead adquirido',
    format: '16:9'
  },
  {
    id: '1107527479',
    client: 'Automotive',
    campaign: 'SUV Híbrida',
    tag: 'Streaming OTT',
    metric: { value: '+56%', label: 'Test Drive' },
    objective: 'Incrementar test drives en concesionarios',
    solution: 'Spots en plataformas de streaming + retargeting estratégico',
    result: '+210% ROI en campaña de lanzamiento',
    format: '9:16'
  },
  {
    id: '1106544096',
    client: 'Real Estate',
    campaign: 'Desarrollo Residencial',
    tag: 'Video Ads FB/IG',
    metric: { value: '-28%', label: 'CAC' },
    objective: 'Reducir costo de adquisición de clientes potenciales',
    solution: 'Tours virtuales + targeting preciso',
    result: '43 unidades vendidas en 90 días',
    format: '16:9'
  },
  {
    id: '1106542411',
    client: 'Beauty Brand',
    campaign: 'Línea de Skincare',
    tag: 'YouTube + Meta',
    metric: { value: '78%', label: 'D30 Retention' },
    objective: 'Lanzar marca de belleza en mercado competitivo',
    solution: 'Video reviews + tutorials + unboxing experiences',
    result: '+3.8x ROAS sostenido por 6 meses',
    format: '16:9'
  },
  {
    id: '1098651741',
    client: 'Hospitality',
    campaign: 'Resort & Spa',
    tag: 'Luxury Travel',
    metric: { value: '+215%', label: 'Bookings' },
    objective: 'Aumentar reservas en segmento premium',
    solution: 'Video inmersivo 360° + targeting premium',
    result: '$2.4M en revenue atribuido directamente',
    format: '16:9'
  }
];

const IndexSeccion7 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en.reel : translationsIndex.es.reel;
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [thumbnails, setThumbnails] = useState({});
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const openLightbox = (video) => {
    const index = VIDEO_SHOWCASE.findIndex(v => v.id === video.id);
    setCurrentVideoIndex(index);
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden'; // Prevent scroll
  };

  const closeLightbox = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  // Navegación en lightbox
  const goToNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % VIDEO_SHOWCASE.length;
    setCurrentVideoIndex(nextIndex);
    setSelectedVideo(VIDEO_SHOWCASE[nextIndex]);
  };

  const goToPrevVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + VIDEO_SHOWCASE.length) % VIDEO_SHOWCASE.length;
    setCurrentVideoIndex(prevIndex);
    setSelectedVideo(VIDEO_SHOWCASE[prevIndex]);
  };

  // Obtener thumbnail de Vimeo usando API pública
  const getVimeoThumbnail = (videoId) => {
    return `https://vumbnail.com/${videoId}.jpg`;
  };

  // Construir URL de Vimeo con parámetros
  const getVimeoUrl = (videoId, autoplay = 0, muted = 0, loop = 0, controls = 1) => {
    return `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay}&muted=${muted}&loop=${loop}&autopause=0&controls=${controls}&title=0&byline=0&portrait=0`;
  };

  return (
    <>
      {/* Sección Principal */}
      <section className={styles.reelSection}>
        
        <div className={styles.reelContainer}>
          {/* A. Intro Cinemática */}
          <div className={styles.introBlock}>
            <motion.div
              className={styles.iconFloat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              🎬
            </motion.div>
            
            <motion.h2
              className={styles.introTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className={styles.titleGradient}>Video que conecta.</span>
              <br />
              Video que vende.
            </motion.h2>
            
            <motion.p
              className={styles.introSubtitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {ingles 
                ? "Professional video for digital platforms: social ads, reels, YouTube, corporate content that converts."
                : "Video profesional para plataformas digitales: social ads, reels, YouTube, contenido corporativo que convierte."
              }
            </motion.p>
          </div>

          {/* B. Grid de Videos */}
          <div className={styles.videoGrid}>
            {VIDEO_SHOWCASE.map((video, index) => (
              <motion.div
                key={video.id}
                className={`${styles.videoCard} ${styles[`format-${video.format.replace(':', '-')}`]}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openLightbox(video)}
              >
                {/* Iframe con preview en hover */}
                <div className={styles.videoWrapper}>
                  {hoveredIndex === index ? (
                    <iframe
                      src={getVimeoUrl(video.id, 1, 1, 1, 0)}
                      className={styles.videoIframe}
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      {/* Thumbnail de Vimeo */}
                      <img 
                        src={getVimeoThumbnail(video.id)}
                        alt={video.campaign}
                        className={styles.videoThumbnail}
                        loading="lazy"
                      />
                      {/* Play icon overlay */}
                      <div className={styles.videoPlaceholder}>
                        <div className={styles.playIcon}>▶</div>
                      </div>
                    </>
                  )}
                  
                  {/* Overlay oscuro */}
                  <div className={styles.videoOverlay}></div>
                  
                  {/* Hitbox invisible - Solo aparece en hover para capturar clicks */}
                  {hoveredIndex === index && (
                    <div 
                      className={styles.clickableHitbox}
                      onClick={() => openLightbox(video)}
                    />
                  )}
                </div>

                {/* Badges superiores */}
                <div className={styles.topBadges} onClick={() => openLightbox(video)}>
                  <div className={styles.clientBadge}>
                    🏢 {video.client}
                  </div>
                  <div className={styles.tagBadge}>
                    🌎 {video.tag}
                  </div>
                </div>

                {/* Badge de métrica (esquina inferior derecha) */}
                <div className={styles.metricBadge} onClick={() => openLightbox(video)}>
                  <span className={styles.metricValue}>{video.metric.value}</span>
                  <span className={styles.metricLabel}>{video.metric.label}</span>
                </div>

                {/* Hover hint */}
                <div className={styles.hoverHint} onClick={() => openLightbox(video)}>
                  {ingles ? "Click to view" : "Click para ver"}
                </div>
              </motion.div>
            ))}
          </div>

          {/* D. Micro-Storytelling */}
          <div className={styles.storytellingBlock}>
            <motion.div
              className={styles.storyCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.storyIcon}>🎥</div>
              <h3 className={styles.storyTitle}>
                {ingles ? "Award-Winning Production" : "Producción Premiada"}
              </h3>
              <p className={styles.storyDescription}>
                {ingles 
                  ? "Emmy-winning quality applied to digital performance."
                  : "Calidad Emmy aplicada al performance digital."
                }
              </p>
            </motion.div>

            <motion.div
              className={styles.storyCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.storyIcon}>📱</div>
              <h3 className={styles.storyTitle}>
                {ingles ? "Digital Natives" : "Nativos Digitales"}
              </h3>
              <p className={styles.storyDescription}>
                {ingles 
                  ? "Content for social ads, reels, YouTube, and streaming."
                  : "Piezas para social ads, reels, YouTube y streaming."
                }
              </p>
            </motion.div>

            <motion.div
              className={styles.storyCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.storyIcon}>📊</div>
              <h3 className={styles.storyTitle}>
                {ingles ? "Performance First" : "Performance First"}
              </h3>
              <p className={styles.storyDescription}>
                {ingles 
                  ? "We measure views, CTR, and conversions."
                  : "Medimos views, CTR y conversiones."
                }
              </p>
            </motion.div>
          </div>

          {/* E. CTA Destacado */}
          <motion.div
            className={styles.ctaBlock}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.ctaTitle}>
              {ingles 
                ? "Turn your message into the next video everyone remembers"
                : "Convierte tu mensaje en el próximo video que todos recuerdan"
              }
            </h3>
            <a href="/contacto" className={styles.ctaButton}>
              {ingles 
                ? "Schedule your video consultation →"
                : "Agenda tu consultoría de video →"
              }
            </a>
          </motion.div>
        </div>
      </section>

      {/* C. Lightbox Cinematográfico */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className={styles.lightboxBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del lightbox */}
              <div className={styles.lightboxHeader}>
                <button 
                  className={styles.closeButton}
                  onClick={closeLightbox}
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>

              {/* Botones de navegación */}
              <button 
                className={styles.navButtonPrev}
                onClick={goToPrevVideo}
                aria-label="Video anterior"
              >
                ‹
              </button>
              
              <button 
                className={styles.navButtonNext}
                onClick={goToNextVideo}
                aria-label="Video siguiente"
              >
                ›
              </button>

              {/* Layout principal */}
              <div className={styles.lightboxLayout}>
                {/* Player de video */}
                <div className={styles.lightboxPlayer}>
                  <iframe
                    key={selectedVideo.id}
                    src={getVimeoUrl(selectedVideo.id, 1, 0, 0, 1)}
                    className={styles.lightboxIframe}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Sidebar de información */}
                <div className={styles.lightboxSidebar}>
                  <div className={styles.sidebarSection}>
                    <div className={styles.sidebarLabel}>
                      🏢 {ingles ? "Client" : "Cliente"}
                    </div>
                    <div className={styles.sidebarValue}>
                      {selectedVideo.client}
                    </div>
                  </div>

                  <div className={styles.sidebarSection}>
                    <div className={styles.sidebarLabel}>
                      🎯 {ingles ? "Objective" : "Objetivo"}
                    </div>
                    <div className={styles.sidebarValue}>
                      {selectedVideo.objective}
                    </div>
                  </div>

                  <div className={styles.sidebarSection}>
                    <div className={styles.sidebarLabel}>
                      💡 {ingles ? "Solution" : "Solución"}
                    </div>
                    <div className={styles.sidebarValue}>
                      {selectedVideo.solution}
                    </div>
                  </div>

                  <div className={styles.sidebarSection}>
                    <div className={styles.sidebarLabel}>
                      📊 {ingles ? "Result" : "Resultado"}
                    </div>
                    <div className={styles.metricsBadges}>
                      <div className={styles.largeBadge}>
                        <span className={styles.largeValue}>{selectedVideo.metric.value}</span>
                        <span className={styles.largeLabel}>{selectedVideo.metric.label}</span>
                      </div>
                    </div>
                    <div className={styles.sidebarValue}>
                      {selectedVideo.result}
                    </div>
                  </div>

                  <div className={styles.sidebarQuote}>
                    💬 "{ingles ? "Professional video optimized for digital platforms" : "Video profesional optimizado para plataformas digitales"}"
                  </div>

                  <a href="/casos" className={styles.sidebarCta}>
                    {ingles ? "View full case →" : "Ver caso completo →"}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IndexSeccion7;
