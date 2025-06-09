
import { Text, Merged  } from '@react-three/drei';
import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';



  const MenuText = forwardRef((props, menuTextRef) => {


  
  return (
    
    <group ref={menuTextRef} {...props} dispose={null} >

     <Text name='logo_cbluna_text'  scale={[1.1,1.5,1]} position={[1, 0.4, -6.5]} fontSize={0.21} color={'#ffffff'} maxWidth={10} textAlign='center' font="./fonts/sora.ttf">
     Computer Business Link unified Network Apps 
      <meshStandardMaterial toneMapped={false} emissive={"#ffffff"} emissiveIntensity={1} />
    </Text>
     <Text name='nosotros_text' position={[-4.1, 2.7, -6.4]} fontSize={0.7} color={'#ffffff'} maxWidth={7} textAlign='center' font="./fonts/sora.ttf">
      Nosotros 
      <meshStandardMaterial  toneMapped={false} emissive={"#ffffff"} emissiveIntensity={2} />
    </Text>
     <Text name='proyectos_text' position={[-0.9, 6.42, -6.4]} fontSize={0.7} color={'#ffffff'} maxWidth={7} textAlign='center' font="./fonts/sora.ttf">
      Proyectos 
      <meshStandardMaterial toneMapped={false} emissive={"#ffffff"} emissiveIntensity={2} />
    </Text>
     <Text name='desarrollo_text' position={[5.8, 6.1, -6.4]} fontSize={0.7} color={'#ffffff'} maxWidth={7} textAlign='center' font="./fonts/sora.ttf">
      Desarrollo 
      <meshStandardMaterial toneMapped={false} emissive={"#ffffff"} emissiveIntensity={2} />
    </Text>
     <Text  name='servicios_text' position={[3.8, -1.4, -6.4]} fontSize={0.7} color={'#ffffff'} maxWidth={7} textAlign='center' font="./fonts/sora.ttf">
      Servicios 
      <meshStandardMaterial toneMapped={false} emissive={"#ffffff"} emissiveIntensity={2} />
    </Text>
     <Text name='speedtest_text' position={[-2.2, -1, -6.2]} fontSize={0.7} color={'#ffffff'} maxWidth={7} textAlign='center' font="./fonts/sora.ttf">
      SpeedTest 
      <meshStandardMaterial toneMapped={false} emissive={"#ffffff"} emissiveIntensity={2} />
    </Text>
     <Text  name='contacto_text' position={[7.2, 1.5, -6.4]} fontSize={0.7} color={'#ffffff'} maxWidth={7} textAlign='center' font="./fonts/sora.ttf">
      Contacto
      <meshStandardMaterial toneMapped={false} emissive={"#ffffff"} emissiveIntensity={2} />
    </Text>
   

    </group>
    
  );

});

export default MenuText;