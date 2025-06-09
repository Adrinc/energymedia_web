import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css"; // Estilos externos

const SideMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Para hover en pantallas grandes
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Para menú móvil

  const menuItems = [
    { name: "Home", icon: "/icons/home.svg", link: "/" },
    { name: "Nosotros", icon: "/icons/nosotros.svg", link: "/nosotros" },
    { name: "Servicios", icon: "/icons/servicios.svg", link: "/servicios" },
    { name: "Proyectos", icon: "/icons/proyectos.svg", link: "/proyectos" },
    { name: "Estadísticas", icon: "/icons/estadisticas.svg", link: "/estadisticas" },
    { name: "Tecnologías", icon: "/icons/tecnologias.svg", link: "/tecnologias" },
  ];

  return (
    <div>
      {/* Menú lateral para pantallas grandes */}
      <div
        className={`side-menu ${isExpanded ? "expanded" : "collapsed"}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="logo">
          <img src="/icons/home.svg" alt="Logo" className="logo-icon" />
          {isExpanded && <span className="logo-text">Empresa</span>}
        </div>
        <ul className="menu-items">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className="menu-link">
                <img src={item.icon} alt={`${item.name} icon`} className="menu-icon" />
                {isExpanded && <span className="menu-text">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú móvil */}
      <div className="mobile-menu">
        <div className="mobile-header">
          <img src="/icons/home.svg" alt="Logo" className="logo-icon" />
          <button
            className="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
        {isMobileMenuOpen && (
          <ul className="mobile-menu-items">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.link} className="mobile-menu-link">
                  <img src={item.icon} alt={`${item.name} icon`} className="menu-icon" />
                  <span className="menu-text">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
