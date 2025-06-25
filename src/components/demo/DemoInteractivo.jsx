import React, { useState, useEffect } from "react";
import { isEnglish } from '../../data/variables';
import { useStore } from '@nanostores/react';
import StatCard from './StatCard';
import styles from "./css/demoInteractivo.module.css";

const DemoInteractivo = () => {
  const ingles = useStore(isEnglish);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Datos hardcodeados para el demo - ajustados para coherencia con el diagrama
  const inventoryData = [
    { id: 1, tipo: 'Switch', modelo: 'Cisco 2960X-24PS', ubicacion: 'MDF-Rack-01', estado: 'Operativo', puertos: 24, fechaInstalacion: '2024-01-15' },
    { id: 2, tipo: 'Patch Panel', modelo: 'CommScope 1375055-2', ubicacion: 'MDF-Rack-01', estado: 'Operativo', puertos: 48, fechaInstalacion: '2024-01-15' },
    { id: 3, tipo: 'Switch', modelo: 'Cisco 2960X-48TS', ubicacion: 'IDF-01-Rack-01', estado: 'Operativo', puertos: 48, fechaInstalacion: '2024-02-10' },
    { id: 4, tipo: 'Patch Panel', modelo: 'Panduit DP485E88TGY', ubicacion: 'IDF-01-Rack-01', estado: 'Operativo', puertos: 48, fechaInstalacion: '2024-02-10' },
    { id: 5, tipo: 'Switch', modelo: 'Cisco 2960X-48TS', ubicacion: 'IDF-02-Rack-01', estado: 'Operativo', puertos: 48, fechaInstalacion: '2024-02-12' },
    { id: 6, tipo: 'Patch Panel', modelo: 'Panduit DP485E88TGY', ubicacion: 'IDF-02-Rack-01', estado: 'Operativo', puertos: 48, fechaInstalacion: '2024-02-12' },
    { id: 7, tipo: 'Cable Cat6A', modelo: 'Belden 2413', ubicacion: 'MDF-IDF-01', estado: 'Operativo', longitud: '150m', fechaInstalacion: '2024-01-20' },
    { id: 8, tipo: 'UPS', modelo: 'APC Smart-UPS 3000VA', ubicacion: 'IDF-02-Rack-01', estado: 'Operativo', capacidad: '3000VA', fechaInstalacion: '2024-03-05' },
    { id: 9, tipo: 'Fibra Optica', modelo: 'Corning SMF-28', ubicacion: 'MDF-IDF-02', estado: 'Operativo', tipo: 'Monomodo', fechaInstalacion: '2024-02-25' }
  ];

  const topologyConnections = [
    { from: 'MDF', to: 'IDF-01', tipo: 'Fibra Optica', estado: 'Activo', ancho_banda: '10Gbps' },
    { from: 'MDF', to: 'IDF-02', tipo: 'Fibra Optica', estado: 'Activo', ancho_banda: '10Gbps' },
    { from: 'IDF-01', to: 'Endpoint-A1', tipo: 'Cat6A', estado: 'Activo', ancho_banda: '1Gbps' },
    { from: 'IDF-01', to: 'Endpoint-A2', tipo: 'Cat6A', estado: 'Activo', ancho_banda: '1Gbps' },
    { from: 'IDF-02', to: 'Endpoint-B1', tipo: 'Cat6A', estado: 'Activo', ancho_banda: '1Gbps' },
    { from: 'IDF-02', to: 'Endpoint-B2', tipo: 'Cat6A', estado: 'Inactivo', ancho_banda: '1Gbps' }
  ];

  const alertsData = [
    { id: 1, tipo: 'Warning', mensaje: 'Puerto 24 del Switch MDF desconectado', timestamp: '2024-06-24 10:30', criticidad: 'Media' },
    { id: 2, tipo: 'Info', mensaje: 'Mantenimiento programado IDF-02 completado', timestamp: '2024-06-24 09:15', criticidad: 'Baja' },
    { id: 3, tipo: 'Critical', mensaje: 'UPS IDF-02 funcionando con batería', timestamp: '2024-06-24 08:45', criticidad: 'Alta' },
    { id: 4, tipo: 'Warning', mensaje: 'Temperatura elevada en Rack MDF-01', timestamp: '2024-06-24 07:20', criticidad: 'Media' }
  ];

  const configData = [
    { categoria: 'Red', parametro: 'VLAN por defecto', valor: '100', descripcion: 'VLAN asignada a nuevos dispositivos' },
    { categoria: 'Monitoreo', parametro: 'Intervalo de polling', valor: '30 segundos', descripcion: 'Frecuencia de consulta SNMP' },
    { categoria: 'Alertas', parametro: 'Email notificaciones', valor: 'admin@empresa.com', descripcion: 'Destinatario de alertas críticas' },
    { categoria: 'Backup', parametro: 'Frecuencia respaldo', valor: 'Diario', descripcion: 'Backup automático de configuraciones' },
    { categoria: 'Seguridad', parametro: 'Timeout sesión', valor: '30 minutos', descripcion: 'Tiempo límite de inactividad' }
  ];

  useEffect(() => {
    // Simular alertas dinámicas
    const alertInterval = setInterval(() => {
      const newAlert = {
        id: Date.now(),
        type: Math.random() > 0.5 ? 'warning' : 'info',
        message: ingles ? 'Connection status updated' : 'Estado de conexión actualizado'
      };
      setAlerts(prev => [...prev.slice(-2), newAlert]);
    }, 5000);

    return () => clearInterval(alertInterval);
  }, [ingles]);

  // Estadísticas calculadas dinámicamente basadas en los datos
  const getStats = () => {
    const switches = inventoryData.filter(item => item.tipo === 'Switch').length;
    const patches = inventoryData.filter(item => item.tipo === 'Patch Panel').length;
    const connections = topologyConnections.filter(conn => conn.estado === 'Activo').length;
    const activeAlerts = alertsData.filter(alert => alert.tipo !== 'Info').length;

    return {
      switches: { value: switches, label: ingles ? "Active Switches" : "Switches Activos" },
      patches: { value: patches, label: ingles ? "Patch Panels" : "Patch Panels" },
      connections: { value: connections, label: ingles ? "Active Connections" : "Conexiones Activas" },
      alerts: { value: activeAlerts, label: ingles ? "Active Alerts" : "Alertas Activas" }
    };
  };

  const content = {
    es: {
      title: "Demo Interactiva NetHive",
      subtitle: "Dashboard de Control de Infraestructura MDF/IDF",
      backButton: "Volver al inicio",
      mdf: {
        title: "MDF",
        status: "En línea",
        components: ["Switch Principal", "Patch Panel"]
      },
      idf1: {
        title: "IDF 1",
        components: ["Switch", "Patch Panel"]
      },
      idf2: {
        title: "IDF 2", 
        components: ["Switch", "Patch Panel", "UPS"]
      },
      navigation: {
        dashboard: "Dashboard",
        inventory: "Inventario",
        topology: "Topología",
        alerts: "Alertas",
        settings: "Configuración"
      }
    },
    en: {
      title: "NetHive Interactive Demo",
      subtitle: "MDF/IDF Infrastructure Control Dashboard",
      backButton: "Back to home",
      mdf: {
        title: "MDF",
        status: "Online",
        components: ["Main Switch", "Patch Panel"]
      },
      idf1: {
        title: "IDF 1",
        components: ["Switch", "Patch Panel"]
      },
      idf2: {
        title: "IDF 2",
        components: ["Switch", "Patch Panel", "UPS"]
      },
      navigation: {
        dashboard: "Dashboard",
        inventory: "Inventory",
        topology: "Topology",
        alerts: "Alerts",
        settings: "Settings"
      }
    }
  };

  const textos = ingles ? content.en : content.es;

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'inventory':
        return renderInventory();
      case 'topology':
        return renderTopology();
      case 'alerts':
        return renderAlerts();
      case 'settings':
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  const renderDashboard = () => {
    const stats = getStats();
    
    return (
      <>
        {/* Stats Cards usando el componente reutilizable */}
        <div className={styles.statsGrid}>
          <StatCard
            icon="🔌"
            value={stats.switches.value}
            label={stats.switches.label}
            color="#2563eb"
            trend={{ type: 'up', value: '+2' }}
            onClick={() => handleNavClick('inventory')}
          />
          <StatCard
            icon="📋"
            value={stats.patches.value}
            label={stats.patches.label}
            color="#059669"
            onClick={() => handleNavClick('inventory')}
          />
          <StatCard
            icon="🔗"
            value={stats.connections.value}
            label={stats.connections.label}
            color="#0891b2"
            trend={{ type: 'up', value: '98%' }}
            onClick={() => handleNavClick('topology')}
          />
          <StatCard
            icon="⚠️"
            value={stats.alerts.value}
            label={stats.alerts.label}
            color="#dc2626"
            trend={{ type: 'down', value: '-1' }}
            onClick={() => handleNavClick('alerts')}
          />
        </div>

        {/* Topology Diagram */}
        <div className={styles.topologySection}>
          <div className={styles.sectionHeader}>
            <h3>{ingles ? 'Network Infrastructure Overview' : 'Vista General de Infraestructura'}</h3>
            <div className={styles.topologyStats}>
              <span className={styles.topologyStat}>
                <span className={styles.statusDot}></span>
                {ingles ? '1 MDF Active' : '1 MDF Activo'}
              </span>
              <span className={styles.topologyStat}>
                <span className={styles.statusDot}></span>
                {ingles ? '2 IDFs Online' : '2 IDFs En Línea'}
              </span>
            </div>
          </div>
          
          <div className={styles.topologyContainer}>
            {/* MDF */}
            <div 
              className={`${styles.networkNode} ${styles.mdf}`}
              onClick={() => handleComponentClick('MDF')}
            >
              <div className={styles.nodeHeader}>
                <span className={styles.nodeIcon}>🖥️</span>
                <span className={styles.nodeTitle}>{textos.mdf.title}</span>
              </div>
              <div className={styles.statusIndicator}>
                <span className={styles.statusDot}></span>
                {textos.mdf.status}
              </div>
              <div className={styles.nodeComponents}>
                {textos.mdf.components.map((comp, idx) => (
                  <div key={idx} className={styles.component}>
                    <span className={styles.componentDot}></span>
                    {comp}
                  </div>
                ))}
              </div>
            </div>

            {/* Connection Lines */}
            <div className={styles.connectionLines}>
              <div className={styles.connectionLine}></div>
              <div className={styles.connectionLineRight}></div>
            </div>

            {/* IDFs */}
            <div className={styles.idfContainer}>
              <div 
                className={`${styles.networkNode} ${styles.idf}`}
                onClick={() => handleComponentClick('IDF1')}
              >
                <div className={styles.nodeHeader}>
                  <span className={styles.nodeIcon}>🖲️</span>
                  <span className={styles.nodeTitle}>{textos.idf1.title}</span>
                </div>
                <div className={styles.nodeComponents}>
                  {textos.idf1.components.map((comp, idx) => (
                    <div key={idx} className={styles.component}>
                      <span className={styles.componentDot}></span>
                      {comp}
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className={`${styles.networkNode} ${styles.idf}`}
                onClick={() => handleComponentClick('IDF2')}
              >
                <div className={styles.nodeHeader}>
                  <span className={styles.nodeIcon}>🖲️</span>
                  <span className={styles.nodeTitle}>{textos.idf2.title}</span>
                </div>
                <div className={styles.nodeComponents}>
                  {textos.idf2.components.map((comp, idx) => (
                    <div key={idx} className={styles.component}>
                      <span className={styles.componentDot}></span>
                      {comp}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* End Devices */}
            <div className={styles.endDevices}>
              <div className={styles.endDevice}>
                <div className={styles.deviceIcon}>💻</div>
                <div className={styles.deviceLabel}>
                  {ingles ? 'Workstations' : 'Estaciones'}
                </div>
              </div>
              <div className={styles.endDevice}>
                <div className={styles.deviceIcon}>💻</div>
                <div className={styles.deviceLabel}>
                  {ingles ? 'Servers' : 'Servidores'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts Panel */}
        {alerts.length > 0 && (
          <div className={styles.alertsPanel}>
            <h3>{ingles ? 'Recent Alerts' : 'Alertas Recientes'}</h3>
            {alerts.map(alert => (
              <div key={alert.id} className={`${styles.alert} ${styles[alert.type]}`}>
                {alert.message}
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  const renderInventory = () => (
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

  const renderTopology = () => (
    <div className={styles.tableSection}>
      <div className={styles.sectionHeader}>
        <h3>{ingles ? 'Network Topology' : 'Topología de Red'}</h3>
        <button className={styles.addButton}>
          + {ingles ? 'Add Connection' : 'Agregar Conexión'}
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>{ingles ? 'From' : 'Origen'}</th>
              <th>{ingles ? 'To' : 'Destino'}</th>
              <th>{ingles ? 'Connection Type' : 'Tipo Conexión'}</th>
              <th>{ingles ? 'Status' : 'Estado'}</th>
              <th>{ingles ? 'Bandwidth' : 'Ancho de Banda'}</th>
              <th>{ingles ? 'Actions' : 'Acciones'}</th>
            </tr>
          </thead>
          <tbody>
            {topologyConnections.map((conn, index) => (
              <tr key={index} className={styles.tableRow}>
                <td>
                  <div className={styles.nodeCell}>
                    <span className={styles.nodeIcon}>🖥️</span>
                    {conn.from}
                  </div>
                </td>
                <td>
                  <div className={styles.nodeCell}>
                    <span className={styles.nodeIcon}>🖲️</span>
                    {conn.to}
                  </div>
                </td>
                <td>
                  <span className={styles.connectionType}>{conn.tipo}</span>
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${conn.estado === 'Activo' ? styles.activo : styles.inactivo}`}>
                    {conn.estado}
                  </span>
                </td>
                <td>{conn.ancho_banda}</td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionBtn}>📊</button>
                    <button className={styles.actionBtn}>🔧</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAlerts = () => (
    <div className={styles.tableSection}>
      <div className={styles.sectionHeader}>
        <h3>{ingles ? 'System Alerts' : 'Alertas del Sistema'}</h3>
        <button className={styles.clearButton}>
          🗑️ {ingles ? 'Clear All' : 'Limpiar Todo'}
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>{ingles ? 'Type' : 'Tipo'}</th>
              <th>{ingles ? 'Message' : 'Mensaje'}</th>
              <th>{ingles ? 'Timestamp' : 'Fecha/Hora'}</th>
              <th>{ingles ? 'Severity' : 'Criticidad'}</th>
              <th>{ingles ? 'Actions' : 'Acciones'}</th>
            </tr>
          </thead>
          <tbody>
            {alertsData.map((alert) => (
              <tr key={alert.id} className={styles.tableRow}>
                <td>
                  <span className={`${styles.alertType} ${styles[alert.tipo.toLowerCase()]}`}>
                    {alert.tipo}
                  </span>
                </td>
                <td>{alert.mensaje}</td>
                <td>{alert.timestamp}</td>
                <td>
                  <span className={`${styles.severityBadge} ${styles[alert.criticidad.toLowerCase()]}`}>
                    {alert.criticidad}
                  </span>
                </td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionBtn}>✓</button>
                    <button className={styles.actionBtn}>👁️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSettings = () => (
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

  return (
    <div className={styles.demoContainer}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img src="/logo_nh_b.png" alt="NetHive" className={styles.logo} />
          <h1 className={styles.title}>{textos.title}</h1>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search..." className={styles.searchInput} />
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <div className={styles.userProfile}>
            <img src="/icons/user.svg" alt="User" className={styles.userAvatar} />
          </div>
        </div>
      </header>

      <div className={styles.mainContent}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <nav className={styles.navigation}>
            <div 
              className={`${styles.navItem} ${activeSection === 'dashboard' ? styles.active : ''}`}
              onClick={() => handleNavClick('dashboard')}
            >
              <span className={styles.navIcon}>📊</span>
              {textos.navigation.dashboard}
            </div>
            <div 
              className={`${styles.navItem} ${activeSection === 'inventory' ? styles.active : ''}`}
              onClick={() => handleNavClick('inventory')}
            >
              <span className={styles.navIcon}>📦</span>
              {textos.navigation.inventory}
            </div>
            <div 
              className={`${styles.navItem} ${activeSection === 'topology' ? styles.active : ''}`}
              onClick={() => handleNavClick('topology')}
            >
              <span className={styles.navIcon}>🌐</span>
              {textos.navigation.topology}
            </div>
            <div 
              className={`${styles.navItem} ${activeSection === 'alerts' ? styles.active : ''}`}
              onClick={() => handleNavClick('alerts')}
            >
              <span className={styles.navIcon}>🚨</span>
              {textos.navigation.alerts}
            </div>
            <div 
              className={`${styles.navItem} ${activeSection === 'settings' ? styles.active : ''}`}
              onClick={() => handleNavClick('settings')}
            >
              <span className={styles.navIcon}>⚙️</span>
              {textos.navigation.settings}
            </div>
          </nav>
        </aside>

        {/* Dashboard Content */}
        <main className={styles.dashboardContent}>
          <div className={styles.dashboardHeader}>
            <h2>{textos.navigation[activeSection]}</h2>
            <button className={styles.backButton} onClick={handleBackToHome}>
              ← {textos.backButton}
            </button>
          </div>

          {renderContent()}
        </main>
      </div>

      {/* Selected Component Modal */}
      {selectedComponent && (
        <div className={styles.modal} onClick={() => setSelectedComponent(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h3>Detalles de {selectedComponent}</h3>
            <p>Estado: Operativo</p>
            <p>Última actualización: Hace 2 minutos</p>
            <p>Conexiones activas: 8/12</p>
            <button onClick={() => setSelectedComponent(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoInteractivo;