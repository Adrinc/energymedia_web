import React from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/tableSection.module.css';

const SettingsSection = ({ configData }) => {
  const ingles = useStore(isEnglish);

  return (
    <div className={styles.tableSection}>
      <div className={styles.sectionHeader}>
        <h3>{ingles ? 'System Configuration' : 'Configuración del Sistema'}</h3>
        <button className={styles.saveButton}>
          💾 {ingles ? 'Save Changes' : 'Guardar Cambios'}
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>{ingles ? 'Category' : 'Categoría'}</th>
              <th>{ingles ? 'Parameter' : 'Parámetro'}</th>
              <th>{ingles ? 'Value' : 'Valor'}</th>
              <th>{ingles ? 'Description' : 'Descripción'}</th>
              <th>{ingles ? 'Actions' : 'Acciones'}</th>
            </tr>
          </thead>
          <tbody>
            {configData.map((config, index) => (
              <tr key={index} className={styles.tableRow}>
                <td>
                  <span className={styles.categoryTag}>{config.categoria}</span>
                </td>
                <td>{config.parametro}</td>
                <td>
                  <input 
                    type="text" 
                    defaultValue={config.valor} 
                    className={styles.configInput}
                  />
                </td>
                <td className={styles.descriptionCell}>{config.descripcion}</td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionBtn}>✓</button>
                    <button className={styles.actionBtn}>↻</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SettingsSection;