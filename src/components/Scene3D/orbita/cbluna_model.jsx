
import { useAnimations, useGLTF, PerspectiveCamera } from '@react-three/drei'
import React, { useRef }  from 'react'
import { useEffect } from 'react'
import { TextComponents } from './text/maintext';
//import Text from drei

import HolographicMaterial from '../js/HolographicMaterial.jsx';

export default function Cbl(props)
{
  

const group = useRef()
  
    const { nodes, materials, animations } = useGLTF('./../models/cbluna.gltf', true);


    <group {...props} dispose={null}>
    <group name="Scene">
      <mesh
        name="luna_text"
        castShadow
        receiveShadow
        geometry={nodes.luna_text.geometry}
        material={materials.azul_claro}
        position={[-0.956, 0.714, 0.386]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={85.437}
      />
      <mesh
        name="cb_text"
        castShadow
        receiveShadow
        geometry={nodes.cb_text.geometry}
        material={materials.azul_oscuro}
        position={[-2.61, 0.822, 0.386]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={85.437}
      />
      <mesh
        name="luna"
        castShadow
        receiveShadow
        geometry={nodes.luna.geometry}
        material={materials.luna}
        position={[1.812, 1.505, 0.386]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={85.437}
      />
      <mesh
        name="slogan_text"
        castShadow
        receiveShadow
        geometry={nodes.slogan_text.geometry}
        material={nodes.slogan_text.material}
        position={[-1.279, 0.001, 0.386]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={85.437}
      />
    </group>
  </group>

}


useGLTF.preload('./../models/cbluna.gltf');