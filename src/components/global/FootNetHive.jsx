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
      description: "NetHive es la solución líder en gestión de infraestructura MDF/IDF, proporcionando control total y visibilidad en tiempo real de tus activos de red.",
      contact: {
        title: "Contacto",
        address: "Torre NetHive, Av. Tecnológica 2324",
        city: "Ciudad de México, México",
        email: "contacto@nethive.com",
        phone: "+52 (55) 1234-5678"
      },
      links: {
        company: {
          title: "Compañía",
          items: [
            { text: "Sobre Nosotros", url: "/about" },
            { text: "Casos de Éxito", url: "/cases" },
            { text: "Blog", url: "/blog" },
            { text: "Carreras", url: "/careers" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { text: "Términos de Servicio", url: "/terms" },
            { text: "Política de Privacidad", url: "/privacy" },
            { text: "Cookies", url: "/cookies" }
          ]
        },
        support: {
          title: "Soporte",
          items: [
            { text: "Centro de Ayuda", url: "/help" },
            { text: "Documentación", url: "/docs" },
            { text: "Estado del Sistema", url: "/status" }
          ]
        }
      },
      copyright: "© 2025 NetHive. Todos los derechos reservados."
    },
    en: {
      description: "NetHive is the leading solution in MDF/IDF infrastructure management, providing total control and real-time visibility of your network assets.",
      contact: {
        title: "Contact",
        address: "NetHive Tower, 2324 Tech Avenue",
        city: "Mexico City, Mexico",
        email: "contact@nethive.com",
        phone: "+52 (55) 1234-5678"
      },
      links: {
        company: {
          title: "Company",
          items: [
            { text: "About Us", url: "/about" },
            { text: "Success Stories", url: "/cases" },
            { text: "Blog", url: "/blog" },
            { text: "Careers", url: "/careers" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { text: "Terms of Service", url: "/terms" },
            { text: "Privacy Policy", url: "/privacy" },
            { text: "Cookies", url: "/cookies" }
          ]
        },
        support: {
          title: "Support",
          items: [
            { text: "Help Center", url: "/help" },
            { text: "Documentation", url: "/docs" },
            { text: "System Status", url: "/status" }
          ]
        }
      },
      copyright: "© 2025 NetHive. All rights reserved."
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
            <img src="/logo_nh_b.png" alt="NetHive" className={styles.logo} />
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
            <h3 className={styles.linkTitle}>{textos.links.company.title}</h3>
            <ul className={styles.linkList}>
              {textos.links.company.items.map((item, index) => (
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

          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>{textos.links.support.title}</h3>
            <ul className={styles.linkList}>
              {textos.links.support.items.map((item, index) => (
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
            <a href="https://linkedin.com/company/nethive" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} />
            </a>
            <a href="https://twitter.com/nethive" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" className={styles.socialIcon} />
            </a>
            <a href="mailto:contact@nethive.com">
              <img src="/icons/email.svg" alt="Email" className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FootNetHive;