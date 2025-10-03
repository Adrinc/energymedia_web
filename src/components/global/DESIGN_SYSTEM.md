# Sistema de Diseño "Cine-Data Multicultural" - Energy Media

## 🎨 Guía de Uso Rápido

### Variables CSS Disponibles

Todas las variables están definidas en `LayoutBasic.astro` y son accesibles globalmente en cualquier componente.

#### Colores
```css
/* En tus CSS Modules */
.myComponent {
  background: var(--em-bg-offwhite);
  color: var(--em-text-primary);
  border: 2px solid var(--em-purple-primary);
}

.myButton {
  background: var(--em-gradient-cta);
  color: var(--em-text-light);
  box-shadow: var(--em-shadow-card);
}
```

#### Tipografía
```css
.headline {
  font-family: var(--em-font-headline);
  font-size: var(--em-text-h1);
  line-height: var(--em-leading-tight);
  letter-spacing: -0.02em; /* Tracking negativo para impacto */
}

.bodyText {
  font-family: var(--em-font-body);
  font-size: var(--em-text-body);
  line-height: var(--em-leading-normal);
}
```

#### Espaciado y Layout
```css
.card {
  padding: var(--em-space-lg);
  margin-bottom: var(--em-space-xl);
  border-radius: var(--em-radius-lg);
  max-width: 1280px; /* Max-width del sistema */
}
```

#### Animaciones
```css
.animatedElement {
  transition: all 0.3s var(--em-ease-smooth);
}

.animatedElement:hover {
  transform: translateY(-2px);
  box-shadow: var(--em-shadow-card-hover);
}
```

---

## 🏗️ Componente Base: CinematicSection

### Importación
```jsx
import CinematicSection from '../../global/CinematicSection';
```

### Uso Básico

#### Sección Clara (Informativa)
```jsx
<CinematicSection variant="light">
  <h2>Servicios Destacados</h2>
  <p>Contenido informativo con fondo claro...</p>
</CinematicSection>
```

#### Sección Oscura (Emocional/Cinematográfica)
```jsx
<CinematicSection variant="dark" withGrain={true}>
  <h2>Video Reel</h2>
  <p>Contenido emocional con fondo morado profundo...</p>
</CinematicSection>
```

#### CTA con Gradiente
```jsx
<CinematicSection variant="gradient">
  <h2>Listos para crecer con cultura y datos</h2>
  <button>Agenda tu consultoría</button>
</CinematicSection>
```

#### Sin Animación (para contenido crítico)
```jsx
<CinematicSection variant="light" withAnimation={false}>
  <h1>Hero Section</h1>
</CinematicSection>
```

### Props del Componente

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'light' \| 'dark' \| 'gradient' \| 'purple-black' \| 'custom'` | `'light'` | Variante visual de la sección |
| `className` | `string` | `''` | Clases CSS adicionales |
| `withGrain` | `boolean` | `false` | Añade textura cinematográfica (grano sutil) |
| `withAnimation` | `boolean` | `true` | Activa animación de aparición al scroll |
| `threshold` | `number` | `0.1` | Umbral de Intersection Observer (0-1) |
| `children` | `ReactNode` | - | Contenido de la sección |

---

## 🎬 Patrones de Componentes

### 1. Botón Primario

```jsx
// Component
import styles from './myComponent.module.css';

<button className={styles.btnPrimary}>
  Agenda tu consultoría
</button>
```

```css
/* myComponent.module.css */
.btnPrimary {
  background: var(--em-gradient-cta);
  color: var(--em-text-light);
  padding: 14px 32px;
  border-radius: var(--em-radius-md);
  font-family: var(--em-font-body);
  font-size: var(--em-text-body);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s var(--em-ease-smooth);
}

.btnPrimary:hover {
  box-shadow: var(--em-shadow-glow-cyan);
  transform: translateY(-2px);
}

.btnPrimary:active {
  transform: translateY(0);
}
```

### 2. Botón Secundario

```css
.btnSecondary {
  border: 2px solid var(--em-purple-primary);
  background: transparent;
  color: var(--em-purple-primary);
  padding: 12px 30px;
  border-radius: var(--em-radius-md);
  font-family: var(--em-font-body);
  font-size: var(--em-text-body);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s var(--em-ease-smooth);
}

.btnSecondary:hover {
  background: var(--em-purple-primary);
  color: var(--em-text-light);
  box-shadow: var(--em-shadow-card);
}

/* Versión para fondos oscuros */
.btnSecondaryDark {
  border: 2px solid var(--em-text-light);
  color: var(--em-text-light);
  background: rgba(255, 255, 255, 0.1);
}

.btnSecondaryDark:hover {
  background: var(--em-text-light);
  color: var(--em-purple-primary);
}
```

### 3. Card con Métricas

```jsx
<div className={styles.caseCard}>
  <div className={styles.kpiCorner}>+42% ROAS</div>
  <img src={logoCliente} alt="Cliente" className={styles.clientLogo} />
  <h3 className={styles.cardTitle}>E-commerce moda</h3>
  <p className={styles.cardDescription}>
    Video ads bilingües + segmentación cultural
  </p>
  <div className={styles.metricsGrid}>
    <div className={styles.metricChip}>
      <span className={styles.value}>+42%</span>
      <span className={styles.label}>ROAS</span>
    </div>
    <div className={styles.metricChip}>
      <span className={styles.value}>–28%</span>
      <span className={styles.label}>CAC</span>
    </div>
    <div className={styles.metricChip}>
      <span className={styles.value}>+3.1x</span>
      <span className={styles.label}>Leads</span>
    </div>
  </div>
  <a href="#" className={styles.ctaLink}>Ver caso completo →</a>
</div>
```

```css
.caseCard {
  position: relative;
  background: var(--em-text-light);
  border-radius: var(--em-radius-xl);
  padding: var(--em-space-lg);
  box-shadow: var(--em-shadow-card);
  transition: all 0.3s var(--em-ease-smooth);
}

.caseCard:hover {
  transform: translateY(-5px);
  box-shadow: var(--em-shadow-card-hover);
}

.kpiCorner {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--em-gradient-purple-cyan);
  color: var(--em-text-light);
  padding: 8px 16px;
  border-radius: var(--em-radius-full);
  font-size: var(--em-text-caption);
  font-weight: 700;
}

.clientLogo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: var(--em-space-md);
}

.cardTitle {
  font-family: var(--em-font-headline);
  font-size: var(--em-text-h3);
  color: var(--em-text-primary);
  margin-bottom: var(--em-space-sm);
}

.cardDescription {
  font-family: var(--em-font-body);
  font-size: var(--em-text-body);
  color: var(--em-text-gray);
  margin-bottom: var(--em-space-md);
}

.metricsGrid {
  display: flex;
  gap: var(--em-space-sm);
  flex-wrap: wrap;
  margin-bottom: var(--em-space-md);
}

.metricChip {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  border-radius: var(--em-radius-md);
  background: rgba(62, 200, 247, 0.15);
}

.metricChip .value {
  font-size: var(--em-text-h3);
  font-weight: 700;
  color: var(--em-purple-primary);
}

.metricChip .label {
  font-size: var(--em-text-caption);
  color: var(--em-text-gray);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.ctaLink {
  color: var(--em-cyan-accent);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s var(--em-ease-smooth);
}

.ctaLink:hover {
  color: var(--em-purple-primary);
  text-shadow: 0 0 10px rgba(62, 200, 247, 0.3);
}
```

### 4. Badge de Métrica sobre Video

```jsx
<div className={styles.videoCard}>
  <video src={videoUrl} />
  <div className={styles.metricBadge}>
    <span className={styles.value}>+42% CTR</span>
    <span className={styles.label}>Campaña bilingüe</span>
  </div>
</div>
```

```css
.videoCard {
  position: relative;
  border-radius: var(--em-radius-lg);
  overflow: hidden;
}

.metricBadge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(62, 200, 247, 0.9);
  backdrop-filter: blur(10px);
  padding: 10px 16px;
  border-radius: var(--em-radius-md);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.metricBadge .value {
  font-size: var(--em-text-h3);
  font-weight: 700;
  color: var(--em-text-light);
}

.metricBadge .label {
  font-size: var(--em-text-caption);
  color: var(--em-text-light);
  opacity: 0.9;
}
```

---

## 📐 Breakpoints y Responsive

### Media Queries Recomendadas

```css
/* Mobile first (default) */
.myComponent {
  padding: var(--em-space-md);
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .myComponent {
    padding: var(--em-space-lg);
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .myComponent {
    padding: var(--em-space-xl);
  }
}

/* Large Desktop (1280px+) */
@media (min-width: 1280px) {
  .myComponent {
    padding: var(--em-space-2xl);
  }
}
```

### Grid Responsive

```css
.grid {
  display: grid;
  gap: var(--em-space-md);
  grid-template-columns: 1fr; /* Mobile: 1 columna */
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columnas */
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columnas */
  }
}
```

---

## ♿ Accesibilidad

### Contraste de Colores

✅ **USAR**:
- Blanco sobre morado `#672E92` (8.8:1)
- Texto `#1A1024` sobre `#F7F5FA` (14:1)
- Cian `#3EC8F7` sobre morado `#672E92` (4.8:1)

❌ **EVITAR**:
- Blanco sobre naranja `#F56831` (bajo contraste)
- Blanco sobre ámbar `#FAB03D` (bajo contraste)

### Focus States

```css
.interactiveElement:focus {
  outline: 2px solid var(--em-cyan-accent);
  outline-offset: 2px;
}

.interactiveElement:focus:not(:focus-visible) {
  outline: none;
}
```

### Reduce Motion

```css
@media (prefers-reduced-motion: reduce) {
  .animated {
    animation: none;
    transition: none;
  }
}
```

---

## 🚀 Ejemplos Completos

Ver:
- `IndexSeccion1.jsx` - Hero con video teaser
- `IndexSeccion2.jsx` - Grid de diferenciadores
- `IndexSeccion7.jsx` - Video Reel con lightbox
- `NavBar.jsx` - Navbar con glassmorphism
- `FootNetHive.jsx` - Footer con gradiente

---

## 📚 Recursos Adicionales

- Fuentes: Poppins (headlines) + Inter (body)
- Paleta completa en `LayoutBasic.astro`
- Guía completa en `.github/copilot-instructions.md`
