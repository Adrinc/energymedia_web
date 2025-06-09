import React, { useState } from "react";
import styles from "./navbar.module.css";

import { useStore } from "@nanostores/react";
import { isEnglish, selectedCountry } from "../../data/variables"; 
import { useLang } from "../../data/signals"; // Importar el hook de idioma
import { translations } from "../../data/translations";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const country = useStore(selectedCountry); // Usar nanostore
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
      isEnglish.set(false);
      changeLang("en"); // Cambiar idioma a inglés
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo con gradiente */}
      <div className={styles.logopic}>
        <img src="/favicon.png" alt="Logo" />
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
            {textosNavbar.home}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/nosotros" className={styles.navLink}>
            {textosNavbar.about}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/proyectos" className={styles.navLink}>
            {textosNavbar.projects}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/servicios" className={styles.navLink}>
            {textosNavbar.services}
          </a>
        </li>
        {/* Botón de contacto solo visible en móvil */}
        <li className={`${styles.navItem} ${styles.contactMobile}`}>
          <a className={styles.buyButton} href="/contacto">
            {textosNavbar.contact}
          </a>
        </li>
      </ul>

      {/* Grupo de íconos sociales */}
      <div className={styles.socialIconsGroup}>
        <a href="https://www.facebook.com/cblunaoficial" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.svg" alt="Facebook" className={styles.icon} />
        </a>
        <a href="https://x.com/cblunaoficial" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/cblunaoficial/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/ins.svg" alt="LinkedIn" className={styles.icon} />
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
      <div className="hidden md:block">
        <div className="flex items-center justify-end">
          <a className={styles.buyButton} href="/contacto">
            {textosNavbar.contact}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
