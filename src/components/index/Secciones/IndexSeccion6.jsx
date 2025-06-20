import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "../css/indexSeccion6.module.css";

const HomeSeccion6 = () => {
  const ingles = useStore(isEnglish);

  const content = {
    es: {
      title: "Testimonios y Casos de Éxito",
      subtitle: "Descubre cómo NetHive está transformando la gestión de infraestructura de red en empresas líderes",
      testimonials: [
        {
          text: "La visibilidad que nos da NetHive ha transformado por completo nuestro control de infraestructura. Hemos reducido el tiempo de respuesta ante incidencias en un 70%.",
          name: "Carlos Mendoza",
          role: "Director de TI",
          company: "TechCorp Solutions",
          rating: 5
        },
        {
          text: "La implementación de NetHive fue rápida y sin complicaciones. El mapeo visual de conexiones nos ayuda a prevenir problemas antes de que ocurran.",
          name: "Ana Martínez",
          role: "Network Manager",
          company: "Global Networks SA",
          rating: 5
        },
        {
          text: "Elegimos NetHive por su facilidad de uso y nos quedamos por sus potentes características. El soporte técnico es excepcional.",
          name: "Roberto Sánchez",
          role: "CTO",
          company: "DataCenter Pro",
          rating: 5
        }
      ]
    },
    en: {
      title: "Testimonials and Success Stories",
      subtitle: "Discover how NetHive is transforming network infrastructure management in leading companies",
      testimonials: [
        {
          text: "The visibility that NetHive gives us has completely transformed our infrastructure control. We've reduced incident response time by 70%.",
          name: "Charles Miller",
          role: "IT Director",
          company: "TechCorp Solutions",
          rating: 5
        },
        {
          text: "NetHive implementation was quick and hassle-free. The visual connection mapping helps us prevent issues before they occur.",
          name: "Anna Martinez",
          role: "Network Manager",
          company: "Global Networks Inc",
          rating: 5
        },
        {
          text: "We chose NetHive for its ease of use and stayed for its powerful features. The technical support is exceptional.",
          name: "Robert Sanders",
          role: "CTO",
          company: "DataCenter Pro",
          rating: 5
        }
      ]
    }
  };

  const textos = ingles ? content.en : content.es;

  const renderStars = (rating) => {
    return Array(rating).fill('★').map((star, index) => (
      <span key={index} className={styles.star}>{star}</span>
    ));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>
        <div className={styles.testimonialGrid}>
          {textos.testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.rating}>
                {renderStars(testimonial.rating)}
              </div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <div className={styles.clientInfo}>
                <div className={styles.clientDetails}>
                  <h3 className={styles.clientName}>{testimonial.name}</h3>
                  <p className={styles.clientRole}>
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion6;