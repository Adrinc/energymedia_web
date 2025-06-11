import React, { useRef, useEffect } from "react";
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import styles from '../css/indexSeccion4.module.css';
import TarjetaServicio from './../components/TarjetaServicio.jsx';

// Asumiendo que tienes tus imágenes en public/imgs/
const CARD_IMAGES = [
    "./image/experience/telco.webp",
  "./image/experience/financiero.jpg",
  "./image/experience/marketing.webp",
  "./image/experience/industria.jpg"
];

const IndexSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  // Arreglo para las tarjetas, tomando la info del objeto de traducciones
  const cards = [
    {
      imagen: CARD_IMAGES[0],
      titulo: t.experienceSection.cards.carta_1_titulo,
      descripcion: t.experienceSection.cards.carta_1_des,
    },
    {
      imagen: CARD_IMAGES[1],
      titulo: t.experienceSection.cards.carta_2_titulo,
      descripcion: t.experienceSection.cards.carta_2_des,
    },
    {
      imagen: CARD_IMAGES[2],
      titulo: t.experienceSection.cards.carta_3_titulo,
      descripcion: t.experienceSection.cards.carta_3_des,
    },
    {
      imagen: CARD_IMAGES[3],
      titulo: t.experienceSection.cards.carta_4_titulo,
      descripcion: t.experienceSection.cards.carta_4_des,
    },
  ];

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
    <section id="experience" className={styles.sectionss} ref={sectionRef}>
      <div className={styles.esfera} />
      <div className={styles.gradientBackgroundTop}></div>
      <div className={styles.gradientBackgroundBottom}></div>
      <div className={styles.sectionHeader}>
        <h2 className={styles.mainTitle}>{t.experienceSection.mainTitle}</h2>
        <p className={styles.mainSubtitle}>{t.experienceSection.mainSubtitle}</p>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card, idx) => (
          <TarjetaServicio
          fondoWave="/image/global/0.png"
            key={idx}
            imagen={card.imagen}
            titulo={card.titulo}
            descripcion={card.descripcion}
          />

          
        ))}
      </div>
    </section>
  );
};

export default IndexSeccion4;






























/* import React from "react";
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import RiveComponent from '../../global/animations/riveComponent';
import styles from '../css/indexSeccion4.module.css';

const IndexSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  return (
    <section id="experience" className={styles.sectionss}>
      <div className={styles.esfera}/>
      <div className={styles.gradientBackgroundTop}></div>
      <div className={styles.gradientBackgroundBottom}></div>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/cbluna.riv"
          artboard="seccion3"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
          hastext={true}
          textValues={{
            MainTitle: t.experienceSection.mainTitle,
            MainSubtitle: t.experienceSection.mainSubtitle,
            carta_1_titulo: t.experienceSection.cards.carta_1_titulo,
            carta_1_des: t.experienceSection.cards.carta_1_des,
            carta_2_titulo: t.experienceSection.cards.carta_2_titulo,
            carta_2_des: t.experienceSection.cards.carta_2_des,
            carta_3_titulo: t.experienceSection.cards.carta_3_titulo,
            carta_3_des: t.experienceSection.cards.carta_3_des,
            carta_4_titulo: t.experienceSection.cards.carta_4_titulo,
            carta_4_des: t.experienceSection.cards.carta_4_des,
          }}
        />
      </div>
      <div className={`${styles.rivecomp} ${styles.movil}`}>
        <RiveComponent
          src="/rive/cbluna.riv"
          artboard="seccion3_mobile"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="contain"
          hastext={true}
          textValues={{
            MainTitle: t.experienceSection.mainTitle,
            MainSubtitle: t.experienceSection.mainSubtitle,
          }}
        />
      </div>
      <div className={`${styles.rivecomp} ${styles.tablet}`}>
        <RiveComponent
          src="/rive/cbluna.riv"
          artboard="seccion3_tablet"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="contain"
          hastext={true}
          textValues={{
            MainTitle: t.experienceSection.mainTitle,
            MainSubtitle: t.experienceSection.mainSubtitle,
          }}
        />
      </div>
    </section>
  );
};

export default IndexSeccion4;
 */

