import React from "react";
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translations } from '../../../data/translations';
import styles from '../css/indexSeccion5.module.css';

const progressData = [
  {
    key: 'clientes_satisfechos',
    percent: 96,
  },
  {
    key: 'retencion_clientes',
    percent: 95,
  },
  {
    key: 'cumplimiento_tiempos',
    percent: 90,
  },
  {
    key: 'aumento_ingresos',
    percent: 92,
  },
];

const IndexSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;

  return (
    <section id="stats_section" className={styles.parallax}>
      <div className={styles.gradientBackgroundTop}></div>
      <div className={styles.gradientBackgroundBottom}></div>
      <div className={styles.statsContainer}>
        <div className={styles.statsLeft}>
          <div className={styles.imageContainer}>
            <img src="/image/global/71.jpg" alt={t.stats.altImg} className={styles.statsImage} />
            <div className={styles.experienceTag}>
              <span>{t.stats.experienceTag}</span>
            </div>
          </div>
        </div>
        <div className={styles.statsRight}>
          <h1>
            <span className={styles.statsTitle}>{t.stats.title1}</span>
            <br /> {t.stats.title2} <span className={styles.gradientText}>{t.stats.title3}</span> {t.stats.title4}
          </h1>
          <p>{t.stats.description}</p>
          <div className={styles.progressBars}>
            {progressData.map((item, idx) => (
              <div className={styles.progressItem} key={item.key}>
                <div className={styles.progressLabel}>
                  <span>{t.stats.progress[item.key]}</span>
                  <span className={styles.progressPercentage}>{item.percent}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFilled} style={{ width: `${item.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion5;
