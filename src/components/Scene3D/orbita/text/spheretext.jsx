import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Billboard, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const technologies = [

  { name: 'Ionic', logo: '/icons/ionic.png' },
  { name: 'Astro', logo: '/icons/astro.png' },
  { name: 'Flutter', logo: '/icons/flutter.png' },
  { name: 'Vue', logo: '/icons/vue.png' },
  { name: 'Tailwind', logo: '/icons/tailwind.png' },
  { name: 'MySQL', logo: '/icons/mysql.png' },
  { name: 'Supabase', logo: '/icons/supabase.png' },
  { name: 'IBM', logo: '/icons/ibm.png' },
  { name: 'Apache', logo: '/icons/apache.png' },
];


function Word({ logo, children, ...props }) {
    const color = new THREE.Color();
    const fontProps = { font: './fonts/InterVariable.ttf', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);
    // Change the mouse cursor on hover
    useEffect(() => {
      if (hovered) document.body.style.cursor = 'pointer';
      return () => (document.body.style.cursor = 'auto');
    }, [hovered]);
    // Tie component to the render-loop
    useFrame(({ camera }) => {
      ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1);
    });
    return (
      <Billboard {...props}>
        <group>
          <mesh position={[-3.5, 0, 0]}>
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial map={new THREE.TextureLoader().load(logo)} />
          </mesh>
          <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...fontProps} position={[2.5, 0, 0]}>
            {children}
          </Text>
        </group>
      </Billboard>
    );
  }
  
  function CloudWords({ radius = 20 }) {
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
      const temp = [];
      const spherical = new THREE.Spherical();
      const phiSpan = Math.PI / (technologies.length + 1);
      const thetaSpan = (Math.PI * 2) / technologies.length;
      for (let i = 1; i < technologies.length + 1; i++) {
        const tech = technologies[i - 1];
        temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * i)), tech]);
      }
      return temp;
    }, [radius]);
    return words.map(([pos, tech], index) => <Word key={index} position={pos} logo={tech.logo} children={tech.name} />);
  }
  
  export default CloudWords;