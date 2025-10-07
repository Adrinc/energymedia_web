import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsRecursos } from '../../../data/translationsRecursos';
import styles from '../css/recursosSeccion3.module.css';

const RecursosSeccion3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsRecursos.en.newsletter : translationsRecursos.es.newsletter;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('submitting');

    // Simular envío (aquí integrarías Mailchimp/ConvertKit)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.newsletterSection} ${isVisible ? styles.visible : ''}`}
    >
      {/* Decorative elements */}
      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>

      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeStar}>⭐</span>
          {t.badge}
        </div>

        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.subtitle}>{t.subtitle}</p>

        {/* Benefits list */}
        <ul className={styles.benefits}>
          {t.benefits.map((benefit, index) => (
            <li 
              key={index} 
              className={styles.benefit}
              style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
            >
              <span className={styles.checkmark}>✓</span>
              {benefit}
            </li>
          ))}
        </ul>

        {/* Newsletter form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              className={styles.input}
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'submitting' || status === 'success'}
            />
            <button 
              type="submit" 
              className={`${styles.button} ${status === 'submitting' ? styles.submitting : ''}`}
              disabled={status === 'submitting' || status === 'success'}
            >
              {status === 'submitting' ? (
                <div className={styles.spinner}></div>
              ) : status === 'success' ? (
                '✓'
              ) : (
                t.buttonText
              )}
            </button>
          </div>

          {status === 'success' && (
            <p className={styles.successMessage}>
              <span className={styles.successIcon}>✓</span>
              {t.successMessage}
            </p>
          )}

          {status === 'error' && (
            <p className={styles.errorMessage}>
              <span className={styles.errorIcon}>✗</span>
              {t.errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default RecursosSeccion3;
