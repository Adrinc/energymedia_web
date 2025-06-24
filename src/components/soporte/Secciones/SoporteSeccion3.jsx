import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/soporteSeccion3.module.css";

const SoporteSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.soporte.categories : translations.es.soporte.categories;

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>

        <div className={styles.categoriesGrid}>
          {textos.items.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                </div>
                <div className={styles.articleCount}>
                  <span className={styles.count}>{category.articles}</span>
                  <span className={styles.countLabel}>
                    {ingles ? "articles" : "artículos"}
                  </span>
                </div>
              </div>

              <div className={styles.topicsList}>
                {category.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className={styles.topicItem}>
                    <span className={styles.topicIcon}>📄</span>
                    <span className={styles.topicText}>{topic}</span>
                    <span className={styles.topicArrow}>→</span>
                  </div>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <button className={styles.exploreButton}>
                  <span className={styles.buttonIcon}>🔍</span>
                  {ingles ? "Explore category" : "Explorar categoría"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Can't find what you're looking for?" : "¿No encuentras lo que buscas?"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Our support team is available 24/7 to help you with any questions."
                : "Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier pregunta."
              }
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCta}>
                <span className={styles.ctaIcon}>💬</span>
                {ingles ? "Start live chat" : "Iniciar chat en vivo"}
              </button>
              <button className={styles.secondaryCta}>
                <span className={styles.ctaIcon}>📧</span>
                {ingles ? "Send us an email" : "Envíanos un email"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoporteSeccion3;