import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import RiveComponent from "../../global/animations/riveComponent";
import styles from "./css/proyectosSeccion1.module.css";

const ProyectosSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const artboardWeb = ingles ? "proyectos_seccion1_us" : "proyectos_seccion1_es";
  const artboardMovil = ingles ? "proyectos_seccion1_mobile_us" : "proyectos_seccion1_mobile_es";

  return (
    <section className={styles.section}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          key={artboardWeb}
          src="/rive/cbluna-proyectos.riv"
          artboard={artboardWeb}
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>
      <div className={`${styles.rivecomp} ${styles.movil}`}>
        <RiveComponent
          key={artboardMovil}
          src="/rive/cbluna-proyectos.riv"
          artboard={artboardMovil}
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>
    </section>
  );
};

export default ProyectosSeccion1;
