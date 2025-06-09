import { Text } from '@react-three/drei';
import React from 'react';

export function TextComponents({
  texto = "hola mundo",
  texto_tamaño = 0.5,
  color = '#ffffff',
  posicion = [0, 0, 0]
}) {
  return (
    <>
      <Text position={posicion} fontSize={texto_tamaño} color={color} maxWidth={100} textAlign='center'>
        {texto}
        <meshStandardMaterial toneMapped={false} emissive={color} emissiveIntensity={2} />
      </Text>
    </>
  );
}