import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Billboard, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const technologies = [
  { name: 'Airflow', logo: './image/logos/airflow.png', descriptionES: 'Airflow es una plataforma de flujo de trabajo que permite programar, monitorear y gestionar flujos de trabajo programados de manera programática.', descriptionEN: 'Airflow is a workflow platform that allows you to schedule, monitor, and manage workflows programmatically.', type: 'framework' },
  { name: 'MySQL', logo: './image/logos/mysql.png', descriptionES: 'MySQL es un sistema de gestión de bases de datos relacional de código abierto que permite almacenar y recuperar datos de manera eficiente.', descriptionEN: 'MySQL is an open-source relational database management system that allows efficient data storage and retrieval.', type: 'base de datos' },
  { name: 'Supabase', logo: './image/logos/supabase.png', descriptionES: 'Supabase es una alternativa de código abierto a Firebase, que proporciona una base de datos Postgres con capacidades de autenticación, almacenamiento y funciones en tiempo real.', descriptionEN: 'Supabase is an open-source alternative to Firebase, providing a Postgres database with authentication, storage, and real-time features.', type: 'servicio' },
  { name: 'BonitaSoft', logo: './image/logos/bonitaSoft.png', descriptionES: 'BonitaSoft es una plataforma de automatización de procesos de negocio que facilita la creación, ejecución y supervisión de procesos de negocio personalizados.', descriptionEN: 'BonitaSoft is a business process automation platform that facilitates the creation, execution, and monitoring of custom business processes.', type: 'software' },
  { name: 'Camunda', logo: './image/logos/camunda.png', descriptionES: 'Camunda es un motor de flujo de trabajo y automatización de procesos de negocio que permite modelar y ejecutar flujos de trabajo y procesos empresariales.', descriptionEN: 'Camunda is a workflow and business process automation engine that allows modeling and executing workflows and business processes.', type: 'software' },
  { name: 'IBM DB2', logo: './image/logos/ibmDB2.png', descriptionES: 'IBM DB2 es un sistema de gestión de bases de datos relacional que proporciona herramientas avanzadas de análisis y gestión de datos.', descriptionEN: 'IBM DB2 is a relational database management system that provides advanced data analysis and management tools.', type: 'base de datos' },
  { name: 'Astro', logo: './image/logos/lf_astro.png', descriptionES: 'Astro es un framework de desarrollo web que facilita la construcción de sitios web estáticos y aplicaciones web modernas.', descriptionEN: 'Astro is a web development framework that makes it easy to build static websites and modern web applications.', type: 'framework' },
  { name: 'Dart', logo: './image/logos/lf_dart.png', descriptionES: 'Dart es un lenguaje de programación optimizado para el desarrollo de aplicaciones cliente, especialmente adecuado para la creación de aplicaciones móviles y web.', descriptionEN: 'Dart is a programming language optimized for client development, especially suitable for building mobile and web applications.', type: 'lenguaje' },
  { name: 'Flutter', logo: './image/logos/lf_flutter.png', descriptionES: 'Flutter es un UI toolkit de código abierto que permite la creación de aplicaciones nativas para dispositivos móviles, web y escritorio a partir de una única base de código.', descriptionEN: 'Flutter is an open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.', type: 'framework' },
  { name: 'FreeRPG', logo: './image/logos/lf_freeRPG.png', descriptionES: 'FreeRPG es un framework de desarrollo de juegos que proporciona herramientas y bibliotecas para la creación de juegos de rol de código abierto.', descriptionEN: 'FreeRPG is a game development framework that provides tools and libraries for creating open-source role-playing games.', type: 'framework' },
  { name: 'Java', logo: './image/logos/lf_java.png', descriptionES: 'Java es un lenguaje de programación de alto nivel y una plataforma de computación que permite desarrollar aplicaciones para diversos entornos, desde dispositivos móviles hasta servidores empresariales.', descriptionEN: 'Java is a high-level programming language and computing platform that allows developing applications for various environments, from mobile devices to enterprise servers.', type: 'lenguaje' },
  { name: 'JavaScript', logo: './image/logos/lf_javascript.png', descriptionES: 'JavaScript es un lenguaje de programación interpretado y orientado a objetos que se utiliza principalmente para el desarrollo web del lado del cliente, permitiendo crear páginas web interactivas y dinámicas.', descriptionEN: 'JavaScript is an interpreted, object-oriented programming language that is primarily used for client-side web development, allowing the creation of interactive and dynamic web pages.', type: 'lenguaje' },
  { name: 'Next.js', logo: './image/logos/lf_next.png', descriptionES: 'Next.js es un framework de desarrollo web basado en React que facilita la creación de aplicaciones web y sitios estáticos con funcionalidades avanzadas como renderizado del lado del servidor y generación estática de páginas.', descriptionEN: 'Next.js is a React-based web development framework that makes it easy to create web applications and static sites with advanced features like server-side rendering and static page generation.', type: 'framework' },
  { name: 'Python', logo: './image/logos/lf_python.png', descriptionES: 'Python es un lenguaje de programación de alto nivel y propósito general, conocido por su sintaxis sencilla y legible, y ampliamente utilizado en áreas como desarrollo web, ciencia de datos, inteligencia artificial y automatización.', descriptionEN: 'Python is a high-level, general-purpose programming language, known for its simple and readable syntax, and widely used in areas like web development, data science, artificial intelligence, and automation.', type: 'lenguaje' },
  { name: 'Qwik', logo: './image/logos/lf_qwik.png', descriptionES: 'Qwik es un framework de desarrollo web diseñado para optimizar la velocidad de carga y el rendimiento de aplicaciones web, permitiendo crear experiencias de usuario ultrarrápidas.', descriptionEN: 'Qwik is a web development framework designed to optimize loading speed and performance of web applications, allowing for the creation of ultra-fast user experiences.', type: 'framework' },
  { name: 'TypeScript', logo: './image/logos/lf_typescript.png', descriptionES: 'TypeScript es un lenguaje de programación tipado y de código abierto que se basa en JavaScript, proporcionando características adicionales como tipado estático y verificación de tipos en tiempo de desarrollo.', descriptionEN: 'TypeScript is a typed, open-source programming language that builds on JavaScript, providing additional features like static typing and type checking at development time.', type: 'lenguaje' },
  { name: 'Oracle', logo: './image/logos/oracle.png', descriptionES: 'Oracle es un sistema de gestión de bases de datos relacional altamente escalable y robusto, utilizado en aplicaciones empresariales críticas para gestionar grandes volúmenes de datos de manera eficiente.', descriptionEN: 'Oracle is a highly scalable and robust relational database management system, used in critical enterprise applications to efficiently manage large volumes of data.', type: 'base de datos' },
  { name: 'PostgreSQL', logo: './image/logos/postgresql.png', descriptionES: 'PostgreSQL es un sistema de gestión de bases de datos relacional y objeto-relacional de código abierto, conocido por su capacidad de extenderse y su cumplimiento con los estándares SQL.', descriptionEN: 'PostgreSQL is an open-source relational and object-relational database management system, known for its extensibility and compliance with SQL standards.', type: 'base de datos' },
  { name: 'Spark', logo: './image/logos/spark.png', descriptionES: 'Spark es un motor de procesamiento de datos de código abierto que permite realizar análisis y procesamiento de grandes volúmenes de datos de manera rápida y eficiente, soportando tanto procesamiento en tiempo real como por lotes.', descriptionEN: 'Spark is an open-source data processing engine that enables fast and efficient analysis and processing of large data volumes, supporting both real-time and batch processing.', type: 'framework' },
  { name: 'SQLite', logo: './image/logos/sqlite.png', descriptionES: 'SQLite es un sistema de gestión de bases de datos embebido, ligero y de código abierto, ampliamente utilizado en aplicaciones móviles y de escritorio por su simplicidad y eficacia.', descriptionEN: 'SQLite is a lightweight, embedded, open-source database management system, widely used in mobile and desktop applications for its simplicity and effectiveness.', type: 'base de datos' },
  { name: 'Strapi', logo: './image/logos/strapi.png', descriptionES: 'Strapi es un CMS Headless de código abierto que permite la creación, gestión y distribución de contenido a través de una API, facilitando el desarrollo de aplicaciones web y móviles.', descriptionEN: 'Strapi is an open-source Headless CMS that enables the creation, management, and distribution of content via an API, facilitating the development of web and mobile applications.', type: 'framework' },
  { name: 'AWS', logo: './image/logos/aws-logo.png', descriptionES: 'AWS (Amazon Web Services) es una plataforma de servicios en la nube que ofrece una amplia gama de servicios, desde computación y almacenamiento hasta inteligencia artificial y análisis de datos.', descriptionEN: 'AWS (Amazon Web Services) is a cloud services platform that offers a wide range of services, from computing and storage to artificial intelligence and data analytics.', type: 'servicio' },
  { name: 'Azure', logo: './image/logos/azure.png', descriptionES: 'Azure es la plataforma de servicios en la nube de Microsoft que proporciona soluciones de computación, almacenamiento, bases de datos, inteligencia artificial y más, para el desarrollo y despliegue de aplicaciones.', descriptionEN: 'Azure is Microsoft\'s cloud services platform that provides computing, storage, databases, artificial intelligence, and more solutions for application development and deployment.', type: 'servicio' },
  { name: 'Cloudflare', logo: './image/logos/cloudflare.png', descriptionES: 'Cloudflare es una red de entrega de contenido (CDN) y proveedor de servicios de seguridad que ayuda a mejorar el rendimiento y la seguridad de sitios web, aplicaciones y redes.', descriptionEN: 'Cloudflare is a content delivery network (CDN) and security services provider that helps improve the performance and security of websites, applications, and networks.', type: 'servicio' },
  { name: 'Google Cloud', logo: './image/logos/google-cloud.png', descriptionES: 'Google Cloud es la plataforma de servicios en la nube de Google que ofrece soluciones de computación, almacenamiento, análisis, aprendizaje automático y más, para el desarrollo y despliegue de aplicaciones.', descriptionEN: 'Google Cloud is Google\'s cloud services platform that offers computing, storage, analytics, machine learning, and more solutions for application development and deployment.', type: 'servicio' },
  { name: 'IBM Cloud', logo: './image/logos/IBM-cloud.png', descriptionES: 'IBM Cloud es una plataforma de servicios en la nube que proporciona herramientas y servicios de computación, almacenamiento, inteligencia artificial y análisis de datos para empresas y desarrolladores.', descriptionEN: 'IBM Cloud is a cloud services platform that provides computing, storage, artificial intelligence, and data analytics tools and services for businesses and developers.', type: 'servicio' },
  { name: 'Vercel', logo: './image/logos/vercel-logo.png', descriptionES: 'Vercel es una plataforma de desarrollo y despliegue de sitios web que permite crear y lanzar aplicaciones web estáticas y dinámicas con facilidad, optimizando el rendimiento y la escalabilidad.', descriptionEN: 'Vercel is a web development and deployment platform that allows you to easily create and launch static and dynamic web applications, optimizing performance and scalability.', type: 'servicio' },
  { name: 'Docker', logo: './image/logos/docker.png', descriptionES: 'Docker es una plataforma de contenedores que permite a los desarrolladores empaquetar aplicaciones y sus dependencias en contenedores portátiles, asegurando un entorno de ejecución consistente en diferentes sistemas.', descriptionEN: 'Docker is a containerization platform that allows developers to package applications and their dependencies into portable containers, ensuring a consistent runtime environment across different systems.', type: 'framework' },
  { name: 'iSeries', logo: './image/logos/iseries.png', descriptionES: 'iSeries, también conocido como AS/400, es una plataforma de servidores y sistema de gestión de bases de datos de IBM, conocida por su fiabilidad y escalabilidad en entornos empresariales.', descriptionEN: 'iSeries, also known as AS/400, is a server platform and database management system from IBM, known for its reliability and scalability in enterprise environments.', type: 'base de datos' },
  { name: 'Nginx', logo: './image/logos/nginx.png', descriptionES: 'Nginx es un servidor web de alto rendimiento y proxy inverso que se utiliza para la entrega de contenido web, balanceo de carga, y como servidor de aplicaciones.', descriptionEN: 'Nginx is a high-performance web server and reverse proxy used for web content delivery, load balancing, and as an application server.', type: 'servidor' },
  { name: 'Salesforce', logo: './image/logos/salesforce.png', descriptionES: 'Salesforce es una plataforma de gestión de relaciones con clientes (CRM) basada en la nube, que proporciona herramientas para ventas, servicio al cliente, marketing y más.', descriptionEN: 'Salesforce is a cloud-based customer relationship management (CRM) platform that provides tools for sales, customer service, marketing, and more.', type: 'servicio' },
];

function Word({ logo, children, onClick, ...props }) {
  const color = new THREE.Color();
  const fontProps = { font: './fonts/InterVariable.ttf', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
  const ref = useRef();
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => (document.body.style.cursor = 'auto');
  }, [hovered]);

  // Tie component to the render-loop
  useFrame(() => {
    if (ref.current) {
      ref.current.material.uniforms.hovered.value = hovered ? 1 : 0;
    }
    if (groupRef.current) {
      groupRef.current.scale.lerp(new THREE.Vector3(hovered ? 1.2 : 1, hovered ? 1.2 : 1, hovered ? 1.2 : 1), 0.1);
    }
  });

  return (
    <Billboard {...props}>
      <group ref={groupRef}>
        <mesh position={[-6, 0, 0]}>
          <planeGeometry args={[6, 6]} />
          <meshBasicMaterial map={new THREE.TextureLoader().load(logo)} transparent={true} />
        </mesh>
        <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={onClick} {...fontProps} position={[2.5, 0, 0]}>
          {children}
          <shaderMaterial
            attach="material"
            uniforms={{
              color1: { value: new THREE.Color('#9300FF') },
              color2: { value: new THREE.Color('#3bf0ff') },
              hovered: { value: 0 },
              time: { value: 0 },
            }}
            vertexShader={`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `}
            fragmentShader={`
              uniform vec3 color1;
              uniform vec3 color2;
              uniform float hovered;
              uniform float time;
              varying vec2 vUv;
              void main() {
                vec3 color = mix(color1, color2, vUv.y);
                if (hovered > 0.0) {
                  color += 0.3 * sin(time * 10.0 + vUv.y * 10.0);
                }
                gl_FragColor = vec4(mix(vec3(1.0), color, hovered), 1.0);
              }
            `}
          />
        </Text>
      </group>
    </Billboard>
  );
}

function CloudWords({ count = 5, radius = 20, onTechClick }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) {
        const tech = technologies[(i * count + j) % technologies.length];
        temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), tech]);
      }
    return temp;
  }, [count, radius]);

  const handleClick = (tech) => {
    onTechClick(tech);
  };

  return words.map(([pos, tech], index) => (
    <Word key={index} position={pos} logo={tech.logo} onClick={() => handleClick(tech)}>
      {tech.name}
    </Word>
  ));
}

export default CloudWords;