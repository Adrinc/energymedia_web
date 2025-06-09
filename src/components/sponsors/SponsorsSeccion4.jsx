import React from "react";
import RiveComponent from "../global/animations/riveComponent";
import styles from "./css/sponsorsSeccion4.module.css";

const SponsorsSeccion4 = () => {
  return (
    <section id="Sponsors1" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/adr-metaverse.riv"
          artboard="sponsors_seccion4"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>



    </section>
  );
};

export default SponsorsSeccion4;
