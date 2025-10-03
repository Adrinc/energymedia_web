import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import CinematicSection from '../../global/CinematicSection';
import SectionTitle from '../../global/SectionTitle';
import styles from '../css/indexSeccion2.module.css';

/**
 * IndexSeccion2 - Diferenciadores Clave
 * Sección 2 de la página principal de Energy Media
 * 4 cards que explican por qué Energy Media es diferente
 */
const IndexSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en.differentiators : translationsIndex.es.differentiators;

  return (
    <CinematicSection variant="light">
      <SectionTitle 
        title={t.title}
        subtitle={t.subtitle}
        align="center"
        variant="dark"
      />

      <div className={styles.grid}>
        {t.items.map((item, index) => (
          <div 
            key={index} 
            className={styles.differentiatorCard}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{item.icon}</span>
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion2;
