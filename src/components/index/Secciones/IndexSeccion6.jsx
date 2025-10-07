import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion6.module.css';

/**
 * IndexSeccion6 - OYE Analytics + Copy Puente
 * Presentación de plataforma OYE con mock de interfaz
 * Copy puente hacia Sección 7 (Video Reel)
 * Sistema "Cine-Data Multicultural" - Energy Media
 */
const IndexSeccion6 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en.oye : translationsIndex.es.oye;
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  // Auto-progreso de features
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % t.features.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isVisible, t.features.length]);

  return (
    <>
      {/* OYE Analytics Section */}
      <CinematicSection variant="light" withAnimation={true}>
        <div ref={sectionRef} className={styles.oyeContainer}>
          {/* Header */}
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>�</span>
              <span className={styles.badgeText}>
                {ingles ? "Proprietary Methodology" : "Metodología propia"}
              </span>
            </div>
            <h2 className={styles.sectionTitle}>{t.title}</h2>
            <p className={styles.sectionSubtitle}>{t.subtitle}</p>
          </div>

          {/* Content Grid */}
          <div className={styles.contentGrid}>
            {/* Herramientas + Análisis Cultural */}
            <div className={`${styles.mockInterface} ${isVisible ? styles.visible : ''}`}>
              <div className={styles.mockHeader}>
                <div className={styles.mockLogo}>
                  <span className={styles.oyeLogo}>OYE</span>
                  <span className={styles.oyeTagline}>
                    {ingles ? "Cultural Insights" : "Insights Culturales"}
                  </span>
                </div>
                <div className={styles.mockStatus}>
                  <span className={styles.statusDot}></span>
                  {ingles ? "Methodology in action" : "Metodología en acción"}
                </div>
              </div>

              {/* Herramientas de Listening (logos reales) */}
              <div className={styles.toolsSection}>
                <p className={styles.toolsLabel}>
                  {ingles ? "Powered by professional tools:" : "Con herramientas profesionales:"}
                </p>
                <div className={styles.toolLogos}>
                  <div className={styles.toolBadge}>Brandwatch</div>
                  <div className={styles.toolBadge}>Sprinklr</div>
                  <div className={styles.toolBadge}>Talkwalker</div>
                  <div className={styles.plusBadge}>
                    + {ingles ? "Expert Analysis" : "Análisis Experto"}
                  </div>
                </div>
              </div>

              {/* Cultural Insights Visualization (más abstracto) */}
              <div className={styles.insightsVisualization}>
                <div className={styles.insightItem} style={{ animationDelay: '0.2s' }}>
                  <span className={styles.insightIcon}>✓</span>
                  <span className={styles.insightText}>
                    {ingles ? "Family-first messaging" : "Mensajes centrados en familia"}
                  </span>
                </div>
                <div className={styles.insightItem} style={{ animationDelay: '0.4s' }}>
                  <span className={styles.insightIcon}>✓</span>
                  <span className={styles.insightText}>
                    {ingles ? "Code-switching natural" : "Code-switching natural"}
                  </span>
                </div>
                <div className={styles.insightItem} style={{ animationDelay: '0.6s' }}>
                  <span className={styles.insightIcon}>✗</span>
                  <span className={styles.insightAvoid}>
                    {ingles ? "Avoid stereotypes" : "Evitar estereotipos"}
                  </span>
                </div>
                <div className={styles.insightItem} style={{ animationDelay: '0.8s' }}>
                  <span className={styles.insightIcon}>✗</span>
                  <span className={styles.insightAvoid}>
                    {ingles ? "Literal translation" : "Traducción literal"}
                  </span>
                </div>
              </div>

              {/* Features animadas */}
              <div className={styles.featuresCarousel}>
                {t.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`${styles.featureItem} ${
                      activeFeature === index ? styles.active : ''
                    }`}
                  >
                    <span className={styles.checkIcon}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className={styles.benefitsColumn}>
              {t.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`${styles.benefitCard} ${isVisible ? styles.visible : ''}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <div className={styles.benefitContent}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDescription}>{benefit.description}</p>
                  </div>
                </div>
              ))}

              {/* CTAs */}
              <div className={styles.ctaGroup}>
                <a href="/metodologia#oye" className={styles.btnPrimary}>
                  {t.ctaPrimary}
                </a>
                <a href="/portfolio" className={styles.btnSecondary}>
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </CinematicSection>

      {/* Copy Puente hacia Video Reel (Sección 7) */}
      <div className={styles.bridgeSection}>
        <div className={styles.bridgeContent}>
          <p className={styles.bridgeText}>
            {t.bridge.text1}
            <span className={styles.bridgeHighlight}>{t.bridge.highlight1}</span>
            {t.bridge.text2}
          </p>
          <p className={styles.bridgeText}>
            {t.bridge.text3}
            <span className={styles.bridgeHighlight}>{t.bridge.highlight2}</span>
            {t.bridge.text4}
          </p>
          
          {/* Scroll indicator animado */}
          <div className={styles.scrollHint}>
            <span className={styles.scrollIcon}>↓</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexSeccion6;
