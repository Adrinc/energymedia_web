import React from "react";
import RiveComponent from "../global/animations/riveComponent";
import styles from "./css/sponsorsSeccion1.module.css";

const BecomeSponsor = () => {
  return (
    <section id="Sponsors1" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/adr-metaverse.riv"
          artboard="become_sponsor"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>



    </section>
  );
};

export default BecomeSponsor;
