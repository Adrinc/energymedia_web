import { translations } from '../../../data/translations';
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { useRef, useEffect } from 'react';
import styles from "../css/indexSeccion2.module.css"; 
import RiveComponent from "../../global/animations/riveComponent";

const IndexSeccion2 = () => {
    const ingles = useStore(isEnglish);
    const t = ingles ? translations.en : translations.es;
 
    const solutionsTitle = t.home?.soluciones?.solutionsTitle || t.solutionsTitle;
    const solutionsSubtitle = t.home?.soluciones?.solutionsSubtitle || t.solutionsSubtitle;
    const artboardWeb = ingles ? "seccion2_us" : "seccion2_es";
    const artboardMovil = ingles ? "seccion2_mobile_us" : "seccion2_mobile_es";
    const sectionRef = useRef(null);
    useEffect(() => {
      const section = sectionRef.current;
      let hasAnimated = false;
      if (!section) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            section.classList.add(styles.fadeInUp);
            hasAnimated = true;
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(section);
      return () => observer.disconnect();
    }, []);
    return (
      <>
        <div className={styles.centeredText}>
          <h1 className={`${styles.largeText} ${styles.whiteText}`}>
            {solutionsTitle}
          </h1>
          <h2 className={`${styles.largeText} ${styles.boldText} ${styles.gradientText}`}>
            {solutionsSubtitle}
          </h2>
        </div>
  
        <section id="soluciones" className={styles.sections} ref={sectionRef}>
          <div className={styles.gradientBackgroundTop}></div>
          <div className={styles.gradientBackgroundBottom}></div>
  
          <div className={`${styles.rivecomp} ${styles.web}`}>
            <RiveComponent
              key={artboardWeb}
              src="/rive/cbluna.riv"
              artboard={artboardWeb}
              stateMachines="State Machine 1"
              autoplay={true}
              fit="contain"
              
            />
          </div>
  
          <div className={`${styles.rivecomp} ${styles.movil}`}>
            <RiveComponent
              key={artboardMovil}
              src="/rive/cbluna.riv"
              artboard={artboardMovil}
              stateMachines="State Machine 1"
              autoplay={true}
              fit="fill"
            />
          </div>
        </section>
      </>
    );
  };
  
  
  export default IndexSeccion2;