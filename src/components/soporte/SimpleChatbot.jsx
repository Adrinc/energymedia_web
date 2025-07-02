import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../data/variables';
import { searchArticles, searchData } from '../../data/searchData';
import styles from './css/simpleChatbot.module.css';

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const ingles = useStore(isEnglish);

  const responses = {
    en: {
      greeting: "Hi! I'm your MDF/IDF assistant. I can help you with installation, maintenance, troubleshooting, pricing, features, demos, and more. What would you like to know?",
      
      // Conceptos básicos
      mdf: "MDF (Main Distribution Frame) is the central hub where all telecommunications cables from outside plant enter and connect to inside plant equipment.",
      idf: "IDF (Intermediate Distribution Frame) acts as a connection point between the MDF and workstations, typically located on each floor.",
      
      // Instalación y mantenimiento
      installation: "For proper installation, ensure you have: adequate power supply, proper grounding, cable management systems, and follow TIA/EIA standards.",
      maintenance: "Regular maintenance includes: visual inspections, cable testing, cleaning connectors, updating documentation, and checking environmental conditions.",
      troubleshooting: "Common issues include: poor connections, cable damage, power problems, and environmental factors. Always start with visual inspection.",
      
      // Equipos y cables
      cables: "Use Category 6A or fiber optic cables for best performance. Maintain proper bend radius and avoid electromagnetic interference.",
      tools: "Essential tools include: cable tester, punch-down tool, cable stripper, multimeter, and labeling system.",
      equipment: "NetHive supports 50+ device types including switches, patch panels, servers, UPS systems, and environmental sensors.",
      
      // Estándares y normativas
      standards: "Follow TIA/EIA-568 for commercial buildings and TIA/EIA-606 for administration standards.",
      compliance: "NetHive helps with compliance reporting, audit trail management, and automated documentation for regulatory requirements.",
      
      // Funcionalidades de NetHive
      nethive: "NetHive offers real-time monitoring, automated documentation, visual mapping, and inventory management for your MDF/IDF infrastructure.",
      features: "Key features include: Real-time monitoring, visual topology mapping, smart alerts, automated documentation, role-based access control, and mobile access.",
      dashboard: "The dashboard provides real-time metrics, infrastructure status overview, performance analytics, and customizable widgets for complete visibility.",
      topology: "Interactive network topology with drag-and-drop functionality, auto-discovery, visual connections, and real-time status updates.",
      alerts: "Intelligent alert system for critical issues, proactive problem detection, email notifications, and escalation management.",
      inventory: "Automatic component detection, real-time tracking, equipment specifications, maintenance history, and QR code integration.",
      
      // Monitoreo y análisis
      monitoring: "24/7 real-time monitoring with 99.9% network visibility, performance analytics, and predictive maintenance capabilities.",
      analytics: "Advanced reporting with custom dashboards, performance metrics, trend analysis, and exportable reports in PDF/Excel formats.",
      reporting: "Generate detailed reports for auditing, compliance, performance analysis, and capacity planning with automated scheduling.",
      
      // Seguridad y acceso
      security: "Enterprise-grade security with bank-level encryption, two-factor authentication, role-based access control, and continuous activity monitoring.",
      users: "Role-based permission management for administrators, technicians, and auditors with different access levels and capabilities.",
      permissions: "Granular access control with customizable roles, activity logging, and secure authentication methods including SSO/LDAP integration.",
      
      // Integración y escalabilidad
      api: "Complete REST API with webhooks, SNMP integration, and seamless connectivity with existing systems and third-party tools.",
      integration: "Easy integration with ERPs, ticketing systems, monitoring tools, and other enterprise applications through our comprehensive API.",
      scalability: "Unlimited scalability from small offices to enterprise data centers with multi-site management and global deployment support.",
      
      // Precios y planes
      pricing: "We offer three plans: Starter ($99/month for up to 100 devices), Pro ($299/month for up to 500 devices), and Enterprise (custom pricing for unlimited devices).",
      plans: "Choose from Starter (perfect for small teams), Pro (ideal for growing companies), or Enterprise (complete solution for large organizations).",
      trial: "Start with a 14-day free trial on our Pro plan - no credit card required. Experience full functionality before making a decision.",
      
      // Soporte y recursos
      support: "24/7 technical support through live chat, email, and phone. Response times vary by plan: Starter (email), Pro (24/7 chat), Enterprise (dedicated support).",
      training: "Comprehensive training resources including documentation, video tutorials, webinars, and personalized onboarding sessions.",
      demo: "Schedule an interactive demo to see NetHive in action. Our experts will show you how it can transform your infrastructure management.",
      
      // Casos de uso e industrias
      industries: "NetHive serves telecommunications (87% faster issue resolution), healthcare (95% network uptime), education (92% infrastructure visibility), and finance (98% compliance accuracy).",
      usecases: "Common use cases include enterprise migration (50% faster), compliance audits (100% success rate), rapid expansion (300% capacity growth), and modernization projects.",
      migration: "Our migration services include automated discovery, data mapping, minimal downtime strategies, and comprehensive documentation transfer.",
      
      // Características técnicas
      performance: "Lightning-fast performance with <200ms response time, 99.9% uptime, real-time synchronization, and optimized mobile experience.",
      mobile: "Full mobile app for iOS and Android with offline capabilities, QR code scanning, field reporting, and real-time updates.",
      backup: "Automated backup and recovery with version control, configuration management, and disaster recovery planning.",
      
      // Comparación y competencia
      comparison: "NetHive offers unique advantages: visual topology mapping, automated discovery, mobile-first design, and comprehensive API compared to traditional solutions.",
      benefits: "Key benefits include 85% reduction in documentation time, 99.9% network visibility accuracy, 24/7 real-time monitoring, and support for 50+ device types.",
      
      // Implementación y onboarding
      implementation: "Quick implementation in <24 hours with automated discovery, guided setup, data migration assistance, and dedicated onboarding support.",
      onboarding: "Comprehensive onboarding includes system setup, team training, best practices guidance, and ongoing support to ensure success.",
      setup: "5-minute setup process with automatic discovery, intelligent configuration, and guided installation wizard.",
      
      // Estado del sistema y confiabilidad
      status: "All systems operational with 99.9% uptime. Real-time status monitoring available at status.nethive.com.",
      uptime: "Industry-leading 99.9% uptime with redundant infrastructure, automatic failover, and global CDN for optimal performance.",
      
      notFound: "I'm not sure about that specific topic. Try asking about features, pricing, installation, maintenance, support, demos, or any technical questions about MDF/IDF infrastructure."
    },
    es: {
      greeting: "¡Hola! Soy tu asistente MDF/IDF. Puedo ayudarte con instalación, mantenimiento, resolución de problemas, precios, funcionalidades, demos y más. ¿Qué te gustaría saber?",
      
      // Conceptos básicos
      mdf: "MDF (Marco de Distribución Principal) es el hub central donde todos los cables de telecomunicaciones del exterior entran y se conectan al equipo interior.",
      idf: "IDF (Marco de Distribución Intermedio) actúa como punto de conexión entre el MDF y las estaciones de trabajo, típicamente ubicado en cada piso.",
      
      // Instalación y mantenimiento
      installation: "Para una instalación adecuada, asegúrate de tener: suministro de energía adecuado, conexión a tierra apropiada, sistemas de gestión de cables, y seguir estándares TIA/EIA.",
      maintenance: "El mantenimiento regular incluye: inspecciones visuales, pruebas de cables, limpieza de conectores, actualización de documentación y verificación de condiciones ambientales.",
      troubleshooting: "Problemas comunes incluyen: conexiones deficientes, daño en cables, problemas de energía y factores ambientales. Siempre comenzar con inspección visual.",
      
      // Equipos y cables
      cables: "Usa cables Categoría 6A o fibra óptica para mejor rendimiento. Mantén el radio de curvatura apropiado y evita interferencia electromagnética.",
      tools: "Herramientas esenciales incluyen: probador de cables, herramienta punch-down, pelacables, multímetro y sistema de etiquetado.",
      equipment: "NetHive soporta más de 50 tipos de dispositivos incluyendo switches, patch panels, servidores, sistemas UPS y sensores ambientales.",
      
      // Estándares y normativas
      standards: "Sigue TIA/EIA-568 para edificios comerciales y TIA/EIA-606 para estándares de administración.",
      compliance: "NetHive ayuda con reportes de cumplimiento, gestión de pistas de auditoría y documentación automatizada para requisitos regulatorios.",
      
      // Funcionalidades de NetHive
      nethive: "NetHive ofrece monitoreo en tiempo real, documentación automatizada, mapeo visual y gestión de inventario para tu infraestructura MDF/IDF.",
      features: "Características clave incluyen: Monitoreo en tiempo real, mapeo visual de topología, alertas inteligentes, documentación automatizada, control de acceso por roles y acceso móvil.",
      dashboard: "El dashboard proporciona métricas en tiempo real, vista general del estado de infraestructura, análisis de rendimiento y widgets personalizables para visibilidad completa.",
      topology: "Topología de red interactiva con funcionalidad arrastrar y soltar, descubrimiento automático, conexiones visuales y actualizaciones de estado en tiempo real.",
      alerts: "Sistema inteligente de alertas para problemas críticos, detección proactiva de problemas, notificaciones por email y gestión de escalación.",
      inventory: "Detección automática de componentes, seguimiento en tiempo real, especificaciones de equipos, historial de mantenimiento e integración con códigos QR.",
      
      // Monitoreo y análisis
      monitoring: "Monitoreo en tiempo real 24/7 con 99.9% de visibilidad de red, análisis de rendimiento y capacidades de mantenimiento predictivo.",
      analytics: "Reportes avanzados con dashboards personalizados, métricas de rendimiento, análisis de tendencias y reportes exportables en formatos PDF/Excel.",
      reporting: "Genera reportes detallados para auditoría, cumplimiento, análisis de rendimiento y planificación de capacidad con programación automatizada.",
      
      // Seguridad y acceso
      security: "Seguridad de nivel empresarial con encriptación nivel bancario, autenticación de dos factores, control de acceso basado en roles y monitoreo continuo de actividades.",
      users: "Gestión de permisos basada en roles para administradores, técnicos y auditores con diferentes niveles de acceso y capacidades.",
      permissions: "Control de acceso granular con roles personalizables, registro de actividades y métodos de autenticación seguros incluyendo integración SSO/LDAP.",
      
      // Integración y escalabilidad
      api: "API REST completa con webhooks, integración SNMP y conectividad perfecta con sistemas existentes y herramientas de terceros.",
      integration: "Fácil integración con ERPs, sistemas de tickets, herramientas de monitoreo y otras aplicaciones empresariales a través de nuestra API integral.",
      scalability: "Escalabilidad ilimitada desde oficinas pequeñas hasta centros de datos empresariales con gestión multi-sitio y soporte de despliegue global.",
      
      // Precios y planes
      pricing: "Ofrecemos tres planes: Starter ($99/mes para hasta 100 dispositivos), Pro ($299/mes para hasta 500 dispositivos) y Enterprise (precio personalizado para dispositivos ilimitados).",
      plans: "Elige entre Starter (perfecto para equipos pequeños), Pro (ideal para empresas en crecimiento) o Enterprise (solución completa para grandes organizaciones).",
      trial: "Comienza con una prueba gratuita de 14 días en nuestro plan Pro - no se requiere tarjeta de crédito. Experimenta la funcionalidad completa antes de decidir.",
      
      // Soporte y recursos
      support: "Soporte técnico 24/7 a través de chat en vivo, email y teléfono. Los tiempos de respuesta varían por plan: Starter (email), Pro (chat 24/7), Enterprise (soporte dedicado).",
      training: "Recursos de capacitación integral incluyendo documentación, tutoriales en video, webinars y sesiones de incorporación personalizadas.",
      demo: "Agenda un demo interactivo para ver NetHive en acción. Nuestros expertos te mostrarán cómo puede transformar la gestión de tu infraestructura.",
      
      // Casos de uso e industrias
      industries: "NetHive sirve a telecomunicaciones (87% más rápida resolución de problemas), salud (95% tiempo de actividad de red), educación (92% visibilidad de infraestructura) y finanzas (98% precisión de cumplimiento).",
      usecases: "Casos de uso comunes incluyen migración empresarial (50% más rápida), auditorías de cumplimiento (100% tasa de éxito), expansión rápida (300% crecimiento de capacidad) y proyectos de modernización.",
      migration: "Nuestros servicios de migración incluyen descubrimiento automatizado, mapeo de datos, estrategias de tiempo de inactividad mínimo y transferencia integral de documentación.",
      
      // Características técnicas
      performance: "Rendimiento súper rápido con <200ms tiempo de respuesta, 99.9% tiempo de actividad, sincronización en tiempo real y experiencia móvil optimizada.",
      mobile: "App móvil completa para iOS y Android con capacidades offline, escaneo de códigos QR, reportes de campo y actualizaciones en tiempo real.",
      backup: "Backup y recuperación automatizados con control de versiones, gestión de configuraciones y planificación de recuperación ante desastres.",
      
      // Comparación y competencia
      comparison: "NetHive ofrece ventajas únicas: mapeo visual de topología, descubrimiento automatizado, diseño mobile-first y API integral comparado con soluciones tradicionales.",
      benefits: "Beneficios clave incluyen 85% reducción en tiempo de documentación, 99.9% precisión de visibilidad de red, monitoreo 24/7 en tiempo real y soporte para más de 50 tipos de dispositivos.",
      
      // Implementación y onboarding
      implementation: "Implementación rápida en <24 horas con descubrimiento automatizado, configuración guiada, asistencia de migración de datos y soporte dedicado de incorporación.",
      onboarding: "Incorporación integral incluye configuración del sistema, capacitación del equipo, orientación de mejores prácticas y soporte continuo para asegurar el éxito.",
      setup: "Proceso de configuración de 5 minutos con descubrimiento automático, configuración inteligente y asistente de instalación guiada.",
      
      // Estado del sistema y confiabilidad
      status: "Todos los sistemas operativos con 99.9% tiempo de actividad. Monitoreo de estado en tiempo real disponible en status.nethive.com.",
      uptime: "Tiempo de actividad líder en la industria del 99.9% con infraestructura redundante, failover automático y CDN global para rendimiento óptimo.",
      
      notFound: "No estoy seguro sobre ese tema específico. Intenta preguntar sobre funcionalidades, precios, instalación, mantenimiento, soporte, demos o cualquier pregunta técnica sobre infraestructura MDF/IDF."
    }
  };

  const quickQuestions = ingles ? [
    "What is MDF?",
    "NetHive features",
    "Pricing plans",
    "Schedule demo",
    "Technical support"
  ] : [
    "¿Qué es MDF?",
    "Funcionalidades NetHive", 
    "Planes de precios",
    "Agendar demo",
    "Soporte técnico"
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        text: responses[ingles ? 'en' : 'es'].greeting,
        isBot: true,
        timestamp: new Date()
      }]);
    }
  }, [isOpen, ingles]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const analyzeQuestion = (text) => {
    const lang = ingles ? 'en' : 'es';
    const lowerText = text.toLowerCase();
    
    // Buscar en artículos existentes primero
    const articles = searchArticles(text, lang);
    if (articles.length > 0) {
      const article = articles[0];
      return `📖 **${article.title}**\n\n${article.content.substring(0, 200)}...\n\n*${ingles ? 'Read time' : 'Tiempo de lectura'}: ${article.readTime}*\n\n${ingles ? 'Would you like me to search for more articles on this topic?' : '¿Te gustaría que busque más artículos sobre este tema?'}`;
    }

    // Respuestas predefinidas expandidas
    // Conceptos básicos
    if (lowerText.includes('mdf') && !lowerText.includes('idf')) return responses[lang].mdf;
    if (lowerText.includes('idf') && !lowerText.includes('mdf')) return responses[lang].idf;
    if (lowerText.includes('mdf') && lowerText.includes('idf')) return `${responses[lang].mdf}\n\n${responses[lang].idf}`;
    
    // Instalación y mantenimiento
    if (lowerText.includes('install') || lowerText.includes('instalac')) return responses[lang].installation;
    if (lowerText.includes('maintenance') || lowerText.includes('mantenimiento')) return responses[lang].maintenance;
    if (lowerText.includes('troubleshoot') || lowerText.includes('problema') || lowerText.includes('error')) return responses[lang].troubleshooting;
    
    // Equipos y herramientas
    if (lowerText.includes('cable') || lowerText.includes('wire')) return responses[lang].cables;
    if (lowerText.includes('tool') || lowerText.includes('herramienta')) return responses[lang].tools;
    if (lowerText.includes('equipment') || lowerText.includes('equipo')) return responses[lang].equipment;
    
    // Estándares y normativas
    if (lowerText.includes('standard') || lowerText.includes('norma') || lowerText.includes('estandar')) return responses[lang].standards;
    if (lowerText.includes('compliance') || lowerText.includes('cumplimiento')) return responses[lang].compliance;
    
    // NetHive y funcionalidades
    if (lowerText.includes('nethive')) return responses[lang].nethive;
    if (lowerText.includes('feature') || lowerText.includes('funcionalidad') || lowerText.includes('caracteristica')) return responses[lang].features;
    if (lowerText.includes('dashboard') || lowerText.includes('panel')) return responses[lang].dashboard;
    if (lowerText.includes('topology') || lowerText.includes('topologia')) return responses[lang].topology;
    if (lowerText.includes('alert') || lowerText.includes('alerta')) return responses[lang].alerts;
    if (lowerText.includes('inventory') || lowerText.includes('inventario')) return responses[lang].inventory;
    
    // Monitoreo y análisis
    if (lowerText.includes('monitor') || lowerText.includes('monitoreo')) return responses[lang].monitoring;
    if (lowerText.includes('analytics') || lowerText.includes('analitica')) return responses[lang].analytics;
    if (lowerText.includes('report') || lowerText.includes('reporte')) return responses[lang].reporting;
    
    // Seguridad y acceso
    if (lowerText.includes('security') || lowerText.includes('seguridad')) return responses[lang].security;
    if (lowerText.includes('user') || lowerText.includes('usuario')) return responses[lang].users;
    if (lowerText.includes('permission') || lowerText.includes('permiso')) return responses[lang].permissions;
    
    // Integración y escalabilidad
    if (lowerText.includes('api')) return responses[lang].api;
    if (lowerText.includes('integration') || lowerText.includes('integracion')) return responses[lang].integration;
    if (lowerText.includes('scalability') || lowerText.includes('escalabilidad')) return responses[lang].scalability;
    
    // Precios y planes
    if (lowerText.includes('price') || lowerText.includes('pricing') || lowerText.includes('precio') || lowerText.includes('cost') || lowerText.includes('costo')) return responses[lang].pricing;
    if (lowerText.includes('plan') || lowerText.includes('subscription') || lowerText.includes('suscripcion')) return responses[lang].plans;
    if (lowerText.includes('trial') || lowerText.includes('prueba') || lowerText.includes('free') || lowerText.includes('gratis')) return responses[lang].trial;
    
    // Soporte y recursos
    if (lowerText.includes('support') || lowerText.includes('soporte') || lowerText.includes('help') || lowerText.includes('ayuda')) return responses[lang].support;
    if (lowerText.includes('training') || lowerText.includes('capacitacion') || lowerText.includes('entrenamiento')) return responses[lang].training;
    if (lowerText.includes('demo') || lowerText.includes('demonstration') || lowerText.includes('demostracion')) return responses[lang].demo;
    
    // Casos de uso e industrias
    if (lowerText.includes('industry') || lowerText.includes('industria') || lowerText.includes('sector')) return responses[lang].industries;
    if (lowerText.includes('use case') || lowerText.includes('caso de uso') || lowerText.includes('example') || lowerText.includes('ejemplo')) return responses[lang].usecases;
    if (lowerText.includes('migration') || lowerText.includes('migracion') || lowerText.includes('migrate') || lowerText.includes('migrar')) return responses[lang].migration;
    
    // Características técnicas
    if (lowerText.includes('performance') || lowerText.includes('rendimiento') || lowerText.includes('speed') || lowerText.includes('velocidad')) return responses[lang].performance;
    if (lowerText.includes('mobile') || lowerText.includes('movil') || lowerText.includes('app')) return responses[lang].mobile;
    if (lowerText.includes('backup') || lowerText.includes('respaldo') || lowerText.includes('recovery') || lowerText.includes('recuperacion')) return responses[lang].backup;
    
    // Comparación y beneficios
    if (lowerText.includes('comparison') || lowerText.includes('comparacion') || lowerText.includes('vs') || lowerText.includes('versus')) return responses[lang].comparison;
    if (lowerText.includes('benefit') || lowerText.includes('beneficio') || lowerText.includes('advantage') || lowerText.includes('ventaja')) return responses[lang].benefits;
    
    // Implementación
    if (lowerText.includes('implementation') || lowerText.includes('implementacion') || lowerText.includes('deploy') || lowerText.includes('desplegar')) return responses[lang].implementation;
    if (lowerText.includes('onboarding') || lowerText.includes('setup') || lowerText.includes('configuracion')) return responses[lang].onboarding;
    
    // Estado del sistema
    if (lowerText.includes('status') || lowerText.includes('estado') || lowerText.includes('health') || lowerText.includes('salud')) return responses[lang].status;
    if (lowerText.includes('uptime') || lowerText.includes('disponibilidad') || lowerText.includes('reliability') || lowerText.includes('confiabilidad')) return responses[lang].uptime;
    
    return responses[lang].notFound;
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simular tiempo de respuesta
    setTimeout(() => {
      const response = analyzeQuestion(userMessage.text);
      
      const botMessage = {
        text: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickQuestion = (question) => {
    setInputText(question);
    setTimeout(() => sendMessage(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <div className={`${styles.chatWidget} ${isOpen ? styles.open : ''}`}>
        <button 
          className={styles.chatToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '🤖'}
          {!isOpen && <span className={styles.pulse}></span>}
        </button>

        {/* Ventana del chat */}
        {isOpen && (
          <div className={styles.chatWindow}>
            <div className={styles.chatHeader}>
              <div className={styles.botInfo}>
                <span className={styles.botAvatar}>🤖</span>
                <div>
                  <h3>{ingles ? 'MDF/IDF Assistant' : 'Asistente MDF/IDF'}</h3>
                  <span className={styles.status}>
                    {ingles ? 'Online' : 'En línea'}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.chatMessages}>
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`${styles.message} ${message.isBot ? styles.botMessage : styles.userMessage}`}
                >
                  {message.isBot && <span className={styles.messageAvatar}>🤖</span>}
                  <div className={styles.messageContent}>
                    <div className={styles.messageText}>
                      {message.text.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                    <div className={styles.messageTime}>
                      {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className={`${styles.message} ${styles.botMessage}`}>
                  <span className={styles.messageAvatar}>🤖</span>
                  <div className={styles.typing}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Preguntas rápidas (solo al inicio) */}
            {messages.length === 1 && (
              <div className={styles.quickQuestions}>
                <div className={styles.quickTitle}>
                  {ingles ? "Quick questions:" : "Preguntas rápidas:"}
                </div>
                {quickQuestions.map((question, index) => (
                  <button 
                    key={index}
                    className={styles.quickQuestion}
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div className={styles.chatInput}>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={ingles ? "Ask about MDF/IDF..." : "Pregunta sobre MDF/IDF..."}
                disabled={isTyping}
              />
              <button 
                onClick={sendMessage} 
                disabled={isTyping || !inputText.trim()}
                className={styles.sendButton}
              >
                📤
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SimpleChatbot;