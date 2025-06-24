import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/preciosSeccion4.module.css";

const PreciosSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.precios.faq : translations.es.precios.faq;
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.faqList}>
            {textos.questions.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={`${styles.questionButton} ${activeQuestion === index ? styles.active : ''}`}
                  onClick={() => toggleQuestion(index)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.toggleIcon}>
                    {activeQuestion === index ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`${styles.answerContainer} ${activeQuestion === index ? styles.expanded : ''}`}>
                  <div className={styles.answerContent}>
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.supportCard}>
            <div className={styles.supportContent}>
              <div className={styles.supportIcon}>💬</div>
              <h3 className={styles.supportTitle}>
                {ingles ? "Still have questions?" : "¿Aún tienes preguntas?"}
              </h3>
              <p className={styles.supportDescription}>
                {ingles 
                  ? "Our support team is here to help you find the perfect plan for your needs."
                  : "Nuestro equipo de soporte está aquí para ayudarte a encontrar el plan perfecto para tus necesidades."
                }
              </p>
              <div className={styles.supportActions}>
                <button className={styles.chatButton}>
                  <span className={styles.buttonIcon}>💬</span>
                  {ingles ? "Live Chat" : "Chat en Vivo"}
                </button>
                <button className={styles.emailButton}>
                  <span className={styles.buttonIcon}>📧</span>
                  {ingles ? "Send Email" : "Enviar Email"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreciosSeccion4;