import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/indexSeccion11.module.css';

/**
 * IndexSeccion11 - CTA FINAL + OFERTA ESPECIAL
 * Última oportunidad de conversión con oferta irresistible
 * Design premium inspirado en ServiciosSeccion8NEW
 */
const IndexSeccion11 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      badge: "OFERTA LIMITADA - Nuevos Clientes",
      title: "Agenda tu Consultoría Estratégica Gratuita",
      value: "Valor: $5,000 MXN. Hoy: GRATIS.",
      subtitle: "Analizamos tu negocio y te damos roadmap de crecimiento sin compromiso.",
      features: [
        "Auditoría completa de tu presencia digital (30-45 min)",
        "Identificación de 3-5 oportunidades de crecimiento rápidas",
        "Recomendaciones de inversión personalizadas",
        "Estimación de ROI esperado en 90 días",
        "Plan de acción inmediato (sin letra chica)"
      ],
      cta: "Agenda Ahora (Sin Costo)",
      guarantee: "Garantía de 90 días. Resultados o reembolso.",
      divider: "O",
      newsletterTitle: "Recibe tips de marketing digital + casos de éxito",
      newsletterDescription: "Únete a +2,500 suscriptores que reciben contenido exclusivo cada semana",
      newsletterPlaceholder: "tu@email.com",
      newsletterButton: "Suscribirse",
      newsletterSuccess: "¡Gracias! Revisa tu inbox para confirmar.",
      trust: {
        response: "Respuesta <2 horas",
        results: "Resultados en 30 días",
        satisfaction: "98% Satisfacción"
      }
    },
    en: {
      badge: "LIMITED OFFER - New Clients",
      title: "Schedule Your Free Strategic Consultation",
      value: "Value: $5,000 USD. Today: FREE.",
      subtitle: "We analyze your business and give you growth roadmap with no commitment.",
      features: [
        "Complete audit of your digital presence (30-45 min)",
        "Identification of 3-5 quick growth opportunities",
        "Personalized investment recommendations",
        "Expected ROI estimate in 90 days",
        "Immediate action plan (no fine print)"
      ],
      cta: "Schedule Now (No Cost)",
      guarantee: "90-day guarantee. Results or refund.",
      divider: "Or",
      newsletterTitle: "Receive digital marketing tips + success cases",
      newsletterDescription: "Join +2,500 subscribers receiving exclusive content every week",
      newsletterPlaceholder: "your@email.com",
      newsletterButton: "Subscribe",
      newsletterSuccess: "Thanks! Check your inbox to confirm.",
      trust: {
        response: "Response <2 hours",
        results: "Results in 30 days",
        satisfaction: "98% Satisfaction"
      }
    }
  };
  
  const t = ingles ? content.en : content.es;

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
    { text: t.features[0], icon: '✓' },
    { text: t.features[1], icon: '✓' },
    { text: t.features[2], icon: '✓' },
    { text: t.features[3], icon: '✓' },
    { text: t.features[4], icon: '✓' }
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
        {t.badge}
      </div>

      {/* Glassmorphic Card Principal */}
      <div className={`${styles.ctaCard} ${isVisible ? styles.fadeInUp : ''}`}>
        {/* Header */}
        <div className={styles.cardHeader}>
          <h2 className={styles.mainTitle}>
            {t.title}
          </h2>
          <p className={styles.valueProposition}>
            {t.value}
          </p>
          <p className={styles.subtitle}>
            {t.subtitle}
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
          {t.cta}
          <span className={styles.buttonShine}></span>
        </a>

        {/* Guarantee Badge */}
        <div 
          className={`${styles.guaranteeBadge} ${isVisible ? styles.fadeInUp : ''}`}
          style={{ animationDelay: '1s' }}
        >
          <span className={styles.shieldIcon}>🛡️</span>
          {t.guarantee}
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>{t.divider}</span>
        </div>

        {/* Newsletter */}
        <div 
          className={`${styles.newsletterContainer} ${isVisible ? styles.fadeInUp : ''}`}
          style={{ animationDelay: '1.2s' }}
        >
          <h3 className={styles.newsletterTitle}>
            {t.newsletterTitle}
          </h3>
          <p className={styles.newsletterDescription}>
            {t.newsletterDescription}
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletterPlaceholder}
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.submitButton}>
                {t.newsletterButton}
                <span className={styles.buttonArrow}>→</span>
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <span className={styles.successIcon}>✅</span>
              {t.newsletterSuccess}
            </div>
          )}
        </div>

        {/* Trust Signals */}
        <div className={styles.trustSignals}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span className={styles.trustText}>{t.trust.response}</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📊</span>
            <span className={styles.trustText}>{t.trust.results}</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🎯</span>
            <span className={styles.trustText}>{t.trust.satisfaction}</span>
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

export default IndexSeccion11;
