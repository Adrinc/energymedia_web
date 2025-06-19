import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "../css/homeSeccion8.module.css";

const HomeSeccion8 = () => {
  const ingles = useStore(isEnglish);
  const [openIndex, setOpenIndex] = useState(null);

  const content = {
    es: {
      title: "Preguntas Frecuentes",
      subtitle: "Encuentra respuestas a las preguntas más comunes sobre NetHive",
      faqs: [
        {
          question: "¿Qué medidas de seguridad implementa NetHive?",
          answer: "NetHive implementa múltiples capas de seguridad, incluyendo encriptación de datos end-to-end, autenticación de dos factores, controles de acceso basados en roles, y monitoreo continuo de actividades. Cumplimos con estándares internacionales de seguridad y realizamos auditorías regulares.",
          tag: "security"
        },
        {
          question: "¿Cómo funciona el soporte técnico?",
          answer: "Ofrecemos soporte técnico 24/7 a través de múltiples canales: chat en vivo, correo electrónico y teléfono. Nuestro equipo de expertos está disponible para resolver cualquier incidencia y proporcionar asistencia en tiempo real. Los tiempos de respuesta varían según el plan contratado.",
          tag: "support"
        },
        {
          question: "¿Se puede integrar NetHive con otros sistemas?",
          answer: "Sí, NetHive ofrece APIs RESTful completas y webhooks que permiten una integración seamless con la mayoría de los sistemas empresariales, incluyendo ERPs, sistemas de tickets, y herramientas de monitoreo. También proporcionamos documentación detallada y soporte para la integración.",
          tag: "integration"
        },
        {
          question: "¿Cómo se realiza la migración de datos existentes?",
          answer: "El proceso de migración se realiza en cuatro fases: análisis inicial de datos, mapeo de estructuras, migración en ambiente de pruebas y migración final. Nuestro equipo te acompaña en cada paso para asegurar una transición sin pérdida de información.",
          tag: "migration"
        },
        {
          question: "¿Cuál es el tiempo de implementación promedio?",
          answer: "El tiempo de implementación típico es de 2-4 semanas, dependiendo de la complejidad de tu infraestructura y requisitos específicos. Esto incluye la configuración inicial, migración de datos, pruebas y capacitación del personal.",
          tag: "integration"
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to the most common questions about NetHive",
      faqs: [
        {
          question: "What security measures does NetHive implement?",
          answer: "NetHive implements multiple security layers, including end-to-end data encryption, two-factor authentication, role-based access controls, and continuous activity monitoring. We comply with international security standards and perform regular audits.",
          tag: "security"
        },
        {
          question: "How does technical support work?",
          answer: "We offer 24/7 technical support through multiple channels: live chat, email, and phone. Our team of experts is available to resolve any incidents and provide real-time assistance. Response times vary according to the contracted plan.",
          tag: "support"
        },
        {
          question: "Can NetHive be integrated with other systems?",
          answer: "Yes, NetHive offers complete RESTful APIs and webhooks that allow seamless integration with most enterprise systems, including ERPs, ticketing systems, and monitoring tools. We also provide detailed documentation and integration support.",
          tag: "integration"
        },
        {
          question: "How is existing data migration handled?",
          answer: "The migration process is carried out in four phases: initial data analysis, structure mapping, test environment migration, and final migration. Our team accompanies you every step of the way to ensure a transition without data loss.",
          tag: "migration"
        },
        {
          question: "What is the average implementation time?",
          answer: "Typical implementation time is 2-4 weeks, depending on your infrastructure complexity and specific requirements. This includes initial setup, data migration, testing, and staff training.",
          tag: "integration"
        }
      ]
    }
  };

  const textos = ingles ? content.en : content.es;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getTagClass = (tag) => {
    switch (tag) {
      case 'security':
        return styles.tagSecurity;
      case 'support':
        return styles.tagSupport;
      case 'integration':
        return styles.tagIntegration;
      case 'migration':
        return styles.tagMigration;
      default:
        return '';
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>
        <div className={styles.faqsGrid}>
          {textos.faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={styles.faqHeader}
                onClick={() => toggleFaq(index)}
              >
                <span className={styles.question}>
                  <span className={`${styles.tag} ${getTagClass(faq.tag)}`}>
                    {faq.tag.charAt(0).toUpperCase() + faq.tag.slice(1)}
                  </span>
                  {faq.question}
                </span>
                <svg 
                  className={`${styles.icon} ${openIndex === index ? styles.iconRotated : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${styles.answer} ${openIndex === index ? styles.answerOpen : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion8;