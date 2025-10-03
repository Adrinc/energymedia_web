import React from "react";
import { isEnglish } from '../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "./css/footnethive.module.css";

const FootNetHive = () => {
  const ingles = useStore(isEnglish);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const content = {
    es: {
      description: "Energy Media conecta marcas con audiencias hispanas y multiculturales a través de creatividad cultural auténtica y estrategias digitales data-driven que generan crecimiento real.",
      contact: {
        title: "Contacto",
        address: "Insurgentes Sur 1458, Piso 12",
        city: "Ciudad de México, México",
        email: "hola@energymedia.mx",
        phone: "+52 (55) 8888-9999"
      },
      links: {
        servicios: {
          title: "Servicios",
          items: [
            { text: "Video Marketing Digital", url: "/servicios#video" },
            { text: "Marketing Digital 360", url: "/servicios#digital" },
            { text: "Branding Cultural", url: "/servicios#branding" },
            { text: "Analítica & OYE", url: "/servicios#oye" }
          ]
        },
        empresa: {
          title: "Empresa",
          items: [
            { text: "Quiénes Somos", url: "/nosotros" },
            { text: "Metodología", url: "/metodologia" },
            { text: "Casos de Éxito", url: "/casos" },
            { text: "Recursos", url: "/recursos" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { text: "Términos de Servicio", url: "/terms" },
            { text: "Política de Privacidad", url: "/privacy" },
            { text: "Cookies", url: "/cookies" }
          ]
        }
      },
      copyright: "© 2025 Energy Media. Todos los derechos reservados."
    },
    en: {
      description: "Energy Media connects brands with Hispanic and multicultural audiences through authentic cultural creativity and data-driven digital strategies that generate real growth.",
      contact: {
        title: "Contact",
        address: "Insurgentes Sur 1458, Floor 12",
        city: "Mexico City, Mexico",
        email: "hello@energymedia.mx",
        phone: "+52 (55) 8888-9999"
      },
      links: {
        servicios: {
          title: "Services",
          items: [
            { text: "Digital Video Marketing", url: "/servicios#video" },
            { text: "360 Digital Marketing", url: "/servicios#digital" },
            { text: "Cultural Branding", url: "/servicios#branding" },
            { text: "Analytics & OYE", url: "/servicios#oye" }
          ]
        },
        empresa: {
          title: "Company",
          items: [
            { text: "About Us", url: "/nosotros" },
            { text: "Methodology", url: "/metodologia" },
            { text: "Success Stories", url: "/casos" },
            { text: "Resources", url: "/recursos" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { text: "Terms of Service", url: "/terms" },
            { text: "Privacy Policy", url: "/privacy" },
            { text: "Cookies", url: "/cookies" }
          ]
        }
      },
      copyright: "© 2025 Energy Media. All rights reserved."
    }
  };

  const textos = ingles ? content.en : content.es;

  return (
    <footer className={styles.footer}>
      <button 
        className={styles.scrollToTop} 
        onClick={handleScrollToTop}
        aria-label="Volver arriba"
        title={ingles ? "Back to top" : "Volver arriba"}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logoSection}>
            <img src="/logo.gif" alt="Energy Media" className={styles.logo} />
            <p className={styles.companyDescription}>{textos.description}</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>{textos.contact.address}<br/>{textos.contact.city}</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>{textos.contact.email}</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>{textos.contact.phone}</span>
              </div>
            </div>
          </div>

          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>{textos.links.servicios.title}</h3>
            <ul className={styles.linkList}>
              {textos.links.servicios.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className={styles.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>{textos.links.empresa.title}</h3>
            <ul className={styles.linkList}>
              {textos.links.empresa.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className={styles.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>{textos.links.legal.title}</h3>
            <ul className={styles.linkList}>
              {textos.links.legal.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className={styles.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{textos.copyright}</p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com/company/energymedia" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} />
            </a>
            <a href="https://twitter.com/energymediamx" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" className={styles.socialIcon} />
            </a>
            <a href="https://instagram.com/energymediamx" target="_blank" rel="noopener noreferrer">
              <img src="/icons/insta.svg" alt="Instagram" className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FootNetHive;