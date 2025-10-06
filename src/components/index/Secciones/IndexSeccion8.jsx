import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import { motion } from 'framer-motion';
import styles from '../css/indexSeccion8.module.css';

/**
 * IndexSeccion8 - CLIENTES / LOGOS DE MARCAS
 * Prueba social mediante reconocimiento de marca
 * Sistema "Cine-Data Multicultural" - Energy Media
 */

const CLIENT_LOGOS = [
  {
    name: 'Alvarado Hospital',
    logo: '/image/brands/alvaradohospital.avif',
    industry: 'Healthcare'
  },
  {
    name: 'Cox Communications',
    logo: '/image/brands/cox.avif',
    industry: 'Telecommunications'
  },
  {
    name: 'Disneyland',
    logo: '/image/brands/disneyland.avif',
    industry: 'Entertainment'
  },
  {
    name: 'Health Coalition',
    logo: '/image/brands/healthcoali.avif',
    industry: 'Healthcare'
  },
  {
    name: "McDonald's",
    logo: '/image/brands/macdonals.avif',
    industry: 'Food & Beverage'
  },
  {
    name: 'Nissan',
    logo: '/image/brands/nissan.avif',
    industry: 'Automotive'
  },
  {
    name: 'Sharp',
    logo: '/image/brands/sharp.avif',
    industry: 'Electronics'
  },
  {
    name: 'SWC',
    logo: '/image/brands/swc.avif',
    industry: 'Utilities'
  },
  {
    name: 'Televisa',
    logo: '/image/brands/televisa.avif',
    industry: 'Media & Broadcasting'
  }
];

const IndexSeccion8 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;

  return (
    <section className={styles.clientsSection}>
      <div className={styles.clientsContainer}>
        {/* Título */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>
            {ingles ? "Brands that trust us" : "Marcas que confían en nosotros"}
          </h2>
          <p className={styles.sectionSubtitle}>
            {ingles 
              ? "We've helped leading companies connect with multicultural audiences and achieve real growth."
              : "Hemos ayudado a empresas líderes a conectar con audiencias multiculturales y lograr crecimiento real."
            }
          </p>
        </motion.div>

        {/* Grid de Logos */}
        <div className={styles.logosGrid}>
          {CLIENT_LOGOS.map((client, index) => (
            <motion.div
              key={client.name}
              className={styles.logoCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className={styles.logoWrapper}>
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className={styles.logoImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.logoOverlay}>
                <span className={styles.clientName}>{client.name}</span>
                <span className={styles.clientIndustry}>{client.industry}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estadística de Confianza */}
        <motion.div
          className={styles.trustBanner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.statBlock}>
            <span className={styles.statValue}>50+</span>
            <span className={styles.statLabel}>
              {ingles ? "Satisfied Clients" : "Clientes Satisfechos"}
            </span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statBlock}>
            <span className={styles.statValue}>98%</span>
            <span className={styles.statLabel}>
              {ingles ? "Client Retention" : "Retención de Clientes"}
            </span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statBlock}>
            <span className={styles.statValue}>15+</span>
            <span className={styles.statLabel}>
              {ingles ? "Years of Experience" : "Años de Experiencia"}
            </span>
          </div>
        </motion.div>

        {/* CTA Secundario */}
        <motion.div
          className={styles.ctaBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className={styles.ctaText}>
            {ingles 
              ? "Want to join these leading brands?"
              : "¿Quieres unirte a estas marcas líderes?"
            }
          </p>
          <a href="/contacto" className={styles.ctaButton}>
            {ingles ? "Let's talk" : "Hablemos"}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IndexSeccion8;
