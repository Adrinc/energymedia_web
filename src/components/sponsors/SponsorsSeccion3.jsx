import React from "react";
import RiveComponent from "../global/animations/riveComponent";
import styles from "./css/sponsorsSeccion3.module.css";

const SponsorsSeccion3 = () => {
  return (
    <section id="Sponsors3" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/adr-metaverse.riv"
          artboard="sponsors_seccion3"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>



    </section>
  );
};

export default SponsorsSeccion3;
