# FASE 4 - Página NOSOTROS
## Especificaciones Técnicas

### Video de Fondo Hero
- **Archivo**: `public/videos/v_bg_5.mp4`
- **Implementación**: Loop automático en Hero (Sección 1)
- **Overlay**: Gradient oscuro morado→negro (85% opacity) para legibilidad
- **Texto**: Blanco con text-shadow para contraste

### Estructura de Página (6 Secciones Planificadas)

#### **Sección 1: Hero con Video**
- Video de fondo: `v_bg_5.mp4` (autoplay, loop, muted)
- H1: "De la TV al ROI digital: 15 años conectando cultura con resultados"
- Subtitle: Historia breve (2008 → 2024)
- CTA: "Conoce nuestra metodología"

#### **Sección 2: Timeline Histórico**
- 2008-2015: Producción TV para audiencias hispanas
- 2015-2020: Transición a digital (social video, streaming)
- 2020-2024: Marketing digital integral + OYE
- Hitos clave con íconos de época

#### **Sección 3: Emmy Award Highlight**
- Card destacada con imagen del Emmy
- Copy: Calidad cinematográfica validada por la industria
- CTA: Ver portfolio

#### **Sección 4: Filosofía "3 Pilares"**
- **Video primero**: Formato que conecta emocionalmente
- **Cultura siempre**: Insight hispano/multicultural auténtico
- **Resultados medibles**: ROI, ROAS, KPIs claros

#### **Sección 5: Equipo** (CONDICIONAL)
- Solo si hay fotos/nombres reales disponibles
- Alternativa: Copy genérico "Equipo multicultural TV+Digital+Data"

#### **Sección 6: CTA Final**
- "¿Listo para crecer con estrategia cultural?"
- Dual CTA: Metodología + Contacto

### Paleta de Color
- Video overlay: `rgba(26, 16, 36, 0.85)` → `rgba(103, 46, 146, 0.75)`
- Texto principal: `#FFFFFF` con `text-shadow`
- Acentos: Cian (#3EC8F7) para badges y highlights
- CTAs: Cian primario, outline blanco secundario

### Traducciones
- Crear: `src/data/translationsNosotros.js`
- Secciones: hero, timeline, emmy, philosophy, team (opcional), ctaFinal

### Componentes a Crear
```
src/components/nosotros/
├── Secciones/
│   ├── NosotrosSeccion1.jsx  (Hero + Video v_bg_5.mp4)
│   ├── NosotrosSeccion2.jsx  (Timeline histórico)
│   ├── NosotrosSeccion3.jsx  (Emmy highlight)
│   ├── NosotrosSeccion4.jsx  (Filosofía 3 pilares)
│   ├── NosotrosSeccion5.jsx  (Equipo - condicional)
│   └── NosotrosSeccion6.jsx  (CTA Final)
├── components/
│   ├── TimelineItem.jsx
│   └── PhilosophyCard.jsx
└── css/
    ├── nosotrosSeccion1.module.css
    ├── nosotrosSeccion2.module.css
    └── ...
```

### Página Astro
```astro
// src/pages/nosotros.astro
import LayoutBasic from '../layouts/LayoutBasic.astro';
import NosotrosSeccion1 from '../components/nosotros/Secciones/NosotrosSeccion1';
// ... resto de imports

<LayoutBasic title="Nosotros - Energy Media | De TV a ROI Digital">
  <NosotrosSeccion1 client:only="react" transition:persist />
  <!-- ... resto de secciones -->
</LayoutBasic>
```

### Navegación
- Enlace `/nosotros` ya existe en NavBar
- Traducción ya configurada: `nosotros: "Nosotros"` (ES) / `"About Us"` (EN)

---

## Notas Importantes
- Pattern idéntico a Metodología (video + overlay + texto blanco)
- Reutilizar animaciones: fadeInUp, staggered delays
- Timeline puede usar conectores verticales (como Metodología Sección 2)
- Emmy card debe tener tratamiento premium (glassmorphism + glow)
