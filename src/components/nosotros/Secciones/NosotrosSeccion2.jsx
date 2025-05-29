import React from "react";
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import { useStore } from '@nanostores/react';
import RiveComponent from "../../global/animations/riveComponent";
import styles from '../css/nosotrosSeccion2.module.css';

const NosotrosSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  return (
    <>
      <div className={`${styles.centeredText} relative`}>
        <h1 className={`${styles.largeText} ${styles.whiteText}`}>{t.nosotrosSection2?.title || "NOSOTROS"}</h1>
      </div>
      <section id="nosotros_seccion2" className={styles.sections}>
        <div className={styles.gradientBackgroundBottom}></div>
        <div className={`${styles.rivecomp} ${styles.web}`}>
          <RiveComponent
            src="/rive/cbluna-nosotros.riv"
            artboard="nosotros_seccion2"
            stateMachines="State Machine 1"
            autoplay={true}
            hastext = {true}
            fit="contain"
            textValues={{
                titulo_part1: t.nosotrosSection2.titulo_part1,
                titulo_part2: t.nosotrosSection2.titulo_part2,
                titulo_part3: t.nosotrosSection2.titulo_part3,
              }}
          />
        </div>
        <div className={`${styles.rivecomp} ${styles.movil}`}>
          <RiveComponent
            src="/rive/cbluna-nosotros.riv"
            artboard="nosotros_seccion2_mobile"
            stateMachines="State Machine 1"
            autoplay={true}
            hastext = {false}
            fit="fitWidth"
            textValues={{
                titulo_part1: t.nosotrosSection2.titulo_part1,
                titulo_part2: t.nosotrosSection2.titulo_part2,
                titulo_part3: t.nosotrosSection2.titulo_part3,
              }}
          />
        </div>
      </section>
    </>
  );
};

export default NosotrosSeccion2;
