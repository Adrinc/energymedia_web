import React from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish, isDarkMode } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import styles from '../css/indexSeccion2.module.css';
import GradientBlinds from '../../global/animations/GradientBlinds/GradientBlinds';
import '../../global/animations/GradientBlinds/GradientBlinds.css';


const IndexSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const darkMode = useStore(isDarkMode);
  const t = ingles ? translationsIndex.en.ourStory : translationsIndex.es.ourStory;
  
  return (
    <section className={`${styles.section} ${!darkMode ? styles.sectionLight : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Column: Text and Stats */}
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>{t.title}</h2>
            
            <div className={styles.description}>
              <p className={styles.paragraph}>{t.paragraph1}</p>
              <p className={styles.paragraph}>{t.highlightText}</p>
              <p className={styles.paragraph}>{t.paragraph2}</p>
            </div>
            
            <div className={styles.statsGrid}>
              {t.stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <span className={styles.statLabel}>{stat.label}</span>
                  <span className={styles.statNumber}>{stat.number}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Gradient Blinds Effect */}
          <div className={styles.rightColumn}>
            <div className={styles.imageWrapper}>
              <GradientBlinds
                gradientColors={['#6F26A9', '#7E2B7F', '#3DBBFF', '#2BC7FF', '#FFB638', '#FF7A45']}
                angle={45}
                noise={0}
                blindCount={20}
                blindMinWidth={70}
                mouseDampening={0.2}
                mirrorGradient={false}
                spotlightRadius={0.6}
                spotlightSoftness={1.5}
                spotlightOpacity={0.8}
                distortAmount={0.15}
                shineDirection="left"
                mixBlendMode="normal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion2;
