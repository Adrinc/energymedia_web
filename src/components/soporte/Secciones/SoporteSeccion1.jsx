import React, { useState, useEffect } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import SimpleChatbot from '../SimpleChatbot';
import styles from "../css/soporteSeccion1.module.css";

const SoporteSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.soporte.hero : translations.es.soporte.hero;

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.backgroundPattern}></div>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.headerContent}>
          <div className={styles.iconContainer}>
            <span className={styles.helpIcon}>🤖</span>
          </div>
          
          <h1 className={styles.title}>
            {ingles ? "AI Support Assistant" : "Asistente de Soporte IA"}
          </h1>
          <p className={styles.subtitle}>
            {ingles ? "Get instant answers about MDF/IDF" : "Obtén respuestas instantáneas sobre MDF/IDF"}
          </p>
          <p className={styles.description}>
            {ingles 
              ? "Our intelligent assistant is ready to help you with installation, maintenance, troubleshooting, and best practices - available 24/7."
              : "Nuestro asistente inteligente está listo para ayudarte con instalación, mantenimiento, resolución de problemas y mejores prácticas - disponible 24/7."
            }
          </p>
        </div>

        <div className={styles.chatPrompt}>
          <div className={styles.promptCard}>
            <span className={styles.promptIcon}>💬</span>
            <h2>{ingles ? "Start chatting now!" : "¡Comienza a chatear ahora!"}</h2>
            <p>
              {ingles 
                ? "Click the chat button to get instant help with your MDF/IDF questions"
                : "Haz clic en el botón de chat para obtener ayuda instantánea con tus preguntas sobre MDF/IDF"
              }
            </p>
            
            <div className={styles.chatFeatures}>
              <div className={styles.feature}>
                <span>⚡</span>
                <span>{ingles ? "Instant responses" : "Respuestas instantáneas"}</span>
              </div>
              <div className={styles.feature}>
                <span>🌍</span>
                <span>{ingles ? "Bilingual support" : "Soporte bilingüe"}</span>
              </div>
              <div className={styles.feature}>
                <span>📚</span>
                <span>{ingles ? "Expert knowledge" : "Conocimiento experto"}</span>
              </div>
              <div className={styles.feature}>
                <span>🔧</span>
                <span>{ingles ? "Practical solutions" : "Soluciones prácticas"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.quickStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>
              {ingles ? "Available" : "Disponible"}
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>⚡</div>
            <div className={styles.statLabel}>
              {ingles ? "Instant" : "Instantáneo"}
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>🌍</div>
            <div className={styles.statLabel}>
              {ingles ? "Bilingual" : "Bilingüe"}
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>🤖</div>
            <div className={styles.statLabel}>
              {ingles ? "AI Powered" : "IA Avanzada"}
            </div>
          </div>
        </div>
      </div>

      <SimpleChatbot />

  
    </section>
  );
};

export default SoporteSeccion1;