import { Sparkles,AdaptiveDpr, Stars } from '@react-three/drei';
import React, { Suspense, useRef } from 'react';
import { ToneMapping, Bloom,  EffectComposer,  } from '@react-three/postprocessing';

import { bloomConfig, toneMappingConfig} from './scene_config.js';


import CloudWords  from './text/spheretext.jsx';

import { useFrame } from '@react-three/fiber';

export default function Experienc({ onTechClick }) {
  const groupRef = useRef();

  // Rotate the group
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005; // Ajusta la velocidad de rotación aquí
    }
  });

  return (
<>
<AdaptiveDpr pixelated /> 
      <Suspense fallback={null}>
        <EffectComposer multisampling={1}>
          <ToneMapping {...toneMappingConfig} />
          <Bloom {...bloomConfig} />
        </EffectComposer>
      </Suspense>

  <ambientLight intensity={1} color={'#5d5d5d'} />

      <group ref={groupRef} rotation={[0, 0, 0]} scale={0.6} position={[0, -2, -40]}>
        <CloudWords count={6} radius={35} onTechClick={onTechClick} />
      </group>
      <Sparkles color={"#003aff"} count={150} speed={0.1} position={[0,0,3]} scale={10} size={2} />
    <Stars radius={100} depth={5} count={1000} factor={4} saturation={1} fade speed={1} />


</>
  );
}
