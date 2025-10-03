import { useEffect, useRef, useState } from 'react';
import styles from './cinematicSection.module.css';

/**
 * CinematicSection - Componente base para secciones con estilo "Cine-Data Multicultural"
 * 
 * @param {Object} props
 * @param {'light' | 'dark' | 'gradient' | 'purple-black' | 'custom'} props.variant - Variante visual
 * @param {string} props.className - Clases CSS adicionales
 * @param {boolean} props.withGrain - Añade textura cinematográfica (grano sutil)
 * @param {boolean} props.withAnimation - Activa animación de aparición al scroll
 * @param {number} props.threshold - Umbral de Intersection Observer (0-1)
 * @param {React.ReactNode} props.children - Contenido de la sección
 */
const CinematicSection = ({ 
  variant = 'light', 
  className = '',
  withGrain = false,
  withAnimation = true,
  threshold = 0.1,
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!withAnimation) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [withAnimation, threshold]);

  const variantClass = styles[variant] || styles.light;
  const grainClass = withGrain ? styles.withGrain : '';
  const animationClass = withAnimation && isVisible ? styles.fadeInUp : '';

  return (
    <section 
      ref={sectionRef}
      className={`${styles.section} ${variantClass} ${grainClass} ${animationClass} ${className}`}
    >
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
};

export default CinematicSection;
