import React from "react";
import RiveComponent from "../global/animations/riveComponent";
import styles from "./Page_404.module.css";

const Page404 = () => {
  return (
    <section id="404" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/404.riv"
          artboard="404"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>


    </section>
  );
};

export default Page404;
