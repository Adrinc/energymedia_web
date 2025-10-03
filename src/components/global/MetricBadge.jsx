import styles from './metricBadge.module.css';

/**
 * MetricBadge - Chip de métrica reutilizable
 * Para mostrar KPIs sobre videos, tarjetas de casos, etc.
 * 
 * @param {string} value - Valor de la métrica (ej: "+42%", "3.1x")
 * @param {string} label - Etiqueta descriptiva (ej: "ROAS", "CTR")
 * @param {string} variant - Estilo visual ('cyan' | 'orange' | 'purple')
 */
const MetricBadge = ({ value, label, variant = 'cyan' }) => {
  return (
    <div className={`${styles.badge} ${styles[variant]}`}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default MetricBadge;
