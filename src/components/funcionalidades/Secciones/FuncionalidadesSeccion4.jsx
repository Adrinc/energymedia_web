import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/funcionalidadesSeccion4.module.css";

const FuncionalidadesSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.funcionalidades.useCases : translations.es.funcionalidades.useCases;

  return (
    <section className={styles.useCasesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>

        <div className={styles.rolesGrid}>
          {textos.roles.map((role, index) => (
            <div key={index} className={styles.roleCard}>
              <div className={styles.roleHeader}>
                <div className={styles.roleIcon}>
                  <span>{role.icon}</span>
                </div>
                <h3 className={styles.roleTitle}>{role.title}</h3>
              </div>
              
              <p className={styles.roleDescription}>{role.description}</p>
              
              <div className={styles.featuresBox}>
                <h4 className={styles.featuresTitle}>
                  {ingles ? "Key Features:" : "Características clave:"}
                </h4>
                <ul className={styles.featuresList}>
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Ready to transform your infrastructure?" : "¿Listo para transformar tu infraestructura?"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Join hundreds of companies that already trust NetHive for their MDF/IDF management."
                : "Únete a cientos de empresas que ya confían en NetHive para la gestión de su MDF/IDF."
              }
            </p>
            <a href="#contacto" className={styles.ctaButton}>
              {ingles ? "Start Free Trial" : "Comenzar Prueba Gratuita"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuncionalidadesSeccion4;