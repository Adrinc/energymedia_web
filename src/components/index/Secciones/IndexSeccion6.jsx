import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import RiveComponent from "../../global/animations/riveComponent";
import SeccionTechCanvas from "../../Scene3D/technology/seccion_tech_main";
import { useRef, useEffect } from 'react';
import styles from '../css/indexSeccion6.module.css';

const IndexSeccion6 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
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
          {t.techSection.title}
        </h1>
        <h2 className={`${styles.largeText} ${styles.boldText} ${styles.gradientText}`}>
          {t.techSection.subtitle}
        </h2>
      </div>
      <section id="tech_stack" className={styles.section} ref={sectionRef}>
        <div className={styles.gradientBackgroundTop}></div>
        <div className={styles.gradientBackgroundBottom}></div>
        <div className={`${styles.rivecomp} ${styles.web}`}>
          <SeccionTechCanvas />
        </div>
        <div className={`${styles.rivecomp} ${styles.movil}`}>
          <RiveComponent
            src="/rive/cbluna.riv"
            artboard="technologies_mobile"
            stateMachines="State Machine 1"
            autoplay={true}
            fit="fill"
          />
        </div>
      </section>
    </>
  );
};

export default IndexSeccion6;
