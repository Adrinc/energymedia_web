// translationsMetodologia.js
// Traducciones para la página de Metodología (7 secciones)

export const translationsMetodologia = {
  es: {
    // Sección 1: Hero
    hero: {
      badge: "Nuestro Proceso",
      h1: "Metodología probada",
      subtitle: "De la TV a digital: un proceso refinado en 15+ años que combina creatividad cinematográfica con analítica en tiempo real.",
      ctaPrimary: "Ver casos de éxito",
      ctaSecondary: "Agenda tu consultoría"
    },

    // Sección 2: Process Timeline (6 pasos)
    process: {
      title: "Cómo trabajamos",
      subtitle: "6 pasos para campañas que conectan y convierten",
      steps: [
        {
          number: "01",
          title: "Descubrimiento Cultural & de Negocio",
          duration: "1-2 semanas",
          description: "Audit profundo de tu marca, audiencia y competencia con lente multicultural.",
          deliverables: [
            "Análisis de audiencia hispana/multicultural",
            "Audit de presencia digital actual",
            "Benchmark competitivo cultural",
            "Identificación de oportunidades de growth"
          ],
          icon: "🔍"
        },
        {
          number: "02",
          title: "Plan de Crecimiento (90 días + KPIs)",
          duration: "1 semana",
          description: "Roadmap estratégico con objetivos medibles y timelines claros.",
          deliverables: [
            "Plan de contenido trimestral",
            "KPIs específicos por canal",
            "Budget allocation recomendado",
            "Calendar de producción y lanzamientos"
          ],
          icon: "📊"
        },
        {
          number: "03",
          title: "Producción & Setup",
          duration: "2-4 semanas",
          description: "Creación de assets con calidad Emmy + setup técnico de tracking y plataformas.",
          deliverables: [
            "Video spots (TV quality para digital)",
            "Social ads adaptados por formato",
            "Setup de tracking (GA4, pixels, UTMs)",
            "Configuración de martech stack"
          ],
          icon: "🎬"
        },
        {
          number: "04",
          title: "Lanzamiento Estratégico",
          duration: "1-2 semanas",
          description: "Deploy multicanal con segmentación cultural precisa y monitoreo en vivo.",
          deliverables: [
            "Campañas activas en Meta, Google, TikTok",
            "Segmentación multicultural aplicada",
            "Dashboard de monitoreo en tiempo real",
            "Listening inicial con OYE (si aplica)"
          ],
          icon: "🚀"
        },
        {
          number: "05",
          title: "Optimización Continua",
          duration: "Ongoing",
          description: "Test A/B, iteración creativa y ajustes basados en data y listening cultural.",
          deliverables: [
            "A/B testing de creatividades",
            "Ajustes de targeting y budget",
            "Nuevas variantes de copy/creative",
            "Insights semanales de OYE"
          ],
          icon: "⚙️"
        },
        {
          number: "06",
          title: "Escalamiento & Expansión",
          duration: "Mes 3+",
          description: "Nuevas audiencias, formatos y canales basados en winning formulas.",
          deliverables: [
            "Expansión a nuevos mercados/idiomas",
            "Nuevos formatos (Reels, YouTube, Streaming)",
            "Influencer partnerships (si aplica)",
            "Reportes ejecutivos mensuales"
          ],
          icon: "📈"
        }
      ]
    },

    // Sección 3: OYE Methodology (anchor /metodologia#oye)
    oye: {
      badge: "Analítica Multicultural",
      title: "OYE: Listening cultural en tiempo real",
      subtitle: "No es una plataforma. Es nuestra metodología de análisis cultural usando las mejores herramientas del mercado.",
      intro: "OYE (Open Your Eyes) es nuestro framework propietario de social listening y análisis multicultural que combina tecnología enterprise con expertise humano en matices culturales.",
      
      howItWorks: {
        title: "¿Cómo funciona OYE?",
        steps: [
          {
            number: "1",
            title: "Listening Multilingüe",
            description: "Monitoreamos conversaciones en español, inglés y Spanglish a través de plataformas como Brandwatch y Sprinklr."
          },
          {
            number: "2",
            title: "Análisis Cultural",
            description: "Nuestro equipo bicultural identifica insights, tendencias y oportunidades que la IA sola no puede detectar."
          },
          {
            number: "3",
            title: "Insights Accionables",
            description: "Traducimos data en recomendaciones creativas y estratégicas específicas para tu audiencia multicultural."
          },
          {
            number: "4",
            title: "Optimización Iterativa",
            description: "Ajustamos campañas en tiempo real basados en respuesta de audiencia y trending topics culturales."
          }
        ]
      },

      benefits: [
        {
          icon: "🌎",
          title: "Language-Neutral",
          description: "Detecta español, inglés, Spanglish y code-switching sin fricción"
        },
        {
          icon: "⚡",
          title: "Tiempo Real",
          description: "Insights frescos para decisiones ágiles (24-48h vs. semanas)"
        },
        {
          icon: "🎯",
          title: "Culturalmente Relevante",
          description: "Más allá de keywords: detectamos contexto, humor y matices"
        },
        {
          icon: "📊",
          title: "ROI Medible",
          description: "Conectamos insights con performance (CTR, conversiones, sentiment)"
        }
      ],

      tools: {
        title: "Herramientas que usamos en OYE",
        description: "Transparencia total: estas son las plataformas enterprise que potencian nuestra metodología.",
        list: [
          {
            name: "Brandwatch",
            category: "Social Listening",
            use: "Monitoreo de conversaciones y sentiment analysis multilingüe"
          },
          {
            name: "Sprinklr",
            category: "Unified CXM",
            use: "Gestión de redes sociales y customer engagement"
          },
          {
            name: "Talkwalker",
            category: "Consumer Intelligence",
            use: "Visual listening y trend forecasting"
          },
          {
            name: "Google Analytics 4",
            category: "Web Analytics",
            use: "Análisis de comportamiento en sitio y conversiones"
          },
          {
            name: "Hotjar",
            category: "User Behavior",
            use: "Heatmaps y session recordings"
          }
        ]
      },

      ctaText: "Solicitar demo de OYE →"
    },

    // Sección 4: Tools We Use (expandido desde OYE.tools)
    tools: {
      title: "Nuestro Stack de MarTech",
      subtitle: "Combinamos lo mejor del mercado con expertise multicultural interno",
      categories: [
        {
          name: "Social Listening & Analytics",
          tools: [
            { name: "Brandwatch", logo: "🔍", description: "Social listening enterprise" },
            { name: "Sprinklr", logo: "💬", description: "Unified CXM platform" },
            { name: "Talkwalker", logo: "👁️", description: "Visual & consumer intelligence" }
          ]
        },
        {
          name: "Advertising & Performance",
          tools: [
            { name: "Google Ads", logo: "📢", description: "Search, Display, YouTube" },
            { name: "Meta Business Suite", logo: "📱", description: "Facebook, Instagram, WhatsApp" },
            { name: "TikTok Ads Manager", logo: "🎵", description: "Short-form video ads" },
            { name: "LinkedIn Campaign Manager", logo: "💼", description: "B2B advertising" }
          ]
        },
        {
          name: "Analytics & Tracking",
          tools: [
            { name: "Google Analytics 4", logo: "📊", description: "Web & app analytics" },
            { name: "Hotjar", logo: "🔥", description: "Heatmaps & behavior analytics" },
            { name: "Mixpanel", logo: "📈", description: "Product analytics" }
          ]
        },
        {
          name: "Production & Creative",
          tools: [
            { name: "Adobe Creative Suite", logo: "🎨", description: "Premiere, After Effects, Photoshop" },
            { name: "DaVinci Resolve", logo: "🎬", description: "Color grading & editing" },
            { name: "Figma", logo: "✏️", description: "UI/UX design & prototyping" }
          ]
        }
      ]
    },

    // Sección 5: Mini Case Studies (2-3 con OYE aplicado)
    cases: {
      title: "OYE en Acción",
      subtitle: "Casos reales donde listening cultural hizo la diferencia",
      items: [
        {
          industry: "E-commerce Moda",
          challenge: "ROAS estancado en campaña de Black Friday dirigida a hispanas 25-40",
          oyeInsight: "Detectamos trending topic inesperado: 'outfits para posada' (fiestas navideñas latinas) con +340% menciones vs. año anterior",
          action: "Pivotamos creatividad de 'Black Friday generic' a 'Looks para tu posada' en 48 horas",
          result: {
            metric: "+67%",
            label: "ROAS",
            detail: "vs. campaña original + sold out de 2 SKUs en 3 días"
          }
        },
        {
          industry: "Fintech (Remesas)",
          challenge: "CTR bajo en ads de app de envíos de dinero a Latinoamérica",
          oyeInsight: "Listening reveló que audiencia usaba 'mandar feria' y 'enviar lana' más que 'remesas' o 'transferencias'",
          action: "Reescribimos copy con lenguaje auténtico + testimoniales con slang regional",
          result: {
            metric: "+89%",
            label: "CTR",
            detail: "+3.2x downloads en primera semana post-cambio"
          }
        },
        {
          industry: "Healthcare (Clínica Comunitaria)",
          challenge: "Baja asistencia a eventos de prevención en comunidad mexicana",
          oyeInsight: "Identificamos desconfianza cultural hacia 'screenings' pero alta confianza en 'chequeos familiares'",
          action: "Reframing de mensaje + video testimonial de familia local (no actores)",
          result: {
            metric: "+124%",
            label: "Asistencia",
            detail: "Evento lleno + lista de espera de 40 personas"
          }
        }
      ]
    },

    // Sección 6: FAQs
    faqs: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre nuestra metodología",
      items: [
        {
          question: "¿Cuánto tiempo toma ver resultados?",
          answer: "Depende del objetivo. Para awareness y engagement, 2-4 semanas. Para conversiones y ROAS sostenido, 60-90 días. Nuestros planes de 90 días están diseñados para optimización continua y resultados escalables."
        },
        {
          question: "¿Trabajan solo con marcas grandes?",
          answer: "No. Tenemos 3 niveles (Start, Grow, Scale) para adaptarnos a diferentes presupuestos. Start es ideal para marcas que inician en marketing multicultural con inversión desde $5K/mes. Lo importante es que estés comprometido con el crecimiento sostenible."
        },
        {
          question: "¿OYE es una plataforma que compramos aparte?",
          answer: "No. OYE es nuestra metodología propietaria que combina herramientas enterprise (Brandwatch, Sprinklr, Talkwalker) con análisis humano experto. No vendemos software; vendemos insights accionables y estrategia cultural."
        },
        {
          question: "¿Producen todo el contenido internamente?",
          answer: "Sí para video (tenemos equipo Emmy-winning in-house). Para volumen alto de contenido social (50+ piezas/mes) colaboramos con red de creators multiculturales verificados. Siempre mantenemos control creativo y brand safety."
        },
        {
          question: "¿Qué diferencia a Energy Media de otras agencias 'hispanas'?",
          answer: "3 cosas: (1) Expertise real en TV/video de alta calidad aplicado a digital, (2) Metodología OYE de listening cultural (no solo traducción), (3) Enfoque en performance medible, no solo 'awareness' o 'reach'."
        },
        {
          question: "¿Trabajan con influencers?",
          answer: "Sí, cuando tiene sentido estratégico. Tenemos red de 200+ influencers multiculturales (micro y macro) verificados. Pero no es obligatorio; muchos clientes obtienen mejor ROI con UGC-style ads protagonizados por clientes reales."
        },
        {
          question: "¿Necesito tener presencia digital establecida?",
          answer: "No necesariamente. Si estás empezando, nuestro plan Start incluye setup completo (website, social profiles, tracking, first video assets). Si ya tienes presencia, hacemos audit y optimizamos lo existente."
        },
        {
          question: "¿Reportan en español o inglés?",
          answer: "Como prefieras. Somos bilingües nativos. La mayoría de clientes prefieren dashboards en inglés con executive summary en ambos idiomas para diferentes stakeholders."
        }
      ]
    },

    // Sección 7: CTA to Portfolio
    ctaFinal: {
      badge: "¿Listo para empezar?",
      title: "Hablemos de tu próxima campaña multicultural",
      subtitle: "Agenda 30 minutos para audit gratuito de tu presencia digital con lente cultural.",
      benefits: [
        "Audit de oportunidades multiculturales (gratis)",
        "Plan de 90 días personalizado",
        "Estimado de ROI basado en benchmarks de tu industria"
      ],
      ctaPrimary: "Agenda tu consultoría →",
      ctaSecondary: "Ver portfolio de videos"
    }
  },

  en: {
    // Sección 1: Hero
    hero: {
      badge: "Our Process",
      h1: "Proven methodology",
      subtitle: "From TV to digital: a process refined over 15+ years combining cinematic creativity with real-time analytics.",
      ctaPrimary: "View success stories",
      ctaSecondary: "Schedule your consultation"
    },

    // Sección 2: Process Timeline
    process: {
      title: "How we work",
      subtitle: "6 steps to campaigns that connect and convert",
      steps: [
        {
          number: "01",
          title: "Cultural & Business Discovery",
          duration: "1-2 weeks",
          description: "Deep audit of your brand, audience, and competition through a multicultural lens.",
          deliverables: [
            "Hispanic/multicultural audience analysis",
            "Current digital presence audit",
            "Cultural competitive benchmark",
            "Growth opportunity identification"
          ],
          icon: "🔍"
        },
        {
          number: "02",
          title: "Growth Plan (90 days + KPIs)",
          duration: "1 week",
          description: "Strategic roadmap with measurable objectives and clear timelines.",
          deliverables: [
            "Quarterly content plan",
            "Channel-specific KPIs",
            "Recommended budget allocation",
            "Production and launch calendar"
          ],
          icon: "📊"
        },
        {
          number: "03",
          title: "Production & Setup",
          duration: "2-4 weeks",
          description: "Emmy-quality asset creation + technical tracking and platform setup.",
          deliverables: [
            "Video spots (TV quality for digital)",
            "Social ads adapted by format",
            "Tracking setup (GA4, pixels, UTMs)",
            "Martech stack configuration"
          ],
          icon: "🎬"
        },
        {
          number: "04",
          title: "Strategic Launch",
          duration: "1-2 weeks",
          description: "Multi-channel deployment with precise cultural segmentation and live monitoring.",
          deliverables: [
            "Active campaigns on Meta, Google, TikTok",
            "Applied multicultural segmentation",
            "Real-time monitoring dashboard",
            "Initial listening with OYE (if applicable)"
          ],
          icon: "🚀"
        },
        {
          number: "05",
          title: "Continuous Optimization",
          duration: "Ongoing",
          description: "A/B testing, creative iteration, and data-driven adjustments with cultural listening.",
          deliverables: [
            "Creative A/B testing",
            "Targeting and budget adjustments",
            "New copy/creative variants",
            "Weekly OYE insights"
          ],
          icon: "⚙️"
        },
        {
          number: "06",
          title: "Scaling & Expansion",
          duration: "Month 3+",
          description: "New audiences, formats, and channels based on winning formulas.",
          deliverables: [
            "Expansion to new markets/languages",
            "New formats (Reels, YouTube, Streaming)",
            "Influencer partnerships (if applicable)",
            "Monthly executive reports"
          ],
          icon: "📈"
        }
      ]
    },

    // Sección 3: OYE Methodology
    oye: {
      badge: "Multicultural Analytics",
      title: "OYE: Cultural listening in real-time",
      subtitle: "It's not a platform. It's our cultural analysis methodology using the best market tools.",
      intro: "OYE (Open Your Eyes) is our proprietary social listening and multicultural analysis framework that combines enterprise technology with human expertise in cultural nuances.",
      
      howItWorks: {
        title: "How does OYE work?",
        steps: [
          {
            number: "1",
            title: "Multilingual Listening",
            description: "We monitor conversations in Spanish, English, and Spanglish through platforms like Brandwatch and Sprinklr."
          },
          {
            number: "2",
            title: "Cultural Analysis",
            description: "Our bicultural team identifies insights, trends, and opportunities that AI alone cannot detect."
          },
          {
            number: "3",
            title: "Actionable Insights",
            description: "We translate data into creative and strategic recommendations specific to your multicultural audience."
          },
          {
            number: "4",
            title: "Iterative Optimization",
            description: "We adjust campaigns in real-time based on audience response and cultural trending topics."
          }
        ]
      },

      benefits: [
        {
          icon: "🌎",
          title: "Language-Neutral",
          description: "Detects Spanish, English, Spanglish, and code-switching seamlessly"
        },
        {
          icon: "⚡",
          title: "Real-Time",
          description: "Fresh insights for agile decisions (24-48h vs. weeks)"
        },
        {
          icon: "🎯",
          title: "Culturally Relevant",
          description: "Beyond keywords: we detect context, humor, and nuances"
        },
        {
          icon: "📊",
          title: "Measurable ROI",
          description: "Connect insights with performance (CTR, conversions, sentiment)"
        }
      ],

      tools: {
        title: "Tools we use in OYE",
        description: "Full transparency: these are the enterprise platforms powering our methodology.",
        list: [
          {
            name: "Brandwatch",
            category: "Social Listening",
            use: "Multilingual conversation monitoring and sentiment analysis"
          },
          {
            name: "Sprinklr",
            category: "Unified CXM",
            use: "Social media management and customer engagement"
          },
          {
            name: "Talkwalker",
            category: "Consumer Intelligence",
            use: "Visual listening and trend forecasting"
          },
          {
            name: "Google Analytics 4",
            category: "Web Analytics",
            use: "Site behavior analysis and conversions"
          },
          {
            name: "Hotjar",
            category: "User Behavior",
            use: "Heatmaps and session recordings"
          }
        ]
      },

      ctaText: "Request OYE demo →"
    },

    // Sección 4: Tools We Use
    tools: {
      title: "Our MarTech Stack",
      subtitle: "We combine market-leading tools with internal multicultural expertise",
      categories: [
        {
          name: "Social Listening & Analytics",
          tools: [
            { name: "Brandwatch", logo: "🔍", description: "Enterprise social listening" },
            { name: "Sprinklr", logo: "💬", description: "Unified CXM platform" },
            { name: "Talkwalker", logo: "👁️", description: "Visual & consumer intelligence" }
          ]
        },
        {
          name: "Advertising & Performance",
          tools: [
            { name: "Google Ads", logo: "📢", description: "Search, Display, YouTube" },
            { name: "Meta Business Suite", logo: "📱", description: "Facebook, Instagram, WhatsApp" },
            { name: "TikTok Ads Manager", logo: "🎵", description: "Short-form video ads" },
            { name: "LinkedIn Campaign Manager", logo: "💼", description: "B2B advertising" }
          ]
        },
        {
          name: "Analytics & Tracking",
          tools: [
            { name: "Google Analytics 4", logo: "📊", description: "Web & app analytics" },
            { name: "Hotjar", logo: "🔥", description: "Heatmaps & behavior analytics" },
            { name: "Mixpanel", logo: "📈", description: "Product analytics" }
          ]
        },
        {
          name: "Production & Creative",
          tools: [
            { name: "Adobe Creative Suite", logo: "🎨", description: "Premiere, After Effects, Photoshop" },
            { name: "DaVinci Resolve", logo: "🎬", description: "Color grading & editing" },
            { name: "Figma", logo: "✏️", description: "UI/UX design & prototyping" }
          ]
        }
      ]
    },

    // Sección 5: Mini Case Studies
    cases: {
      title: "OYE in Action",
      subtitle: "Real cases where cultural listening made the difference",
      items: [
        {
          industry: "Fashion E-commerce",
          challenge: "Stalled ROAS in Black Friday campaign targeting Hispanic women 25-40",
          oyeInsight: "We detected unexpected trending topic: 'outfits para posada' (Latin holiday parties) with +340% mentions vs. previous year",
          action: "Pivoted creative from 'generic Black Friday' to 'Looks for your posada' in 48 hours",
          result: {
            metric: "+67%",
            label: "ROAS",
            detail: "vs. original campaign + sold out 2 SKUs in 3 days"
          }
        },
        {
          industry: "Fintech (Remittances)",
          challenge: "Low CTR on money transfer app ads to Latin America",
          oyeInsight: "Listening revealed audience used 'mandar feria' and 'enviar lana' more than 'remesas' or 'transferencias'",
          action: "Rewrote copy with authentic language + testimonials with regional slang",
          result: {
            metric: "+89%",
            label: "CTR",
            detail: "+3.2x downloads in first week post-change"
          }
        },
        {
          industry: "Healthcare (Community Clinic)",
          challenge: "Low attendance at prevention events in Mexican community",
          oyeInsight: "Identified cultural distrust towards 'screenings' but high trust in 'family checkups'",
          action: "Message reframing + video testimonial from local family (not actors)",
          result: {
            metric: "+124%",
            label: "Attendance",
            detail: "Full event + 40-person waitlist"
          }
        }
      ]
    },

    // Sección 6: FAQs
    faqs: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our methodology",
      items: [
        {
          question: "How long does it take to see results?",
          answer: "It depends on the objective. For awareness and engagement, 2-4 weeks. For conversions and sustained ROAS, 60-90 days. Our 90-day plans are designed for continuous optimization and scalable results."
        },
        {
          question: "Do you only work with large brands?",
          answer: "No. We have 3 tiers (Start, Grow, Scale) to adapt to different budgets. Start is ideal for brands beginning multicultural marketing with investment from $5K/month. What matters is your commitment to sustainable growth."
        },
        {
          question: "Is OYE a platform we purchase separately?",
          answer: "No. OYE is our proprietary methodology that combines enterprise tools (Brandwatch, Sprinklr, Talkwalker) with expert human analysis. We don't sell software; we sell actionable insights and cultural strategy."
        },
        {
          question: "Do you produce all content internally?",
          answer: "Yes for video (we have Emmy-winning in-house team). For high-volume social content (50+ pieces/month) we collaborate with a network of verified multicultural creators. We always maintain creative control and brand safety."
        },
        {
          question: "What sets Energy Media apart from other 'Hispanic' agencies?",
          answer: "3 things: (1) Real expertise in high-quality TV/video applied to digital, (2) OYE cultural listening methodology (not just translation), (3) Focus on measurable performance, not just 'awareness' or 'reach'."
        },
        {
          question: "Do you work with influencers?",
          answer: "Yes, when strategically appropriate. We have a network of 200+ verified multicultural influencers (micro and macro). But it's not mandatory; many clients get better ROI with UGC-style ads featuring real customers."
        },
        {
          question: "Do I need an established digital presence?",
          answer: "Not necessarily. If you're starting out, our Start plan includes complete setup (website, social profiles, tracking, first video assets). If you already have presence, we audit and optimize existing assets."
        },
        {
          question: "Do you report in Spanish or English?",
          answer: "Your preference. We're native bilingual. Most clients prefer dashboards in English with executive summary in both languages for different stakeholders."
        }
      ]
    },

    // Sección 7: CTA Final
    ctaFinal: {
      badge: "Ready to start?",
      title: "Let's talk about your next multicultural campaign",
      subtitle: "Schedule 30 minutes for a free digital presence audit with a cultural lens.",
      benefits: [
        "Multicultural opportunities audit (free)",
        "Personalized 90-day plan",
        "ROI estimate based on your industry benchmarks"
      ],
      ctaPrimary: "Schedule your consultation →",
      ctaSecondary: "View video portfolio"
    }
  }
};
