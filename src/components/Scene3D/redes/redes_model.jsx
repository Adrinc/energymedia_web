import { useAnimations, useGLTF, MeshReflectorMaterial, Float } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import * as THREE from 'three';

export default function RedesModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./../models/redes1.gltf', true);
  const { actions } = useAnimations(animations, group);

  const [hovered, setHovered] = useState({
    youtube: false,
    twitter: false,
    facebook: false,
    telegram: false,
  });
  const floatConfig = {
    speed: 2,
    rotationIntensity: 0.2,
    floatIntensity: 0.5,
    floatingRange: [0.05, 0.15],
  };

  useEffect(() => {
    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        console.log(`Reproduciendo animación: ${actionName}`);
        const action = actions[actionName];
        action.timeScale = 0.5; 
        action.play(); 
      });
    }
  }, [actions]);

  const handlePointerEnter = (event, platform) => {
    document.body.style.cursor = 'pointer';
    setHovered((prev) => ({ ...prev, [platform]: true }));
    gsap.to(event.object.scale, { x: 1.15, duration: 0.5 });
    gsap.to(event.object.scale, { y: 1.15, duration: 0.5 });
    gsap.to(event.object.scale, { z: 1.15, duration: 0.5 });

    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        actions[actionName].paused = true; 
      });
    }
  };

  const handlePointerLeave = (event, platform) => {
    document.body.style.cursor = 'auto';
    setHovered((prev) => ({ ...prev, [platform]: false }));
    gsap.to(event.object.scale, { y: 1, duration: 0.5 });
    gsap.to(event.object.scale, { x: 1, duration: 0.5 });
    gsap.to(event.object.scale, { z: 1, duration: 0.5 });

    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        actions[actionName].paused = false; 
      });
    }
  };

  const openSocialMedia = (url, event) => {
    event.stopPropagation(); 
    window.open(url, '_blank');
  };

  return (
    <group {...props} dispose={null}>
      <Float {...floatConfig}>

      <group
        name="youtube_container"
        position={[1.38, 1.332, 0.134]}
        rotation={[Math.PI, -1.554, Math.PI]}
        scale={[0.099, 1.114, 0.76]}
        onClick={(event) => openSocialMedia('https://www.youtube.com', event)}
      >
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={hovered.youtube ? new THREE.MeshBasicMaterial({ color: 0xff0000 }) : materials['background.001']}
          onPointerEnter={(event) => handlePointerEnter(event, 'youtube')}
          onPointerLeave={(event) => handlePointerLeave(event, 'youtube')}
        />
        <mesh
          name="Cube003_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials.iconWhite}
        />
        <mesh
          name="Cube003_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials['marco.001']}
        />
        <mesh
          name="Cube003_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_3.geometry}
          material={materials['glass.001']}
        />
        <mesh
          name="Cube003_4"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_4.geometry}
          material={materials['text.001']}
        />
      </group>
      </Float>
      <Float {...floatConfig}>

   
      <group
        name="twitter_container"
        position={[-4.063, 1.341, 0.363]}
        rotation={[0, -1.425, 0]}
        scale={[0.099, 1.114, 0.76]}
        onClick={(event) => openSocialMedia('https://www.twitter.com', event)}
      >
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={hovered.twitter ? new THREE.MeshBasicMaterial({ color: 0x1DA1F2 }) : materials['background.002']}
          onPointerEnter={(event) => handlePointerEnter(event, 'twitter')}
          onPointerLeave={(event) => handlePointerLeave(event, 'twitter')}
        />
        <mesh
          name="Cube005_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.iconWhite}
        />
        <mesh
          name="Cube005_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['marco.002']}
        />
        <mesh
          name="Cube005_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials['glass.002']}
        />
        <mesh
          name="Cube005_4"
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials['text.002']}
        />
      </group>
      </Float>
      <Float {...floatConfig}>
      <group
        name="facebook_container"
        position={[3.78, 1.299, 0.818]}
        rotation={[Math.PI / 2, 0, 0.465]}
        scale={[4.837, 3.136, 5.287]}
        onClick={(event) => openSocialMedia('https://www.facebook.com', event)}
      >
               <mesh
          name="Curve006"
          castShadow
          receiveShadow
          geometry={nodes.Curve006.geometry}
          material={materials.iconWhite}
        />
        <mesh
          name="Curve006_1"
          castShadow
          receiveShadow
          geometry={nodes.Curve006_1.geometry}
          material={materials['marco.003']}
        />
        <mesh
          name="Curve006_2"
          castShadow
          receiveShadow
          geometry={nodes.Curve006_2.geometry}
          material={materials['glass.003']}
        />
        <mesh
          name="Curve006_3"
          castShadow
          receiveShadow
          geometry={nodes.Curve006_3.geometry}
          material={hovered.facebook ? new THREE.MeshBasicMaterial({ color: 0x0023ff }) : materials['background.003']}
          onPointerEnter={(event) => handlePointerEnter(event, 'facebook')}
          onPointerLeave={(event) => handlePointerLeave(event, 'facebook')}
        />
        <mesh
          name="Curve006_4"
          castShadow
          receiveShadow
          geometry={nodes.Curve006_4.geometry}
          material={materials['text.004']}
        />
      </group>
      </Float>
      <Float {...floatConfig}>
      <group
        name="telegram_container"
        position={[-1.194, 1.337, -0.082]}
        rotation={[Math.PI, -1.554, Math.PI]}
        scale={[0.099, 1.114, 0.76]}
        onClick={(event) => openSocialMedia('https://www.telegram.org', event)}
      >
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={hovered.telegram ? new THREE.MeshBasicMaterial({ color: 0x9e00ff }) : materials.background}
          onPointerEnter={(event) => handlePointerEnter(event, 'telegram')}
          onPointerLeave={(event) => handlePointerLeave(event, 'telegram')}
        />
        <mesh
          name="Cube_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.glass}
        />
        <mesh
          name="Cube_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.marco}
        />
        <mesh
          name="Cube_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials.iconWhite}
        />
        <mesh
          name="Cube_4"
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials['text.003']}
        />
      </group>
      </Float>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} >
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[500, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={20}
          roughness={0}
          depthScale={2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0D0E26"
          metalness={0.5}
        />
      </mesh>
      <mesh position={[0, 0, -3]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[500, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={20}
          roughness={0}
          depthScale={2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0D0E26"
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('./../models/redes1.gltf');