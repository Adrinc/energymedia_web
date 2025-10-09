import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsServiciosNEW } from '../../../data/translationsServiciosNEW';
import styles from '../css/serviciosSeccion8NEW.module.css';

const ServiciosSeccion8NEW = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServiciosNEW.en : translationsServiciosNEW.es;
  const section = t.section8;
  
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  // Auto-play video cuando sea visible
  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay bloqueado, no hacer nada
      });
    }
  }, [isVisible]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // TODO: Integración con Mailchimp/ConvertKit
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const benefits = [
    { text: section.benefits.audit, icon: '✓' },
    { text: section.benefits.opportunities, icon: '✓' },
    { text: section.benefits.recommendations, icon: '✓' },
    { text: section.benefits.roi, icon: '✓' },
    { text: section.benefits.actionPlan, icon: '✓' }
  ];

  return (
    <section 
      ref={sectionRef}
      className={styles.ctaSection}
      id="cta-final"
    >
      {/* Video Background */}
      <div className={styles.videoBackground}>
        <video
          ref={videoRef}
          className={styles.videoElement}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/v_bg_3.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Badge Oferta Limitada */}
      <div className={`${styles.offerBadge} ${isVisible ? styles.fadeInDown : ''}`}>
        <span className={styles.badgeIcon}>🎁</span>
        {section.offerBadge}
      </div>

      {/* Glassmorphic Card Principal */}
      <div className={`${styles.ctaCard} ${isVisible ? styles.fadeInUp : ''}`}>
        {/* Header */}
        <div className={styles.cardHeader}>
          <h2 className={styles.mainTitle}>
            {section.title}
          </h2>
          <p className={styles.valueProposition}>
            {section.value}
          </p>
          <p className={styles.subtitle}>
            {section.subtitle}
          </p>
        </div>

        {/* Benefits List */}
        <ul className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <li 
              key={index}
              className={`${styles.benefitItem} ${isVisible ? styles.fadeInLeft : ''}`}
              style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
            >
              <span className={styles.checkIcon}>{benefit.icon}</span>
              <span className={styles.benefitText}>{benefit.text}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a 
          href="/contacto"
          className={`${styles.primaryCta} ${isVisible ? styles.fadeInUp : ''}`}
          style={{ animationDelay: '0.8s' }}
        >
          {section.ctaPrimary}
          <span className={styles.buttonShine}></span>
        </a>

        {/* Guarantee Badge */}
        <div 
          className={`${styles.guaranteeBadge} ${isVisible ? styles.fadeInUp : ''}`}
          style={{ animationDelay: '1s' }}
        >
          <span className={styles.shieldIcon}>🛡️</span>
          {section.guarantee}
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>{section.divider}</span>
        </div>

        {/* Newsletter */}
        <div 
          className={`${styles.newsletterContainer} ${isVisible ? styles.fadeInUp : ''}`}
          style={{ animationDelay: '1.2s' }}
        >
          <h3 className={styles.newsletterTitle}>
            {section.newsletterTitle}
          </h3>
          <p className={styles.newsletterDescription}>
            {section.newsletterDescription}
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={section.newsletterPlaceholder}
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.submitButton}>
                {section.newsletterButton}
                <span className={styles.buttonArrow}>→</span>
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <span className={styles.successIcon}>✅</span>
              {section.newsletterSuccess}
            </div>
          )}
        </div>

        {/* Trust Signals */}
        <div className={styles.trustSignals}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span className={styles.trustText}>{section.trust.response}</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📊</span>
            <span className={styles.trustText}>{section.trust.results}</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🎯</span>
            <span className={styles.trustText}>{section.trust.satisfaction}</span>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className={styles.floatingShape1}></div>
      <div className={styles.floatingShape2}></div>
      <div className={styles.floatingShape3}></div>
    </section>
  );
};

export default ServiciosSeccion8NEW;
