import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../../data/variables';
import styles from './techModal.module.css'; 

function TechModal({ tech, onClose }) {
  const modalRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const ingles = useStore(isEnglish);

  useEffect(() => {
    if (tech && !isVisible) {
      gsap.fromTo(
        modalRef.current,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
      setIsVisible(true);
    }
  }, [tech, isVisible]);

  const handleExit = () => {
    gsap.to(modalRef.current, {
      x: '-100%',
      opacity: 0,
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => {
        setIsVisible(false);
        onClose();
      },
    });
  };

  if (!tech) return null;

  const description = ingles ? tech.descriptionEN : tech.descriptionES;

  return (
      <div className={styles.modal + ' ' + styles.darkBg} ref={modalRef}>
        <button className={styles.closeButton} onClick={handleExit}>×</button>
        <img src={tech.logo} alt={tech.name} className={styles.logo} />
        <h2 className={styles.title + ' ' + styles.bigText}>{tech.name}</h2>
        <h3 className={styles.subtitle + ' ' + styles.bigSub}>{tech.type}</h3>
        <p className={styles.description + ' ' + styles.bigDesc}>{description}</p>
      </div>
  );
}

export default TechModal;