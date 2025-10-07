// PortfolioManager.jsx
// Wrapper para gestionar comunicación entre filtros (Sección 2) y grid (Sección 3)

import { useState, useCallback } from 'react';
import PortfolioSeccion2 from '../Secciones/PortfolioSeccion2';
import PortfolioSeccion3 from '../Secciones/PortfolioSeccion3';

const PortfolioManager = () => {
  const [filters, setFilters] = useState({
    industry: 'Todos',
    format: 'all',
    style: 'Todos'
  });

  // useCallback para evitar recrear la función en cada render
  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  return (
    <>
      <PortfolioSeccion2 onFilterChange={handleFilterChange} />
      <PortfolioSeccion3 filters={filters} />
    </>
  );
};

export default PortfolioManager;
