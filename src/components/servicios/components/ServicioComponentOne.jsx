import React from "react";
import styles from "../css/servicioComponentOne.module.css";

const ServicioComponentOne = ({ imagen = "https://via.placeholder.com/280", titulo = "Título por Defecto", descripcion = "Descripción por Defecto", reverse = false }) => {
  return (
    <div
      className={styles["content-container"]}
      style={{
        background: `linear-gradient(to ${reverse ? "left" : "right"}, #917EFF, rgba(158, 0, 255, 0.1), rgba(0, 0, 0, 0))`,
      }}
    >
      <div className={styles["image-wrapper"] + " " + styles["responsive-image"]}>
        <img src={imagen} alt={titulo} className={styles["content-image"]} />
      </div>
      <div className={styles["image-wrapper"] + " " + styles["left-image"]}>
        {reverse ? <img src={imagen} alt={titulo} className={styles["content-image"]} /> : null}
      </div>
      <div className={styles["content-text"]}>
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
      </div>
      <div className={styles["image-wrapper"] + " " + styles["right-image"]}>
        {!reverse ? <img src={imagen} alt={titulo} className={styles["content-image"]} /> : null}
      </div>
    </div>
  );
};

export default ServicioComponentOne;
