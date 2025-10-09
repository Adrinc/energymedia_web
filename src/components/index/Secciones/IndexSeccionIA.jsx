import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/indexSeccionIA.module.css';

const IndexSeccionIA = () => {
  const ingles = useStore(isEnglish);
  const [isVisible, setIsVisible] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  const sectionRef = useRef(null);

  const content = {
    es: {
      badge: "🤖 TECNOLOGÍA DE VANGUARDIA",
      title: "IA que Potencia Cada Estrategia Digital",
      subtitle: "No solo usamos IA. La integramos estratégicamente en cada proyecto para maximizar resultados, reducir costos y escalar sin límites.",
      applications: [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          title: "Marketing Automatizado con IA",
          description: "Campañas que se optimizan solas en tiempo real",
          example: "Segmentación dinámica + A/B testing automático + predicción de ROI"
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
          title: "Desarrollo Web/Apps con IA Integrada",
          description: "Chatbots, recomendaciones personalizadas, búsquedas inteligentes",
          example: "Asistentes virtuales + UX adaptativa + automatización de procesos"
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
          title: "Analítica Predictiva & Machine Learning",
          description: "Anticipa comportamientos y optimiza estrategias antes de que sucedan",
          example: "Forecasting de ventas + detección de churn + análisis de sentimiento"
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
          title: "Personalización con IA Generativa",
          description: "Contenido único para cada usuario, sin esfuerzo manual",
          example: "Copy dinámico + creatividades adaptativas + emails personalizados"
        }
      ],
      cta: "Descubre cómo la IA puede transformar tu negocio"
    },
    en: {
      badge: "🤖 CUTTING-EDGE TECHNOLOGY",
      title: "AI That Powers Every Digital Strategy",
      subtitle: "We don't just use AI. We strategically integrate it into every project to maximize results, reduce costs, and scale without limits.",
      applications: [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          title: "AI-Powered Marketing Automation",
          description: "Campaigns that self-optimize in real-time",
          example: "Dynamic segmentation + automatic A/B testing + ROI prediction"
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
          title: "Web/App Development with Integrated AI",
          description: "Chatbots, personalized recommendations, smart search",
          example: "Virtual assistants + adaptive UX + process automation"
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
          title: "Predictive Analytics & Machine Learning",
          description: "Anticipate behaviors and optimize strategies before they happen",
          example: "Sales forecasting + churn detection + sentiment analysis"
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
          title: "Personalization with Generative AI",
          description: "Unique content for each user, without manual effort",
          example: "Dynamic copy + adaptive creatives + personalized emails"
        }
      ],
      cta: "Discover how AI can transform your business"
    }
  };

  const t = ingles ? content.en : content.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Red neuronal para visualización SVG
  const neuralNodes = [
    // Capa de entrada (izquierda)
    { id: 1, x: 15, y: 20, layer: 'input' },
    { id: 2, x: 15, y: 40, layer: 'input' },
    { id: 3, x: 15, y: 60, layer: 'input' },
    { id: 4, x: 15, y: 80, layer: 'input' },
    
    // Capa oculta 1
    { id: 5, x: 35, y: 15, layer: 'hidden1' },
    { id: 6, x: 35, y: 35, layer: 'hidden1' },
    { id: 7, x: 35, y: 55, layer: 'hidden1' },
    { id: 8, x: 35, y: 75, layer: 'hidden1' },
    { id: 9, x: 35, y: 95, layer: 'hidden1' },
    
    // Capa oculta 2
    { id: 10, x: 55, y: 25, layer: 'hidden2' },
    { id: 11, x: 55, y: 45, layer: 'hidden2' },
    { id: 12, x: 55, y: 65, layer: 'hidden2' },
    { id: 13, x: 55, y: 85, layer: 'hidden2' },
    
    // Capa de salida (derecha)
    { id: 14, x: 75, y: 30, layer: 'output' },
    { id: 15, x: 75, y: 50, layer: 'output' },
    { id: 16, x: 75, y: 70, layer: 'output' }
  ];

  // Conexiones entre nodos
  const connections = [
    // Input → Hidden1
    { from: 1, to: 5 }, { from: 1, to: 6 }, { from: 1, to: 7 },
    { from: 2, to: 6 }, { from: 2, to: 7 }, { from: 2, to: 8 },
    { from: 3, to: 7 }, { from: 3, to: 8 }, { from: 3, to: 9 },
    { from: 4, to: 8 }, { from: 4, to: 9 },
    
    // Hidden1 → Hidden2
    { from: 5, to: 10 }, { from: 5, to: 11 },
    { from: 6, to: 10 }, { from: 6, to: 11 }, { from: 6, to: 12 },
    { from: 7, to: 11 }, { from: 7, to: 12 }, { from: 7, to: 13 },
    { from: 8, to: 12 }, { from: 8, to: 13 },
    { from: 9, to: 13 },
    
    // Hidden2 → Output
    { from: 10, to: 14 }, { from: 10, to: 15 },
    { from: 11, to: 14 }, { from: 11, to: 15 }, { from: 11, to: 16 },
    { from: 12, to: 15 }, { from: 12, to: 16 },
    { from: 13, to: 16 }
  ];

  const getNodeById = (id) => neuralNodes.find(n => n.id === id);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {/* Grid de 2 columnas */}
        <div className={styles.grid}>
          
          {/* Columna Izquierda - Visual IA */}
          <div className={`${styles.visualColumn} ${isVisible ? styles.fadeIn : ''}`}>
            {/* Robot arriba de la red neuronal */}
            <div className={styles.robotWrapper}>
              <img 
                src="/image/global/robot.png" 
                alt="AI Robot" 
                className={styles.robotImage}
              />
            </div>

            <svg 
              className={styles.neuralNetwork} 
              viewBox="0 0 100 100" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Gradientes */}
              <defs>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#672E92" />
                  <stop offset="100%" stopColor="#3EC8F7" />
                </linearGradient>
                
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#672E92" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3EC8F7" stopOpacity="0.3" />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Conexiones */}
              <g className={styles.connections}>
                {connections.map((conn, idx) => {
                  const fromNode = getNodeById(conn.from);
                  const toNode = getNodeById(conn.to);
                  return (
                    <line
                      key={`conn-${idx}`}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke="url(#connectionGradient)"
                      strokeWidth="0.3"
                      className={styles.connection}
                    />
                  );
                })}
              </g>

              {/* Nodos */}
              <g className={styles.nodes}>
                {neuralNodes.map((node) => (
                  <circle
                    key={node.id}
                    cx={node.x}
                    cy={node.y}
                    r="2"
                    fill="url(#nodeGradient)"
                    filter="url(#glow)"
                    className={`${styles.node} ${activeNode === node.id ? styles.active : ''}`}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  />
                ))}
              </g>

              {/* Partículas flotantes */}
              {[...Array(15)].map((_, i) => (
                <circle
                  key={`particle-${i}`}
                  cx={Math.random() * 100}
                  cy={Math.random() * 100}
                  r="0.5"
                  fill="#3EC8F7"
                  opacity="0.4"
                  className={styles.particle}
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${4 + Math.random() * 2}s`
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Columna Derecha - Contenido */}
          <div className={`${styles.contentColumn} ${isVisible ? styles.fadeInRight : ''}`}>
            
            {/* Badge */}
            <div className={styles.badge}>{t.badge}</div>

            {/* Título */}
            <h2 className={styles.title}>{t.title}</h2>

            {/* Subtitle */}
            <p className={styles.subtitle}>{t.subtitle}</p>

            {/* Aplicaciones de IA */}
            <div className={styles.applications}>
              {t.applications.map((app, idx) => (
                <div 
                  key={app.id} 
                  className={styles.appCard}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className={styles.appImageWrapper}>
                    <img 
                      src={app.image} 
                      alt={app.title}
                      className={styles.appImage}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.appContent}>
                    <h3 className={styles.appTitle}>{app.title}</h3>
                    <p className={styles.appDescription}>{app.description}</p>
                    <p className={styles.appExample}>→ {app.example}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#contacto" className={styles.cta}>
              {t.cta}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndexSeccionIA;
