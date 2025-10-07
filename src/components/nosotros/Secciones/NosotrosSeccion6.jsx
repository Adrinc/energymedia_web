// NosotrosSeccion6.jsx
// CTA Final de Nosotros

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
    <section ref={sectionRef} className={styles.ctaSection}>
      {/* Decorative elements */}
      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>
      
      <div className={styles.container}>
        <div className={`${styles.ctaBlock} ${isVisible ? styles.fadeInUp : ''}`}>
          <span className={styles.badge}>{t.badge}</span>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>

          {/* Benefits */}
          <ul className={styles.benefits}>
            {t.benefits.map((benefit, index) => (
              <li
                key={index}
                className={`${styles.benefit} ${isVisible ? styles.fadeInUp : ''}`}
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                <span className={styles.checkmark}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          {/* CTAs */}
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
