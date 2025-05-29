import React, { useEffect, useState } from "react";
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import { useStore } from '@nanostores/react';
import styles from "../css/nosotrosSeccion1.module.css";

const NosotrosSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.nosotrosCarrusel : translations.es.nosotrosCarrusel;
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState("fadeInUp");

  useEffect(() => {
    setAnim("fadeInUp");
    const timer = setTimeout(() => {
      setAnim("fadeOutUp");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % textos.length);
        setAnim("fadeInUp");
      }, 1000);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index, textos]);

  return (
    <section className={styles.sections}>
      <video id="background-video" loop autoPlay muted playsInline className={styles.videox}>
        <source src="/videos/cblunaintro.mp4" type="video/mp4" />
      </video>
      <div className={`${styles.textosAnimados} ${styles[anim]}`}> 
        <span className={styles.titulo}>{textos[index].title}</span>
        <span className={styles.subtitulo}>{textos[index].subtitle}</span>
      </div>
      <div className={styles.bottomFade}></div>
    </section>
  );
};

export default NosotrosSeccion1;
