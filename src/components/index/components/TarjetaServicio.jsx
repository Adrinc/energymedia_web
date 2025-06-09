import styles from './tarjetaServicio.module.css';

export default function TarjetaServicio({ fondoWave, imagen, titulo, descripcion }) {
  return (
    <div className={styles.card}>
      {/* Fondo con la imagen real, solo visible arriba */}
      <div className={styles.bgImageContainer}>
        <img src={imagen} alt="" className={styles.bgImage} />
        <img src={fondoWave} alt="" className={styles.waveOverlay} />
      </div>
      {/* Círculo principal */}
      <div className={styles.circleContainer}>
        <img src={imagen} alt={titulo} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{titulo}</div>
        <div className={styles.desc}>{descripcion}</div>
      </div>
    </div>
  );
}
