import { Sparkles,AdaptiveDpr, Html, Clouds, Cloud, Stars } from '@react-three/drei';
import React, { Suspense, useRef } from 'react';
import Placeholder from './Placeholder.jsx';
import { ToneMapping, Bloom,  EffectComposer,  } from '@react-three/postprocessing';

import { bloomConfig, toneMappingConfig} from './scene_config.js';

import { TextComponents } from './text/maintext.jsx';
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

  
{/*   <Suspense fallback={<Placeholder position-y={0} scale={[2, 3, 2]} />}> */}
   {/*  <TextComponents posicion={[0, 7, -6]} scale={1} rotation={[0, 0, 0]} texto='Detras de nuestros proyectos' texto_tamaño={1}/> */}
      <group ref={groupRef} rotation={[0, 0, 0]} scale={0.6} position={[0, -2, -40]}>
        <CloudWords count={6} radius={35} onTechClick={onTechClick} />
      </group>
      <Sparkles color={"#003aff"} count={150} speed={0.1} position={[0,0,3]} scale={10} size={2} />
    <Stars radius={100} depth={5} count={1000} factor={4} saturation={1} fade speed={1} />
{/*   </Suspense> */}

</>
  );
}
