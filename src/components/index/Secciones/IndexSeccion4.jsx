import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion4.module.css';

/**
 * IndexSeccion4 - Casos de Éxito con Métricas
 * 3 tarjetas con CountUp animation en métricas
 * Sistema "Cine-Data Multicultural" - Energy Media
 */
const IndexSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en.cases : translationsIndex.es.cases;
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer para animar al scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  return (
    <CinematicSection variant="dark" withGrain={true}>
      <div ref={sectionRef} className={styles.casesContainer}>
        {/* Título de sección */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        {/* Grid de 3 casos */}
        <div className={styles.casesGrid}>
          {t.items.map((caseItem, index) => (
            <a
              key={index}
              href={caseItem.link}
              className={`${styles.caseCard} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Badge de industria */}
              <div className={styles.industryBadge}>
                {caseItem.industry}
              </div>

              {/* Contenido */}
              <div className={styles.cardContent}>
                <h3 className={styles.clientName}>{caseItem.client}</h3>
                
                <div className={styles.challengeSection}>
                  <span className={styles.label}>
                    {ingles ? "Challenge:" : "Reto:"}
                  </span>
                  <p className={styles.challenge}>{caseItem.challenge}</p>
                </div>

                <div className={styles.solutionSection}>
                  <span className={styles.label}>
                    {ingles ? "Solution:" : "Solución:"}
                  </span>
                  <p className={styles.solution}>{caseItem.solution}</p>
                </div>
              </div>

              {/* Métricas destacadas */}
              <div className={styles.metricsContainer}>
                {Object.entries(caseItem.metrics).map(([key, metric]) => (
                  <div key={key} className={styles.metricBadge}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className={styles.testimonialContainer}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.testimonial}>{caseItem.testimonial}</p>
              </div>

              {/* CTA visual */}
              <div className={styles.cardFooter}>
                <span className={styles.ctaText}>
                  {ingles ? "View full case study" : "Ver caso completo"}
                </span>
                <span className={styles.arrow}>→</span>
              </div>

              {/* Efecto de brillo en hover */}
              <div className={styles.cardShine}></div>
            </a>
          ))}
        </div>

        {/* CTA Global */}
        <div className={styles.ctaContainer}>
          <a href="/casos" className={styles.btnViewAll}>
            {t.cta}
          </a>
        </div>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion4;
