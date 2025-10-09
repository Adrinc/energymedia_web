// ServiciosSeccion5NEW.jsx
// BRANDING & IDENTIDAD CORPORATIVA - Fondo Oscuro Cinematográfico

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import CinematicSection from '../../global/CinematicSection';
import styles from '../css/serviciosSeccion5NEW.module.css';

const ServiciosSeccion5NEW = () => {
  const ingles = useStore(isEnglish);
  
  const [isVisible, setIsVisible] = useState(false);
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

  const categories = [
    {
      title: ingles ? 'Visual Identity' : 'Identidad Visual',
      icon: '🎨',
      features: [
        ingles ? 'Professional logo design' : 'Diseño de logotipo profesional',
        ingles ? 'Corporate color palette' : 'Paleta de colores corporativa',
        ingles ? 'Typography and graphic elements' : 'Tipografía y elementos gráficos',
        ingles ? 'Stationery applications' : 'Aplicaciones en papelería'
      ]
    },
    {
      title: ingles ? 'Brand Strategy' : 'Estrategia de Marca',
      icon: '🎯',
      features: [
        ingles ? 'Market and competition research' : 'Investigación de mercado y competencia',
        ingles ? 'Brand personality definition' : 'Definición de personalidad de marca',
        ingles ? 'Strategic positioning' : 'Posicionamiento estratégico',
        ingles ? 'Unique value proposition' : 'Propuesta de valor única'
      ]
    },
    {
      title: ingles ? 'Brand Manual' : 'Manual de Marca',
      icon: '📖',
      features: [
        ingles ? 'Complete usage guidelines' : 'Guidelines completas de uso',
        ingles ? 'Digital and physical applications' : 'Aplicaciones digitales y físicas',
        ingles ? 'Technical specifications' : 'Especificaciones técnicas',
        ingles ? 'Implementation examples' : 'Ejemplos de implementación'
      ]
    }
  ];

  const stats = [
    { value: '+60%', label: ingles ? 'Brand Recognition' : 'Reconocimiento de Marca' },
    { value: '+45%', label: ingles ? 'Quality Perception' : 'Percepción de Calidad' },
    { value: '+25%', label: ingles ? 'Customer Loyalty' : 'Lealtad del Cliente' },
    { value: '15-30%', label: ingles ? 'Price Premium' : 'Premium de Precio' }
  ];

  return (
    <CinematicSection 
      variant="dark" 
      withGrain={true}
      withAnimation={true}
      id="branding"
    >
      <section ref={sectionRef} className={styles.brandingSection}>
        {/* Background Pattern */}
        <div className={styles.backgroundPattern}></div>
        
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.sectionTitle}>
            {ingles ? 'Branding & Corporate Identity' : 'Branding & Identidad Corporativa'}
          </h2>
          
          {/* Divisor Dorado */}
          <div className={styles.divider}></div>
          
          <p className={styles.sectionTagline}>
            {ingles ? 'Create a memorable brand that builds trust' : 'Crea una marca memorable que genere confianza'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`${styles.categoryCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${0.2 + (index * 0.15)}s` }}
            >
              <div className={styles.cardGlow}></div>
              
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{category.icon}</span>
                </div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>

              <ul className={styles.featureList}>
                {category.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <div className={styles.bullet}>•</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative Corner */}
              <div className={styles.cornerDecor}></div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={`${styles.statsRow} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.8s' }}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statBox}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statGlow}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`${styles.ctaWrapper} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '1s' }}>
          <a href="/contacto" className={styles.ctaButton}>
            <span>{ingles ? 'Build Your Brand' : 'Construye tu Marca'}</span>
            <div className={styles.buttonShine}></div>
          </a>
        </div>
      </section>
    </CinematicSection>
  );
};

export default ServiciosSeccion5NEW;
