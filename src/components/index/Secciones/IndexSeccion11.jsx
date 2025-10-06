import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import { motion } from 'framer-motion';
import styles from '../css/indexSeccion11.module.css';

/**
 * IndexSeccion11 - CTA FINAL + NEWSLETTER
 * Última oportunidad de conversión + captura de leads
 * Sistema "Cine-Data Multicultural" - Energy Media
 */

const IndexSeccion11 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!email || !email.includes('@')) {
      alert(ingles ? 'Please enter a valid email' : 'Por favor ingresa un email válido');
      return;
    }

    setLoading(true);
    
    // Simulación de envío (aquí integrarías con Mailchimp/ConvertKit)
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
      setEmail('');
      
      // Reset después de 5 segundos
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className={styles.ctaSection}>
      {/* CTA Principal - Bandera Épica */}
      <motion.div
        className={styles.ctaBanner}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.ctaContainer}>
          {/* Icono decorativo */}
          <motion.div
            className={styles.ctaIcon}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🚀
          </motion.div>

          {/* Título épico */}
          <motion.h2
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {ingles 
              ? "Ready to grow with culture and data?"
              : "¿Listos para crecer con cultura y datos?"
            }
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className={styles.ctaSubtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {ingles 
              ? "Schedule your free consultation and discover how to make your brand truly connect with multicultural audiences."
              : "Agenda tu consultoría gratuita y descubre cómo hacer que tu marca conecte auténticamente con audiencias multiculturales."
            }
          </motion.p>

          {/* Botón CTA Grande */}
          <motion.a
            href="/contacto"
            className={styles.ctaButton}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {ingles ? "Schedule your free consultation" : "Agenda tu consultoría gratuita"}
          </motion.a>

          {/* Micro-copy de confianza */}
          <motion.p
            className={styles.trustMicrocopy}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {ingles 
              ? "✓ No commitment required  •  ✓ 30-minute strategic session  •  ✓ Actionable insights guaranteed"
              : "✓ Sin compromiso  •  ✓ Sesión estratégica de 30 min  •  ✓ Insights accionables garantizados"
            }
          </motion.p>
        </div>
      </motion.div>

      {/* Newsletter - Sección Secundaria */}
      <motion.div
        className={styles.newsletterSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletterContent}>
            {/* Icono */}
            <div className={styles.newsletterIcon}>📬</div>
            
            {/* Texto */}
            <div className={styles.newsletterText}>
              <h3 className={styles.newsletterTitle}>
                {ingles 
                  ? "Get multicultural marketing tips in your inbox"
                  : "Recibe tips de marketing multicultural en tu inbox"
                }
              </h3>
              <p className={styles.newsletterDescription}>
                {ingles 
                  ? "Join 5,000+ marketers receiving our weekly insights on Hispanic and multicultural audiences."
                  : "Únete a 5,000+ marketers que reciben nuestros insights semanales sobre audiencias hispanas y multiculturales."
                }
              </p>
            </div>
          </div>

          {/* Form */}
          <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
            <div className={styles.formGroup}>
              <input
                type="email"
                className={styles.emailInput}
                placeholder={ingles ? "Enter your email" : "Ingresa tu email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed || loading}
                required
              />
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={subscribed || loading}
              >
                {loading 
                  ? (ingles ? 'Subscribing...' : 'Suscribiendo...')
                  : subscribed 
                    ? (ingles ? 'Subscribed! ✓' : '¡Suscrito! ✓')
                    : (ingles ? 'Subscribe' : 'Suscribirse')
                }
              </button>
            </div>
            
            {/* Privacy note */}
            <p className={styles.privacyNote}>
              {ingles 
                ? "We respect your privacy. Unsubscribe at any time."
                : "Respetamos tu privacidad. Cancela cuando quieras."
              }
            </p>

            {/* Success message */}
            {subscribed && (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {ingles 
                  ? "🎉 Thanks for subscribing! Check your inbox."
                  : "🎉 ¡Gracias por suscribirte! Revisa tu inbox."
                }
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>

      {/* Elementos decorativos de fondo */}
      <div className={styles.decorativeCircle1}></div>
      <div className={styles.decorativeCircle2}></div>
    </section>
  );
};

export default IndexSeccion11;
