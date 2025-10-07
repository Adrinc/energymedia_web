// MetodologiaSeccion6.jsx
// CTA Final + Newsletter

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsMetodologia } from '../../../data/translationsMetodologia';
import styles from '../css/metodologiaSeccion6.module.css';

const MetodologiaSeccion6 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsMetodologia.en.ctaFinal : translationsMetodologia.es.ctaFinal;
  
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(''); // 'sending', 'success', 'error'
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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!email || !email.includes('@')) {
      setNewsletterStatus('error');
      return;
    }

    setNewsletterStatus('sending');
    
    // Simular envío (integrar con Mailchimp/ConvertKit después)
    setTimeout(() => {
      setNewsletterStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section ref={sectionRef} className={styles.ctaSection}>
      {/* Decorative elements */}
      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>
      
      <div className={styles.container}>
        {/* Main CTA */}
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
            <a href="/portfolio" className={styles.btnPrimary}>
              {t.ctaPrimary}
            </a>
            <a href="/contacto" className={styles.btnSecondary}>
              {t.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className={`${styles.newsletterBlock} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className={styles.newsletterContent}>
            <h3 className={styles.newsletterTitle}>
              {ingles ? "Or get insights delivered to your inbox" : "O recibe insights en tu inbox"}
            </h3>
            <p className={styles.newsletterSubtitle}>
              {ingles 
                ? "Tips on multicultural marketing + video performance" 
                : "Tips de marketing multicultural + video performance"}
            </p>

            <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder={ingles ? "Your email" : "Tu email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
                disabled={newsletterStatus === 'success'}
              />
              <button
                type="submit"
                className={styles.newsletterBtn}
                disabled={newsletterStatus === 'sending' || newsletterStatus === 'success'}
              >
                {newsletterStatus === 'sending' 
                  ? (ingles ? "Sending..." : "Enviando...") 
                  : newsletterStatus === 'success'
                  ? (ingles ? "✓ Subscribed!" : "✓ ¡Suscrito!")
                  : (ingles ? "Subscribe" : "Suscribirse")}
              </button>
            </form>

            {newsletterStatus === 'error' && (
              <p className={styles.errorMsg}>
                {ingles ? "Please enter a valid email" : "Por favor ingresa un email válido"}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodologiaSeccion6;
