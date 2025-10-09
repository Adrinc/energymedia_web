import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/indexSeccion11.module.css';

/**
 * IndexSeccion11 - CTA FINAL + OFERTA ESPECIAL
 * Última oportunidad de conversión con oferta irresistible
 * Sistema "Cine-Data Multicultural" - Energy Media
 */
const IndexSeccion11 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      badge: "OFERTA LIMITADA - Nuevos Clientes",
      title: "Agenda tu Consultoría Estratégica Gratuita",
      subtitle: "Valor: $5,000 MXN. Hoy: GRATIS. Analizamos tu negocio y te damos roadmap de crecimiento sin compromiso.",
      features: [
        "✓ Auditoría completa de tu presencia digital (30-45 min)",
        "✓ Identificación de 3-5 oportunidades de crecimiento rápidas",
        "✓ Recomendaciones de inversión personalizadas",
        "✓ Estimación de ROI esperado en 90 días",
        "✓ Plan de acción inmediato (sin letra chica)"
      ],
      cta: "Agenda Ahora (Sin Costo)",
      guarantee: "🛡️ Garantía de 90 días. Resultados o reembolso.",
      newsletter: {
        title: "O recibe tips de marketing digital + casos de éxito en tu inbox",
        emailPlaceholder: "tu@email.com",
        buttonText: "Suscribirse",
        successMessage: "¡Gracias! Revisa tu inbox para confirmar.",
        errorMessage: "Hubo un error. Intenta nuevamente."
      }
    },
    en: {
      badge: "LIMITED OFFER - New Clients",
      title: "Schedule Your Free Strategic Consultation",
      subtitle: "Value: $5,000 USD. Today: FREE. We analyze your business and give you growth roadmap with no commitment.",
      features: [
        "✓ Complete audit of your digital presence (30-45 min)",
        "✓ Identification of 3-5 quick growth opportunities",
        "✓ Personalized investment recommendations",
        "✓ Expected ROI estimate in 90 days",
        "✓ Immediate action plan (no fine print)"
      ],
      cta: "Schedule Now (No Cost)",
      guarantee: "🛡️ 90-day guarantee. Results or refund.",
      newsletter: {
        title: "Or receive digital marketing tips + success cases in your inbox",
        emailPlaceholder: "your@email.com",
        buttonText: "Subscribe",
        successMessage: "Thanks! Check your inbox to confirm.",
        errorMessage: "There was an error. Please try again."
      }
    }
  };
  
  const t = ingles ? content.en : content.es;

  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle'); // idle, success, error
  const sectionRef = useRef(null);

  // Intersection Observer
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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!email || !email.includes('@')) {
      setNewsletterStatus('error');
      return;
    }

    // Simulación de envío (reemplazar con integración real de Mailchimp/ConvertKit)
    setNewsletterStatus('success');
    setEmail('');

    // Reset después de 5 segundos
    setTimeout(() => {
      setNewsletterStatus('idle');
    }, 5000);
  };

  return (
    <CinematicSection variant="gradient" withGrain={false}>
      <div ref={sectionRef} className={styles.ctaFinalContainer}>
        <div className={styles.offerSection}>
          {/* Badge destacado */}
          <div className={styles.offerBadge}>
            {t.badge}
          </div>

          {/* Título */}
          <h2 className={styles.offerTitle}>
            {t.title}
          </h2>

          {/* Subtitle */}
          <p className={styles.offerSubtitle}>
            {t.subtitle}
          </p>

          {/* Features */}
          <ul className={styles.featuresList}>
            {t.features.map((feature, index) => (
              <li 
                key={index}
                className={`${styles.featureItem} ${isVisible ? styles.fadeInUp : ''}`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className={styles.checkIcon}></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className={styles.ctaButtonWrapper}>
            <a 
              href="/contacto"
              className={styles.ctaButton}
            >
              {t.cta}
            </a>
          </div>

          {/* Garantía */}
          <div className={styles.guarantee}>
            {t.guarantee}
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletterSection}>
          <h3 className={styles.newsletterTitle}>{t.newsletter.title}</h3>

          <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletter.emailPlaceholder}
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              {t.newsletter.buttonText}
            </button>
          </form>

          {/* Status messages */}
          {newsletterStatus === 'success' && (
            <p className={`${styles.newsletterMessage} ${styles.success}`}>{t.newsletter.successMessage}</p>
          )}
          {newsletterStatus === 'error' && (
            <p className={`${styles.newsletterMessage} ${styles.error}`}>{t.newsletter.errorMessage}</p>
          )}
        </div>
      </div>
    </CinematicSection>
  );
};

export default IndexSeccion11;
