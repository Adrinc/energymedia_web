# Instrucciones Copilot - Energy Media

## Descripción General del Proyecto
Esta es una aplicación web híbrida **Astro + React** para "Energy Media" - agencia de marketing digital integral con diferenciador cultural hispano/multicultural. El sitio es bilingüe (ES/EN) con enfoque en video marketing digital, estrategias data-driven, analítica con OYE (language-neutral), y servicios escalables para audiencias multiculturales.

## ⚡ Reglas de Oro (Leer Primero)

### 1. Estructura de Páginas y Componentes
```
src/pages/{nombre}.astro  →  src/components/{nombre}/
```
- **Cada página `.astro`** tiene su carpeta con el **mismo nombre** en `src/components/`
- Ejemplo: `index.astro` → `src/components/index/`

### 2. Layout Predeterminado
```astro
import LayoutBasic from '../layouts/LayoutBasic.astro'; // SIEMPRE usar este
```
**NO cambiar** a menos que se indique explícitamente.

### 3. Estructura de Carpetas de Componentes
```
src/components/{nombre-pagina}/
├── Secciones/           # IndexSeccion1.jsx, IndexSeccion2.jsx, etc.
├── components/          # Componentes SOLO de esta página
└── css/                 # indexSeccion1.module.css, indexSeccion2.module.css
```

### 4. Nomenclatura de Archivos
- **JSX**: `PascalCase` → `IndexSeccion1.jsx`, `ServiciosSeccion2.jsx`
- **CSS**: `camelCase` + `.module.css` → `indexSeccion1.module.css`, `serviciosSeccion2.module.css`

### 5. Traducciones
```
src/data/translations{NombrePagina}.js
```
- `translationsIndex.js` para `index.astro`
- `translationsServicios.js` para `servicios.astro`
- `translationsCasos.js` para `casos.astro`
- `translations.js` para elementos globales (navbar, footer)

### 6. Componentes Globales
```
src/components/global/  # NavBar, Footer, animaciones compartidas
```
**NO** mezclar con componentes específicos de página.

### 7. Responsive Design
**TODO** debe funcionar en móvil, tablet y desktop. Siempre incluir media queries.

### 8. Sistema de Diseño "Cine-Data Multicultural"
**Concepto visual**: Elegancia cinematográfica + precisión medible + acentos culturales vibrantes.

**Palabras clave**: cinematográfico, sofisticado, vibrante, medible, multicultural.

**Regla 70/20/10**: 70% neutros (off-white, lavanda), 20% morados (marca), 10% acentos (cian, naranja, ámbar).

---

## 🎨 Sistema de Diseño "Cine-Data Multicultural"

### Filosofía Visual
El diseño de Energy Media fusiona:
- **Cine**: Elegancia cinematográfica, calidad premium, storytelling visual
- **Data**: Precisión medible, métricas visibles, performance-first
- **Multicultural**: Acentos vibrantes, autenticidad cultural, inclusión

### Paleta de Colores y Atmósferas

#### **Uso por Sección**
- **Base clara** (secciones informativas): `--em-bg-offwhite` (#F7F5FA) con grises lavanda
- **Bloques "cine" oscuros** (emocionales): `--em-purple-primary` (#672E92) con negro suave
- **Acentos estratégicos**: Cian/naranja/ámbar SOLO en highlights y métricas

#### **Variables CSS Disponibles** (en `LayoutBasic.astro`):
```css
/* PALETA CORE */
--em-purple-primary: #672E92;      /* Morado Energy (marca, botones) */
--em-purple-light: #A47EB9;        /* Lavanda (fondos suaves) */
--em-purple-deep: #7E2B7F;         /* Morado profundo (gradientes) */

/* ACENTOS */
--em-cyan-accent: #3EC8F7;         /* Cian (highlights, métricas) */
--em-orange-accent: #F56831;       /* Naranja (badges, micro-llamadas) */
--em-amber-accent: #FAB03D;        /* Ámbar (etiquetas) */
--em-red-accent: #EF1D25;          /* Rojo (alertas, énfasis) */

/* NEUTROS */
--em-bg-offwhite: #F7F5FA;         /* Fondo de página */
--em-border-light: #E1DDEC;        /* Bordes, dividers */
--em-text-primary: #1A1024;        /* Texto principal */
--em-text-light: #FFFFFF;          /* Texto sobre morado */

/* GRADIENTES */
--em-gradient-purple-cyan: linear-gradient(135deg, #672E92, #3EC8F7);
--em-gradient-purple-black: linear-gradient(180deg, #672E92, #1A1024);
--em-gradient-cta: linear-gradient(135deg, #672E92, #A47EB9);
```

### Tipografía con Carácter

#### **Fuentes**
- **Headlines**: `--em-font-headline` (Poppins Bold/ExtraBold) - Impacto visual
- **Body/UI**: `--em-font-body` (Inter 400-600) - Legibilidad óptima

#### **Escala Tipográfica** (responsive)
```css
--em-text-h1: clamp(3.5rem, 5vw, 4rem);        /* 56-64px */
--em-text-h2: clamp(2.25rem, 3.5vw, 2.5rem);   /* 36-40px */
--em-text-h3: clamp(1.5rem, 2vw, 1.75rem);     /* 24-28px */
--em-text-body: clamp(1rem, 1.5vw, 1.125rem);  /* 16-18px */
--em-text-caption: 0.875rem;                   /* 14px */
```

#### **Line Heights**
```css
--em-leading-tight: 1.2;    /* Titulares impactantes */
--em-leading-normal: 1.5;   /* Body text */
--em-leading-relaxed: 1.75; /* Textos largos */
```

**Tracking**: Ligeramente negativo (-0.02em) en H1 para impacto.

### Composición y Ritmo Visual

#### **Grid System**
- **12 columnas** con mucho aire (white space generoso)
- **Max-width**: 1280px para contenido principal
- **Gutters**: 20-40px (responsive con `clamp`)

#### **Asimetría Controlada**
- Imágenes/videos **breakout** a full-bleed en bloques clave (Reel, CTA)
- Cards con radios amplios: `--em-radius-lg` (20px) o `--em-radius-xl` (24px)

#### **Separadores Cinematográficos**
- Diagonales suaves o barridos de luz (gradiente morado→cian)
- Transiciones visuales entre secciones contrastantes

### Tratamiento de Imagen y Video

#### **Color Grading**
- Tono cálido en pieles + punch de contraste
- **Grano sutil** (2-3% opacity) para textura premium
- Uso de clase `.cinematic-grain` disponible globalmente

#### **Formatos Mixtos**
- Reel: 16:9, 9:16 y 1:1 para "lenguaje social"
- Hero: 16:9 con **letterbox discreto** (sensación "tráiler")

#### **Badges sobre Video**
```jsx
<div className={styles.metricBadge}>
  <span className={styles.value}>+42% CTR</span>
  <span className={styles.label}>Campaña bilingüe</span>
</div>
```
- Chips con fondo cian/naranja al 12-16% + texto oscuro
- Siempre visibles (contraste AA)

### Motion y Microinteracciones

#### **Easing Cinematográfico**
```css
--em-ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);   /* Principal */
--em-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1); /* Opcional */
```

#### **Patrones de Animación**
- **Hero**: Fade + translateY (250-300ms)
- **Reel hover**: Preview 0.5-1s + scale 0.98→1
- **Scroll parallax**: Leve 5-8% (no exagerado)

#### **Respeto por "Reduce Motion"**
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

### Sombras Cinematográficas (3 Capas)

```css
/* Capa 1: Sombra de contacto */
--em-shadow-card: 
  0 10px 30px rgba(103, 46, 146, 0.08),
  0 2px 8px rgba(103, 46, 146, 0.04);

/* Capa 2: Hover elevado */
--em-shadow-card-hover: 
  0 15px 40px rgba(103, 46, 146, 0.12),
  0 4px 12px rgba(103, 46, 146, 0.06);

/* Capa 3: Dramático (lightbox, modales) */
--em-shadow-dramatic: 
  0 20px 50px rgba(103, 46, 146, 0.15),
  0 8px 16px rgba(103, 46, 146, 0.08);
```

**Resultado**: Depth-of-field (desenfoque selectivo) como en cine.

### Componentes con Carácter

#### **Botón Primario**
```css
.btnPrimary {
  background: var(--em-gradient-cta);
  color: var(--em-text-light);
  padding: 14px 32px;
  border-radius: var(--em-radius-md);
  font-weight: 600;
  transition: all 0.3s var(--em-ease-smooth);
}

.btnPrimary:hover {
  box-shadow: var(--em-shadow-glow-cyan);
  transform: translateY(-2px);
}
```

#### **Botón Secundario**
```css
.btnSecondary {
  border: 2px solid var(--em-purple-primary);
  background: transparent;
  color: var(--em-purple-primary);
}

/* En secciones oscuras */
.btnSecondaryDark {
  border: 2px solid var(--em-text-light);
  color: var(--em-text-light);
  background: rgba(255, 255, 255, 0.1);
}
```

#### **Chips de Métricas**
```css
.metricChip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--em-radius-full);
  background: rgba(62, 200, 247, 0.15); /* Cian al 15% */
  color: var(--em-text-primary);
  font-size: var(--em-text-caption);
  font-weight: 600;
}
```

#### **Tarjetas de Casos**
```jsx
<div className={styles.caseCard}>
  <div className={styles.kpiCorner}>+42% ROAS</div>
  <img src={logoCliente} className={styles.clientLogo} />
  <p className={styles.description}>...</p>
  <a href="#" className={styles.ctaLink}>Ver caso completo →</a>
</div>
```

#### **Módulo OYE**
- Visualización **duotono** morado/cian (NO arcoíris)
- Coherencia con marca, autoridad técnica

### Voz y Copy (Performance con Alma)

#### **Titulares**
- **Cortos, verbos activos**: "Video que vende", "Cultura que convierte"
- **Promesa + prueba**: "Creatividad multicultural respaldada por métricas"

#### **Microcopy**
- Siempre que sea posible: **KPI + tiempo**
- Ejemplo: "+3.1x ROAS en 60 días" (no solo "+3.1x ROAS")

### Accesibilidad y Calidad

#### **Contraste**
- ✅ Blanco sobre morado `#672E92` ≈ **8.8:1** (AA Large, AAA Normal)
- ✅ Texto `#1A1024` sobre `#F7F5FA` ≈ **14:1** (AAA)
- ❌ **EVITAR**: Blanco sobre naranja/ámbar (bajo contraste)

#### **Estados de Foco**
- Outline visible con `outline-offset: 2px`
- Color: `--em-cyan-accent` para consistencia

#### **Alternativas "Reduce Motion"**
- Todas las animaciones respetan `prefers-reduced-motion`

### Motivos Visuales de Marca

#### **Destello/Prisma** (hilo conductor)
```css
.prismEffect {
  background: var(--em-gradient-purple-cyan);
  height: 2px;
  width: 100%;
  opacity: 0.6;
}
```
Uso: Separadores entre secciones, footer de CTA final.

#### **Textura Sutil**
- Clase global `.cinematic-grain` disponible
- Aplicar en fondos oscuros del Reel para profundidad

#### **Iconografía**
- Estilo: **Lineal** (Lucide-style) con remates redondeados
- Stroke: 2-3px
- Bicolor: morado + cian en highlights

### Dónde Brilla Cada Recurso

| Sección | Atmósfera | Recursos Clave |
|---------|-----------|----------------|
| **Hero** | Vibra "tráiler" | Video teaser, H1 con tracking negativo, 2 CTAs con gradiente |
| **Servicios** | Base clara | Iconografía limpia, bullets con valor, cards con sombra sutil |
| **Casos** | Datos visibles | KPI grande (no tímido), tarjetas con métricas destacadas |
| **OYE** | Autoridad técnica | Visualización duotono, copy de precisión |
| **Reel (Sec 7)** | **Modo cine oscuro** | Mosaico dinámico, métricas en badges, lightbox elegante |
| **CTA final** | Épico + urgente | Gradiente morado→cian, un solo botón grande, copy memorable |

### Anti-Patrones (Para No Verse Genérica)

#### ❌ **PROHIBIDO en Energy Media:**

1. **NO** stock ilustrado sin relación cultural (priorizar footage propio)
2. **NO** glassmorphism excesivo (solo navbar/footer, suficiente)
3. **NO** más de 3 colores por sección (disciplina 70/20/10)
4. **NO** animaciones "rebote" o circus (usar easing suave)
5. **NO** gradientes arcoíris en OYE (solo duotono morado/cian)
6. **NO** texto blanco sobre naranja/ámbar (contraste bajo)
7. **NO** videos sin métricas visibles (siempre badge de KPI)
8. **NO** CTAs genéricos ("Click aquí" → "Agenda tu consultoría")
9. **NO** PascalCase en archivos CSS (usar camelCase.module.css)
10. **NO** mezclar ES/EN en mismo objeto de traducción

### Componente Base: CinematicSection

**Uso**:
```jsx
import CinematicSection from '../../global/CinematicSection';

<CinematicSection 
  variant="dark"           // 'light' | 'dark' | 'gradient' | 'purple-black'
  withGrain={true}         // Añade textura cinematográfica
  withAnimation={true}     // Animación al scroll
  threshold={0.1}          // Umbral Intersection Observer
>
  {/* Contenido de la sección */}
</CinematicSection>
```

**Variantes disponibles**:
- `light`: Fondo off-white para contenido informativo
- `dark`: Gradiente morado→negro para secciones emocionales
- `gradient`: Gradiente morado→cian para CTAs
- `purple-black`: Gradiente oscuro para transiciones
- `custom`: Sin background (personalizar desde componente padre)



---

## Arquitectura y Patrones Clave

### Stack Tecnológico
- **Framework**: Astro 5.10.0 (Generación de Sitios Estáticos con islas React)
- **Librería UI**: React 18.2.0 (para componentes interactivos)
- **Estilos**: Tailwind CSS + CSS Modules (`.module.css`)
- **Gestión de Estado**: Nanostores (`@nanostores/react`)
- **i18n**: Sistema de traducción personalizado vía React Context
- **Animación**: GSAP, Framer Motion, React Three Fiber (@react-three/fiber)
- **Video**: Vimeo iframes embebidos

### Estructura del Proyecto
```
src/
├── pages/           # Páginas Astro (enrutamiento basado en archivos)
├── layouts/         # Layout.astro, LayoutBasic.astro
├── components/      # Componentes React organizados por funcionalidad
│   ├── index/       # Página principal (11 secciones)
│   ├── servicios/   # Páginas de servicios (5 tipos)
│   ├── casos/       # Casos de éxito con métricas
│   ├── nosotros/    # Quiénes somos (manifiesto, equipo, premios)
│   ├── metodologia/ # Framework de trabajo (5 pasos)
│   ├── oye/         # Plataforma OYE Analytics
│   ├── recursos/    # Blog, guías, webinars
│   ├── contacto/    # Formulario + agenda + mapa
│   ├── global/      # Componentes compartidos (navbar, footer, animaciones)
│   └── react_components/ # Componentes React reutilizables
├── data/            # Traducciones, átomos de estado, constantes, videos
└── public/          # Assets estáticos (fuentes, imágenes, videos, modelos 3D)
```

### Patrón de Organización de Componentes (CRÍTICO)

**REGLA FUNDAMENTAL**: Cada página `.astro` en `src/pages/` tiene su carpeta correspondiente en `src/components/` con el **mismo nombre** de la página.

#### Estructura Estándar de Componentes por Página:
```
src/components/{nombre-pagina}/
├── Secciones/           # Secciones numeradas (IndexSeccion1.jsx, IndexSeccion2.jsx, etc.)
├── components/          # Sub-componentes específicos SOLO de esta página
└── css/                 # CSS Modules (*.module.css) - SIEMPRE con extensión .module.css
```

**Ejemplo completo para `index.astro`** (11 secciones):
```
src/components/index/
├── Secciones/
│   ├── IndexSeccion1.jsx      # Hero (video teaser + H1 + CTAs)
│   ├── IndexSeccion2.jsx      # Diferenciadores clave (4 cards)
│   ├── IndexSeccion3.jsx      # Servicios destacados (grid 5)
│   ├── IndexSeccion4.jsx      # Casos con métricas (3 tarjetas)
│   ├── IndexSeccion5.jsx      # Metodología (timeline 5 pasos)
│   ├── IndexSeccion6.jsx      # OYE Analytics + copy puente
│   ├── IndexSeccion7.jsx      # 🎬 VIDEO REEL (la joya de la corona)
│   ├── IndexSeccion8.jsx      # Logos de clientes
│   ├── IndexSeccion9.jsx      # Testimonios
│   ├── IndexSeccion10.jsx     # Planes (Start / Grow / Scale)
│   └── IndexSeccion11.jsx     # CTA final + Newsletter
├── components/
│   ├── DifferentiatorCard.jsx  # Card de diferenciador
│   ├── ServiceCard.jsx         # Card de servicio
│   ├── CaseMetricCard.jsx      # Card de caso con KPIs
│   ├── VideoReelGrid.jsx       # Grid dinámico de videos (Sección 7)
│   ├── VideoLightbox.jsx       # Modal cinematográfico para videos
│   └── VideoCard.jsx           # Card individual de video con métricas
└── css/
    ├── indexSeccion1.module.css
    ├── indexSeccion2.module.css
    ├── indexSeccion7.module.css  # Estilos especiales para el reel
    └── ...
│   ├── IndexSeccion2.jsx      # Diferenciadores clave (4 cards)
│   ├── IndexSeccion3.jsx      # Servicios destacados (grid 5)
│   ├── IndexSeccion4.jsx      # Casos con métricas (3 tarjetas)
│   ├── IndexSeccion5.jsx      # Cómo trabajamos (timeline 5 pasos)
│   ├── IndexSeccion6.jsx      # Módulo OYE Analytics
│   ├── IndexSeccion7.jsx      # Reel / Galería de Video
│   ├── IndexSeccion8.jsx      # Clientes / Logotipos
│   ├── IndexSeccion9.jsx      # Testimonios
│   ├── IndexSeccion10.jsx     # Planes (Start / Grow / Scale)
│   └── IndexSeccion11.jsx     # CTA final + Newsletter
├── components/
│   ├── DifferentiatorCard.jsx  # Card de diferenciador
│   ├── ServiceCard.jsx         # Card de servicio
│   ├── CaseMetricCard.jsx      # Card de caso con KPIs
│   └── VideoPlayer.jsx         # Player de Vimeo
└── css/
    ├── indexSeccion1.module.css
    ├── indexSeccion2.module.css
    └── ...
```

**Ejemplo para `servicios.astro`** (plantilla reutilizable):
```
src/components/servicios/
├── Secciones/
│   ├── ServiciosSeccion1.jsx   # Hero corto
│   ├── ServiciosSeccion2.jsx   # Problemas que resolvemos
│   ├── ServiciosSeccion3.jsx   # Soluciones y entregables
│   ├── ServiciosSeccion4.jsx   # Proceso específico (4 pasos)
│   ├── ServiciosSeccion5.jsx   # Herramientas martech
│   ├── ServiciosSeccion6.jsx   # Casos relacionados
│   ├── ServiciosSeccion7.jsx   # FAQs
│   └── ServiciosSeccion8.jsx   # CTA (agenda/propuesta)
├── components/
│   ├── ProblemBullet.jsx
│   ├── ProcessStep.jsx
│   └── ToolLogo.jsx
└── css/
    ├── serviciosSeccion1.module.css
    └── ...
```

**Convención de Nombres**:
- **Componentes JSX**: `PascalCase` → `IndexSeccion1.jsx`, `CasosSeccion2.jsx`
- **CSS Modules**: `camelCase` → `indexSeccion1.module.css`, `casosSeccion2.module.css`
- **Siempre** extensión `.module.css` para CSS Modules

#### Componentes Globales
Los componentes compartidos entre múltiples páginas van en `src/components/global/`:
- `NavBar.jsx` - Navegación principal con selector ES/EN
- `Footer.jsx` - Pie de página
- `LanguageSwitch.jsx` - Selector de idioma
- Animaciones compartidas
- Utilidades comunes

**NO** colocar componentes específicos de una página en `global/`.

### Patrón de Ensamblaje de Páginas (CRÍTICO)

**REGLA**: Todas las páginas en `src/pages/*.astro` deben usar `LayoutBasic` a menos que se especifique lo contrario.

#### Estructura de una Página Astro:
```astro
---
import LayoutBasic from '../layouts/LayoutBasic.astro';  // SIEMPRE usar este layout por defecto

// Importar secciones numeradas desde la carpeta correspondiente
import IndexSeccion1 from '../components/index/Secciones/IndexSeccion1.jsx'; // Hero
import IndexSeccion2 from '../components/index/Secciones/IndexSeccion2.jsx'; // Diferenciadores
import IndexSeccion3 from '../components/index/Secciones/IndexSeccion3.jsx'; // Servicios
import IndexSeccion4 from '../components/index/Secciones/IndexSeccion4.jsx'; // Casos
import IndexSeccion5 from '../components/index/Secciones/IndexSeccion5.jsx'; // Metodología
import IndexSeccion6 from '../components/index/Secciones/IndexSeccion6.jsx'; // OYE
import IndexSeccion7 from '../components/index/Secciones/IndexSeccion7.jsx'; // Reel Video
import IndexSeccion8 from '../components/index/Secciones/IndexSeccion8.jsx'; // Logos Clientes
import IndexSeccion9 from '../components/index/Secciones/IndexSeccion9.jsx'; // Testimonios
import IndexSeccion10 from '../components/index/Secciones/IndexSeccion10.jsx'; // Planes
import IndexSeccion11 from '../components/index/Secciones/IndexSeccion11.jsx'; // CTA Final + Newsletter
---

<LayoutBasic title="Energy Media - Creatividad multicultural + performance digital" showFooter={true}>
    <!-- Secciones en orden numérico -->
    <IndexSeccion1 transition:persist client:only/>
    <IndexSeccion2 transition:persist client:only/>
    <IndexSeccion3 transition:persist client:only/>
    <IndexSeccion4 transition:persist client:only/>
    <IndexSeccion5 transition:persist client:only/>
    <IndexSeccion6 transition:persist client:only/>
    <IndexSeccion7 transition:persist client:only/>
    <IndexSeccion8 transition:persist client:only/>
    <IndexSeccion9 transition:persist client:only/>
    <IndexSeccion10 transition:persist client:only/>
    <IndexSeccion11 transition:persist client:only/>
</LayoutBasic>
```

**Directivas obligatorias**:
- `transition:persist` - Para mantener estado entre navegaciones
- `client:only` - Para componentes React con hooks/estado (casi todos los casos)

## Internacionalización (i18n)

### Arquitectura del Sistema de Traducciones (CRÍTICO)

**REGLA**: Cada página tiene su propio archivo de traducciones en `src/data/` con el patrón `translations{NombrePagina}.js`

#### Archivos de Traducción por Página:
```
src/data/
├── translations.js              # Traducciones GLOBALES (navbar, footer, elementos compartidos)
├── translationsIndex.js         # Exclusivo para index.astro (11 secciones)
├── translationsServicios.js     # Exclusivo para páginas de servicios
├── translationsCasos.js         # Exclusivo para casos.astro
├── translationsNosotros.js      # Exclusivo para nosotros.astro
├── translationsMetodologia.js   # Exclusivo para metodologia.astro
├── translationsOye.js           # Exclusivo para oye.astro
├── translationsRecursos.js      # Exclusivo para recursos.astro
├── translationsContacto.js      # Exclusivo para contacto.astro
└── vimeoVideos.js               # Lista de URLs de videos de Vimeo
```

**Estructura de archivo de traducción**:
```javascript
// translationsIndex.js
export const translationsIndex = {
  es: {
    hero: {
      h1: "Creatividad multicultural + performance digital = crecimiento real",
      subtitle: "Conectamos marcas con audiencias hispanas y multiculturales con estrategias data-driven y video que vende.",
      ctaPrimary: "Agenda tu consultoría gratuita",
      ctaSecondary: "Ver casos de éxito"
    },
    differentiators: {
      title: "Diferenciadores clave",
      items: [
        {
          title: "Cultura que convierte",
          description: "Insight cultural auténtico para campañas que resuenan"
        },
        // ...
      ]
    },
    // ...
  },
  en: {
    hero: {
      h1: "Multicultural creativity + digital performance = real growth",
      subtitle: "We connect brands with Hispanic and multicultural audiences through data-driven strategies and video that sells.",
      ctaPrimary: "Schedule your free consultation",
      ctaSecondary: "View success stories"
    },
    // ...
  }
};
```

**Archivo de Videos de Vimeo** (`src/data/vimeoVideos.js`):
```javascript
// Lista completa de URLs de Vimeo para el reel de videos
export const vimeoVideos = [
  "https://player.vimeo.com/video/897006857",
  "https://player.vimeo.com/video/906464385",
  "https://player.vimeo.com/video/1119883818",
  "https://player.vimeo.com/video/1114313177",
  "https://player.vimeo.com/video/1113698153",
  "https://player.vimeo.com/video/1107528153",
  "https://player.vimeo.com/video/1107527479",
  "https://player.vimeo.com/video/1106544096",
  "https://player.vimeo.com/video/1106543448",
  "https://player.vimeo.com/video/1106542411",
  "https://player.vimeo.com/video/1106533496",
  "https://player.vimeo.com/video/1098651741",
  "https://player.vimeo.com/video/1098263467",
  "https://player.vimeo.com/video/1098262712",
  "https://player.vimeo.com/video/1065576213",
  "https://player.vimeo.com/video/1058707649",
  "https://player.vimeo.com/video/1057694037",
  "https://player.vimeo.com/video/1057602607",
  "https://player.vimeo.com/video/1057592923",
  "https://player.vimeo.com/video/1056929683",
  "https://player.vimeo.com/video/1056929454",
  "https://player.vimeo.com/video/1054239205",
  "https://player.vimeo.com/video/1048030996",
  "https://player.vimeo.com/video/1047965817",
  "https://player.vimeo.com/video/1019606001",
  "https://player.vimeo.com/video/906468836",
  "https://player.vimeo.com/video/906190895",
  "https://player.vimeo.com/video/891659224",
  "https://player.vimeo.com/video/884620794",
  "https://player.vimeo.com/video/868107775"
];
```

### Uso en Componentes
```jsx
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';

const MiComponente = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  
  return <h1>{t.hero.h1}</h1>;
};
```

**Patrón**: Usa `useStore(isEnglish)` para verificaciones booleanas, `useLang()` para acceder al objeto `t` con el método `changeLang()`.

## Convenciones de Estilos

### Híbrido Tailwind + CSS Modules
- **Tailwind**: Usa para layout, espaciado, utilidades responsive
- **CSS Modules**: Usa para animaciones específicas del componente, gradientes, estados complejos
- **Propiedades CSS personalizadas**: Definidas en `tailwind.config.mjs` como `var(--primary-color)`, etc.

### Sistema de Colores Energy Media (ver `src/data/variables.js`)

#### Core
```javascript
primary: '#672E92'        // Morado Energy (marca, botones principales, links hover)
primaryLight: '#A47EB9'   // Lavanda medio (fondos suaves, tarjetas)
```

#### Acentos
```javascript
accent: '#3EC8F7'         // Cian brillante (estados activos, highlights, interactivos)
accentOrange: '#F56831'   // Naranja cálido (badges, micro-llamadas, gráficos)
accentAmber: '#FAB03D'    // Ámbar (etiquetas, indicadores, detalle visual)
accentRed: '#EF1D25'      // Rojo (alertas/errores y énfasis puntual)
```

#### Neutros con tinte lavanda
```javascript
bgOffWhite: '#F7F5FA'     // Off-white (fondo de página)
borderLight: '#E1DDEC'    // Gris lavanda claro (bordes, dividers)
borderMedium: '#DDCDDC'   // Gris lavanda medio (fills sutiles)
textPrimary: '#1A1024'    // Ink (texto principal)
textLight: '#FFFFFF'      // Blanco (texto sobre morado)
```

#### Gradientes
```javascript
gradientPurpleCyan: 'linear-gradient(135deg, #672E92, #3EC8F7)'
gradientPurpleMagenta: 'linear-gradient(135deg, #7E2B7F, #672E92)'
```

**Clases Tailwind**: `primaryColor`, `accentColor`, `primaryBg`, `primaryGradient`, etc.

### Aplicación por Sección
- **Header/Nav**: fondo `#F7F5FA`, logo en morado; links en morado con hover cian.
- **Hero**: titular en `#1A1024`, CTA primario botón morado con texto blanco; CTA secundario borde morado.
- **Secciones "Servicios/Proceso"**: alterna fondos `#F7F5FA` y `#E1DDEC`; iconografía en cian/naranja.
- **Casos/Stats**: cards blancas, acentos en cian y ámbar para gráficos/labels.
- **Footer**: morado sólido con texto blanco y acentos cian.

### Patrones de CSS Modules (CRÍTICO)

**REGLA**: SIEMPRE usar nomenclatura `camelCase` con extensión `.module.css`

- Usa nomenclatura tipo BEM: `.container`, `.header`, `.caseCard`
- Animaciones: Define `@keyframes` en el módulo, aplica con `animation-delay: var(--delay)`
- Responsive: Breakpoints mobile-first en media queries - **TODO debe ser responsive**

**Convención de nombres de archivos CSS**:
```
IndexSeccion1.jsx    →  indexSeccion1.module.css
CasosSeccion3.jsx    →  casosSeccion3.module.css
ServiciosSeccion2.jsx → serviciosSeccion2.module.css
```

**NUNCA**: `IndexSeccion1.module.css` (PascalCase incorrecto)  
**SIEMPRE**: `indexSeccion1.module.css` (camelCase correcto)

**Ejemplo de `indexSeccion2.module.css`** (Diferenciadores):
```css
.differentiatorCard {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(103, 46, 146, 0.1);
  transition: all 0.3s ease;
}

.differentiatorCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(103, 46, 146, 0.15);
}

.iconWrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #672E92, #3EC8F7);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

/* Responsive OBLIGATORIO */
@media (max-width: 768px) {
  .differentiatorCard {
    padding: 1.5rem;
  }
  
  .iconWrapper {
    width: 50px;
    height: 50px;
  }
}
```

### Accesibilidad (contraste)
- Blanco sobre morado `#672E92` ≈ 8.8:1 ✓ (ideal para CTAs)
- Naranja como fondo: usa texto oscuro `#1A1024` para cumplir contraste
- Rojo con texto blanco es límite; mejor reservar rojo para iconos/etiquetas

## Flujos de Trabajo Críticos para Desarrolladores

### Servidor de Desarrollo
```bash
npm run dev          # Servidor dev en localhost:4321
npm run build        # Build de producción (ejecuta astro check primero)
npm run preview      # Preview del build de producción
```

### Proceso de Build
1. Astro hace type-checking con `astro check`
2. Genera HTML estático para las páginas
3. Empaqueta las islas React como chunks separados
4. Optimiza assets y fuentes

### Patrón de Visibilidad de Componentes
La mayoría de las secciones usan **Intersection Observer** para animaciones al scroll:
```jsx
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
    { threshold: 0.1 }
  );
  if (sectionRef.current) observer.observe(sectionRef.current);
  return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
}, []);

// Aplicar clases condicionalmente:
<div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
```

## Componentes Específicos de Energy Media

### 1. Video Player (Vimeo iframes)
```jsx
// src/components/global/VimeoPlayer.jsx
import { useState } from 'react';

const VimeoPlayer = ({ videoUrl, title = "Energy Media Video" }) => {
  return (
    <div className="vimeo-wrapper" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        src={videoUrl}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
};

export default VimeoPlayer;
```

**Uso**:
```jsx
import VimeoPlayer from '../../../components/global/VimeoPlayer';
import { vimeoVideos } from '../../../data/vimeoVideos';

<VimeoPlayer videoUrl={vimeoVideos[0]} title="Energy Media Reel" />
```

### 2. Reel de Videos (Carrusel)
```jsx
// IndexSeccion7.jsx - Galería de videos con carrusel
import { useState } from 'react';
import { vimeoVideos } from '../../../data/vimeoVideos';
import VimeoPlayer from '../../global/VimeoPlayer';

const IndexSeccion7 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <div className="video-carousel">
      <VimeoPlayer videoUrl={vimeoVideos[currentIndex]} />
      {/* Controles de navegación */}
    </div>
  );
};
```

### 3. Timeline de Metodología (5 pasos)
```jsx
// IndexSeccion5.jsx - Cómo trabajamos
const steps = [
  { number: 1, title: "Descubrimiento cultural & de negocio", description: "..." },
  { number: 2, title: "Plan de crecimiento (90 días + KPIs)", description: "..." },
  { number: 3, title: "Producción & setup", description: "..." },
  { number: 4, title: "Optimización continua", description: "..." },
  { number: 5, title: "Escalamiento", description: "..." }
];
```

### 4. Casos con Métricas (KPIs)
```jsx
// IndexSeccion4.jsx - Casos destacados
const cases = [
  {
    industry: "E-commerce",
    objective: "Aumentar ROAS",
    solution: "Video ads + segmentación cultural",
    metrics: {
      roas: "+42%",
      cac: "–28%",
      leads: "+3.1x"
    }
  },
  // ...
];
```

### 5. Módulo OYE Analytics
```jsx
// IndexSeccion6.jsx - OYE (language-neutral analytics)
const OYEModule = () => {
  return (
    <div className="oye-module">
      {/* Mock de gráfico/listening con chips de temas/idiomas */}
      <ul>
        <li>Insights accionables en tiempo real</li>
        <li>Detección de oportunidades multiculturales</li>
        <li>Mejora creativa basada en datos</li>
      </ul>
      <button>Solicitar demo de OYE</button>
    </div>
  );
};
```

## Estructura del Sitio

### Mapa del Sitio (Alto Nivel)
```
├── Inicio (11 secciones)
├── Servicios (dropdown)
│   ├── Video Marketing Digital
│   ├── Marketing Digital 360 (SEO, SEM, Social Ads, Email, etc.)
│   ├── Branding & Creatividad Cultural
│   ├── Web & Apps
│   └── Analítica & OYE
├── Casos de éxito (listado + fichas)
├── Quiénes somos (manifiesto + equipo + premios)
├── Metodología (5 pasos)
├── OYE (página dedicada)
├── Recursos (blog + guías + webinars)
├── Contacto (form + agenda + mapa)
└── ES / EN (selector de idioma)
```

### Página Inicio - 11 Secciones (Detallado)

#### **Sección 1: Hero con Video Teaser** 
**Objetivo**: Impacto visual inmediato + propuesta de valor clara + CTAs

**Elementos**:
- **Video de fondo**: Loop corto (15-20 seg, muted) - teaser cinemático que da vibra "somos expertos en video"
- **Overlay oscuro**: Para legibilidad del texto
- **H1**: "Creatividad multicultural + performance digital = crecimiento real"
- **Subtitle**: "Video que conecta. Estrategias que venden."
- **CTAs**:
  - Primario: "Agenda tu consultoría" (morado brillante)
  - Secundario: "Ver casos" (outline)

**Notas técnicas**:
- Video debe ser **optimizado** (<5MB si es local)
- Texto con `text-shadow` para legibilidad
- Animación de entrada fade-in para H1/subtitle
- CTAs con hover effects (elevación + brillo)

---

#### **Sección 2: Diferenciadores Clave**
**Objetivo**: Establecer por qué Energy Media es diferente

**Elementos**:
- **4 cards** en grid responsive (2x2 desktop, 1 columna móvil)
- Cada card:
  - Ícono distintivo (circular con gradiente morado→cian)
  - Título corto
  - Descripción 2-3 líneas

**Diferenciadores**:
1. **Cultura que convierte** - Insight cultural auténtico para campañas que resuenan
2. **Video enfocado a performance** - De la TV al ROI medible en digital
3. **Datos & OYE en tiempo real** - Listening language-neutral para decisiones ágiles
4. **Escalabilidad con reporting claro** - Desde pruebas hasta campañas multimillonarias

**Notas técnicas**:
- Cards con `box-shadow` morada
- Hover: elevación (`translateY(-5px)`) + sombra más intensa
- Animación de entrada: aparecer en secuencia al hacer scroll

---

#### **Sección 3: Servicios Destacados**
**Objetivo**: Mostrar el portafolio de servicios core

**Elementos**:
- **Grid de 5 servicios** (responsive: 3 arriba, 2 abajo en desktop)
- Cada card:
  - Ícono/imagen representativa
  - Título del servicio
  - Copy breve (2-3 líneas)
  - Link "Ver servicio →"

**Servicios**:
1. **Video Marketing Digital** - Spots, social ads, reels que generan ROI
2. **Marketing Digital 360** - SEO, SEM, Social Ads, Email, Influencers
3. **Branding & Creatividad Cultural** - Identidad que conecta con audiencias multiculturales
4. **Web & Apps** - Portales, e-commerce, landings optimizadas
5. **Analítica & OYE** - Plataforma de listening + insights accionables

**Notas técnicas**:
- Cards con `border-radius: 20px`
- Gradiente sutil de fondo (off-white → lavanda claro)
- Hover: card se eleva, link cambia a cian

---

#### **Sección 4: Casos con Métricas**
**Objetivo**: Prueba social con resultados medibles

**Elementos**:
- **3 tarjetas de casos** en grid horizontal
- Cada tarjeta:
  - Industria/cliente (nombre o genérico)
  - Reto breve
  - Solución implementada
  - **KPIs destacados** en badges (ROAS, CTR, CAC, Leads)
  - CTA: "Explorar caso completo"

**Ejemplo de caso**:
```
Industry: E-commerce moda
Reto: Aumentar ROAS en audiencia hispana
Solución: Video ads bilingües + segmentación cultural
Métricas: 
  - +42% ROAS
  - –28% CAC
  - +3.1x Leads
```

**Notas técnicas**:
- Métricas en badges con fondo cian/ámbar
- Tarjetas con sombra profunda
- Animación de números al aparecer (`CountUp` effect)

---

#### **Sección 5: Metodología (Timeline 5 Pasos)**
**Objetivo**: Transparencia en el proceso de trabajo

**Elementos**:
- **Timeline vertical/horizontal** (responsive)
- **5 pasos numerados** con:
  - Número del paso (círculo grande morado)
  - Título del paso
  - Descripción breve
  - Micro-beneficio/entregable

**Pasos**:
1. **Descubrimiento cultural & de negocio** - Audit inicial + insights de audiencia
2. **Plan de crecimiento (90 días + KPIs)** - Roadmap con objetivos medibles
3. **Producción & setup** - Video, tracking, martech configurado
4. **Optimización continua** - Test A/B, iteración creativa
5. **Escalamiento** - Nuevas audiencias, formatos, canales

**Notas técnicas**:
- Línea conectora entre pasos (gradiente morado→cian)
- Animación de aparición al scroll
- Íconos por paso (lupa → mapa → cámara → gráfico → cohete)

---

#### **Sección 6: OYE Analytics + Copy Puente**
**Objetivo**: Presentar herramienta diferenciadora + transición al reel

**Elementos**:
- **Mock de interfaz OYE** (gráfico de listening con chips de temas/idiomas)
- **3 bullets de valor**:
  - Insights accionables en tiempo real
  - Detección de oportunidades multiculturales
  - Mejora creativa basada en datos
- **CTA**: "Solicitar demo de OYE"
- **Copy puente al final**: 
  > "Ya viste cómo medimos. Ahora mira cómo se ve en pantalla."

**Notas técnicas**:
- Fondo con gradiente sutil lavanda
- Mock interactivo (hover sobre chips)
- Copy puente en texto grande, centrado, transición visual al negro

---

#### **Sección 7: 🎬 VIDEO REEL (La Joya de la Corona)**
**Objetivo**: Deslumbrar con prueba visual del expertise + performance

**Sub-secciones**:

##### **A. Intro Cinemática**
- Fondo negro/morado profundo
- Texto grande centrado:
  - "Video que conecta. Video que vende."
  - "De TV a digital: spots, social ads y campañas que generan ROI."

##### **B. Mosaico Dinámico de Videos**
- **6-8 videos** en grid asimétrico (mix 16:9 horizontal + 9:16 vertical)
- Cada video card:
  - **Poster estático** inicial
  - **Al hover**: Preview animado (primeros segundos del clip)
  - **Etiquetas visibles**:
    - Logo/nombre del cliente
    - Tag cultural (ej. "Campaña bilingüe", "TikTok native", "YouTube Ads")
    - **Métrica destacada**: "+42% CTR" / "3.1x ROAS" en badge brillante

##### **C. Lightbox Cinematográfico**
- Al hacer clic en un video → modal full-screen
- Player de Vimeo centrado
- Sidebar con:
  - Nombre del cliente
  - Objetivo de la campaña
  - Solución implementada
  - Resultado (métrica + copy)
  - Frase breve: "De la TV a tu feed en 24 horas"
- Fondo: degradado morado→negro

##### **D. Micro-Storytelling (3 Argumentos)**
Bloque debajo del grid con 3 íconos + textos:
- 🎥 **Producción premiada (Emmy)** - Calidad cinematográfica
- 📱 **Nativos digitales** - Piezas para social ads, reels, YouTube, streaming
- 📊 **Performance first** - Medimos views, CTR y conversiones

##### **E. CTA Destacado**
- Banner horizontal con gradiente morado→cian
- Texto grande: "Convierte tu mensaje en el próximo video que todos recuerdan"
- Botón: "Agenda tu consultoría de video marketing" (cian brillante, hover naranja)

**Notas técnicas**:
- Grid con `CSS Grid` asimétrico (template areas)
- Hover state con `transform: scale(1.05)` + sombra cian
- Lightbox con `framer-motion` para animaciones suaves
- Videos de `vimeoVideos.js` (33 URLs disponibles)
- Lazy loading de iframes

---

#### **Sección 8: Logos de Clientes**
**Objetivo**: Prueba social mediante reconocimiento de marca

**Elementos**:
- **Wall/slider** de logos de marcas (10-15)
- Fondo off-white o lavanda muy claro
- Copy breve: "Confían en nosotros" o "Marcas que crecen con nosotros"

**Notas técnicas**:
- Logos en escala de grises, hover → color
- Slider infinito con `keen-slider` o similar
- Responsive: 5 logos visibles desktop, 2-3 móvil

---

#### **Sección 9: Testimonios**
**Objetivo**: Validación emocional + resultados desde la voz del cliente

**Elementos**:
- **2-3 quotes** en cards grandes
- Cada testimonio:
  - Texto del testimonio (2-4 líneas)
  - Nombre + rol + empresa
  - Avatar/foto (opcional)
  - **Resultado concreto**: "Aumentamos ventas 3x en 6 meses"

**Notas técnicas**:
- Cards con `box-shadow` y borde lavanda
- Quote con comillas grandes decorativas
- Carrusel si hay más de 3 testimonios

---

#### **Sección 10: Planes (Start / Grow / Scale)**
**Objetivo**: Orientar sobre niveles de servicio sin pricing exacto

**Elementos**:
- **3 cards de planes** (grid horizontal)
- Cada plan:
  - Nombre del plan (Start / Grow / Scale)
  - Descripción breve (para quién es)
  - Bullets de entregables clave orientativos (5-7)
  - Nota: "Planes personalizables según objetivos"
  - CTA: "Solicitar propuesta"

**Ejemplo**:
```
START - Para marcas que inician en digital multicultural
- Video ads piloto (2-3 piezas)
- Setup de tracking y analytics
- Campaña en 1 canal (Meta o Google)
- Report mensual

GROW - Para marcas escalando con data
- Producción mensual de video (6-8 piezas)
- Campaña multi-canal (Meta, Google, TikTok)
- A/B testing creativo
- OYE Insights
- Report quincenal

SCALE - Para marcas con presupuesto 6 figuras+
- Producción ilimitada + equipo dedicado
- Campañas en todos los canales
- OYE + consultoría estratégica
- Report semanal + optimización continua
```

**Notas técnicas**:
- Card del plan "Grow" destacada (escala más grande, borde brillante)
- Hover: elevación de la card
- CTA con gradiente morado

---

#### **Sección 11: CTA Final + Newsletter**
**Objetivo**: Última oportunidad de conversión + captura de leads

**Elementos**:
- **Bandera morada** con degradado (full-width)
- Texto grande centrado: "Listos para crecer con cultura y datos"
- Subtitle: "Agenda tu consultoría gratuita y descubre cómo hacer que tu marca conecte"
- **Botón CTA grande**: "Agenda tu consultoría" (cian brillante, animación de pulso)
- **Newsletter opcional**:
  - Copy: "O recibe tips de marketing multicultural en tu inbox"
  - Input email + botón "Suscribirse"

**Notas técnicas**:
- Fondo con gradiente morado→magenta
- CTA con `animation: pulse` sutil
- Newsletter con validación de email
- Integración con Mailchimp/ConvertKit (futuro)

---

### Resumen de Flujo Narrativo (Journey del Usuario)

1. **Hero (Sec1)**: Impacto + promesa → "Te veo"
2. **Diferenciadores (Sec2)**: Por qué nosotros → "Te entiendo"
3. **Servicios (Sec3)**: Qué hacemos → "Te informo"
4. **Casos (Sec4)**: Qué logramos → "Te demuestro"
5. **Metodología (Sec5)**: Cómo trabajamos → "Te tranquilizo"
6. **OYE (Sec6)**: Con qué herramientas → "Te innovo" + **Copy puente** → "Ahora mira esto..."
7. **🎬 VIDEO REEL (Sec7)**: **MOMENTO WOW** → "Te deslumbro"
8. **Logos (Sec8)**: Quién confía → "Te valido (autoridad)"
9. **Testimonios (Sec9)**: Qué dicen → "Te valido (social)"
10. **Planes (Sec10)**: Cómo empezar → "Te estructuro"
11. **CTA Final (Sec11)**: Actúa ahora → "Te convierto"

**Resultado**: Embudo completo que mezcla racionalidad (secciones 2-6) con emoción (sección 7) y cierre persuasivo (secciones 8-11).
6. **OYE Analytics** (mock gráfico + CTA demo)
7. **Reel de Video** (carrusel Vimeo)
8. **Logos de clientes** (slider)
9. **Testimonios** (2-3 quotes)
10. **Planes** (Start / Grow / Scale)
11. **CTA final** (bandera morada + newsletter)

### Páginas de Servicios - Plantilla (8 secciones)
1. **Hero corto** (beneficio principal)
2. **Problemas que resolvemos** (3-4 bullets)
3. **Soluciones y entregables** (listas claras + ejemplos)
4. **Proceso específico** (mini flujo 4 pasos)
5. **Herramientas** (logos martech)
6. **Casos relacionados** (2-3)
7. **FAQs** (5-7)
8. **CTA** (agenda/solicitar propuesta)

## Patrones Comunes y Anti-Patrones

### ✅ HACER (OBLIGATORIO)
- **Páginas**: Siempre usar `LayoutBasic` a menos que se indique lo contrario
- **Estructura de carpetas**: Cada página `{nombre}.astro` → carpeta `src/components/{nombre}/`
- **Secciones**: Numerar siempre → `FeatureSeccion1.jsx`, `FeatureSeccion2.jsx`, etc.
- **CSS Modules**: 
  - Nomenclatura `camelCase` → `indexSeccion1.module.css`
  - SIEMPRE extensión `.module.css`
  - Importar: `import styles from '../css/Component.module.css'`
- **Traducciones**: Archivo por página → `translationsFeature.js`
- **Directivas Astro**: Usar `client:only` para componentes React con estado/hooks
- **Responsive**: TODO debe funcionar en móvil, tablet y desktop
- **Videos**: Usar iframes de Vimeo desde `vimeoVideos.js`
- **Colores**: Usar paleta morado/cian de Energy Media

### ❌ NO HACER (PROHIBIDO)
- **NO** usar `PascalCase` en archivos CSS → `IndexSeccion1.module.css` ❌
- **NO** mezclar componentes de diferentes páginas en la misma carpeta
- **NO** poner componentes específicos de página en `src/components/global/`
- **NO** mezclar Español/Inglés en el mismo objeto de traducción (separar `es` y `en`)
- **NO** usar estilos inline para animaciones complejas (usar CSS modules)
- **NO** importar React en archivos React modernos (transformación JSX automática)
- **NO** olvidar `transition:persist` para componentes animados entre navegaciones
- **NO** olvidar hacer responsive el diseño
- **NO** hardcodear URLs de Vimeo (usar `vimeoVideos.js`)
- **NO** usar colores fuera de la paleta Energy Media

## Archivos Clave de Referencia

| Archivo | Propósito |
|---------|-----------|
| `src/data/variables.js` | Átomos Nanostore (`isEnglish`), paleta de colores Energy Media |
| `src/data/signals.jsx` | Contexto `LangProvider`, hook `useLang()` |
| `src/data/vimeoVideos.js` | Lista completa de URLs de videos de Vimeo |
| `src/layouts/LayoutBasic.astro` | Layout principal con SEO, fuentes, estilos globales |
| `src/components/global/NavBar.jsx` | Navegación global con selector ES/EN |
| `src/components/global/VimeoPlayer.jsx` | Componente reutilizable para videos de Vimeo |
| `tailwind.config.mjs` | Tema personalizado de Tailwind con colores de marca Energy Media |

## Librerías de 3D y Animación

- **Three.js**: `@react-three/fiber`, `@react-three/drei` para modelos 3D (`.glb`, `.gltf` en `public/models/`)
- **Rive**: `@rive-app/react-canvas` para animaciones interactivas (archivos `.riv`)
- **GSAP**: Animaciones basadas en timeline para secuencias complejas (metodología, casos)
- **Framer Motion**: Animaciones de componentes React (layout, variants, carruseles)

## SEO & Datos Estructurados

- **Title y meta** por página orientados a "marketing digital multicultural / hispano"
- **Schema**: Organization, Product/Service, FAQPage, BreadcrumbList, VideoObject (en casos y reel)
- **Tracking**: GA4 + GTM + píxeles (Meta/LinkedIn/Google Ads)
- **Consent banner** obligatorio
- **Imágenes**: next-gen, lazy load
- **Video**: optimizado, Core Web Vitals

## Pruebas y Depuración

- **Type Checking**: `npm run build` ejecuta `astro check` automáticamente
- **DevTools del Navegador**: Las islas React son del lado del cliente, inspecciona con React DevTools
- **Advertencias de Consola**: Vigila discrepancias de hidratación (diferencias de renderizado servidor/cliente)
- **Pestaña Network**: Verifica carga de CSS Modules (deben estar con scope con hash: `IndexSeccion3.module.a1b2c3.css`)
- **Videos**: Verifica que iframes de Vimeo carguen correctamente (permitir `autoplay`, `fullscreen`)

## Notas de Despliegue

- **Target**: Generación de sitio estático (SSG)
- **Output**: Carpeta `dist/`
- **Adaptadores**: Configurados para Node.js (`@astrojs/node`) y Vercel (`@astrojs/vercel`)
- **Assets**: Fuentes pre-cargadas automáticamente, imágenes en `public/image/` (organizadas por funcionalidad)
- **Videos**: Embebidos vía Vimeo (no se hospedan localmente)

## Contexto de Negocio - Energy Media

### Identidad Transformada
- **Antes**: Agencia audiovisual enfocada en TV y producción de video para mercado hispano
- **Ahora**: Agencia de marketing digital integral con base cultural hispana/multicultural
- **Diferencial**: Creatividad cultural + estrategias data-driven + OYE Analytics (language-neutral)

### Servicios Core
1. **Video Marketing Digital**: producción enfocada en performance (social ads, streaming, animaciones)
2. **Marketing Digital 360**: SEO, SEM, Social Ads, Email/Automations, Influencers, Programmatic, CRO
3. **Branding & Creatividad Cultural**: insight cultural auténtico, adaptación de contexto
4. **Web & Apps**: portales, e-commerce, landings optimizadas, desarrollo web
5. **Analítica & OYE**: plataforma propia de listening multicultura, insights accionables

### Metodología (5 Pasos)
1. Descubrimiento cultural & de negocio
2. Plan de crecimiento (90 días + KPIs)
3. Producción & setup (video, tracking, martech)
4. Optimización continua (test A/B, creatividades)
5. Escalamiento (nuevas audiencias y formatos)

### Tono y Mensajes
- **Híbrido**: Humano/cultural (cercanía auténtica) + Técnico/data-driven (resultados medibles)
- **Propuesta de valor**: "Creatividad multicultural + performance digital = crecimiento real"
- **Diferenciador**: Combina expertise cultural hispano con metodologías escalables y ROI comprobado
