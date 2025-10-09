// NosotrosSeccion6.jsx - ACTUALIZADO 2025
// CTA Final épico con glassmorphism

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsNosotros } from '../../../data/translationsNosotros';
import styles from '../css/nosotrosSeccion6.module.css';

const NosotrosSeccion6 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en.ctaFinal : translationsNosotros.es.ctaFinal;
  
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
        <div className={`${styles.ctaCard} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.badge}>{t.badge}</div>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>

          <div className={styles.benefitsList}>
            {t.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                {benefit}
              </div>
            ))}
          </div>

          <div className={styles.guarantee}>{t.guarantee}</div>

          <div className={styles.ctaButtons}>
            <a href="/contacto" className={styles.btnPrimary}>
              {t.ctaPrimary}
            </a>
            <a href="/portfolio" className={styles.btnSecondary}>
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSeccion6;
