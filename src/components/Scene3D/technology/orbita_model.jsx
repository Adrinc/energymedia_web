import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';

export default function OrbitaModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./../models/orbita4.glb', true);
  const { actions } = useAnimations(animations, group);

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

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="pantalla_iphone"
          position={[-13.637, -3.327, 0]}
          rotation={[-Math.PI / 2, 0.004, 0]}
          scale={[1.557, 0.116, 1.557]}>
          <mesh
            name="iphone_x_Material004_0"
            castShadow
            receiveShadow
            geometry={nodes.iphone_x_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="iphone_x_Material004_0_1"
            castShadow
            receiveShadow
            geometry={nodes.iphone_x_Material004_0_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="iphone_x_Material004_0_2"
            castShadow
            receiveShadow
            geometry={nodes.iphone_x_Material004_0_2.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="iphone_x_Material004_0_3"
            castShadow
            receiveShadow
            geometry={nodes.iphone_x_Material004_0_3.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group
          name="pantalla_mac"
          position={[12.947, -3.327, -4.206]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.269}>
          <mesh
            name="Object_2"
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials['Glass_-_Heavy_Color']}
          />
          <mesh
            name="Object_2_1"
            castShadow
            receiveShadow
            geometry={nodes.Object_2_1.geometry}
            material={materials['Aluminum_-_Anodized_Glossy_Grey_keyboard.jpg']}
          />
          <mesh
            name="Object_2_2"
            castShadow
            receiveShadow
            geometry={nodes.Object_2_2.geometry}
            material={materials['Aluminum_-_Anodized_Glossy_Grey']}
          />
          <mesh
            name="Object_2_3"
            castShadow
            receiveShadow
            geometry={nodes.Object_2_3.geometry}
            material={materials['Plastic_-_Translucent_Matte_Gray']}
          />
        </group>
        <group name="cuerpo_ipad" position={[0, -3.327, 13.637]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh
            name="Cube003_Body_0"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Body_0.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cube003_Body_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Body_0_1.geometry}
            material={materials.Dark_ipad}
          />
          <mesh
            name="Cube003_Body_0_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Body_0_2.geometry}
            material={materials.pantallaipad}
          />
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
          />
          <mesh
            name="Curve_1"
            castShadow
            receiveShadow
            geometry={nodes.Curve_1.geometry}
            material={materials.azul_oscuro}
          />
          <mesh
            name="Curve_2"
            castShadow
            receiveShadow
            geometry={nodes.Curve_2.geometry}
            material={materials.luna}
          />
        </group>
      </group>
    </group>
  )
}





useGLTF.preload('./../models/orbita4.glb');
