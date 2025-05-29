import React from "react";
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import { useStore } from '@nanostores/react';
import RiveComponent from "../../global/animations/riveComponent";
import styles from '../css/serviciosTop.module.css';

const ServiciosTop = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  return (
    <section id="servicios1" className={styles.sections}>
      <div className={styles.esfera}/>
      <div className={styles.gradientBackgroundBottom}></div>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/cbluna-nosotros.riv"
          artboard="head_seccion"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
          hastext={true}
          textValues={{
            titulo1: t.serviciosTop.titulo1,
            titulo2: t.serviciosTop.titulo2,
            subtitulo: t.serviciosTop.subtitulo,
          }}
        />
      </div>
      <div className={`${styles.rivecomp} ${styles.movil}`}>
        <RiveComponent
          src="/rive/cbluna-nosotros.riv"
          artboard="head_seccion_mobile"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fitWidth"
          hastext={true}
          textValues={{
            titulo1: t.serviciosTop.titulo1,
            titulo2: t.serviciosTop.titulo2,
            subtitulo: t.serviciosTop.subtitulo,
          }}
        />
      </div>
    </section>
  );
};

export default ServiciosTop;
