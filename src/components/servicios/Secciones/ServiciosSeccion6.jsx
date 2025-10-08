// ServiciosSeccion6.jsx
// Casos Destacados - Casos de éxito multiservicios

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { motion } from 'framer-motion';
import { isEnglish } from '../../../data/variables';
import { translationsServicios } from '../../../data/translationsServicios';
import styles from '../css/serviciosSeccion6.module.css';

const ServiciosSeccion6 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en.cases : translationsServicios.es.cases;

  const [isVisible, setIsVisible] = useState(false);
  const [activeCase, setActiveCase] = useState(null);
  const sectionRef = useRef(null);

  // Casos de éxito cross-service (datos de ejemplo)
  const cases = ingles ? [
    {
      industry: "Healthcare",
      client: "Regional Hospital Network",
      challenge: "Increase patient acquisition in Hispanic communities",
      services: ["Video Marketing", "Social Ads", "Data Analytics"],
      metrics: [
        { label: "Patient Inquiries", value: "+156%" },
        { label: "Cost per Lead", value: "-34%" },
        { label: "Community Reach", value: "2.3M" }
      ],
      testimonial: "Energy Media helped us authentically connect with our Hispanic community.",
      image: "case-healthcare.jpg" // placeholder
    },
    {
      industry: "E-commerce",
      client: "Fashion Retail Brand",
      challenge: "Scale multicultural campaigns across channels",
      services: ["Marketing 360", "Web & Apps", "Branding"],
      metrics: [
        { label: "ROAS", value: "+3.1x" },
        { label: "AOV", value: "+42%" },
        { label: "Revenue", value: "$2.8M" }
      ],
      testimonial: "Our best quarter ever thanks to their integrated strategy.",
      image: "case-ecommerce.jpg"
    },
    {
      industry: "Education",
      client: "Online Learning Platform",
      challenge: "Boost enrollment in bilingual programs",
      services: ["Video Marketing", "Marketing 360", "Data Analytics"],
      metrics: [
        { label: "Enrollments", value: "+214%" },
        { label: "CAC", value: "-28%" },
        { label: "Completion Rate", value: "89%" }
      ],
      testimonial: "They understand our multicultural audience like no one else.",
      image: "case-education.jpg"
    },
    {
      industry: "Food & Beverage",
      client: "Restaurant Chain",
      challenge: "Drive foot traffic with cultural campaigns",
      services: ["Video Marketing", "Social Ads", "Branding"],
      metrics: [
        { label: "Store Visits", value: "+87%" },
        { label: "Social Engagement", value: "+312%" },
        { label: "New Locations", value: "12" }
      ],
      testimonial: "Our social presence went from zero to viral.",
      image: "case-food.jpg"
    }
  ] : [
    {
      industry: "Salud",
      client: "Red Hospitalaria Regional",
      challenge: "Aumentar captación de pacientes en comunidades hispanas",
      services: ["Video Marketing", "Social Ads", "Data Analytics"],
      metrics: [
        { label: "Consultas de pacientes", value: "+156%" },
        { label: "Costo por lead", value: "-34%" },
        { label: "Alcance comunitario", value: "2.3M" }
      ],
      testimonial: "Energy Media nos ayudó a conectar auténticamente con nuestra comunidad hispana.",
      image: "case-healthcare.jpg"
    },
    {
      industry: "E-commerce",
      client: "Marca de moda retail",
      challenge: "Escalar campañas multiculturales en todos los canales",
      services: ["Marketing 360", "Web & Apps", "Branding"],
      metrics: [
        { label: "ROAS", value: "+3.1x" },
        { label: "Valor promedio orden", value: "+42%" },
        { label: "Revenue", value: "$2.8M" }
      ],
      testimonial: "Nuestro mejor trimestre gracias a su estrategia integrada.",
      image: "case-ecommerce.jpg"
    },
    {
      industry: "Educación",
      client: "Plataforma de aprendizaje online",
      challenge: "Aumentar inscripciones en programas bilingües",
      services: ["Video Marketing", "Marketing 360", "Data Analytics"],
      metrics: [
        { label: "Inscripciones", value: "+214%" },
        { label: "CAC", value: "-28%" },
        { label: "Tasa de completación", value: "89%" }
      ],
      testimonial: "Entienden nuestra audiencia multicultural como nadie más.",
      image: "case-education.jpg"
    },
    {
      industry: "Alimentos & Bebidas",
      client: "Cadena de restaurantes",
      challenge: "Generar tráfico en tiendas con campañas culturales",
      services: ["Video Marketing", "Social Ads", "Branding"],
      metrics: [
        { label: "Visitas a tiendas", value: "+87%" },
        { label: "Engagement social", value: "+312%" },
        { label: "Nuevas ubicaciones", value: "12" }
      ],
      testimonial: "Nuestra presencia social pasó de cero a viral.",
      image: "case-food.jpg"
    }
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
          <h2 className={styles.h2}>{t.sectionTitle}</h2>
          <p className={styles.subtitle}>{t.sectionSubtitle}</p>
        </div>

        {/* Grid de casos */}
        <div className={styles.casesGrid}>
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              className={`${styles.caseCard} ${activeCase === index ? styles.caseActive : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setActiveCase(index)}
              onMouseLeave={() => setActiveCase(null)}
            >
              {/* Header del caso */}
              <div className={styles.caseHeader}>
                <span className={styles.industry}>{caseItem.industry}</span>
                <h3 className={styles.client}>{caseItem.client}</h3>
              </div>

              {/* Challenge */}
              <div className={styles.challenge}>
                <span className={styles.challengeLabel}>
                  {ingles ? "Challenge:" : "Reto:"}
                </span>
                <p className={styles.challengeText}>{caseItem.challenge}</p>
              </div>

              {/* Services used */}
              <div className={styles.servicesUsed}>
                {caseItem.services.map((service, i) => (
                  <span key={i} className={styles.serviceTag}>
                    {service}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className={styles.metrics}>
                {caseItem.metrics.map((metric, i) => (
                  <div key={i} className={styles.metric}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className={styles.testimonial}>
                <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className={styles.testimonialText}>{caseItem.testimonial}</p>
              </div>

              {/* CTA */}
              <a href="/casos" className={styles.caseLink}>
                {ingles ? "View full case study" : "Ver caso completo"}
                <svg className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA para ver todos los casos */}
        <div className={`${styles.ctaWrapper} ${isVisible ? styles.fadeInUp : ''}`}>
          <a href="/casos" className={styles.ctaButton}>
            {t.ctaAll}
            <svg className={styles.ctaArrow} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion6;
