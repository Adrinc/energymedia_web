import React from 'react';
import styles from './ContactoSeccion.module.css';
import FormContact from '../react_components/FormContacto/FormContacto.jsx';
import { isEnglish } from '../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../data/translations';

const ContactoSeccion = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en.contactoSeccion : translations.es.contactoSeccion;

  return (
    <section id="Contacto" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.formColumn}>
          <FormContact />
        </div>
      </div>
      <div className={styles.infoColumn}>
        <div className={styles.containerInfo}>
          <img src="./favicon.png" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.description}>{t.description}</p>
        </div>
      </div>
      <div className={styles.esfera} />
    </section>
  );
};

export default ContactoSeccion;
