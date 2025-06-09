import React from "react";
import RiveComponent from "../global/animations/riveComponent";
import styles from "./css/sponsorsSeccion2.module.css";

const SponsorsSeccion2 = () => {
  return (
    <section id="Sponsors1" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/adr-metaverse.riv"
          artboard="sponsors_seccion2"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>



    </section>
  );
};

export default SponsorsSeccion2;
