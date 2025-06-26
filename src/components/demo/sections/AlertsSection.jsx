import React from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/tableSection.module.css';

const AlertsSection = ({ alertsData }) => {
  const ingles = useStore(isEnglish);

  return (
    <div className={styles.tableSection}>
      <div className={styles.sectionHeader}>
        <h3>{ingles ? 'System Alerts' : 'Alertas del Sistema'}</h3>
        <button className={styles.clearButton}>
          🗑️ {ingles ? 'Clear All' : 'Limpiar Todo'}
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>{ingles ? 'Type' : 'Tipo'}</th>
              <th>{ingles ? 'Message' : 'Mensaje'}</th>
              <th>{ingles ? 'Timestamp' : 'Fecha/Hora'}</th>
              <th>{ingles ? 'Severity' : 'Criticidad'}</th>
              <th>{ingles ? 'Actions' : 'Acciones'}</th>
            </tr>
          </thead>
          <tbody>
            {alertsData.map((alert) => (
              <tr key={alert.id} className={styles.tableRow}>
                <td>
                  <span className={`${styles.alertType} ${styles[alert.tipo.toLowerCase()]}`}>
                    {alert.tipo}
                  </span>
                </td>
                <td>{alert.mensaje}</td>
                <td>{alert.timestamp}</td>
                <td>
                  <span className={`${styles.severityBadge} ${styles[alert.criticidad.toLowerCase()]}`}>
                    {alert.criticidad}
                  </span>
                </td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionBtn}>✓</button>
                    <button className={styles.actionBtn}>👁️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlertsSection;