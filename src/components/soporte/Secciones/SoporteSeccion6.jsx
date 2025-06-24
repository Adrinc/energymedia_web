import React from 'react';
import styles from '../css/soporteSeccion6.module.css';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';

const SoporteSeccion6 = () => {
  const ingles = useStore(isEnglish);

  const statusData = {
    es: {
      title: "Estado del Sistema",
      subtitle: "Monitorea el estado en tiempo real de todos nuestros servicios",
      statusItems: [
        {
          service: "API Principal",
          status: "operativo",
          uptime: "99.9%",
          lastCheck: "Hace 2 minutos"
        },
        {
          service: "Base de Datos",
          status: "operativo",
          uptime: "99.8%",
          lastCheck: "Hace 1 minuto"
        },
        {
          service: "CDN Global",
          status: "operativo",
          uptime: "99.9%",
          lastCheck: "Hace 30 segundos"
        },
        {
          service: "Autenticación",
          status: "operativo",
          uptime: "99.7%",
          lastCheck: "Hace 1 minuto"
        }
      ],
      incidents: {
        title: "Incidentes Recientes",
        noIncidents: "No hay incidentes reportados en los últimos 7 días",
        viewAll: "Ver historial completo"
      },
      resources: {
        title: "Recursos Adicionales",
        items: [
          {
            title: "Documentación API",
            description: "Guías completas para desarrolladores",
            icon: "📚",
            link: "#"
          },
          {
            title: "Base de Conocimiento",
            description: "Artículos y tutoriales detallados",
            icon: "🧠",
            link: "#"
          },
          {
            title: "Comunidad",
            description: "Únete a nuestra comunidad de usuarios",
            icon: "👥",
            link: "#"
          },
          {
            title: "Webinars",
            description: "Sesiones de capacitación en vivo",
            icon: "🎥",
            link: "#"
          }
        ]
      },
      statusLink: "Ver estado completo en status.nethive.com"
    },
    en: {
      title: "System Status",
      subtitle: "Monitor real-time status of all our services",
      statusItems: [
        {
          service: "Main API",
          status: "operational",
          uptime: "99.9%",
          lastCheck: "2 minutes ago"
        },
        {
          service: "Database",
          status: "operational",
          uptime: "99.8%",
          lastCheck: "1 minute ago"
        },
        {
          service: "Global CDN",
          status: "operational",
          uptime: "99.9%",
          lastCheck: "30 seconds ago"
        },
        {
          service: "Authentication",
          status: "operational",
          uptime: "99.7%",
          lastCheck: "1 minute ago"
        }
      ],
      incidents: {
        title: "Recent Incidents",
        noIncidents: "No incidents reported in the last 7 days",
        viewAll: "View complete history"
      },
      resources: {
        title: "Additional Resources",
        items: [
          {
            title: "API Documentation",
            description: "Complete guides for developers",
            icon: "📚",
            link: "#"
          },
          {
            title: "Knowledge Base",
            description: "Detailed articles and tutorials",
            icon: "🧠",
            link: "#"
          },
          {
            title: "Community",
            description: "Join our user community",
            icon: "👥",
            link: "#"
          },
          {
            title: "Webinars",
            description: "Live training sessions",
            icon: "🎥",
            link: "#"
          }
        ]
      },
      statusLink: "View complete status at status.nethive.com"
    }
  };

  const data = ingles ? statusData.en : statusData.es;

  const getStatusColor = (status) => {
    switch (status) {
      case 'operativo':
      case 'operational':
        return '#10b981';
      case 'degradado':
      case 'degraded':
        return '#f59e0b';
      case 'offline':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operativo':
      case 'operational':
        return '✅';
      case 'degradado':
      case 'degraded':
        return '⚠️';
      case 'offline':
        return '❌';
      default:
        return '⭕';
    }
  };

  return (
    <section className={styles.statusSection}>
      <div className={styles.container}>
        {/* System Status */}
        <div className={styles.statusContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.subtitle}>{data.subtitle}</p>
          </div>

          <div className={styles.statusGrid}>
            {data.statusItems.map((item, index) => (
              <div key={index} className={styles.statusCard}>
                <div className={styles.statusHeader}>
                  <span className={styles.statusIcon}>
                    {getStatusIcon(item.status)}
                  </span>
                  <div className={styles.statusInfo}>
                    <h3 className={styles.serviceName}>{item.service}</h3>
                    <span 
                      className={styles.statusBadge}
                      style={{ 
                        background: `${getStatusColor(item.status)}20`,
                        color: getStatusColor(item.status)
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className={styles.statusMetrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Uptime</span>
                    <span className={styles.metricValue}>{item.uptime}</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>
                      {ingles ? 'Last check' : 'Última verificación'}
                    </span>
                    <span className={styles.metricValue}>{item.lastCheck}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.statusFooter}>
            <a href="#" className={styles.statusLink}>
              <span className={styles.linkIcon}>🔗</span>
              {data.statusLink}
            </a>
          </div>
        </div>

        {/* Incidents and Resources */}
        <div className={styles.bottomSection}>
          {/* Recent Incidents */}
          <div className={styles.incidentsContainer}>
            <h3 className={styles.sectionTitle}>{data.incidents.title}</h3>
            <div className={styles.incidentsCard}>
              <div className={styles.noIncidents}>
                <span className={styles.incidentIcon}>🎉</span>
                <p className={styles.incidentText}>{data.incidents.noIncidents}</p>
              </div>
              <a href="#" className={styles.viewAllLink}>
                {data.incidents.viewAll}
                <span className={styles.linkArrow}>→</span>
              </a>
            </div>
          </div>

          {/* Additional Resources */}
          <div className={styles.resourcesContainer}>
            <h3 className={styles.sectionTitle}>{data.resources.title}</h3>
            <div className={styles.resourcesGrid}>
              {data.resources.items.map((resource, index) => (
                <a key={index} href={resource.link} className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>{resource.icon}</div>
                  <div className={styles.resourceContent}>
                    <h4 className={styles.resourceTitle}>{resource.title}</h4>
                    <p className={styles.resourceDescription}>{resource.description}</p>
                  </div>
                  <span className={styles.resourceArrow}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoporteSeccion6;