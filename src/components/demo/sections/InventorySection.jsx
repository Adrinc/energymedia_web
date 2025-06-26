import React from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from '../css/tableSection.module.css';

const InventorySection = ({ inventoryData }) => {
  const ingles = useStore(isEnglish);

  return (
    <div className={styles.tableSection}>
      <div className={styles.sectionHeader}>
        <h3>{ingles ? 'Infrastructure Inventory' : 'Inventario de Infraestructura'}</h3>
        <button className={styles.addButton}>
          + {ingles ? 'Add Equipment' : 'Agregar Equipo'}
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>{ingles ? 'Type' : 'Tipo'}</th>
              <th>{ingles ? 'Model' : 'Modelo'}</th>
              <th>{ingles ? 'Location' : 'Ubicación'}</th>
              <th>{ingles ? 'Status' : 'Estado'}</th>
              <th>{ingles ? 'Ports/Capacity' : 'Puertos/Capacidad'}</th>
              <th>{ingles ? 'Install Date' : 'Fecha Instalación'}</th>
              <th>{ingles ? 'Actions' : 'Acciones'}</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id} className={styles.tableRow}>
                <td>{item.id}</td>
                <td>
                  <span className={styles.typeTag}>{item.tipo}</span>
                </td>
                <td>{item.modelo}</td>
                <td>{item.ubicacion}</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles.operativo}`}>
                    {item.estado}
                  </span>
                </td>
                <td>{item.puertos || item.longitud || item.capacidad || item.unidades}</td>
                <td>{item.fechaInstalacion}</td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionBtn}>📝</button>
                    <button className={styles.actionBtn}>🔍</button>
                    <button className={styles.actionBtn}>🗑️</button>
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

export default InventorySection;