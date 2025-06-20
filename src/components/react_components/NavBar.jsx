import React, { useState } from "react";
import styles from "./navbar.module.css";

import { useStore } from "@nanostores/react";
import { isEnglish, selectedCountry } from "../../data/variables"; 
import { useLang } from "../../data/signals";
import { translations } from "../../data/translations";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const country = useStore(selectedCountry);
  const { t, changeLang, lang } = useLang();
  const ingles = useStore(isEnglish);
  const textosNavbar = ingles ? translations.en.navbar : translations.es.navbar;

  // Función para alternar el menú en móviles
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar el cambio de país en el switch
  const handleSwitch = (country) => {
    selectedCountry.set(country);
    if (country === "mex") {
      isEnglish.set(false);
      changeLang("es"); // Cambiar idioma a español
    } else if (country === "usa") {
      isEnglish.set(true);
      changeLang("en"); // Cambiar idioma a inglés
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo con gradiente */}
      <div className={styles.logopic}>
        <img src="/logo_nh_b.png" alt="NetHive Logo" />
      </div>

      {/* Ícono de menú hamburguesa para móviles */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* Menú de navegación */}
      <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            {textosNavbar.inicio}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#funcionalidades" className={styles.navLink}>
            {textosNavbar.funcionalidades}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#precios" className={styles.navLink}>
            {textosNavbar.precios}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contacto" className={styles.navLink}>
            {textosNavbar.contacto}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#soporte" className={styles.navLink}>
            {textosNavbar.soporte}
          </a>
        </li>
   
      </ul>

      {/* Grupo de íconos sociales */}
      <div className={styles.socialIconsGroup}>
        <a href="https://www.linkedin.com/company/nethive" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.icon} />
        </a>
        <a href="https://twitter.com/nethive" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" className={styles.icon} />
        </a>
        <a href="mailto:info@nethive.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/email.svg" alt="Email" className={styles.icon} />
        </a>
      </div>

      {/* Switch de países */}
      <div className={styles.countrySwitch}>
        <div
          className={`${styles.switchIconContainer} ${country === "mex" ? styles.active : styles.inactive}`}
          onClick={() => handleSwitch("mex")}
        >
          <img src="/icons/icon_mex.webp" alt="Mexico" className={styles.switchIcon} />
        </div>
        <div
          className={`${styles.switchIconContainer} ${country === "usa" ? styles.active : styles.inactive}`}
          onClick={() => handleSwitch("usa")}
        >
          <img src="/icons/icon_usa.webp" alt="USA" className={styles.switchIcon} />
        </div>
      </div>

      {/* Botón de contacto solo visible en escritorio */}
      <div className={styles.desktopOnly}>
        <a className={styles.buyButton} href="#registrarse">
          {textosNavbar.iniciarSesion}
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
