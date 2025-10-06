// ServiciosSeccion7.jsx
// FAQs Generales - Preguntas frecuentes sobre servicios

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { motion, AnimatePresence } from 'framer-motion';
import { isEnglish } from '../../../data/variables';
import { translationsServicios } from '../../../data/translationsServicios';
import styles from '../css/serviciosSeccion7.module.css';

const ServiciosSeccion7 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en.faqs : translationsServicios.es.faqs;

  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer para animación al scroll
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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.h2}>{t.sectionTitle}</h2>
          <p className={styles.subtitle}>{t.sectionSubtitle}</p>
        </div>

        {/* FAQs Accordion */}
        <div className={styles.faqsList}>
          {t.questions.map((faq, index) => (
            <motion.div
              key={index}
              className={`${styles.faqItem} ${openFaq === index ? styles.faqOpen : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Pregunta (botón clickeable) */}
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
              >
                <span className={styles.questionNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.questionText}>{faq.question}</span>
                <svg
                  className={styles.chevronIcon}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Respuesta (colapsable) */}
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className={styles.answerContent}>
                      <p className={styles.answerText}>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional para más preguntas */}
        <div className={`${styles.ctaContact} ${isVisible ? styles.fadeInUp : ''}`}>
          <p className={styles.ctaText}>
            {ingles
              ? "Still have questions? We're here to help."
              : "¿Todavía tienes preguntas? Estamos aquí para ayudarte."}
          </p>
          <a href="/contacto" className={styles.ctaButton}>
            {ingles ? "Contact us" : "Contáctanos"}
            <svg className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion7;
