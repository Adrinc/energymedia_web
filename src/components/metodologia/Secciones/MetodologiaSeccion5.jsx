// MetodologiaSeccion5.jsx
// FAQs - Preguntas frecuentes sobre metodología

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsMetodologia } from '../../../data/translationsMetodologia';
import styles from '../css/metodologiaSeccion5.module.css';

const MetodologiaSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsMetodologia.en.faqs : translationsMetodologia.es.faqs;
  
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section ref={sectionRef} className={styles.faqsSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        {/* FAQs List */}
        <div className={styles.faqsList}>
          {t.items.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${isVisible ? styles.fadeInUp : ''} ${openFaq === index ? styles.open : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span className={styles.faqIcon}>
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              
              {openFaq === index && (
                <div className={styles.faqAnswer}>
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetodologiaSeccion5;
