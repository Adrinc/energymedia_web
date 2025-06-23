import React, { useEffect, useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "../css/indexSeccion1.module.css";

const HomeSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? [
    {
      title: "Transform your infrastructure",
      subtitle: "Complete MDF/IDF Management"
    },
    {
      title: "Real-time monitoring",
      subtitle: "Network Asset Visibility"
    },
    {
      title: "Smart Documentation",
      subtitle: "Automated Cable Management"
    }
  ] : [
    {
      title: "Transforma tu infraestructura",
      subtitle: "Gestión completa MDF/IDF"
    },
    {
      title: "Monitoreo en tiempo real",
      subtitle: "Visibilidad de activos de red"
    },
    {
      title: "Documentación inteligente",
      subtitle: "Gestión automatizada de cableado"
    }
  ];

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
        <source src="/videos/mdf1.mp4" type="video/mp4" />
      </video>
      <div className={`${styles.textosAnimados} ${styles[anim]}`}> 
        <span className={styles.titulo}>{textos[index].title}</span>
        <span className={styles.subtitulo}>{textos[index].subtitle}</span>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>{ingles ? "Scroll down" : "Desliza hacia abajo"}</span>
        <div className={styles.scrollIcon}></div>
      </div>
      <div className={styles.bottomFade}></div>
    </section>
  );
};

export default HomeSeccion1;