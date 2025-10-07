import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsRecursos } from '../../../data/translationsRecursos';
import styles from '../css/recursosSeccion2.module.css';

const RecursosSeccion2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsRecursos.en.preview : translationsRecursos.es.preview;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <section 
      ref={sectionRef}
      className={`${styles.previewSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.items.map((item, index) => (
            <div 
              key={index} 
              className={styles.previewCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.iconCircle}>
                <span className={styles.icon}>{item.icon}</span>
              </div>

              <div className={styles.badge}>{item.badge}</div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              
              <p className={styles.cardDescription}>{item.description}</p>

              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill}
                  style={{ width: `${60 + (index * 10)}%` }}
                ></div>
              </div>
              <p className={styles.progressText}>
                {ingles ? 'In development' : 'En desarrollo'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecursosSeccion2;
