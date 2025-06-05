import React, { useState } from 'react';
import styles from './FormContacto.module.css';
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';

const FormContacto = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en.formContacto : translations.es.formContacto;
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ayuda: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === 'nombre') {
      const filteredValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
      setFormData({ ...formData, [name]: filteredValue });
      if (!/^[a-zA-ZÀ-ÿ\s]*$/.test(value)) {
        newErrors.nombre = t.error_nombre;
      } else {
        delete newErrors.nombre;
      }
    } else if (name === 'telefono') {
      const filteredValue = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: filteredValue });
      if (!/^\d*$/.test(value)) {
        newErrors.telefono = t.error_telefono;
      } else {
        delete newErrors.telefono;
      }
    } else if (name === 'email') {
      setFormData({ ...formData, [name]: value });
      if (!/^.{4,}@/.test(value)) {
        newErrors.email = t.error_email_short;
      } else {
        delete newErrors.email;
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors(newErrors);
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[a-zA-ZÀ-ÿ\s]{1,50}$/.test(formData.nombre)) {
      newErrors.nombre = t.error_nombre;
    }
    if (!/^.{4,}@[\w-]+\.[a-z]{2,}$/.test(formData.email)) {
      newErrors.email = t.error_email;
    }
    if (!/^\d{10,15}$/.test(formData.telefono)) {
      newErrors.telefono = t.error_telefono;
    }
    if (formData.ayuda.trim() === '') {
      newErrors.ayuda = t.error_ayuda;
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const [first, ...rest] = formData.nombre.trim().split(' ');
    const last = rest.length > 0 ? rest.join(' ') : '';

    const payload = {
      lead_email: formData.email,
      lead_phone: formData.telefono,
      lead_first_name: first,
      lead_last_name: last,
      lead_message: formData.ayuda,
      organization_id: "6"
    };

    try {
      const response = await fetch("https://u-n8n.virtalus.cbluna-dev.com/webhook/contactus_process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        alert(t.success);
        setFormData({ nombre: '', email: '', telefono: '', ayuda: '' });
      } else {
        alert(t.fail);
      }
    } catch (err) {
      alert(t.fail_connection);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {t.title}
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="nombre">
            {t.nombre}
          </label>
          <div className={styles.inputContainer}>
            <img src="./icons/user.svg" alt="User Icon" className={styles.icon} />
            <input
              type="text"
              id="nombre"
              name="nombre"
              className={styles.input}
              value={formData.nombre}
              onChange={handleChange}
              placeholder={t.placeholder_nombre}
            />
          </div>
          {errors.nombre && <p className={styles.error}>{errors.nombre}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            {t.email}
          </label>
          <div className={styles.inputContainer}>
            <img src="./icons/email.svg" alt="Email Icon" className={styles.icon} />
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              placeholder={t.placeholder_email}
            />
          </div>
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="telefono">
            {t.telefono}
          </label>
          <div className={styles.inputContainer}>
            <img src="./icons/phone.svg" alt="Phone Icon" className={styles.icon} />
            <input
              type="text"
              id="telefono"
              name="telefono"
              className={styles.input}
              value={formData.telefono}
              onChange={handleChange}
              placeholder={t.placeholder_telefono}
            />
          </div>
          {errors.telefono && <p className={styles.error}>{errors.telefono}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="ayuda">
            {t.ayuda}
          </label>
          <div className={styles.inputContainer}>
            <img src="../icons/help.svg" alt="Help Icon" className={styles.icon} />
            <textarea
              id="ayuda"
              name="ayuda"
              className={styles.textarea}
              value={formData.ayuda}
              onChange={handleChange}
              placeholder={t.placeholder_ayuda}
            ></textarea>
          </div>
          {errors.ayuda && <p className={styles.error}>{errors.ayuda}</p>}
        </div>

        <button type="submit" className={styles.submitButton}>
          {t.enviar}
        </button>
      </form>
    </div>
  );
};

export default FormContacto;