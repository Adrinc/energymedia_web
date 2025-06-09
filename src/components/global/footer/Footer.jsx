import React from "react";
import styles from "./footer.module.css";
import { useScroll } from "@react-three/drei";

const Footer = () => {
  // Usamos el hook useScroll para obtener el controlador del scroll
  const scroll = useScroll();

  // Función para hacer scroll hasta arriba
  const scrollToTop = () => {
    // Verificamos si el contenedor del scroll existe
    if (scroll.el) {
      scroll.el.scrollTo({
        top: 0,
        behavior: "smooth", // Animación suave
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        &copy; {new Date().getFullYear()} Adrinc. Todos los derechos reservados.
      </div>

      <div className={styles.center}>
        <img src="/image/logos/logo2.png" alt="Logo de la Empresa" className={styles.logo} />
      </div>

      <div className={styles.right} onClick={scrollToTop}>
        <span className={styles.scrollText}>Volver arriba</span>
        <span className={styles.arrowIcon}>⬆️</span>
      </div>
    </footer>
  );
};

export default Footer;
