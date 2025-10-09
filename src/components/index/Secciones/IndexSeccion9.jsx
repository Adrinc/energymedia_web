import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/indexSeccion9.module.css';

/**
 * IndexSeccion9 - TESTIMONIOS + ESTADÍSTICAS
 * Validación emocional + datos de satisfacción
 * Sistema "Cine-Data Multicultural" - Energy Media
 */
const IndexSeccion9 = () => {
  const ingles = useStore(isEnglish);
  
  const content = {
    es: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Más de 200 empresas confiaron en nosotros. Estos son sus resultados.",
      items: [
        {
          text: "Aumentamos las ventas 3x en 6 meses con su estrategia digital. Resultados medibles desde el primer día.",
          author: "Carlos Mendoza",
          role: "CMO",
          company: "Tech Startup Inc.",
          result: "3x aumento de ventas en 6 meses",
          image: "/image/testimonials/Carlos.png"
        },
        {
          text: "Profesionalismo y transparencia. Manejan nuestras campañas con métricas impresionantes y optimización constante.",
          author: "Maria Lopez",
          role: "Directora de Marketing",
          company: "Fashion Retail Co.",
          result: "ROAS +42%, CAC -28%",
          image: "/image/testimonials/Maria.png"
        },
        {
          text: "La calidad del video es excepcional, y el ROI en nuestros social ads superó todas las expectativas.",
          author: "Juan Perez",
          role: "CEO",
          company: "E-commerce Latam",
          result: "+3.1x leads calificados",
          image: "/image/testimonials/Jose.png"
        }
      ],
      stats: [
        {
          value: "98%",
          label: "Tasa de Satisfacción",
          icon: "⭐"
        },
        {
          value: "85%",
          label: "Clientes Recurrentes",
          description: "Renuevan servicio",
          icon: "🔁"
        },
        {
          value: "92%",
          label: "Recomiendan Energy Media",
          icon: "👍"
        },
        {
          value: "4.9/5",
          label: "Calificación Promedio",
          icon: "⭐⭐⭐⭐⭐"
        }
      ]
    },
    en: {
      title: "What Our Clients Say",
      subtitle: "More than 200 companies trusted us. These are their results.",
      items: [
        {
          text: "We increased sales 3x in 6 months with their digital strategy. Measurable results from day one.",
          author: "Carlos Mendoza",
          role: "CMO",
          company: "Tech Startup Inc.",
          result: "3x sales increase in 6 months",
          image: "/image/testimonials/Carlos.png"
        },
        {
          text: "Professionalism and transparency. They handle our campaigns with impressive metrics and constant optimization.",
          author: "Maria Lopez",
          role: "Marketing Director",
          company: "Fashion Retail Co.",
          result: "ROAS +42%, CAC -28%",
          image: "/image/testimonials/Maria.png"
        },
        {
          text: "The video quality is exceptional, and the ROI in our social ads exceeded all expectations.",
          author: "Juan Perez",
          role: "CEO",
          company: "E-commerce Latam",
          result: "+3.1x qualified leads",
          image: "/image/testimonials/Jose.png"
        }
      ],
      stats: [
        {
          value: "98%",
          label: "Satisfaction Rate",
          icon: "⭐"
        },
        {
          value: "85%",
          label: "Recurring Clients",
          description: "Renew service",
          icon: "🔁"
        },
        {
          value: "92%",
          label: "Recommend Energy Media",
          icon: "👍"
        },
        {
          value: "4.9/5",
          label: "Average Rating",
          icon: "⭐⭐⭐⭐⭐"
        }
      ]
    }
  };
  
  const t = ingles ? content.en : content.es;

  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % t.items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, t.items.length]);

  return (
    <section className={styles.section}>
      <div ref={sectionRef} className={styles.testimonialsContainer}>
        {/* Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.sectionSubtitle}>{t.subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.testimonialsGrid}>
          {t.items.map((testimonial, index) => (
            <div
              key={index}
              className={`${styles.testimonialCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              
              <div className={styles.testimonialAuthor}>
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className={styles.authorAvatar}
                  />
                )}
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testimonial.author}</p>
                  <p className={styles.authorRole}>
                    {testimonial.role} - {testimonial.company}
                  </p>
                  <div className={styles.authorResult}>
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
   {/*      <div className={styles.statsGrid}>
          {t.stats.map((stat, index) => (
            <div
              key={index}
              className={`${styles.statBadge} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              {stat.description && (
                <div className={styles.statDescription}>{stat.description}</div>
              )}
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default IndexSeccion9;
