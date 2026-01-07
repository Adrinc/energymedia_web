import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish, isDarkMode } from '../../../data/variables';
import styles from './serviceModal.module.css';
import Button from '../Button';

const ServiceModal = ({ isOpen, onClose, service }) => {
  const ingles = useStore(isEnglish);
  const darkMode = useStore(isDarkMode);

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const t = {
    category: ingles ? 'Our Services' : 'Nuestros Servicios',
    categoryLabel: ingles ? 'Category' : 'Categoría',
    previewLink: ingles ? 'Preview link' : 'Enlace de vista previa',
    keyHighlights: ingles ? 'Key Highlights' : 'Aspectos Destacados',
    technologies: ingles ? 'Technologies we use' : 'Tecnologías que usamos',
    cta: ingles ? 'Request a Quote' : 'Solicitar Cotización',
    close: ingles ? 'Close' : 'Cerrar'
  };

  return (
    <div 
      className={`${styles.overlay} ${!darkMode ? styles.overlayLight : ''}`} 
      onClick={onClose}
    >
      <div 
        className={`${styles.modal} ${!darkMode ? styles.modalLight : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label={t.close}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Image */}
        <div 
          className={styles.heroImage}
          style={{ backgroundImage: `url(${service.heroImage || service.image})` }}
        >
          <div className={styles.heroOverlay}></div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.badge}>{t.category}</span>
            <h2 className={styles.title}>{service.title}</h2>
            
            <div className={styles.metadata}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>{t.categoryLabel}</span>
                <span className={styles.metaValue}>{service.category || service.tagline}</span>
              </div>
              {service.previewLink && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>{t.previewLink}</span>
                  <a href={service.previewLink} target="_blank" rel="noopener noreferrer" className={styles.metaLink}>
                    {service.previewLink}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Two Column Layout */}
          <div className={styles.twoColumns}>
            {/* Left Column - Description & Highlights */}
            <div className={styles.leftColumn}>
              {/* Description */}
              <p className={styles.description}>{service.description}</p>

              {/* Key Highlights */}
              <div className={styles.highlights}>
                <h3 className={styles.sectionTitle}>{t.keyHighlights}</h3>
                <ul className={styles.highlightsList}>
                  {service.highlights?.map((highlight, index) => (
                    <li key={index} className={styles.highlightItem}>
                      <div className={styles.bulletCheck}>✓</div>
                      <div className={styles.highlightContent}>
                        <strong>{highlight.title}</strong>
                        {highlight.description && (
                          <span>{highlight.description}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              {service.technologies && service.technologies.length > 0 && (
                <div className={styles.technologies}>
                  <h3 className={styles.sectionTitle}>{t.technologies}</h3>
                  <div className={styles.techGrid}>
                    {service.technologies.map((tech, index) => (
                      <div key={index} className={styles.techItem}>
                        <span className={styles.techIcon}>{tech.icon}</span>
                        <span className={styles.techName}>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Gallery */}
            <div className={styles.rightColumn}>
              <div className={styles.gallery}>
                {service.gallery?.map((img, index) => (
                  <div 
                    key={index} 
                    className={styles.galleryImage}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaWrapper}>
            <Button
              textEs="Solicitar Cotización"
              textEn="Request a Quote"
              href="/contacto"
              variant="primary"
              size="lg"
              fullWidth={true}
              showArrow={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
