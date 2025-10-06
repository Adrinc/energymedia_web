// ServiciosSeccion5.jsx
// Herramientas Martech - Stack tecnológico

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { motion } from 'framer-motion';
import { isEnglish } from '../../../data/variables';
import { translationsServicios } from '../../../data/translationsServicios';
import styles from '../css/serviciosSeccion5.module.css';

const ServiciosSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en.tools : translationsServicios.es.tools;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Lista de herramientas martech (logos reales deberían estar en public/image/tools/)
  const tools = [
    { name: 'Google Analytics 4', category: 'Analytics', color: '#E37400' },
    { name: 'Google Ads', category: 'SEM', color: '#4285F4' },
    { name: 'Meta Ads', category: 'Social Ads', color: '#0668E1' },
    { name: 'TikTok Ads', category: 'Social Ads', color: '#000000' },
    { name: 'HubSpot', category: 'Marketing Automation', color: '#FF7A59' },
    { name: 'Mailchimp', category: 'Email Marketing', color: '#FFE01B' },
    { name: 'Semrush', category: 'SEO', color: '#FF642D' },
    { name: 'Hotjar', category: 'CRO', color: '#FD3A5C' },
    { name: 'Ahrefs', category: 'SEO', color: '#FF7A59' },
    { name: 'Tableau', category: 'Data Visualization', color: '#E97627' },
    { name: 'Looker Studio', category: 'Reporting', color: '#669DF6' },
    { name: 'Zapier', category: 'Automation', color: '#FF4A00' }
  ];

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

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.badge}>{t.badge}</div>
          <h2 className={styles.h2}>{t.sectionTitle}</h2>
          <p className={styles.subtitle}>{t.sectionSubtitle}</p>
        </div>

        {/* Grid de herramientas */}
        <div className={styles.toolsGrid}>
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className={styles.toolCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Logo placeholder (círculo con inicial) */}
              <div 
                className={styles.toolLogo}
                style={{ 
                  background: `linear-gradient(135deg, ${tool.color}20, ${tool.color}40)`
                }}
              >
                <span className={styles.toolInitial} style={{ color: tool.color }}>
                  {tool.name.charAt(0)}
                </span>
              </div>

              {/* Nombre de la herramienta */}
              <h3 className={styles.toolName}>{tool.name}</h3>

              {/* Categoría */}
              <span className={styles.toolCategory}>{tool.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Footer con texto de certificaciones */}
        <div className={`${styles.footer} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.certificationBadge}>
            <svg className={styles.certIcon} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className={styles.certText}>
              {ingles 
                ? "Our team holds official certifications across all major platforms, ensuring expert-level execution."
                : "Nuestro equipo cuenta con certificaciones oficiales en todas las plataformas principales, garantizando ejecución de nivel experto."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion5;
