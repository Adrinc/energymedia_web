import { useState, useRef, useEffect, useCallback } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish, isDarkMode } from '../../../data/variables';
import styles from '../css/indexSeccion3.module.css';
import Button from '../../global/Button';
import ServiceModal from '../../global/ServiceModal/ServiceModal';
import gsap from 'gsap';

const IndexSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const darkMode = useStore(isDarkMode);
  const [selectedService, setSelectedService] = useState(null);
  
  // Refs para GSAP
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const content = ingles ? {
    header: {
      title: "Our Services",
      subtitle: "Integral solutions for your digital growth. From strategy to execution.",
      seeMore: "See more"
    },
    items: [
      {
        title: "SEO & SEM Professional",
        tagline: "Dominate Google. More traffic, more sales.",
        category: "Digital Marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
        description: "Our SEO & SEM service is designed to position your brand at the top of search results. We combine advanced organic positioning techniques with data-optimized paid campaigns on Google Ads. Each strategy is backed by real-time analytics to make decisions based on data, not hunches. We guarantee a significant increase in qualified traffic and a measurable improvement in conversions.",
        highlights: [
          { title: "Sustainable Organic Positioning", description: "Long-term SEO strategies that keep you at the top consistently" },
          { title: "Data-Optimized Google Ads", description: "Campaigns with continuous A/B testing and performance optimization" },
          { title: "Advanced Analytics", description: "Custom dashboards with actionable metrics in real-time" },
          { title: "Competitive Research", description: "Complete analysis of your competitors and market opportunities" },
          { title: "Local SEO", description: "Optimization for Google My Business and local searches" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
        ],
        technologies: [
          { icon: "🔍", name: "Google Analytics" },
          { icon: "📊", name: "SEMrush" },
          { icon: "🎯", name: "Google Ads" },
          { icon: "📈", name: "Ahrefs" },
          { icon: "🔧", name: "Search Console" }
        ],
        previewLink: "/servicios/seo-sem"
      },
      {
        title: "Social Media & Paid Ads",
        tagline: "Turn scrollers into customers.",
        category: "Social Media",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80",
        description: "Transform your social media presence into a lead generation machine. We manage comprehensive campaigns on Meta, TikTok, LinkedIn and more, with creative content that captures attention and converts. Our team combines community management with paid advertising strategies to maximize your ROI on every platform.",
        highlights: [
          { title: "Multi-Platform Ads", description: "Optimized campaigns on Meta, TikTok, LinkedIn and Google" },
          { title: "Community Management", description: "Active engagement and professional reputation management" },
          { title: "Creative Content", description: "Production of visual content designed to convert" },
          { title: "Audience Segmentation", description: "Precise targeting to reach your ideal customer" },
          { title: "Performance Reports", description: "Detailed analytics with clear and actionable KPIs" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=80",
          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80",
          "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=600&q=80",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80"
        ],
        technologies: [
          { icon: "📘", name: "Meta Business" },
          { icon: "🎵", name: "TikTok Ads" },
          { icon: "💼", name: "LinkedIn Ads" },
          { icon: "📱", name: "Hootsuite" },
          { icon: "📊", name: "Sprout Social" }
        ],
        previewLink: "/servicios/social-media"
      },
      {
        title: "Branding & Graphic Design",
        tagline: "Memorable brand that stands out.",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80",
        description: "We create visual identities that leave a mark. From strategic logo design to complete brand manuals, each element is crafted to communicate the essence of your business. Our design team combines aesthetics with strategy to create brands that not only look great, but also work to achieve your business objectives.",
        highlights: [
          { title: "Strategic Logo Design", description: "Unique logos that represent your brand essence" },
          { title: "Corporate Identity", description: "Complete visual system: colors, typography, patterns" },
          { title: "Brand Manual", description: "Detailed guidelines to maintain consistency" },
          { title: "Advertising Design", description: "Pieces for digital and print across all channels" },
          { title: "Packaging Design", description: "Packaging that sells and communicates" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
          "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&q=80",
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80"
        ],
        technologies: [
          { icon: "🎨", name: "Adobe Creative" },
          { icon: "✏️", name: "Figma" },
          { icon: "🖼️", name: "Illustrator" },
          { icon: "📸", name: "Photoshop" },
          { icon: "🎬", name: "After Effects" }
        ],
        previewLink: "/servicios/branding"
      },
      {
        title: "Web Development & Mobile Apps",
        tagline: "Web portals, CRM, custom mobile apps.",
        category: "Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
        description: "We develop digital solutions that drive your business. From responsive websites to native mobile applications and custom enterprise portals. Our development team uses cutting-edge technologies to create fast, secure and scalable experiences. Each project includes post-launch support and ongoing optimization.",
        highlights: [
          { title: "Responsive Websites", description: "Sites optimized for all devices with exceptional performance" },
          { title: "E-commerce Platforms", description: "Online stores with payment integration and inventory management" },
          { title: "iOS/Android Apps", description: "Native and cross-platform applications" },
          { title: "Custom CRM", description: "Enterprise systems tailored to your processes" },
          { title: "API Integrations", description: "Seamless connection with third-party tools" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
        ],
        technologies: [
          { icon: "⚛️", name: "React" },
          { icon: "🟢", name: "Node.js" },
          { icon: "📱", name: "React Native" },
          { icon: "🔷", name: "TypeScript" },
          { icon: "☁️", name: "AWS" }
        ],
        previewLink: "/servicios/desarrollo-web"
      },
      {
        title: "Email Marketing & Automation",
        tagline: "Nurturing that sells on autopilot.",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80",
        description: "Automate your communication and multiply your conversions. We design email sequences that nurture leads until conversion, with advanced segmentation and continuous A/B testing. Our clients see ROIs of 400-600% with well-executed email marketing campaigns. From welcome campaigns to cart recovery, we cover the entire customer lifecycle.",
        highlights: [
          { title: "Segmented Campaigns", description: "Precise targeting based on behavior and demographics" },
          { title: "Marketing Automation", description: "Intelligent flows that work 24/7" },
          { title: "A/B Testing", description: "Continuous optimization of subjects, content and CTAs" },
          { title: "Cart Recovery", description: "Automatic sequences to rescue abandoned sales" },
          { title: "Deliverability Optimization", description: "Configuration to maximize inbox delivery" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
          "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
        ],
        technologies: [
          { icon: "📧", name: "Mailchimp" },
          { icon: "🔶", name: "HubSpot" },
          { icon: "⚡", name: "Klaviyo" },
          { icon: "🎯", name: "ActiveCampaign" },
          { icon: "📊", name: "ConvertKit" }
        ],
        previewLink: "/servicios/email-marketing"
      },
      {
        title: "AI Marketing & Automation",
        tagline: "Artificial intelligence at your business service.",
        category: "AI & Innovation",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
        description: "Leverage the power of artificial intelligence to transform your digital marketing. We implement intelligent chatbots, process automation, predictive analytics and personalization at scale. Our AI solutions not only save time and resources, but also deliver experiences that your customers will love. Welcome to the future of marketing.",
        highlights: [
          { title: "Intelligent Chatbots", description: "Virtual assistants that resolve and convert 24/7" },
          { title: "Process Automation", description: "Intelligent workflows that eliminate manual tasks" },
          { title: "Predictive Analytics", description: "Algorithms that anticipate customer behavior" },
          { title: "Personalization at Scale", description: "Unique experiences for each user" },
          { title: "Generative AI", description: "Content creation with AI assistance" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80"
        ],
        technologies: [
          { icon: "🤖", name: "OpenAI" },
          { icon: "🧠", name: "TensorFlow" },
          { icon: "💬", name: "Dialogflow" },
          { icon: "⚙️", name: "Zapier" },
          { icon: "🔮", name: "Python AI" }
        ],
        previewLink: "/servicios/ia-automatizacion"
      }
    ]
  } : {
    header: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales para tu crecimiento digital. De la estrategia a la ejecución.",
      seeMore: "Ver más"
    },
    items: [
      {
        title: "SEO & SEM Profesional",
        tagline: "Domina Google. Más tráfico, más ventas.",
        category: "Marketing Digital",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
        description: "Nuestro servicio de SEO & SEM está diseñado para posicionar tu marca en la cima de los resultados de búsqueda. Combinamos técnicas avanzadas de posicionamiento orgánico con campañas de pago optimizadas con datos en Google Ads. Cada estrategia está respaldada por analítica en tiempo real para tomar decisiones basadas en datos, no corazonadas. Garantizamos un incremento significativo en el tráfico cualificado y una mejora medible en las conversiones.",
        highlights: [
          { title: "Posicionamiento Orgánico Sostenible", description: "Estrategias SEO a largo plazo que te mantienen arriba" },
          { title: "Google Ads Optimizados", description: "Campañas con testing A/B continuo y optimización de performance" },
          { title: "Analítica Avanzada", description: "Dashboards personalizados con métricas accionables en tiempo real" },
          { title: "Investigación de Competencia", description: "Análisis completo de competidores y oportunidades de mercado" },
          { title: "SEO Local", description: "Optimización para Google My Business y búsquedas locales" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
        ],
        technologies: [
          { icon: "🔍", name: "Google Analytics" },
          { icon: "📊", name: "SEMrush" },
          { icon: "🎯", name: "Google Ads" },
          { icon: "📈", name: "Ahrefs" },
          { icon: "🔧", name: "Search Console" }
        ],
        previewLink: "/servicios/seo-sem"
      },
      {
        title: "Redes Sociales & Paid Ads",
        tagline: "Convierte scrollers en clientes.",
        category: "Social Media",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80",
        description: "Transforma tu presencia en redes sociales en una máquina de generación de leads. Gestionamos campañas integrales en Meta, TikTok, LinkedIn y más, con contenido creativo que captura atención y convierte. Nuestro equipo combina gestión de comunidad con estrategias de publicidad pagada para maximizar tu ROI en cada plataforma.",
        highlights: [
          { title: "Ads Multi-Plataforma", description: "Campañas optimizadas en Meta, TikTok, LinkedIn y Google" },
          { title: "Gestión de Comunidad", description: "Engagement activo y manejo profesional de reputación" },
          { title: "Contenido Creativo", description: "Producción de contenido visual diseñado para convertir" },
          { title: "Segmentación de Audiencias", description: "Targeting preciso para alcanzar tu cliente ideal" },
          { title: "Reportes de Performance", description: "Analítica detallada con KPIs claros y accionables" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=80",
          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80",
          "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=600&q=80",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80"
        ],
        technologies: [
          { icon: "📘", name: "Meta Business" },
          { icon: "🎵", name: "TikTok Ads" },
          { icon: "💼", name: "LinkedIn Ads" },
          { icon: "📱", name: "Hootsuite" },
          { icon: "📊", name: "Sprout Social" }
        ],
        previewLink: "/servicios/social-media"
      },
      {
        title: "Branding & Diseño Gráfico",
        tagline: "Marca memorable que destaca.",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80",
        description: "Creamos identidades visuales que dejan huella. Desde el diseño estratégico de logos hasta manuales de marca completos, cada elemento está diseñado para comunicar la esencia de tu negocio. Nuestro equipo de diseño combina estética con estrategia para crear marcas que no solo se ven increíbles, sino que trabajan para lograr tus objetivos de negocio.",
        highlights: [
          { title: "Diseño de Logo Estratégico", description: "Logos únicos que representan la esencia de tu marca" },
          { title: "Identidad Corporativa", description: "Sistema visual completo: colores, tipografía, patrones" },
          { title: "Manual de Marca", description: "Guías detalladas para mantener la consistencia" },
          { title: "Diseño Publicitario", description: "Piezas para digital e impreso en todos los canales" },
          { title: "Diseño de Packaging", description: "Empaques que venden y comunican" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
          "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&q=80",
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80"
        ],
        technologies: [
          { icon: "🎨", name: "Adobe Creative" },
          { icon: "✏️", name: "Figma" },
          { icon: "🖼️", name: "Illustrator" },
          { icon: "📸", name: "Photoshop" },
          { icon: "🎬", name: "After Effects" }
        ],
        previewLink: "/servicios/branding"
      },
      {
        title: "Desarrollo Web & Apps Móviles",
        tagline: "Portales web, CRM, apps móviles a medida.",
        category: "Desarrollo",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
        description: "Desarrollamos soluciones digitales que impulsan tu negocio. Desde sitios web responsive hasta aplicaciones móviles nativas y portales empresariales a medida. Nuestro equipo de desarrollo utiliza tecnologías de vanguardia para crear experiencias rápidas, seguras y escalables. Cada proyecto incluye soporte post-lanzamiento y optimización continua.",
        highlights: [
          { title: "Sitios Web Responsive", description: "Sitios optimizados para todos los dispositivos con performance excepcional" },
          { title: "Plataformas E-commerce", description: "Tiendas online con integración de pagos y gestión de inventario" },
          { title: "Apps iOS/Android", description: "Aplicaciones nativas y cross-platform" },
          { title: "CRM Personalizado", description: "Sistemas empresariales adaptados a tus procesos" },
          { title: "Integraciones API", description: "Conexión fluida con herramientas de terceros" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
        ],
        technologies: [
          { icon: "⚛️", name: "React" },
          { icon: "🟢", name: "Node.js" },
          { icon: "📱", name: "React Native" },
          { icon: "🔷", name: "TypeScript" },
          { icon: "☁️", name: "AWS" }
        ],
        previewLink: "/servicios/desarrollo-web"
      },
      {
        title: "Email Marketing & Automatización",
        tagline: "Nurturing que vende en piloto automático.",
        category: "Automatización",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80",
        description: "Automatiza tu comunicación y multiplica tus conversiones. Diseñamos secuencias de email que nutren leads hasta la conversión, con segmentación avanzada y testing A/B continuo. Nuestros clientes ven ROIs de 400-600% con campañas de email marketing bien ejecutadas. Desde campañas de bienvenida hasta recuperación de carritos, cubrimos todo el ciclo del cliente.",
        highlights: [
          { title: "Campañas Segmentadas", description: "Targeting preciso basado en comportamiento y demografía" },
          { title: "Automatización de Marketing", description: "Flujos inteligentes que trabajan 24/7" },
          { title: "Testing A/B", description: "Optimización continua de subjects, contenido y CTAs" },
          { title: "Recuperación de Carritos", description: "Secuencias automáticas para rescatar ventas abandonadas" },
          { title: "Optimización de Deliverability", description: "Configuración para maximizar entrega a inbox" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
          "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
        ],
        technologies: [
          { icon: "📧", name: "Mailchimp" },
          { icon: "🔶", name: "HubSpot" },
          { icon: "⚡", name: "Klaviyo" },
          { icon: "🎯", name: "ActiveCampaign" },
          { icon: "📊", name: "ConvertKit" }
        ],
        previewLink: "/servicios/email-marketing"
      },
      {
        title: "Marketing con IA & Automatización",
        tagline: "Inteligencia artificial al servicio de tu negocio.",
        category: "IA & Innovación",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
        description: "Aprovecha el poder de la inteligencia artificial para transformar tu marketing digital. Implementamos chatbots inteligentes, automatización de procesos, análisis predictivo y personalización a escala. Nuestras soluciones de IA no solo ahorran tiempo y recursos, sino que entregan experiencias que tus clientes amarán. Bienvenido al futuro del marketing.",
        highlights: [
          { title: "Chatbots Inteligentes", description: "Asistentes virtuales que resuelven y convierten 24/7" },
          { title: "Automatización de Procesos", description: "Workflows inteligentes que eliminan tareas manuales" },
          { title: "Análisis Predictivo", description: "Algoritmos que anticipan comportamiento del cliente" },
          { title: "Personalización a Escala", description: "Experiencias únicas para cada usuario" },
          { title: "IA Generativa", description: "Creación de contenido con asistencia de IA" }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80"
        ],
        technologies: [
          { icon: "🤖", name: "OpenAI" },
          { icon: "🧠", name: "TensorFlow" },
          { icon: "💬", name: "Dialogflow" },
          { icon: "⚙️", name: "Zapier" },
          { icon: "🔮", name: "Python AI" }
        ],
        previewLink: "/servicios/ia-automatizacion"
      }
    ]
  };

  const t = content;

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  // Duplicar items para carrusel infinito sin saltos
  const duplicatedItems = [...t.items, ...t.items, ...t.items];

  // Inicializar animación GSAP
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calcular el ancho total de un set de items
    const cards = track.querySelectorAll(`.${styles.serviceCard}`);
    const cardWidth = cards[0]?.offsetWidth || 450;
    const gap = 24;
    const singleSetWidth = (cardWidth + gap) * t.items.length;

    // Posición inicial
    gsap.set(track, { x: 0 });
    currentXRef.current = 0;

    // Animación infinita
    const startAnimation = () => {
      if (animationRef.current) animationRef.current.kill();
      
      animationRef.current = gsap.to(track, {
        x: `-=${singleSetWidth}`,
        duration: 30,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => {
            const mod = parseFloat(x) % singleSetWidth;
            currentXRef.current = mod;
            return mod;
          })
        }
      });
    };

    startAnimation();

    // Drag handlers
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      dragDistanceRef.current = 0;
      
      // Pausar animación y capturar posición actual
      if (animationRef.current) {
        animationRef.current.pause();
      }
      currentXRef.current = gsap.getProperty(track, 'x');
      
      track.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      
      const deltaX = e.clientX - startXRef.current;
      dragDistanceRef.current = Math.abs(deltaX);
      
      // Mover el track
      const newX = currentXRef.current + deltaX;
      gsap.set(track, { x: newX });
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      track.style.cursor = 'grab';
      
      // Actualizar posición actual y reiniciar animación
      currentXRef.current = gsap.getProperty(track, 'x');
      
      // Normalizar posición para loop infinito
      let normalizedX = currentXRef.current % singleSetWidth;
      if (normalizedX > 0) normalizedX -= singleSetWidth;
      
      gsap.set(track, { x: normalizedX });
      currentXRef.current = normalizedX;
      
      // Reiniciar animación desde la posición actual
      if (animationRef.current) animationRef.current.kill();
      animationRef.current = gsap.to(track, {
        x: `-=${singleSetWidth}`,
        duration: 30,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => {
            const mod = parseFloat(x) % singleSetWidth;
            currentXRef.current = mod;
            return mod;
          })
        }
      });
    };

    const handleMouseEnter = () => {
      if (animationRef.current && !isDraggingRef.current) {
        animationRef.current.pause();
      }
    };

    const handleMouseLeave = () => {
      isDraggingRef.current = false;
      track.style.cursor = 'grab';
      if (animationRef.current) {
        animationRef.current.resume();
      }
    };

    // Event listeners
    track.addEventListener('mousedown', handleMouseDown);
    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (animationRef.current) animationRef.current.kill();
      track.removeEventListener('mousedown', handleMouseDown);
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [t.items.length]);

  const handleCardClick = useCallback((service) => {
    // Solo abrir modal si no fue un drag significativo
    if (dragDistanceRef.current < 10) {
      openModal(service);
    }
    dragDistanceRef.current = 0;
  }, []);

  return (
    <section className={`${styles.section} ${!darkMode ? styles.sectionLight : ''}`}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>{t.header.title}</h2>
          <p className={styles.subtitle}>{t.header.subtitle}</p>
        </div>
        <Button
          textEs="Ver más"
          textEn="See more"
          href="/servicios"
          variant="secondary"
          size="md"
          showArrow={true}
        />
      </div>

      <div className={styles.container} ref={containerRef}>
        <div 
          ref={trackRef}
          className={styles.carouselTrack}
          style={{ cursor: 'grab' }}
        >
          {duplicatedItems.map((service, index) => (
            <div
              key={`service-${index}`}
              className={styles.serviceCard}
              onClick={() => handleCardClick(service)}
              onDragStart={(e) => e.preventDefault()}
            >
              <div 
                className={styles.cardImage}
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardTagline}>{service.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={closeModal} 
        service={selectedService} 
      />
    </section>
  );
};

export default IndexSeccion3;
