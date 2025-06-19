import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "../css/homeSeccion2.module.css";

const HomeSeccion2 = () => {
  const ingles = useStore(isEnglish);

  const content = {
    es: {
      title: "¿Por qué NetHive?",
      benefits: [
        {
          icon: "📊",
          title: "Inventario en Tiempo Real",
          text: "Mantén tu inventario centralizado y actualizado automáticamente en tiempo real"
        },
        {
          icon: "🗺️",
          title: "Mapeo Visual",
          text: "Visualiza todas las conexiones desde MDF hasta cada IDF y punto final"
        },
        {
          icon: "📝",
          title: "Control de Historial",
          text: "Registro completo de cambios y auditoría para saber quién hizo qué y cuándo"
        },
        {
          icon: "🚨",
          title: "Alertas Automáticas",
          text: "Recibe notificaciones instantáneas ante cambios o desconexiones"
        },
        {
          icon: "🔄",
          title: "Integración Simple",
          text: "Fácil integración con tus sistemas existentes y APIs"
        }
      ]
    },
    en: {
      title: "Why NetHive?",
      benefits: [
        {
          icon: "📊",
          title: "Real-Time Inventory",
          text: "Keep your inventory centralized and automatically updated in real-time"
        },
        {
          icon: "🗺️",
          title: "Visual Mapping",
          text: "Visualize all connections from MDF to each IDF and endpoint"
        },
        {
          icon: "📝",
          title: "History Control",
          text: "Complete change log and audit trail to know who did what and when"
        },
        {
          icon: "🚨",
          title: "Automatic Alerts",
          text: "Receive instant notifications for changes or disconnections"
        },
        {
          icon: "🔄",
          title: "Simple Integration",
          text: "Easy integration with your existing systems and APIs"
        }
      ]
    }
  };

  const textos = ingles ? content.en : content.es;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{textos.title}</h2>
        <div className={styles.benefitsGrid}>
          {textos.benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{benefit.icon}</span>
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitText}>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion2;