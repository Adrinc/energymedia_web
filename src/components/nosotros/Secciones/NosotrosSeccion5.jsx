import React from "react";
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import { useStore } from '@nanostores/react';
import RiveComponent from "../../global/animations/riveComponent";
import styles from '../css/nosotrosSeccion5.module.css';

const NosotrosSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  return (
    <section id="our_services" className={styles.sections}>
      <div className={styles.esfera}/> 
      <div className={styles.gradientBackgroundTop}></div>
      <div className={styles.gradientBackgroundBottom}></div>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/cbluna-nosotros.riv"
          artboard="socio_seccion"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="contain"
          hastext = {true}
          textValues={{
            titulo: t.nosotrosSection5.titulo,
            descripcion: t.nosotrosSection5.descripcion,
          }}
        />
      </div>
      <div className={`${styles.rivecomp} ${styles.movil}`}>
        <RiveComponent
          src="/rive/cbluna-nosotros.riv"
          artboard="socio_seccion_mobile"
          stateMachines="State Machine 1"
          autoplay={true}
          hastext = {false}
          fit="contain"
          textValues={{
            titulo: t.nosotrosSection5.titulo,
            descripcion: t.nosotrosSection5.descripcion,
          }}
        />
      </div>
    </section>
  );
};

export default NosotrosSeccion5;
