import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsNosotros } from '../../../data/translationsNosotros';
import styles from '../css/nosotrosSeccion3.module.css';

const NosotrosSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en.philosophy : translationsNosotros.es.philosophy;
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
        <div className={styles.pillarsGrid}>
          {t.pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${styles.pillarCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.numberBadge}>{pillar.number}</div>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{pillar.icon}</span>
              </div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>
              <ul className={styles.detailsList}>
                {pillar.details.map((detail, idx) => (
                  <li key={idx} className={styles.detailItem}>
                    <span className={styles.checkIcon}></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosotrosSeccion3;
