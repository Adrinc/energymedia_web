import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../css/indexSeccion9.module.css';

/**
 * IndexSeccion9 - TESTIMONIOS
 * Validación emocional + resultados desde la voz del cliente
 * Sistema "Cine-Data Multicultural" - Energy Media
 */

const TESTIMONIALS = [
  {
    id: 1,
    name: 'María González',
    role: 'VP Marketing',
    company: 'Hispanic Foods Inc.',
    avatar: '/image/testimonials/Maria.png',
    quote: {
      es: 'Energy Media transformó completamente nuestra estrategia digital. En 6 meses triplicamos nuestras ventas online y finalmente conectamos auténticamente con nuestra audiencia hispana.',
      en: 'Energy Media completely transformed our digital strategy. In 6 months we tripled our online sales and finally connected authentically with our Hispanic audience.'
    },
    metric: {
      value: '3x',
      label: { es: 'Ventas Online', en: 'Online Sales' }
    },
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    role: 'CEO',
    company: 'Latino Tech Startup',
    avatar: '/image/testimonials/Carlos.png',
    quote: {
      es: 'Su expertise en video marketing es impresionante. Crearon campañas que no solo se veían bien, sino que generaron resultados medibles. El ROAS aumentó 210% en el primer trimestre.',
      en: 'Their expertise in video marketing is impressive. They created campaigns that not only looked great but generated measurable results. ROAS increased 210% in the first quarter.'
    },
    metric: {
      value: '+210%',
      label: { es: 'ROAS', en: 'ROAS' }
    },
    rating: 5
  },
  {
    id: 3,
    name: 'Jennifer Lee',
    role: 'Director of Growth',
    company: 'Multicultural Healthcare',
    avatar: '/image/testimonials/Jenny.png',
    quote: {
      es: 'Lo que más valoramos es su enfoque cultural auténtico combinado con análisis profundo de datos. Los insights que obtuvimos fueron clave para nuestra estrategia.',
      en: 'What we value most is their authentic cultural approach combined with deep data analysis. The insights we got were key to our strategy.'
    },
    metric: {
      value: '–34%',
      label: { es: 'Costo por Lead', en: 'Cost per Lead' }
    },
    rating: 5
  }
];

const IndexSeccion9 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[activeTestimonial];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        {/* Título */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>
            {ingles ? "What our clients say" : "Lo que dicen nuestros clientes"}
          </h2>
          <p className={styles.sectionSubtitle}>
            {ingles 
              ? "Real results from real clients. See how we've helped businesses grow with multicultural marketing."
              : "Resultados reales de clientes reales. Conoce cómo hemos ayudado a empresas a crecer con marketing multicultural."
            }
          </p>
        </motion.div>

        {/* Carrusel de Testimonios */}
        <div className={styles.carouselContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              className={styles.testimonialCard}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Comillas decorativas */}
              <div className={styles.quoteIcon}>"</div>

              {/* Contenido del testimonio */}
              <div className={styles.testimonialContent}>
                <p className={styles.quoteText}>
                  {ingles ? currentTestimonial.quote.en : currentTestimonial.quote.es}
                </p>

                {/* Métrica destacada */}
                <div className={styles.metricHighlight}>
                  <span className={styles.metricValue}>{currentTestimonial.metric.value}</span>
                  <span className={styles.metricLabel}>
                    {ingles ? currentTestimonial.metric.label.en : currentTestimonial.metric.label.es}
                  </span>
                </div>

                {/* Información del cliente */}
                <div className={styles.clientInfo}>
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.name}
                    className={styles.avatar}
                  />
                  <div className={styles.clientDetails}>
                    <h4 className={styles.clientName}>{currentTestimonial.name}</h4>
                    <p className={styles.clientRole}>
                      {currentTestimonial.role} - {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                {/* Estrellas de rating */}
                <div className={styles.ratingStars}>
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegación */}
          <div className={styles.carouselControls}>
            <button 
              className={styles.navButton}
              onClick={prevTestimonial}
              aria-label={ingles ? "Previous testimonial" : "Testimonio anterior"}
            >
              ‹
            </button>
            
            {/* Indicadores de punto */}
            <div className={styles.dotsIndicator}>
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeTestimonial ? styles.dotActive : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`${ingles ? 'Go to testimonial' : 'Ir al testimonio'} ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className={styles.navButton}
              onClick={nextTestimonial}
              aria-label={ingles ? "Next testimonial" : "Siguiente testimonio"}
            >
              ›
            </button>
          </div>
        </div>

        {/* Grid de mini-tarjetas (todos los testimonios visibles) */}
        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`${styles.miniCard} ${index === activeTestimonial ? styles.miniCardActive : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setActiveTestimonial(index)}
            >
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className={styles.miniAvatar}
              />
              <div className={styles.miniContent}>
                <h5 className={styles.miniName}>{testimonial.name}</h5>
                <p className={styles.miniCompany}>{testimonial.company}</p>
                <div className={styles.miniMetric}>
                  <span className={styles.miniMetricValue}>{testimonial.metric.value}</span>
                  <span className={styles.miniMetricLabel}>
                    {ingles ? testimonial.metric.label.en : testimonial.metric.label.es}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion9;
