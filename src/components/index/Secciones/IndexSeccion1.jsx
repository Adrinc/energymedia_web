import React, { useEffect, useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "../css/indexSeccion1.module.css";

const HomeSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? [
    {
      title: "Transform your infrastructure",
      subtitle: "Complete MDF/IDF Management",
      icon: "🔧"
    },
    {
      title: "Real-time monitoring",
      subtitle: "Network Asset Visibility",
      icon: "📡"
    },
    {
      title: "Smart Documentation",
      subtitle: "Automated Cable Management",
      icon: "📋"
    }
  ] : [
    {
      title: "Transforma tu infraestructura",
      subtitle: "Gestión completa MDF/IDF",
      icon: "🔧"
    },
    {
      title: "Monitoreo en tiempo real",
      subtitle: "Visibilidad de activos de red",
      icon: "📡"
    },
    {
      title: "Documentación inteligente",
      subtitle: "Gestión automatizada de cableado",
      icon: "📋"
    }
  ];

  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState("fadeInUp");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slideDuration = 5000; // Duración total del slide
    const fadeOutDuration = 1000; // Duración de la animación de salida
    const interval = 50; // Intervalo de actualización de la barra

    let timer;
    let progressTimer;

    const startTransition = () => {
      // Iniciamos la animación de salida
      setAnim("fadeOutUp");
      
      // Cambiamos al siguiente slide después de la animación de salida
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % textos.length);
        setAnim("fadeInUp");
        setProgress(0);
      }, fadeOutDuration);
    };

    // Animación de la barra de progreso
    progressTimer = setInterval(() => {
      setProgress(prev => {
        // Calculamos el nuevo progreso
        const newProgress = prev + (100 * interval / (slideDuration - fadeOutDuration));
        
        // Si alcanzamos el 100%, iniciamos la transición
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          startTransition();
          return 100;
        }
        return newProgress;
      });
    }, interval);

    // Limpieza al desmontar
    return () => {
      clearInterval(progressTimer);
      clearTimeout(timer);
    };
  }, [index, textos.length]);

  return (
    <section className={styles.sections}>
      <video id="background-video" loop autoPlay muted playsInline className={styles.videox}>
        <source src="/videos/mdf1.mp4" type="video/mp4" />
      </video>
      
      <div className={styles.overlay}></div>
      
      <div className={`${styles.textosAnimados} ${styles[anim]}`}>
        <div className={styles.slideIcon}>{textos[index].icon}</div>
        <span className={styles.titulo}>{textos[index].title}</span>
        <span className={styles.subtitulo}>{textos[index].subtitle}</span>
        
        <div className={styles.indicators}>
          {textos.map((_, i) => (
            <div 
              key={i} 
              className={`${styles.indicator} ${i === index ? styles.active : ''}`}
            >
              <div 
                className={styles.progress} 
                style={{ width: i === index ? `${progress}%` : '0%' }}
              ></div>
            </div>
          ))}
        </div>
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