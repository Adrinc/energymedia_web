export const searchData = {
  es: {
    articles: [
      {
        id: 1,
        title: "¿Qué es un MDF (Main Distribution Frame)?",
        content: "El MDF es el punto central de distribución de telecomunicaciones en un edificio. Conecta las líneas externas con el cableado interno del edificio, actuando como el hub principal para todas las conexiones de red.",
        category: "conceptos",
        tags: ["mdf", "distribución", "telecomunicaciones", "conceptos básicos", "hub principal"],
        difficulty: "principiante",
        readTime: "5 min"
      },
      {
        id: 2,
        title: "Configuración inicial de un IDF (Intermediate Distribution Frame)",
        content: "Guía paso a paso para configurar un IDF, incluyendo conexiones de fibra óptica, switches, paneles de parcheo y configuración de VLANs para una distribución eficiente de la red.",
        category: "instalacion",
        tags: ["idf", "configuración", "instalación", "fibra óptica", "switches", "vlans"],
        difficulty: "intermedio",
        readTime: "15 min"
      },
      {
        id: 3,
        title: "Mantenimiento preventivo de equipos MDF",
        content: "Procedimientos de mantenimiento para equipos en el MDF, incluyendo limpieza, inspección de conexiones, pruebas de continuidad y reemplazo de componentes desgastados.",
        category: "mantenimiento",
        tags: ["mantenimiento", "mdf", "preventivo", "limpieza", "pruebas", "continuidad"],
        difficulty: "intermedio",
        readTime: "12 min"
      },
      {
        id: 4,
        title: "Documentación de conexiones de red",
        content: "Mejores prácticas para documentar conexiones entre MDF e IDF, etiquetado de cables, mantenimiento de registros y uso de NetHive para tracking.",
        category: "documentacion",
        tags: ["documentación", "etiquetado", "registros", "conexiones", "nethive", "tracking"],
        difficulty: "principiante",
        readTime: "8 min"
      },
      {
        id: 5,
        title: "Resolución de problemas de conectividad MDF-IDF",
        content: "Diagnóstico y solución de problemas comunes de conectividad entre MDF e IDF, uso de herramientas de testing, análisis de tráfico y troubleshooting avanzado.",
        category: "troubleshooting",
        tags: ["troubleshooting", "conectividad", "diagnóstico", "herramientas", "análisis", "tráfico"],
        difficulty: "avanzado",
        readTime: "20 min"
      },
      {
        id: 6,
        title: "Instalación de paneles de fibra óptica",
        content: "Procedimiento detallado para instalar paneles de fibra óptica en racks de MDF e IDF, incluyendo fusiones, pruebas de potencia y certificación de enlaces.",
        category: "instalacion",
        tags: ["fibra óptica", "paneles", "instalación", "racks", "fusiones", "certificación"],
        difficulty: "intermedio",
        readTime: "18 min"
      },
      {
        id: 7,
        title: "Gestión de inventario de equipos de red",
        content: "Sistema para controlar y gestionar el inventario de equipos en MDF e IDF usando NetHive, incluyendo tracking en tiempo real y alertas de mantenimiento.",
        category: "gestion",
        tags: ["inventario", "gestión", "equipos", "nethive", "tracking", "alertas"],
        difficulty: "principiante",
        readTime: "10 min"
      },
      {
        id: 8,
        title: "Seguridad física en salas MDF e IDF",
        content: "Medidas de seguridad física y control de acceso para proteger equipos críticos de telecomunicaciones, sistemas de monitoreo ambiental y protocolos de emergencia.",
        category: "seguridad",
        tags: ["seguridad", "acceso", "protección", "salas técnicas", "monitoreo", "emergencia"],
        difficulty: "intermedio",
        readTime: "14 min"
      },
      {
        id: 9,
        title: "Migración de MDF tradicional a infraestructura moderna",
        content: "Estrategias y procedimientos para modernizar infraestructura MDF legacy con nuevas tecnologías, minimizando downtime y optimizando el rendimiento.",
        category: "migracion",
        tags: ["migración", "modernización", "legacy", "actualización", "downtime", "rendimiento"],
        difficulty: "avanzado",
        readTime: "25 min"
      },
      {
        id: 10,
        title: "Monitoreo en tiempo real con NetHive",
        content: "Configuración y uso del sistema de monitoreo en tiempo real de NetHive para infraestructura MDF/IDF, dashboards, alertas y análisis predictivo.",
        category: "monitoreo",
        tags: ["monitoreo", "tiempo real", "nethive", "configuración", "dashboards", "predictivo"],
        difficulty: "intermedio",
        readTime: "16 min"
      },
      {
        id: 11,
        title: "Cableado estructurado en centros de datos",
        content: "Diseño e implementación de cableado estructurado para centros de datos, considerando densidad de puertos, gestión térmica y escalabilidad futura.",
        category: "instalacion",
        tags: ["cableado estructurado", "centros de datos", "densidad", "térmica", "escalabilidad"],
        difficulty: "avanzado",
        readTime: "22 min"
      },
      {
        id: 12,
        title: "Optimización de rendimiento de red",
        content: "Técnicas para optimizar el rendimiento de la red entre MDF e IDF, incluyendo análisis de latencia, gestión de ancho de banda y QoS.",
        category: "optimizacion",
        tags: ["optimización", "rendimiento", "latencia", "ancho de banda", "qos"],
        difficulty: "avanzado",
        readTime: "19 min"
      },
      {
        id: 13,
        title: "Configuración de switches Cisco en IDF",
        content: "Guía completa para configurar switches Cisco en un IDF, incluyendo VLANs, trunk ports, spanning tree protocol y configuraciones de seguridad básicas.",
        category: "instalacion",
        tags: ["cisco", "switches", "idf", "vlans", "trunk", "spanning tree", "seguridad"],
        difficulty: "intermedio",
        readTime: "24 min"
      },
      {
        id: 14,
        title: "Gestión de cables Cat6 vs Cat6A en MDF",
        content: "Comparación detallada entre cables Cat6 y Cat6A para instalaciones MDF, incluyendo capacidades, distancias máximas y consideraciones de costo-beneficio.",
        category: "conceptos",
        tags: ["cat6", "cat6a", "cables", "mdf", "capacidades", "distancias", "comparación"],
        difficulty: "principiante",
        readTime: "11 min"
      },
      {
        id: 15,
        title: "Implementación de redundancia en enlaces MDF-IDF",
        content: "Estrategias para implementar redundancia en enlaces críticos entre MDF e IDF, incluyendo configuración de bonding, failover automático y balanceo de carga.",
        category: "instalacion",
        tags: ["redundancia", "enlaces", "bonding", "failover", "balanceo", "carga"],
        difficulty: "avanzado",
        readTime: "28 min"
      },
      {
        id: 16,
        title: "Medición de potencia óptica en enlaces de fibra",
        content: "Procedimientos para medir correctamente la potencia óptica en enlaces de fibra entre MDF e IDF, interpretación de resultados y calibración de equipos.",
        category: "mantenimiento",
        tags: ["potencia óptica", "fibra", "medición", "calibración", "interpretación", "equipos"],
        difficulty: "intermedio",
        readTime: "17 min"
      },
      {
        id: 17,
        title: "Diseño de rack MDF para alta densidad",
        content: "Principios de diseño para racks MDF de alta densidad, incluyendo gestión térmica, distribución de energía, organización de cables y accesibilidad.",
        category: "instalacion",
        tags: ["rack", "alta densidad", "térmica", "energía", "cables", "accesibilidad"],
        difficulty: "intermedio",
        readTime: "21 min"
      },
      {
        id: 18,
        title: "Protocolos de emergencia para salas técnicas",
        content: "Procedimientos de emergencia específicos para salas MDF e IDF, incluyendo cortes de energía, inundaciones, incendios y acceso de emergencia.",
        category: "seguridad",
        tags: ["emergencia", "protocolos", "energía", "inundaciones", "incendios", "acceso"],
        difficulty: "intermedio",
        readTime: "13 min"
      },
      {
        id: 19,
        title: "Auditoría de infraestructura de red existente",
        content: "Metodología para realizar auditorías completas de infraestructura MDF/IDF existente, identificación de vulnerabilidades y recomendaciones de mejora.",
        category: "gestion",
        tags: ["auditoría", "infraestructura", "vulnerabilidades", "mejoras", "metodología"],
        difficulty: "avanzado",
        readTime: "32 min"
      },
      {
        id: 20,
        title: "Configuración de SNMP para monitoreo de equipos",
        content: "Guía para configurar SNMP en equipos de red para monitoreo centralizado desde NetHive, incluyendo configuración de traps y polling intervals.",
        category: "monitoreo",
        tags: ["snmp", "monitoreo", "traps", "polling", "centralizado", "nethive"],
        difficulty: "avanzado",
        readTime: "26 min"
      },
      {
        id: 21,
        title: "Gestión de temperatura y humedad en IDF",
        content: "Mejores prácticas para el control ambiental en salas IDF, incluyendo sistemas de climatización, sensores de monitoreo y alertas tempranas.",
        category: "mantenimiento",
        tags: ["temperatura", "humedad", "climatización", "sensores", "alertas", "ambiental"],
        difficulty: "principiante",
        readTime: "9 min"
      },
      {
        id: 22,
        title: "Implementación de VLANs distribuidas MDF-IDF",
        content: "Configuración avanzada de VLANs distribuidas entre múltiples IDFs desde un MDF central, incluyendo VLAN tagging y trunk configuration.",
        category: "instalacion",
        tags: ["vlans", "distribuidas", "tagging", "trunk", "múltiples", "configuración"],
        difficulty: "avanzado",
        readTime: "30 min"
      },
      {
        id: 23,
        title: "Troubleshooting de enlaces de fibra monomodo",
        content: "Técnicas especializadas para diagnosticar problemas en enlaces de fibra monomodo, uso de OTDR, identificación de roturas y empalmes defectuosos.",
        category: "troubleshooting",
        tags: ["fibra", "monomodo", "otdr", "roturas", "empalmes", "diagnóstico"],
        difficulty: "avanzado",
        readTime: "35 min"
      },
      {
        id: 24,
        title: "Estándares TIA/EIA para cableado estructurado",
        content: "Comprensión y aplicación de los estándares TIA/EIA 568 para cableado estructurado en instalaciones MDF/IDF, cumplimiento normativo y certificación.",
        category: "conceptos",
        tags: ["tia", "eia", "568", "estándares", "normativo", "certificación"],
        difficulty: "intermedio",
        readTime: "18 min"
      },
      {
        id: 25,
        title: "Migración de cobre a fibra óptica",
        content: "Planificación y ejecución de migración de enlaces de cobre a fibra óptica, análisis de costo-beneficio, fases de implementación y testing.",
        category: "migracion",
        tags: ["cobre", "fibra", "migración", "costo-beneficio", "fases", "testing"],
        difficulty: "avanzado",
        readTime: "27 min"
      },
      {
        id: 26,
        title: "Configuración de PoE+ en switches IDF",
        content: "Implementación de Power over Ethernet Plus en switches IDF para alimentar dispositivos de red, cálculo de presupuesto de energía y gestión térmica.",
        category: "instalacion",
        tags: ["poe", "poe+", "energía", "presupuesto", "switches", "térmica"],
        difficulty: "intermedio",
        readTime: "20 min"
      },
      {
        id: 27,
        title: "Backup y recuperación de configuraciones de red",
        content: "Estrategias para backup automático de configuraciones de equipos de red, procedimientos de recuperación rápida y versionado de configuraciones.",
        category: "gestion",
        tags: ["backup", "recuperación", "configuraciones", "automático", "versionado"],
        difficulty: "intermedio",
        readTime: "15 min"
      },
      {
        id: 28,
        title: "Análisis de performance de enlaces 10Gbps",
        content: "Metodología para analizar el rendimiento de enlaces de 10Gbps entre MDF e IDF, identificación de cuellos de botella y optimización de throughput.",
        category: "optimizacion",
        tags: ["10gbps", "performance", "cuellos de botella", "throughput", "análisis"],
        difficulty: "avanzado",
        readTime: "33 min"
      },
      {
        id: 29,
        title: "Implementación de IPv6 en infraestructura MDF/IDF",
        content: "Guía para migrar infraestructura de red de IPv4 a IPv6, configuración dual-stack, addressing schemes y consideraciones de seguridad.",
        category: "migracion",
        tags: ["ipv6", "ipv4", "dual-stack", "addressing", "migración", "seguridad"],
        difficulty: "avanzado",
        readTime: "29 min"
      },
      {
        id: 30,
        title: "Gestión de espacios en racks con NetHive",
        content: "Utilización de NetHive para optimizar la gestión de espacios en racks MDF/IDF, planificación de crecimiento y visualización 3D de infraestructura.",
        category: "gestion",
        tags: ["racks", "espacios", "nethive", "planificación", "3d", "visualización"],
        difficulty: "principiante",
        readTime: "12 min"
      },
      {
        id: 31,
        title: "Certificación de enlaces de cobre Cat6A",
        content: "Procedimientos completos para certificar enlaces de cobre Cat6A según estándares TIA, uso de certificadores de campo y interpretación de reportes.",
        category: "mantenimiento",
        tags: ["certificación", "cobre", "cat6a", "tia", "certificadores", "reportes"],
        difficulty: "intermedio",
        readTime: "23 min"
      },
      {
        id: 32,
        title: "Diseño de topología de red jerárquica",
        content: "Principios de diseño para topologías de red jerárquicas usando modelo de tres capas (core, distribution, access) aplicado a infraestructura MDF/IDF.",
        category: "conceptos",
        tags: ["topología", "jerárquica", "tres capas", "core", "distribution", "access"],
        difficulty: "intermedio",
        readTime: "19 min"
      },
      {
        id: 33,
        title: "Troubleshooting de loops de switching",
        content: "Identificación y resolución de loops de switching en infraestructura MDF/IDF, uso de spanning tree protocol y herramientas de diagnóstico.",
        category: "troubleshooting",
        tags: ["loops", "switching", "spanning tree", "diagnóstico", "resolución"],
        difficulty: "avanzado",
        readTime: "25 min"
      },
      {
        id: 34,
        title: "Implementación de microsegmentación en IDF",
        content: "Estrategias de microsegmentación de red a nivel IDF, configuración de micro-VLANs, políticas de acceso y monitoreo de tráfico east-west.",
        category: "seguridad",
        tags: ["microsegmentación", "micro-vlans", "políticas", "east-west", "tráfico"],
        difficulty: "avanzado",
        readTime: "31 min"
      },
      {
        id: 35,
        title: "Mantenimiento predictivo con IA en NetHive",
        content: "Utilización de algoritmos de IA en NetHive para mantenimiento predictivo de equipos MDF/IDF, análisis de patrones y predicción de fallos.",
        category: "monitoreo",
        tags: ["ia", "predictivo", "algoritmos", "patrones", "predicción", "fallos"],
        difficulty: "avanzado",
        readTime: "28 min"
      }
    ],
    categories: [
      { id: "conceptos", name: "Conceptos Básicos", icon: "📚" },
      { id: "instalacion", name: "Instalación", icon: "🔧" },
      { id: "mantenimiento", name: "Mantenimiento", icon: "⚙️" },
      { id: "documentacion", name: "Documentación", icon: "📋" },
      { id: "troubleshooting", name: "Resolución de Problemas", icon: "🔍" },
      { id: "gestion", name: "Gestión", icon: "📊" },
      { id: "seguridad", name: "Seguridad", icon: "🔒" },
      { id: "migracion", name: "Migración", icon: "🔄" },
      { id: "monitoreo", name: "Monitoreo", icon: "📡" },
      { id: "optimizacion", name: "Optimización", icon: "⚡" }
    ]
  },
  en: {
    articles: [
      {
        id: 1,
        title: "What is an MDF (Main Distribution Frame)?",
        content: "The MDF is the central telecommunications distribution point in a building. It connects external lines with the building's internal wiring, acting as the main hub for all network connections.",
        category: "concepts",
        tags: ["mdf", "distribution", "telecommunications", "basic concepts", "main hub"],
        difficulty: "beginner",
        readTime: "5 min"
      },
      {
        id: 2,
        title: "Initial IDF (Intermediate Distribution Frame) Setup",
        content: "Step-by-step guide to configure an IDF, including fiber optic connections, switches, patch panels, and VLAN configuration for efficient network distribution.",
        category: "installation",
        tags: ["idf", "configuration", "installation", "fiber optic", "switches", "vlans"],
        difficulty: "intermediate",
        readTime: "15 min"
      },
      {
        id: 3,
        title: "MDF Equipment Preventive Maintenance",
        content: "Maintenance procedures for MDF equipment, including cleaning, connection inspection, continuity testing, and worn component replacement.",
        category: "maintenance",
        tags: ["maintenance", "mdf", "preventive", "cleaning", "testing", "continuity"],
        difficulty: "intermediate",
        readTime: "12 min"
      },
      {
        id: 4,
        title: "Network Connection Documentation",
        content: "Best practices for documenting MDF-IDF connections, cable labeling, record keeping, and using NetHive for tracking purposes.",
        category: "documentation",
        tags: ["documentation", "labeling", "records", "connections", "nethive", "tracking"],
        difficulty: "beginner",
        readTime: "8 min"
      },
      {
        id: 5,
        title: "MDF-IDF Connectivity Troubleshooting",
        content: "Diagnosis and resolution of common connectivity issues between MDF and IDF, using testing tools, traffic analysis, and advanced troubleshooting.",
        category: "troubleshooting",
        tags: ["troubleshooting", "connectivity", "diagnosis", "tools", "analysis", "traffic"],
        difficulty: "advanced",
        readTime: "20 min"
      },
      {
        id: 6,
        title: "Fiber Optic Panel Installation",
        content: "Detailed procedure for installing fiber optic panels in MDF and IDF racks, including splicing, power testing, and link certification.",
        category: "installation",
        tags: ["fiber optic", "panels", "installation", "racks", "splicing", "certification"],
        difficulty: "intermediate",
        readTime: "18 min"
      },
      {
        id: 7,
        title: "Network Equipment Inventory Management",
        content: "System for controlling and managing network equipment inventory in MDF and IDF using NetHive, including real-time tracking and maintenance alerts.",
        category: "management",
        tags: ["inventory", "management", "equipment", "nethive", "tracking", "alerts"],
        difficulty: "beginner",
        readTime: "10 min"
      },
      {
        id: 8,
        title: "Physical Security in MDF and IDF Rooms",
        content: "Physical security measures and access control to protect critical telecommunications equipment, environmental monitoring systems, and emergency protocols.",
        category: "security",
        tags: ["security", "access", "protection", "technical rooms", "monitoring", "emergency"],
        difficulty: "intermediate",
        readTime: "14 min"
      },
      {
        id: 9,
        title: "Legacy MDF to Modern Infrastructure Migration",
        content: "Strategies and procedures for modernizing legacy MDF infrastructure with new technologies, minimizing downtime and optimizing performance.",
        category: "migration",
        tags: ["migration", "modernization", "legacy", "upgrade", "downtime", "performance"],
        difficulty: "advanced",
        readTime: "25 min"
      },
      {
        id: 10,
        title: "Real-time Monitoring with NetHive",
        content: "Configuration and use of NetHive's real-time monitoring system for MDF/IDF infrastructure, dashboards, alerts, and predictive analytics.",
        category: "monitoring",
        tags: ["monitoring", "real-time", "nethive", "configuration", "dashboards", "predictive"],
        difficulty: "intermediate",
        readTime: "16 min"
      },
      {
        id: 11,
        title: "Structured Cabling in Data Centers",
        content: "Design and implementation of structured cabling for data centers, considering port density, thermal management, and future scalability.",
        category: "installation",
        tags: ["structured cabling", "data centers", "density", "thermal", "scalability"],
        difficulty: "advanced",
        readTime: "22 min"
      },
      {
        id: 12,
        title: "Network Performance Optimization",
        content: "Techniques to optimize network performance between MDF and IDF, including latency analysis, bandwidth management, and QoS implementation.",
        category: "optimization",
        tags: ["optimization", "performance", "latency", "bandwidth", "qos"],
        difficulty: "advanced",
        readTime: "19 min"
      },
      {
        id: 13,
        title: "Cisco Switch Configuration in IDF",
        content: "Complete guide for configuring Cisco switches in an IDF, including VLANs, trunk ports, spanning tree protocol, and basic security configurations.",
        category: "installation",
        tags: ["cisco", "switches", "idf", "vlans", "trunk", "spanning tree", "security"],
        difficulty: "intermediate",
        readTime: "24 min"
      },
      {
        id: 14,
        title: "Cat6 vs Cat6A Cable Management in MDF",
        content: "Detailed comparison between Cat6 and Cat6A cables for MDF installations, including capabilities, maximum distances, and cost-benefit considerations.",
        category: "concepts",
        tags: ["cat6", "cat6a", "cables", "mdf", "capabilities", "distances", "comparison"],
        difficulty: "beginner",
        readTime: "11 min"
      },
      {
        id: 15,
        title: "Implementing Redundancy in MDF-IDF Links",
        content: "Strategies for implementing redundancy in critical links between MDF and IDF, including bonding configuration, automatic failover, and load balancing.",
        category: "installation",
        tags: ["redundancy", "links", "bonding", "failover", "load balancing"],
        difficulty: "advanced",
        readTime: "28 min"
      }
    ],
    categories: [
      { id: "concepts", name: "Basic Concepts", icon: "📚" },
      { id: "installation", name: "Installation", icon: "🔧" },
      { id: "maintenance", name: "Maintenance", icon: "⚙️" },
      { id: "documentation", name: "Documentation", icon: "📋" },
      { id: "troubleshooting", name: "Troubleshooting", icon: "🔍" },
      { id: "management", name: "Management", icon: "📊" },
      { id: "security", name: "Security", icon: "🔒" },
      { id: "migration", name: "Migration", icon: "🔄" },
      { id: "monitoring", name: "Monitoring", icon: "📡" },
      { id: "optimization", name: "Optimization", icon: "⚡" }
    ]
  }
};

// Función de búsqueda
export const searchArticles = (query, language = 'es') => {
  const data = searchData[language];
  if (!query.trim()) return data.articles;

  const searchTerm = query.toLowerCase();
  
  return data.articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.content.toLowerCase().includes(searchTerm) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    article.category.toLowerCase().includes(searchTerm)
  );
};

// Función para obtener artículos por categoría
export const getArticlesByCategory = (categoryId, language = 'es') => {
  const data = searchData[language];
  return data.articles.filter(article => article.category === categoryId);
};

// Función para obtener artículos relacionados
export const getRelatedArticles = (articleId, language = 'es', limit = 3) => {
  const data = searchData[language];
  const currentArticle = data.articles.find(article => article.id === articleId);
  if (!currentArticle) return [];

  return data.articles
    .filter(article => 
      article.id !== articleId && 
      (article.category === currentArticle.category ||
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
};

// Búsquedas populares predefinidas
export const getPopularSearches = (language = 'es') => {
  return language === 'en' ? [
    "MDF setup",
    "IDF installation", 
    "Cable documentation",
    "Network troubleshooting",
    "Fiber optic maintenance",
    "NetHive monitoring"
  ] : [
    "Configuración MDF",
    "Instalación IDF", 
    "Documentación cables",
    "Resolución problemas red",
    "Mantenimiento fibra óptica",
    "Monitoreo NetHive"
  ];
};