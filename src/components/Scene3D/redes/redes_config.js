
import { BlendFunction, Resolution } from 'postprocessing'
import * as THREE from 'three'

 export const enviromentConfig = {
    encoding:THREE.SRGBColorSpace,
    files: [
        './enviroments/px.png',
        './enviroments/nx.png',
        './enviroments/py.png',
        './enviroments/ny.png',
        './enviroments/pz.png',
        './enviroments/nz.png'
    ]
    };

    export const pointLightConfig = {
      name: 'directional_light',
      castShadow: true,
      intensity: 10,
      position: [1.9, 3, 1],
      penumbra: 0.5,
      color: '#fff',
    };

export const vignetteConfig = {
    offset: 0.1,
    darkness: 0.7,
    blendFunction: BlendFunction.SCREEN,
  };
  
  export const chromaticAberrationConfig = {
    offset: [0.0001, 0.0001],
    blendFunction: BlendFunction.SCREEN,
  };
  
  export const bloomConfig = {
    mipmapBlur: true,
    intensity: 0.3,
    luminanceThreshold: 4,
    luminanceSmoothing:1,
    resolutionX: Resolution.AUTO_SIZE,
    resolutionY: Resolution.AUTO_SIZE,
    kernelSize: 1,
    blendingFunction: BlendFunction.SCREEN,
  };
  
  export const noiseConfig = {
    opacity: 0.3,
    blendingFunction: BlendFunction.NORMAL,
    premultiply: true,
  };
  
  export const toneMappingConfig = {
    blendFunction: BlendFunction.SCREEN,
    mode: 2
    };



