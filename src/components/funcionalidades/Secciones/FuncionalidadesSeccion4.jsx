import React, { useState, useEffect, useRef } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/funcionalidadesSeccion4.module.css";

const FuncionalidadesSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.funcionalidades.useCases : translations.es.funcionalidades.useCases;
  const [activeRole, setActiveRole] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const sectionRef = useRef(null);

  // Métricas de éxito por industria
  const industryMetrics = [
    {
      industry: ingles ? "Telecommunications" : "Telecomunicaciones",
      icon: "📡",
      improvement: "87%",
      metric: ingles ? "Faster issue resolution" : "Resolución más rápida de problemas",
      color: "#3b82f6"
    },
    {
      industry: ingles ? "Healthcare" : "Salud",
      icon: "🏥",
      improvement: "95%",
      metric: ingles ? "Network uptime" : "Tiempo de actividad de red",
      color: "#22d3ee"
    },
    {
      industry: ingles ? "Education" : "Educación",
      icon: "🎓",
      improvement: "92%",
      metric: ingles ? "Infrastructure visibility" : "Visibilidad de infraestructura",
      color: "#7ae582"
    },
    {
      industry: ingles ? "Finance" : "Finanzas",
      icon: "🏦",
      improvement: "98%",
      metric: ingles ? "Compliance accuracy" : "Precisión de cumplimiento",
      color: "#f59e0b"
    }
  ];

  // Casos de uso detallados
  const detailedUseCases = [
    {
      title: ingles ? "Enterprise Migration" : "Migración Empresarial",
      icon: "🔄",
      scenario: ingles ? "Large corporation moving to new headquarters" : "Gran corporación mudándose a nueva sede",
      challenge: ingles ? "Complex infrastructure documentation" : "Documentación compleja de infraestructura",
      solution: ingles ? "Automated discovery and mapping" : "Descubrimiento y mapeo automatizado",
      result: ingles ? "50% faster migration" : "Migración 50% más rápida"
    },
    {
      title: ingles ? "Compliance Audit" : "Auditoría de Cumplimiento",
      icon: "📋",
      scenario: ingles ? "Financial institution regulatory review" : "Revisión regulatoria de institución financiera",
      challenge: ingles ? "Manual documentation processes" : "Procesos manuales de documentación",
      solution: ingles ? "Real-time compliance reporting" : "Reportes de cumplimiento en tiempo real",
      result: ingles ? "100% audit success" : "100% éxito en auditoría"
    },
    {
      title: ingles ? "Rapid Expansion" : "Expansión Rápida",
      icon: "🚀",
      scenario: ingles ? "Tech startup scaling infrastructure" : "Startup tecnológica escalando infraestructura",
      challenge: ingles ? "Rapid growth management" : "Gestión de crecimiento rápido",
      solution: ingles ? "Scalable infrastructure planning" : "Planificación escalable de infraestructura",
      result: ingles ? "300% capacity growth" : "300% crecimiento de capacidad"
    }
  ];

  // Testimonios de usuarios por rol
  const roleTestimonials = [
    {
      role: ingles ? "Network Administrator" : "Administrador de Red",
      name: "James Wilson",
      company: "TechGlobal Inc",
      quote: ingles 
        ? "NetHive transformed how we manage our global network infrastructure"
        : "NetHive transformó cómo gestionamos nuestra infraestructura de red global",
      avatar: "/image/testimonials/avatar1.png",
      metrics: {
        timeReduction: "65%",
        accuracyImprovement: "95%"
      }
    },
    {
      role: ingles ? "Field Technician" : "Técnico de Campo",
      name: "Maria Rodriguez",
      company: "ConnectCorp",
      quote: ingles
        ? "The mobile interface makes field work incredibly efficient"
        : "La interfaz móvil hace que el trabajo de campo sea increíblemente eficiente",
      avatar: "/image/testimonials/avatar2.png",
      metrics: {
        mobilityBoost: "80%",
        errorReduction: "90%"
      }
    },
    {
      role: ingles ? "IT Manager" : "Gerente de IT",
      name: "David Chen",
      company: "DataFlow Systems",
      quote: ingles
        ? "Real-time visibility into our infrastructure has been a game-changer"
        : "La visibilidad en tiempo real de nuestra infraestructura ha sido revolucionaria",
      avatar: "/image/testimonials/avatar3.png",
      metrics: {
        visibilityIncrease: "100%",
        costReduction: "45%"
      }
    }
  ];

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.dataset.animateId;
            if (elementId) {
              setVisibleElements(prev => new Set([...prev, elementId]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-animate-id]');
    elements?.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole(prev => (prev + 1) % textos.roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [textos.roles.length]);

  return (
    <section className={styles.useCasesSection} ref={sectionRef}>
      <div className={styles.container}>
        {/* Header mejorado */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🎯</span>
            {ingles ? "Real-World Impact" : "Impacto Real"}
          </div>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>

        {/* Métricas de éxito por industria */}
        <div className={styles.industryMetrics} data-animate-id="metrics">
          <h3 className={styles.metricsTitle}>
            {ingles ? "Success Across Industries" : "Éxito en Todas las Industrias"}
          </h3>
          <div className={styles.metricsGrid}>
            {industryMetrics.map((metric, index) => (
              <div 
                key={index} 
                className={`${styles.metricCard} ${visibleElements.has('metrics') ? styles.visible : ''}`}
                style={{ '--delay': `${index * 0.1}s`, '--color': metric.color }}
              >
                <div className={styles.metricIcon}>{metric.icon}</div>
                <div className={styles.metricValue}>{metric.improvement}</div>
                <div className={styles.metricLabel}>{metric.metric}</div>
                <div className={styles.metricIndustry}>{metric.industry}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de roles con vista expandida */}
        <div className={styles.rolesSection}>
          <div className={styles.rolesGrid}>
            {textos.roles.map((role, index) => (
              <div 
                key={index} 
                className={`${styles.roleCard} ${activeRole === index ? styles.active : ''}`}
                onClick={() => setActiveRole(index)}
                data-animate-id={`role-${index}`}
              >
                <div className={styles.roleHeader}>
                  <div className={styles.roleIcon}>
                    <span>{role.icon}</span>
                  </div>
                  <h3 className={styles.roleTitle}>{role.title}</h3>
                  <div className={styles.roleIndicator}>
                    {activeRole === index && <div className={styles.activeIndicator}></div>}
                  </div>
                </div>
                
                <p className={styles.roleDescription}>{role.description}</p>
                
                <div className={styles.featuresBox}>
                  <h4 className={styles.featuresTitle}>
                    {ingles ? "Key Benefits:" : "Beneficios Clave:"}
                  </h4>
                  <ul className={styles.featuresList}>
                    {role.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.featureItem}>
                        <span className={styles.checkIcon}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial del rol activo */}
                {activeRole === index && roleTestimonials[index] && (
                  <div className={styles.roleTestimonial}>
                    <div className={styles.testimonialContent}>
                      <p className={styles.testimonialQuote}>"{roleTestimonials[index].quote}"</p>
                      <div className={styles.testimonialAuthor}>
                        <img 
                          src={roleTestimonials[index].avatar} 
                          alt={roleTestimonials[index].name}
                          className={styles.authorAvatar}
                        />
                        <div className={styles.authorInfo}>
                          <div className={styles.authorName}>{roleTestimonials[index].name}</div>
                          <div className={styles.authorCompany}>{roleTestimonials[index].company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Casos de uso detallados */}
        <div className={styles.useCasesDetailed} data-animate-id="use-cases">
          <h3 className={styles.useCasesTitle}>
            {ingles ? "Real-World Success Stories" : "Historias de Éxito Reales"}
          </h3>
          <div className={styles.useCasesGrid}>
            {detailedUseCases.map((useCase, index) => (
              <div 
                key={index} 
                className={`${styles.useCaseCard} ${visibleElements.has('use-cases') ? styles.visible : ''}`}
                style={{ '--delay': `${index * 0.2}s` }}
              >
                <div className={styles.useCaseHeader}>
                  <div className={styles.useCaseIcon}>{useCase.icon}</div>
                  <h4 className={styles.useCaseTitle}>{useCase.title}</h4>
                </div>
                
                <div className={styles.useCaseContent}>
                  <div className={styles.useCaseItem}>
                    <span className={styles.useCaseLabel}>
                      {ingles ? "Scenario:" : "Escenario:"}
                    </span>
                    <span className={styles.useCaseText}>{useCase.scenario}</span>
                  </div>
                  
                  <div className={styles.useCaseItem}>
                    <span className={styles.useCaseLabel}>
                      {ingles ? "Challenge:" : "Desafío:"}
                    </span>
                    <span className={styles.useCaseText}>{useCase.challenge}</span>
                  </div>
                  
                  <div className={styles.useCaseItem}>
                    <span className={styles.useCaseLabel}>
                      {ingles ? "Solution:" : "Solución:"}
                    </span>
                    <span className={styles.useCaseText}>{useCase.solution}</span>
                  </div>
                  
                  <div className={styles.useCaseResult}>
                    <span className={styles.resultLabel}>
                      {ingles ? "Result:" : "Resultado:"}
                    </span>
                    <span className={styles.resultValue}>{useCase.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section mejorada */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaBackground}>
            <div className={styles.ctaParticles}></div>
          </div>
          
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>🚀</div>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Ready to revolutionize your infrastructure management?" : "¿Listo para revolucionar la gestión de tu infraestructura?"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Join thousands of companies worldwide that trust NetHive for their critical infrastructure management."
                : "Únete a miles de empresas en todo el mundo que confían en NetHive para la gestión de su infraestructura crítica."
              }
            </p>
            
            {/* Estadísticas de confianza */}
            <div className={styles.trustStats}>
              <div className={styles.trustStat}>
                <div className={styles.trustNumber}>2,500+</div>
                <div className={styles.trustLabel}>
                  {ingles ? "Companies" : "Empresas"}
                </div>
              </div>
              <div className={styles.trustStat}>
                <div className={styles.trustNumber}>50+</div>
                <div className={styles.trustLabel}>
                  {ingles ? "Countries" : "Países"}
                </div>
              </div>
              <div className={styles.trustStat}>
                <div className={styles.trustNumber}>99.9%</div>
                <div className={styles.trustLabel}>
                  {ingles ? "Satisfaction" : "Satisfacción"}
                </div>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <button className={styles.primaryCtaButton}>
                <span className={styles.btnIcon}>🎯</span>
                {ingles ? "Start Free Trial" : "Comenzar Prueba Gratuita"}
                <span className={styles.btnSubtext}>
                  {ingles ? "No credit card required" : "Sin tarjeta de crédito"}
                </span>
              </button>
              <button className={styles.secondaryCtaButton}>
                <span className={styles.btnIcon}>📞</span>
                {ingles ? "Schedule Demo" : "Agendar Demo"}
                <span className={styles.btnSubtext}>
                  {ingles ? "15-minute walkthrough" : "Recorrido de 15 minutos"}
                </span>
              </button>
            </div>

            {/* Garantías */}
            <div className={styles.guarantees}>
              <div className={styles.guarantee}>
                <span className={styles.guaranteeIcon}>✅</span>
                <span className={styles.guaranteeText}>
                  {ingles ? "30-day money back guarantee" : "Garantía de devolución de 30 días"}
                </span>
              </div>
              <div className={styles.guarantee}>
                <span className={styles.guaranteeIcon}>🔒</span>
                <span className={styles.guaranteeText}>
                  {ingles ? "Enterprise-grade security" : "Seguridad de nivel empresarial"}
                </span>
              </div>
              <div className={styles.guarantee}>
                <span className={styles.guaranteeIcon}>📞</span>
                <span className={styles.guaranteeText}>
                  {ingles ? "24/7 dedicated support" : "Soporte dedicado 24/7"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuncionalidadesSeccion4;