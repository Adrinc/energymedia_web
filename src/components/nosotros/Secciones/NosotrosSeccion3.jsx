import React from "react";
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import { useStore } from '@nanostores/react';
import RiveComponent from "../../global/animations/riveComponent";
import styles from '../css/nosotrosSeccion3.module.css';

const NosotrosSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  return (
    <section id="our_adventages" className={styles.sections}>
      <div className={styles.esfera}/>
      <div className={styles.gradientBackgroundTop}></div>
      <div className={styles.gradientBackgroundBottom}></div>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/cbluna-nosotros.riv"
          artboard="why_section"
          stateMachines="State Machine 1"
          autoplay={true}
          hastext = {true}
          fit="fill"
          textValues={{
            titulo: t.nosotrosSection3.titulo,
            subtitulo: t.nosotrosSection3.subtitulo,
            punto1: t.nosotrosSection3.punto1,
            punto2: t.nosotrosSection3.punto2,
            punto3: t.nosotrosSection3.punto3,
          }}
        />
      </div>
      <div className={`${styles.rivecomp} ${styles.movil}`}>
        <RiveComponent
          src="/rive/cbluna-nosotros.riv"
          artboard="why_section_mobile"
          stateMachines="State Machine 1"
          autoplay={true}
          hastext = {true}
          fit="contain"
          textValues={{
            titulo: t.nosotrosSection3.titulo,
            subtitulo: t.nosotrosSection3.subtitulo,
            punto1: t.nosotrosSection3.punto1,
            punto2: t.nosotrosSection3.punto2,
            punto3: t.nosotrosSection3.punto3,
          }}
        />
      </div>
    </section>
  );
};

export default NosotrosSeccion3;
