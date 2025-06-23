import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "../css/indexSeccion4.module.css";

const HomeSeccion4 = () => {
  const ingles = useStore(isEnglish);

  const content = {
    es: {
      title: "Características Principales",
      subtitle: "Todo lo que necesitas para gestionar tu infraestructura de red de manera eficiente",
      features: [
        {
          icon: "📋",
          title: "Inventario Detallado",
          description: "Control completo de componentes con seguimiento en tiempo real de cada elemento de tu infraestructura.",
          status: { type: "active", text: "Actualizado" }
        },
        {
          icon: "🌐",
          title: "Topología Visual",
          description: "Visualiza la distribución completa de MDF e IDF con mapeo interactivo de conexiones.",
          status: { type: "active", text: "En vivo" }
        },
        {
          icon: "🔌",
          title: "Gestión de Conexiones",
          description: "Administra y monitorea todas las conexiones entre equipos con histórico de cambios.",
          status: { type: "active", text: "Conectado" }
        },
        {
          icon: "🚨",
          title: "Alertas Inteligentes",
          description: "Sistema de alertas automáticas para cambios no autorizados y problemas de conexión.",
          status: { type: "alert", text: "Monitoreando" }
        },
        {
          icon: "👥",
          title: "Control de Acceso",
          description: "Gestión de permisos por rol: administradores, técnicos y auditores con diferentes niveles de acceso.",
          status: { type: "active", text: "Seguro" }
        },
        {
          icon: "📊",
          title: "Reportes Avanzados",
          description: "Generación de informes detallados exportables en PDF y Excel para análisis y auditoría.",
          status: { type: "active", text: "Disponible" }
        }
      ]
    },
    en: {
      title: "Core Features",
      subtitle: "Everything you need to efficiently manage your network infrastructure",
      features: [
        {
          icon: "📋",
          title: "Detailed Inventory",
          description: "Complete component control with real-time tracking of every element in your infrastructure.",
          status: { type: "active", text: "Updated" }
        },
        {
          icon: "🌐",
          title: "Visual Topology",
          description: "Visualize complete MDF and IDF distribution with interactive connection mapping.",
          status: { type: "active", text: "Live" }
        },
        {
          icon: "🔌",
          title: "Connection Management",
          description: "Manage and monitor all equipment connections with change history.",
          status: { type: "active", text: "Connected" }
        },
        {
          icon: "🚨",
          title: "Smart Alerts",
          description: "Automatic alert system for unauthorized changes and connection issues.",
          status: { type: "alert", text: "Monitoring" }
        },
        {
          icon: "👥",
          title: "Access Control",
          description: "Role-based permission management: administrators, technicians, and auditors with different access levels.",
          status: { type: "active", text: "Secure" }
        },
        {
          icon: "📊",
          title: "Advanced Reports",
          description: "Generate detailed reports exportable in PDF and Excel for analysis and auditing.",
          status: { type: "active", text: "Available" }
        }
      ]
    }
  };

  const textos = ingles ? content.en : content.es;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>
        <div className={styles.featuresGrid}>
          {textos.features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <span>{feature.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <span className={`${styles.statusIndicator} ${styles['status' + feature.status.type.charAt(0).toUpperCase() + feature.status.type.slice(1)]}`}>
                {feature.status.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion4;