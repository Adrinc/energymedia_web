import React from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../../data/variables';
import StatCard from '../../StatCard';
import styles from './css/dashboardStats.module.css';

const DashboardStats = ({ 
  inventoryData, 
  topologyConnections, 
  alertsData, 
  alerts, 
  onNavClick 
}) => {
  const ingles = useStore(isEnglish);

  // Estadísticas calculadas dinámicamente basadas en los datos
  const getStats = () => {
    const switches = inventoryData.filter(item => item.tipo === 'Switch').length;
    const patches = inventoryData.filter(item => item.tipo === 'Patch Panel').length;
    const connections = topologyConnections.filter(conn => conn.estado === 'Activo').length;
    const activeAlerts = alertsData.filter(alert => alert.tipo !== 'Info').length;

    return {
      switches: { value: switches, label: ingles ? "Active Switches" : "Switches Activos" },
      patches: { value: patches, label: ingles ? "Patch Panels" : "Patch Panels" },
      connections: { value: connections, label: ingles ? "Active Connections" : "Conexiones Activas" },
      alerts: { value: activeAlerts, label: ingles ? "Active Alerts" : "Alertas Activas" }
    };
  };

  const stats = getStats();

  return (
    <>
      {/* Stats Cards usando el componente reutilizable */}
      <div className={styles.statsGrid}>
        <StatCard
          icon="🔌"
          value={stats.switches.value}
          label={stats.switches.label}
          color="#2563eb"
          trend={{ type: 'up', value: '+2' }}
          onClick={() => onNavClick('inventory')}
        />
        <StatCard
          icon="📋"
          value={stats.patches.value}
          label={stats.patches.label}
          color="#059669"
          onClick={() => onNavClick('inventory')}
        />
        <StatCard
          icon="🔗"
          value={stats.connections.value}
          label={stats.connections.label}
          color="#0891b2"
          trend={{ type: 'up', value: '98%' }}
          onClick={() => onNavClick('topology')}
        />
        <StatCard
          icon="⚠️"
          value={stats.alerts.value}
          label={stats.alerts.label}
          color="#dc2626"
          trend={{ type: 'down', value: '-1' }}
          onClick={() => onNavClick('alerts')}
        />
      </div>

      {/* Alerts Panel */}
      {alerts.length > 0 && (
        <div className={styles.alertsPanel}>
          <h3>{ingles ? 'Recent Alerts' : 'Alertas Recientes'}</h3>
          {alerts.map(alert => (
            <div key={alert.id} className={`${styles.alert} ${styles[alert.type]}`}>
              {alert.message}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DashboardStats;