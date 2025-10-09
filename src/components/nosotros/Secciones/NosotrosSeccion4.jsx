// NosotrosSeccion4.jsx - ACTUALIZADO 2025 PREMIUM
// Values - 4 Valores core con diseño mejorado

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsNosotros } from '../../../data/translationsNosotros';
import styles from '../css/nosotrosSeccion4.module.css';

const NosotrosSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en.values : translationsNosotros.es.values;
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.valuesGrid}>
          {t.items.map((value, index) => (
            <div
              key={index}
              className={`${styles.valueCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.numberBadge}>0{index + 1}</div>
              
              <div className={styles.iconContainer}>
                <span className={styles.valueIcon}>{value.icon}</span>
              </div>

              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>

              {value.benefits && (
                <div className={styles.benefitsList}>
                  {value.benefits.map((benefit, idx) => (
                    <span key={idx} className={styles.benefitTag}>
                      {benefit}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosotrosSeccion4;
