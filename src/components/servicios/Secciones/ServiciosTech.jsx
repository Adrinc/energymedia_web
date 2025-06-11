import React, { useRef, useEffect } from "react";
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import { useStore } from '@nanostores/react';
import ServicioComponentOne from '../components/ServicioComponentOne.jsx';
import styles from '../css/serviciosTech.module.css';

const ServiciosTech = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  const serviciosTraducidos = [
    {
      imagen: "/image/global/macbookrta.webp",
      titulo: t.serviciosTech.titulo1,
      descripcion: t.serviciosTech.descripcion1,
      reverse: true,
    },
    {
      imagen: "/image/global/screenmobile.webp",
      titulo: t.serviciosTech.titulo2,
      descripcion: t.serviciosTech.descripcion2,
      reverse: false,
    },
    {
      imagen: "/image/global/screenmobile2.webp",
      titulo: t.serviciosTech.titulo3,
      descripcion: t.serviciosTech.descripcion3,
      reverse: true,
    },
    {
      imagen: "/image/global/marketingdigital.webp",
      titulo: t.serviciosTech.titulo4,
      descripcion: t.serviciosTech.descripcion4,
      reverse: false,
    },
    {
      imagen: "/image/global/ideas.webp",
      titulo: t.serviciosTech.titulo5,
      descripcion: t.serviciosTech.descripcion5,
      reverse: true,
    },
  ];
  const listRef = useRef(null);
  useEffect(() => {
    const list = listRef.current;
    let hasAnimated = false;
    if (!list) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          list.classList.add(styles.fadeInUp);
          hasAnimated = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(list);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="servicios1" className={styles.sections}>
      <div className={styles.gradientBackgroundTop}></div>
      <div className={styles.gradientBackgroundBottom}></div>
      <div className={styles.servicesList} ref={listRef}>
        {serviciosTraducidos.map((servicio, idx) => (
          <ServicioComponentOne
            key={idx}
            imagen={servicio.imagen}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
            reverse={servicio.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiciosTech;
