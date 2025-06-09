import { AdaptiveDpr } from '@react-three/drei';

import React, { Suspense, useState, useRef, useEffect } from 'react';
import Placeholder from './Placeholder';
import { ToneMapping, ChromaticAberration, Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';

import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig, enviromentConfig } from './redes_config';

import RedesModel from './redes_model.jsx';


import { TextComponents } from './text/maintext';



export default function Experienc(props) {


  return (
<>
<AdaptiveDpr pixelated /> 
      <Suspense fallback={null}>
        <EffectComposer multisampling={1}>
          <ToneMapping {...toneMappingConfig} />
        {/*   <ChromaticAberration {...chromaticAberrationConfig} /> */}
          <Bloom {...bloomConfig} />
   {/*        <Noise {...noiseConfig} /> */}
  {/*         <Vignette {...vignetteConfig} /> */}
        </EffectComposer>
      </Suspense>
{/*   <Environment {...enviromentConfig} /> */}
  <ambientLight intensity={1} color={'#5d5d5d'} />

  
{/*   <Suspense fallback={<Placeholder position-y={0} scale={[2, 3, 2]} />}> */}



    <RedesModel position={[0, -2, 5]} scale={1} rotation={[0, 0, 0]} />
    <TextComponents posicion={[0, 2, 2]} rotation={[0, 0, 0]} texto='Redes Sociales' texto_tamaño={1}/>
   
{/*   </Suspense> */}

</>
  );
}
