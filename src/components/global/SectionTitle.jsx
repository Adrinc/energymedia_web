import styles from './sectionTitle.module.css';

/**
 * SectionTitle - Título de sección con estilo consistente
 * 
 * @param {string} title - Título principal
 * @param {string} subtitle - Subtítulo opcional
 * @param {string} align - Alineación ('left' | 'center')
 * @param {string} variant - Color ('dark' | 'light')
 */
const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center',
  variant = 'dark'
}) => {
  return (
    <div className={`${styles.container} ${styles[align]} ${styles[variant]}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
