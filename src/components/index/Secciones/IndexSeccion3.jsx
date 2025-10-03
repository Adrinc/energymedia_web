import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion3.module.css';

/**
 * IndexSeccion3 - Servicios Destacados
 * Grid de 5 servicios con iconos, descripción y links
 * Sistema "Cine-Data Multicultural" - Energy Media
 */
const IndexSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en.services : translationsIndex.es.services;

  return (
    <CinematicSection variant="light" withAnimation={true}>
      <div className={styles.servicesContainer}>
        {/* Título de sección */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        {/* Grid de 5 servicios */}
        <div className={styles.servicesGrid}>
          {t.items.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className={styles.serviceCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Ícono del servicio */}
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>

              {/* Contenido */}
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>

              {/* CTA visual */}
              <div className={styles.cardFooter}>
                <span className={styles.ctaText}>
                  {ingles ? "Learn more" : "Ver servicio"}
                </span>
                <span className={styles.arrow}>→</span>
              </div>

              {/* Gradiente de borde animado */}
              <div className={styles.cardGlow}></div>
            </a>
          ))}
        </div>

        {/* CTA Global */}
        <div className={styles.ctaContainer}>
          <a href="/servicios" className={styles.btnViewAll}>
            {t.cta}
          </a>
        </div>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion3;
