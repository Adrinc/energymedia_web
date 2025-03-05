import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';
import HolographicMaterial from '../js/HolographicMaterial.jsx';

export default function OrbitaModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./../models/orbita4.glb', true);
  const { actions } = useAnimations(animations, group);
  const { camera } = useThree();

  const [hoveredGroup, setHoveredGroup] = useState(null);
  const [clickedGroup, setClickedGroup] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0, z: 0 });

  const holo_config = {
    fresnelAmount: 0.2,
    fresnelOpacity: 0.15,
    hologramBrightness: 0.7,
    scanlineSize: 6,
    signalSpeed: 0.5,
    hologramColor: "#51a4de",
    hologramOpacity: 1.0,
    blinkFresnelOnly: true,
    enableBlinking: false,
    enableAdditive: true,
    side: "FrontSide"
  };

  useEffect(() => {
    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        console.log(`Reproduciendo animación: ${actionName}`);
        const action = actions[actionName];
        action.timeScale = 0.5; // Reducir la velocidad a la mitad
        action.play(); // Reproducir la animación
      });
    }
  }, [actions]);

  const handlePointerEnter = (groupName) => {
    if (clickedGroup) return; // No permitir hover si ya se ha hecho clic en un grupo
    document.body.style.cursor = 'pointer';
    setHoveredGroup(groupName);
    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        actions[actionName].paused = true; // Pausar todas las animaciones
      });
    }
  };

  const handlePointerLeave = () => {
    if (clickedGroup) return; // No permitir hover si ya se ha hecho clic en un grupo
    document.body.style.cursor = 'auto';
    setHoveredGroup(null);
    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        actions[actionName].paused = false; // Reanudar todas las animaciones
      });
    }
  };

  const handleClick = (url) => {
    setClickedGroup(hoveredGroup);
    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        actions[actionName].stop(); // Pausar todas las animaciones
      });
    }
    gsap.to(camera.position, {
      duration: 2,
      x: currentPosition.x,
      y: currentPosition.y,
      z: currentPosition.z -11, // Ajusta la distancia de la cámara al objeto
      onUpdate: () => {
        console.log(`Posición objetivo: x=${currentPosition.x}, y=${currentPosition.y}, z=${currentPosition.z}`);
      /*   camera.lookAt(currentPosition.x, currentPosition.y, currentPosition.z); */
      },
      onComplete: () => {
        window.location.href = url;
      }
    });
  };

  useFrame(() => {
    if (hoveredGroup) {
      const group = nodes[hoveredGroup];
      const worldPosition = new THREE.Vector3();
      group.updateWorldMatrix(true, false);
      group.getWorldPosition(worldPosition);
      setCurrentPosition({ x: worldPosition.x, y: worldPosition.y, z: worldPosition.z });
      console.log(`Actualizando posición: ${hoveredGroup}, Posición: x=${worldPosition.x}, y=${worldPosition.y}, z=${worldPosition.z}`);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="pantalla_iphone"
          position={[-13.637, -3.327, 0]}
          rotation={[-Math.PI / 2, 0.004, 0]}
          scale={[1.557, 0.116, 1.557]}
    /*       onPointerEnter={() => handlePointerEnter('pantalla_iphone')} */
          onPointerLeave={handlePointerLeave}
          onClick={() => handleClick('/desarrollo_movil')}
          >
          <mesh
            name="iphone_x_Material004_0"
            castShadow
            receiveShadow
            geometry={nodes.iphone_x_Material004_0.geometry}
            material={materials['Material.004']}
            >
            {/* {hoveredGroup === 'pantalla_iphone' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
          </mesh>
          <mesh
            name="iphone_x_Material004_0_1"
            castShadow
            receiveShadow
            geometry={nodes.iphone_x_Material004_0_1.geometry}
            material={materials['Material.001']}
            >
        {/*     {hoveredGroup === 'pantalla_iphone' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
          </mesh>
          <mesh
            name="iphone_x_Material004_0_2"
            castShadow
            receiveShadow
            geometry={nodes.iphone_x_Material004_0_2.geometry}
            material={materials['Material.003']}
            >
        {/*     {hoveredGroup === 'pantalla_iphone' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
          </mesh>
          <mesh
            name="iphone_x_Material004_0_3"
            castShadow
            receiveShadow
            geometry={nodes.iphone_x_Material004_0_3.geometry}
            material={materials['Material.002']}
            >
   {/*          {hoveredGroup === 'pantalla_iphone' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
          </mesh>
        </group>
        <group
            name="pantalla_mac"
            position={[12.947, -3.327, -4.206]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.269}
/*             onPointerEnter={() => handlePointerEnter('pantalla_mac')} */
            onPointerLeave={handlePointerLeave}
            onClick={() => handleClick('/desarrollo_web')}
          >
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials['Glass_-_Heavy_Color']}
              >
{/*               {hoveredGroup === 'pantalla_mac' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
            </mesh>
            <mesh
              name="Object_2_1"
              castShadow
              receiveShadow
              geometry={nodes.Object_2_1.geometry}
              material={materials['Aluminum_-_Anodized_Glossy_Grey_keyboard.jpg']}
              >
     {/*          {hoveredGroup === 'pantalla_mac' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
            </mesh>
            <mesh
              name="Object_2_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2_2.geometry}
              material={materials['Aluminum_-_Anodized_Glossy_Grey']}
              >
       
            </mesh>
            <mesh
              name="Object_2_3"
              castShadow
              receiveShadow
              geometry={nodes.Object_2_3.geometry}
              material={materials['Plastic_-_Translucent_Matte_Gray']}
              >
{/*               {hoveredGroup === 'pantalla_mac' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
            </mesh>
          </group>
        <group name="cuerpo_ipad" position={[0, -3.327, 13.637]} rotation={[0, 0, -Math.PI / 2]}
       /*    onPointerEnter={() => handlePointerEnter('cuerpo_ipad')} */
          onPointerLeave={handlePointerLeave}
          onClick={() => handleClick('/desarrollo_tablet')}>
          <mesh
            name="Cube003_Body_0"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Body_0.geometry}
            material={materials.Body}
            >
{/*             {hoveredGroup === 'cuerpo_ipad' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
          </mesh>
          <mesh
            name="Cube003_Body_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Body_0_1.geometry}
            material={materials.Dark_ipad}
            >
{/*             {hoveredGroup === 'cuerpo_ipad' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
          </mesh>
          <mesh
            name="Cube003_Body_0_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Body_0_2.geometry}
            material={materials.pantallaipad}
            >
{/*             {hoveredGroup === 'cuerpo_ipad' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
          </mesh>
        </group>
        <group name="Círculo_Bezier" position={[0, -3.327, 0]} scale={13.637} />
        <group
          name="luna_text"
          position={[-0.617, 0.651, 0.386]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={199.867}>
          <mesh
            name="Curve"
            castShadow
            receiveShadow
            geometry={nodes.Curve.geometry}
            material={materials.azul_claro}
            >
{/*             {hoveredGroup === 'luna_text' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
          </mesh>
          <mesh
            name="Curve_1"
            castShadow
            receiveShadow
            geometry={nodes.Curve_1.geometry}
            material={materials.azul_oscuro}
            >
           {/*  {hoveredGroup === 'luna_text' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
          </mesh>
          <mesh
            name="Curve_2"
            castShadow
            receiveShadow
            geometry={nodes.Curve_2.geometry}
            material={materials.luna}
            >
     {/*        {hoveredGroup === 'luna_text' && !clickedGroup && <HolographicMaterial {...holo_config} />} */}
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./../models/orbita4.glb');