import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/soporteSeccion5.module.css";

const SoporteSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const textos = ingles ? translations.en.soporte.contact : translations.es.soporte.contact;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    priority: '',
    subject: '',
    message: ''
  });

  const [activeTab, setActiveTab] = useState('ticket');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí se implementaría el envío del formulario
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{textos.title}</h2>
          <p className={styles.subtitle}>{textos.subtitle}</p>
        </div>

        <div className={styles.contactTabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'ticket' ? styles.active : ''}`}
            onClick={() => setActiveTab('ticket')}
          >
            <span className={styles.tabIcon}>🎫</span>
            {ingles ? "Create Ticket" : "Crear Ticket"}
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'chat' ? styles.active : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            <span className={styles.tabIcon}>💬</span>
            {ingles ? "Live Chat" : "Chat en Vivo"}
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'email' ? styles.active : ''}`}
            onClick={() => setActiveTab('email')}
          >
            <span className={styles.tabIcon}>📧</span>
            {ingles ? "Email Support" : "Email Soporte"}
          </button>
        </div>

        <div className={styles.contentArea}>
          {activeTab === 'ticket' && (
            <div className={styles.ticketForm}>
              <div className={styles.formContainer}>
                <h3 className={styles.formTitle}>
                  {ingles ? "Submit a Support Ticket" : "Enviar un Ticket de Soporte"}
                </h3>
                <p className={styles.formDescription}>
                  {ingles 
                    ? "Fill out the form below and our team will get back to you within 24 hours."
                    : "Completa el formulario a continuación y nuestro equipo te responderá en 24 horas."
                  }
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        {ingles ? "Full Name" : "Nombre Completo"}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        {ingles ? "Email Address" : "Correo Electrónico"}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        {ingles ? "Category" : "Categoría"}
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className={styles.select}
                        required
                      >
                        <option value="">{ingles ? "Select category" : "Seleccionar categoría"}</option>
                        <option value="technical">{ingles ? "Technical Issue" : "Problema Técnico"}</option>
                        <option value="billing">{ingles ? "Billing" : "Facturación"}</option>
                        <option value="feature">{ingles ? "Feature Request" : "Solicitud de Función"}</option>
                        <option value="general">{ingles ? "General Question" : "Pregunta General"}</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        {ingles ? "Priority" : "Prioridad"}
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className={styles.select}
                        required
                      >
                        <option value="">{ingles ? "Select priority" : "Seleccionar prioridad"}</option>
                        <option value="low">{ingles ? "Low" : "Baja"}</option>
                        <option value="medium">{ingles ? "Medium" : "Media"}</option>
                        <option value="high">{ingles ? "High" : "Alta"}</option>
                        <option value="urgent">{ingles ? "Urgent" : "Urgente"}</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      {ingles ? "Subject" : "Asunto"}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      {ingles ? "Message" : "Mensaje"}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.textarea}
                      rows="6"
                      required
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    <span className={styles.buttonIcon}>📨</span>
                    {ingles ? "Submit Ticket" : "Enviar Ticket"}
                  </button>
                </form>
              </div>

              <div className={styles.ticketInfo}>
                <div className={styles.infoCard}>
                  <h4 className={styles.infoTitle}>
                    {ingles ? "What to expect" : "Qué esperar"}
                  </h4>
                  <ul className={styles.infoList}>
                    <li className={styles.infoItem}>
                      <span className={styles.infoIcon}>⚡</span>
                      {ingles ? "Response within 24 hours" : "Respuesta en 24 horas"}
                    </li>
                    <li className={styles.infoItem}>
                      <span className={styles.infoIcon}>🔍</span>
                      {ingles ? "Detailed investigation" : "Investigación detallada"}
                    </li>
                    <li className={styles.infoItem}>
                      <span className={styles.infoIcon}>✅</span>
                      {ingles ? "Follow-up until resolved" : "Seguimiento hasta resolución"}
                    </li>
                  </ul>
                </div>

                <div className={styles.infoCard}>
                  <h4 className={styles.infoTitle}>
                    {ingles ? "Need faster help?" : "¿Necesitas ayuda más rápida?"}
                  </h4>
                  <p className={styles.infoDescription}>
                    {ingles 
                      ? "For urgent issues, try our live chat or call our emergency line."
                      : "Para problemas urgentes, prueba nuestro chat en vivo o llama a nuestra línea de emergencia."
                    }
                  </p>
                  <div className={styles.quickActions}>
                    <button className={styles.actionButton}>
                      <span className={styles.actionIcon}>💬</span>
                      {ingles ? "Live Chat" : "Chat en Vivo"}
                    </button>
                    <button className={styles.actionButton}>
                      <span className={styles.actionIcon}>📞</span>
                      {ingles ? "Emergency Call" : "Llamada de Emergencia"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className={styles.chatContainer}>
              <div className={styles.chatHeader}>
                <h3 className={styles.chatTitle}>
                  {ingles ? "Start Live Chat" : "Iniciar Chat en Vivo"}
                </h3>
                <p className={styles.chatDescription}>
                  {ingles 
                    ? "Connect with our support team instantly. Average response time: 2 minutes."
                    : "Conéctate con nuestro equipo de soporte al instante. Tiempo de respuesta promedio: 2 minutos."
                  }
                </p>
              </div>

              <div className={styles.chatWidget}>
                <div className={styles.chatStatus}>
                  <div className={styles.statusIndicator}></div>
                  <span className={styles.statusText}>
                    {ingles ? "Support team is online" : "Equipo de soporte en línea"}
                  </span>
                </div>

                <div className={styles.chatPreview}>
                  <div className={styles.agentInfo}>
                    <div className={styles.agentAvatar}>👩‍💻</div>
                    <div className={styles.agentDetails}>
                      <div className={styles.agentName}>Sarah Johnson</div>
                      <div className={styles.agentRole}>
                        {ingles ? "Senior Support Specialist" : "Especialista Senior de Soporte"}
                      </div>
                    </div>
                  </div>
                  
                  <button className={styles.startChatButton}>
                    <span className={styles.buttonIcon}>💬</span>
                    {ingles ? "Start Conversation" : "Iniciar Conversación"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'email' && (
            <div className={styles.emailContainer}>
              <div className={styles.emailHeader}>
                <h3 className={styles.emailTitle}>
                  {ingles ? "Email Support" : "Soporte por Email"}
                </h3>
                <p className={styles.emailDescription}>
                  {ingles 
                    ? "Send us an email with your question or concern, and we'll get back to you."
                    : "Envíanos un email con tu pregunta o inquietud, y te responderemos."
                  }
                </p>
              </div>

              <div className={styles.emailOptions}>
                <div className={styles.emailOption}>
                  <div className={styles.emailIcon}>🛠️</div>
                  <h4 className={styles.emailOptionTitle}>
                    {ingles ? "Technical Support" : "Soporte Técnico"}
                  </h4>
                  <p className={styles.emailOptionDescription}>
                    {ingles ? "For technical issues and troubleshooting" : "Para problemas técnicos y solución de problemas"}
                  </p>
                  <a href="mailto:tech@nethive.com" className={styles.emailLink}>
                    tech@nethive.com
                  </a>
                </div>

                <div className={styles.emailOption}>
                  <div className={styles.emailIcon}>💰</div>
                  <h4 className={styles.emailOptionTitle}>
                    {ingles ? "Billing & Sales" : "Facturación y Ventas"}
                  </h4>
                  <p className={styles.emailOptionDescription}>
                    {ingles ? "For billing questions and sales inquiries" : "Para preguntas de facturación y consultas de ventas"}
                  </p>
                  <a href="mailto:billing@nethive.com" className={styles.emailLink}>
                    billing@nethive.com
                  </a>
                </div>

                <div className={styles.emailOption}>
                  <div className={styles.emailIcon}>📋</div>
                  <h4 className={styles.emailOptionTitle}>
                    {ingles ? "General Inquiries" : "Consultas Generales"}
                  </h4>
                  <p className={styles.emailOptionDescription}>
                    {ingles ? "For general questions and feedback" : "Para preguntas generales y comentarios"}
                  </p>
                  <a href="mailto:hello@nethive.com" className={styles.emailLink}>
                    hello@nethive.com
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SoporteSeccion5;