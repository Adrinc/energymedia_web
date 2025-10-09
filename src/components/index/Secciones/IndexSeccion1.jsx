import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/indexSeccion1.module.css';

const IndexSeccion1 = () => {
  const ingles = useStore(isEnglish);

  const content = {
    es: {
      h1: "Transforma tu negocio en líder digital con resultados garantizados",
      subtitle: "Marketing digital + desarrollo web + IA. Todo en un solo lugar. Primeros resultados en 30 días o reembolso completo.",
      ctaPrimary: "Agenda tu consultoría gratuita",
      ctaValue: "($5,000 MXN de valor)",
      ctaSecondary: "Ver nuestros resultados",
      trustBadges: {
        results: "Primeros resultados en 30 días",
        guarantee: "Garantía 90 días",
        response: "Respuesta <2 horas"
      }
    },
    en: {
      h1: "Transform your business into a digital leader with guaranteed results",
      subtitle: "Digital marketing + web development + AI. All in one place. First results in 30 days or full refund.",
      ctaPrimary: "Schedule your free consultation",
      ctaValue: "($5,000 MXN value)",
      ctaSecondary: "View our results",
      trustBadges: {
        results: "First results in 30 days",
        guarantee: "90-day guarantee",
        response: "Response <2 hours"
      }
    }
  };

  const t = ingles ? content.en : content.es;

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.videoBackground}>
          <video autoPlay muted loop playsInline className={styles.video}>
            <source src='/videos/v_bg_1.mp4' type='video/mp4' />
          </video>
          <div className={styles.videoOverlay}></div>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t.h1}</h1>
          <p className={styles.heroSubtitle}>{t.subtitle}</p>

          <div className={styles.ctaGroup}>
            <button className={styles.btnPrimary}>
              <span className={styles.ctaText}>{t.ctaPrimary}</span>
              <span className={styles.ctaValue}>{t.ctaValue}</span>
            </button>
            <button className={styles.btnSecondary}>{t.ctaSecondary}</button>
          </div>

          <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <span className={styles.badgeText}>{t.trustBadges.results}</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.badgeText}>{t.trustBadges.guarantee}</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.badgeText}>{t.trustBadges.response}</span>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>{ingles ? 'Scroll down' : 'Desliza hacia abajo'}</span>
          <div className={styles.scrollIcon}></div>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion1;
