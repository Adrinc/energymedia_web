import React from 'react';
import styles from './CardCarrusel.module.css';

const CardCarrusel = ({
  altura = 450,
  anchura = 750,
  titulo = "Título por defecto",
  subtitulo = "Subtítulo por defecto",
  imagen = "https://via.placeholder.com/650x350",
  bordeTamano = 4,
  color1 = "#008BFF",
  color2 = "#8C09FF"
}) => {
  const styleVars = {
    '--card-width': `${anchura}px`,
    '--card-height': `${altura}px`,
    '--card-image': `url(${imagen})`,
    '--border-size': `${bordeTamano}px`,
    '--border-color1': color1,
    '--border-color2': color2
  };

  return (
    <a
      href="/proyectos"
      className={styles.cardContainer}
      style={styleVars}
    >
      <div className={styles.borderOverlay}></div>
      <div className={styles.hoverOverlay}></div>
      <div className={styles.cardContent}>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
      </div>
    </a>
  );
};

export default CardCarrusel;
