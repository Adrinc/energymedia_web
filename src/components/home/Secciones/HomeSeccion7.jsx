import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "../css/homeSeccion7.module.css";

const HomeSeccion7 = () => {
  const ingles = useStore(isEnglish);

  const content = {
    es: {
      title: "¿Listo para transformar tu gestión de infraestructura?",
      description: "Únete a las empresas líderes que ya confían en NetHive para gestionar su infraestructura de red de manera eficiente y segura.",
      primaryButton: "Comenzar prueba gratuita",
      secondaryButton: "Agendar demo",
      features: [
        { icon: "🔒", text: "Configuración en 5 minutos" },
        { icon: "💡", text: "Soporte 24/7" },
        { icon: "🚀", text: "Actualizaciones continuas" }
      ]
    },
    en: {
      title: "Ready to transform your infrastructure management?",
      description: "Join leading companies already trusting NetHive to efficiently and securely manage their network infrastructure.",
      primaryButton: "Start free trial",
      secondaryButton: "Schedule demo",
      features: [
        { icon: "🔒", text: "5-minute setup" },
        { icon: "💡", text: "24/7 Support" },
        { icon: "🚀", text: "Continuous updates" }
      ]
    }
  };

  const textos = ingles ? content.en : content.es;

  return (
    <section className={styles.section}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>{textos.title}</h2>
        <p className={styles.description}>{textos.description}</p>
        <div className={styles.ctaContainer}>
          <button className={styles.primaryButton}>
            {textos.primaryButton}
          </button>
          <button className={styles.secondaryButton}>
            {textos.secondaryButton}
          </button>
        </div>
        <div className={styles.features}>
          {textos.features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <span className={styles.featureText}>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion7;