import React, { useRef, useEffect } from "react";
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import { useStore } from '@nanostores/react';
import RiveComponent from "../../global/animations/riveComponent";
import styles from '../css/nosotrosSeccion4.module.css';

const NosotrosSeccion4 = () => {
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
    <section id="experience" className={styles.sections} ref={sectionRef}>
      <div className={styles.gradientBackgroundTop}></div>
      <div className={styles.gradientBackgroundBottom}></div>
      <div className={`${styles.rivecomp} ${styles.web}`} >
        <RiveComponent
          src="/rive/cbluna-nosotros.riv"
          artboard="mision_section"
          stateMachines="State Machine 1"
          autoplay={true}
          hastext = {true}
          fit="fill"
          textValues={{
            label: t.nosotrosSection4.label,
            titulo: t.nosotrosSection4.titulo,
            descripcion: t.nosotrosSection4.descripcion,
            objetivos_titulo: t.nosotrosSection4.objetivos_titulo,
            objetivos_desc: t.nosotrosSection4.objetivos_desc,
            valores_titulo: t.nosotrosSection4.valores_titulo,
            valores_desc: t.nosotrosSection4.valores_desc,
            vision_titulo: t.nosotrosSection4.vision_titulo,
            vision_desc: t.nosotrosSection4.vision_desc,
            mision_titulo: t.nosotrosSection4.mision_titulo,
            mision_desc: t.nosotrosSection4.mision_desc,
          }}
        />
      </div>
      <div className={`${styles.rivecomp} ${styles.movil}`}>
        <RiveComponent
          src="/rive/cbluna-nosotros.riv"
          artboard="mision_section_mobile"
          stateMachines="State Machine 1"
          autoplay={true}
          hastext = {true}
          fit="fill"
          textValues={{
            label: t.nosotrosSection4.label,
            titulo: t.nosotrosSection4.titulo,
            descripcion: t.nosotrosSection4.descripcion,
            objetivos_titulo: t.nosotrosSection4.objetivos_titulo,
            objetivos_desc: t.nosotrosSection4.objetivos_desc,
            valores_titulo: t.nosotrosSection4.valores_titulo,
            valores_desc: t.nosotrosSection4.valores_desc,
            vision_titulo: t.nosotrosSection4.vision_titulo,
            vision_desc: t.nosotrosSection4.vision_desc,
            mision_titulo: t.nosotrosSection4.mision_titulo,
            mision_desc: t.nosotrosSection4.mision_desc,
          }}
        />
      </div>
    </section>
  );
};

export default NosotrosSeccion4;
