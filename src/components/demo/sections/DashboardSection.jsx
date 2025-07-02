import React, { useState, useCallback } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import StatCard from '../StatCard';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Handle,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import styles from '../css/dashboardSection.module.css';
import flowStyles from '../css/dashboardFlow.module.css'; // Cambiado de topologyFlow a dashboardFlow

// Nodo personalizado para el dashboard
const DashboardNode = ({ data }) => {
  return (
    <div className={`${flowStyles.customNode} ${flowStyles[data.type]}`}>
      {/* Handles para conexiones */}
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        style={{
          background: '#7ae582',
          width: 8,
          height: 8,
          border: '2px solid #fff',
        }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={{
          background: '#7ae582',
          width: 8,
          height: 8,
          border: '2px solid #fff',
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        style={{
          background: '#7ae582',
          width: 8,
          height: 8,
          border: '2px solid #fff',
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        style={{
          background: '#7ae582',
          width: 8,
          height: 8,
          border: '2px solid #fff',
        }}
      />
      
      <div className={flowStyles.nodeHeader}>
        <div className={flowStyles.nodeIcon}>{data.icon}</div>
        <div className={flowStyles.nodeTitle}>{data.label}</div>
      </div>
      
      {data.status && (
        <div className={flowStyles.nodeStatus}>
          <div className={`${flowStyles.statusDot} ${flowStyles[data.status]}`}></div>
          <span>{data.statusText}</span>
        </div>
      )}
      
      {data.stats && (
        <div className={flowStyles.equipmentList}>
          {data.stats.map((stat, idx) => (
            <div key={idx} className={flowStyles.equipment}>
              <span className={flowStyles.equipmentDot}></span>
              <span>{stat.label}: {stat.value}</span>
            </div>
          ))}
        </div>
      )}
      
      {data.health && (
        <div className={flowStyles.portStatus}>
          {data.health}
        </div>
      )}
    </div>
  );
};

const nodeTypes = {
  dashboard: DashboardNode,
};

const DashboardSection = ({ 
  inventoryData, 
  topologyConnections, 
  alertsData, 
  alerts, 
  onNavClick, 
  onComponentClick 
}) => {
  const ingles = useStore(isEnglish);
  const [viewMode, setViewMode] = useState('visual');

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

  const stats = getStats();

  // Nodos para la vista visual del dashboard
  const initialNodes = [
    {
      id: 'overview-1',
      type: 'dashboard',
      position: { x: 500, y: 80 }, // Más centrado y con mayor separación superior
      data: {
        label: ingles ? 'Network Overview' : 'Vista General de Red',
        icon: '🌐',
        type: 'mdf',
        status: 'active',
        statusText: ingles ? 'All Systems Operational' : 'Todos los Sistemas Operativos',
        stats: [
          { label: ingles ? 'Uptime' : 'Tiempo Activo', value: '99.8%' },
          { label: ingles ? 'Performance' : 'Rendimiento', value: ingles ? 'Optimal' : 'Óptimo' }
        ],
        health: ingles ? 'System Health: Excellent' : 'Salud del Sistema: Excelente'
      },
    },
    {
      id: 'switches-1',
      type: 'dashboard',
      position: { x: 100, y: 350 }, // Mayor separación vertical y horizontal
      data: {
        label: ingles ? 'Switch Infrastructure' : 'Infraestructura de Switches',
        icon: '🔌',
        type: 'switch',
        status: stats.switches.value > 0 ? 'active' : 'inactive',
        statusText: `${stats.switches.value} ${ingles ? 'Active' : 'Activos'}`,
        stats: [
          { label: ingles ? 'Total Ports' : 'Puertos Totales', value: stats.switches.value * 48 },
          { label: ingles ? 'Utilization' : 'Utilización', value: '67%' }
        ],
        health: `${stats.switches.value} ${ingles ? 'switches online' : 'switches en línea'}`
      },
    },
    {
      id: 'connections-1',
      type: 'dashboard',
      position: { x: 900, y: 350 }, // Mayor separación horizontal
      data: {
        label: ingles ? 'Active Connections' : 'Conexiones Activas',
        icon: '🔗',
        type: 'idf',
        status: stats.connections.value > 0 ? 'active' : 'warning',
        statusText: `${stats.connections.value} ${ingles ? 'Connections' : 'Conexiones'}`,
        stats: [
          { label: ingles ? 'Bandwidth' : 'Ancho de Banda', value: '850 Mbps' },
          { label: ingles ? 'Latency' : 'Latencia', value: '2ms' }
        ],
        health: ingles ? 'Network Performance: Good' : 'Rendimiento de Red: Bueno'
      },
    },
    {
      id: 'alerts-1',
      type: 'dashboard',
      position: { x: 500, y: 650 }, // Mayor separación vertical y centrado
      data: {
        label: ingles ? 'System Alerts' : 'Alertas del Sistema',
        icon: stats.alerts.value > 0 ? '⚠️' : '✅',
        type: stats.alerts.value > 0 ? 'server' : 'switch',
        status: stats.alerts.value > 0 ? 'warning' : 'active',
        statusText: stats.alerts.value > 0 ? 
          `${stats.alerts.value} ${ingles ? 'Active Alerts' : 'Alertas Activas'}` :
          ingles ? 'No Active Alerts' : 'Sin Alertas Activas',
        stats: [
          { label: ingles ? 'Critical' : 'Críticas', value: alertsData.filter(a => a.tipo === 'Critical').length },
          { label: ingles ? 'Warnings' : 'Advertencias', value: alertsData.filter(a => a.tipo === 'Warning').length }
        ],
        health: stats.alerts.value === 0 ? 
          (ingles ? 'All systems normal' : 'Todos los sistemas normales') :
          (ingles ? 'Attention required' : 'Atención requerida')
      },
    },
  ];

  // Conexiones entre nodos
  const initialEdges = [
    {
      id: 'overview-switches',
      source: 'overview-1',
      target: 'switches-1',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#3b82f6', strokeWidth: 3 },
      label: ingles ? 'Monitoring' : 'Monitoreando',
      labelStyle: { fill: '#ffffff', fontWeight: 700, fontSize: '12px' },
    },
    {
      id: 'overview-connections',
      source: 'overview-1',
      target: 'connections-1',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#10b981', strokeWidth: 3 },
      label: ingles ? 'Traffic Analysis' : 'Análisis de Tráfico',
      labelStyle: { fill: '#ffffff', fontWeight: 700, fontSize: '12px' },
    },
    {
      id: 'switches-alerts',
      source: 'switches-1',
      target: 'alerts-1',
      type: 'smoothstep',
      animated: stats.alerts.value > 0,
      style: { 
        stroke: stats.alerts.value > 0 ? '#f59e0b' : '#6b7280', 
        strokeWidth: 2,
        strokeDasharray: stats.alerts.value > 0 ? '0' : '5,5'
      },
      label: ingles ? 'Health Check' : 'Verificación',
      labelStyle: { fill: '#ffffff', fontWeight: 700, fontSize: '11px' },
    },
    {
      id: 'connections-alerts',
      source: 'connections-1',
      target: 'alerts-1',
      type: 'smoothstep',
      animated: stats.alerts.value > 0,
      style: { 
        stroke: stats.alerts.value > 0 ? '#f59e0b' : '#6b7280', 
        strokeWidth: 2,
        strokeDasharray: stats.alerts.value > 0 ? '0' : '5,5'
      },
      label: ingles ? 'Status Report' : 'Reporte Estado',
      labelStyle: { fill: '#ffffff', fontWeight: 700, fontSize: '11px' },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onNodeClick = useCallback((event, node) => {
    // Navegar según el tipo de nodo
    switch (node.id) {
      case 'switches-1':
        onNavClick('inventory');
        break;
      case 'connections-1':
        onNavClick('topology');
        break;
      case 'alerts-1':
        onNavClick('alerts');
        break;
      default:
        // Vista general
        break;
    }
  }, [onNavClick]);

  const renderVisualDashboard = () => (
    <div className={flowStyles.flowContainer}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        connectionLineStyle={{ stroke: '#7ae582', strokeWidth: 2 }}
        defaultViewport={{ x: 0, y: 0, zoom: 0.9 }}
        fitView
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
      >
        <Controls className={flowStyles.controls} />
        <MiniMap 
          className={flowStyles.minimap}
          nodeColor={(node) => {
            switch (node.data?.type) {
              case 'mdf': return '#3b82f6';
              case 'idf': return '#10b981';
              case 'switch': return '#6366f1';
              case 'server': return '#8b5cf6';
              default: return '#6b7280';
            }
          }}
        />
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={1}
          color="#374151"
        />
      </ReactFlow>
      
      {/* Leyenda del Dashboard */}
      <div className={flowStyles.legend}>
        <h4>{ingles ? 'System Status' : 'Estado del Sistema'}</h4>
        <div className={flowStyles.legendItems}>
          <div className={flowStyles.legendItem}>
            <div className={`${flowStyles.legendDot} ${flowStyles.active}`}></div>
            <span>{ingles ? 'Operational' : 'Operacional'}</span>
          </div>
          <div className={flowStyles.legendItem}>
            <div className={`${flowStyles.legendDot} ${flowStyles.warning}`}></div>
            <span>{ingles ? 'Attention' : 'Atención'}</span>
          </div>
          <div className={flowStyles.legendItem}>
            <div className={`${flowStyles.legendDot} ${flowStyles.inactive}`}></div>
            <span>{ingles ? 'Offline' : 'Desconectado'}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatsView = () => (
    <>
      {/* Stats Cards usando el componente reutilizable */}
      <div className={styles.statsGrid}>
        <StatCard
          icon="🔌"
          value={stats.switches.value}
          label={stats.switches.label}
          color="#2563eb"
          trend={{ type: 'up', value: '+2' }}
          onClick={() => onNavClick('inventory')}
        />
        <StatCard
          icon="📋"
          value={stats.patches.value}
          label={stats.patches.label}
          color="#059669"
          onClick={() => onNavClick('inventory')}
        />
        <StatCard
          icon="🔗"
          value={stats.connections.value}
          label={stats.connections.label}
          color="#0891b2"
          trend={{ type: 'up', value: '98%' }}
          onClick={() => onNavClick('topology')}
        />
        <StatCard
          icon="⚠️"
          value={stats.alerts.value}
          label={stats.alerts.label}
          color="#dc2626"
          trend={{ type: 'down', value: '-1' }}
          onClick={() => onNavClick('alerts')}
        />
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

  return (
    <div className={styles.topologySection}>
      <div className={styles.sectionHeader}>
        <h3>{ingles ? 'Infrastructure Dashboard' : 'Panel de Infraestructura'}</h3>
        <div className={flowStyles.viewControls}>
          <button 
            className={`${flowStyles.viewButton} ${viewMode === 'visual' ? flowStyles.active : ''}`}
            onClick={() => setViewMode('visual')}
          >
            🌐 {ingles ? 'Visual Overview' : 'Vista Visual'}
          </button>
          <button 
            className={`${flowStyles.viewButton} ${viewMode === 'stats' ? flowStyles.active : ''}`}
            onClick={() => setViewMode('stats')}
          >
            📊 {ingles ? 'Statistics' : 'Estadísticas'}
          </button>
        </div>
      </div>
      
      {viewMode === 'visual' ? renderVisualDashboard() : renderStatsView()}
    </div>
  );
};

export default DashboardSection;