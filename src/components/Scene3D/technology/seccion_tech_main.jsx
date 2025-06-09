import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './seccion_tech_experience.jsx';
import TechModal from './text/techModal'; // Importa el nuevo componente
import * as THREE from 'three';


const SeccionTechCanvas = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  return <>


      <Canvas
        dpr={[0.5, 1]}
        style={{
          height: '100%',
          width: '100vw',
           position: 'relative'
        }}
        performance={{
          current: 1,
          min: 0.1,
          max: 1,
          debounce: 200,
          regress: 0.5,
        }}
        /* shadows */
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
          toneMapping: THREE.NoToneMapping,
          toneMappingExposure: 0.6,
          gammaOutput: true,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        <Experience onTechClick={setSelectedTech} />
      </Canvas>
      
        <TechModal tech={selectedTech} onClose={() => setSelectedTech(null)} />


        </>
};


export default SeccionTechCanvas;