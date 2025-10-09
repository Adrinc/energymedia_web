// NosotrosSeccion5.jsx - ACTUALIZADO 2025
// Team Expertise con imagen de oficina

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsNosotros } from '../../../data/translationsNosotros';
import styles from '../css/nosotrosSeccion5.module.css';

const NosotrosSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en.team : translationsNosotros.es.team;
  
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
        <div className={`${styles.content} ${isVisible ? styles.fadeInLeft : ''}`}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <p className={styles.description}>{t.description}</p>

          <div className={styles.expertiseGrid}>
            {t.expertise.map((area, index) => (
              <div key={index} className={styles.expertiseCard}>
                <span className={styles.areaIcon}>{area.icon}</span>
                <div>
                  <h3 className={styles.areaTitle}>{area.area}</h3>
                  <p className={styles.skills}>{area.skills}</p>
                  <div className={styles.teamSize}>{area.team}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.certsBadge}>
            <span className={styles.certIcon}>🎓</span>
            <p>{t.certifications}</p>
          </div>
        </div>

        <div className={`${styles.imageWrapper} ${isVisible ? styles.fadeInRight : ''}`}>
          <div className={styles.imageGlow}></div>
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80" 
            alt={t.imageAlt}
            className={styles.officeImage}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default NosotrosSeccion5;
