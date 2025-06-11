import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import { useStore } from '@nanostores/react';
import RiveComponent from "../../global/animations/riveComponent";
import styles from '../css/nosotrosSeccion5.module.css';
import { useRef, useEffect } from 'react';

const NosotrosSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  const artboardWeb = ingles ? "socio_seccion_us" : "socio_seccion";
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
    <section id="our_services" className={styles.sections} ref={sectionRef}>
      <div className={styles.esfera}/> 
      <div className={styles.gradientBackgroundTop}></div>
      <div className={styles.gradientBackgroundBottom}></div>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          key={artboardWeb}
          src="/rive/cbluna-nosotros.riv"
          artboard={artboardWeb}
          stateMachines="State Machine 1"
          autoplay={true}
          fit="contain"
          hastext = {true}
          textValues={{
            titulo: t.nosotrosSection5.titulo,
            descripcion: t.nosotrosSection5.descripcion,
          }}
        />
      </div>
      <div className={`${styles.rivecomp} ${styles.movil}`}>
        <RiveComponent
          src="/rive/cbluna-nosotros.riv"
          artboard="socio_seccion_mobile"
          stateMachines="State Machine 1"
          autoplay={true}
          hastext = {true}
          fit="contain"
          textValues={{
            titulo: t.nosotrosSection5.titulo,
            descripcion: t.nosotrosSection5.descripcion,
          }}
        />
      </div>
    </section>
  );
};

export default NosotrosSeccion5;
