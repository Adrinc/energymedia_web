import { useStore } from "@nanostores/react";
import { isEnglish } from "../../data/variables"; 
import styles from './GoogleMaps.module.css';

const GoogleMaps = () => {
  const ingles = useStore(isEnglish); // Detectar idioma

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {ingles ? "Our Locations" : "Nuestras Ubicaciones"}
      </h1>
      <p className={styles.subtitle}>
        {ingles
          ? "Easily find our facilities and cemetery."
          : "Encuentra nuestras instalaciones y el cementerio con facilidad."}
      </p>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h2 className={styles.mapTitle}>
            {ingles ? "Funeral Home" : "Funeraria"}
          </h2>
          <p className={styles.mapDescription}>
            {ingles
              ? "Av. la Santa María No. 2000, Interior 206, Colonia América, Tijuana, B.C. 22044."
              : "Av. la Santa María Num. 2000, Interior 206 Colonia América, Tijuana, B.C. 22044."}
          </p>
          <div className={styles.mapContainer}>
            <iframe
              title={ingles ? "Funeral Home" : "Funeraria"}
              src="https://www.google.com/maps?q=32.411809877240614,-116.94596332289079&z=15&output=embed"
              className={styles.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className={styles.column}>
          <h2 className={styles.mapTitle}>
            {ingles ? "Cemetery Location" : "Ubicación del Cementerio"}
          </h2>
          <p className={styles.mapDescription}>
            {ingles
              ? "CUEROS DE VENADOS, s/n, Canon del Sainz, Sánchez Taboada, 22170 Tijuana, B.C."
              : "CUEROS DE VENADOS, s/n, Cañon del Sainz, Sánchez Taboada, 22170 Tijuana, B.C."}
          </p>
          <div className={styles.mapContainer}>
            <iframe
              title={ingles ? "Cemetery" : "Cementerio"}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.206064229563!2d-116.9414554!3d32.4407152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9399ca2ca8db7%3A0x7651d0609ef20b62!2sCOLINAS%20DEL%20DESCANSO!5e0!3m2!1ses!2smx!4v1700000000000"
              className={styles.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMaps;
