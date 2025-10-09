# FASE 2: Plan de Modificación de Componentes

## ✅ Completado
- index.astro reorganizado (11 secciones, sin IndexSeccion3B)
- IndexSeccion3B.jsx eliminado

## 📋 Componentes a Modificar (10 de 11)

### Sección 1: IndexSeccion1.jsx - Hero
**Estado**: ⏳ PENDIENTE (restaurado desde git)
**Cambios necesarios**:
- ❌ Eliminar: Carrusel de 3 slides con useState/useEffect
- ❌ Eliminar: slides array, index, anim, progress states
- ❌ Eliminar: indicators, slideIcon, textosAnimados
- ❌ Cambiar: trustIndicators → trustBadges (3 badges)
- ✅ Mantener: Video de fondo, videoOverlay
- ✅ Agregar: H1 estático `{t.h1}`
- ✅ Agregar: ctaValue en btnPrimary
- ✅ Actualizar: trustBadges con results, guarantee, response

**Propiedades usadas de translationsIndex**:
```javascript
t.h1
t.subtitle
t.ctaPrimary
t.ctaSecondary
t.ctaValue
t.trustBadges.results.value/label
t.trustBadges.guarantee.value/label
t.trustBadges.response.value/label
```

---

### Sección 2: IndexSeccion2.jsx - ¿Por Qué Elegirnos?
**Estado**: ⏳ PENDIENTE
**Cambios necesarios**:
- ❌ Cambiar: differentiators → whyUs
- ❌ Actualizar: 4 items → 6 reasons
- ✅ Mantener: Grid responsive, animación al scroll

**Propiedades usadas**:
```javascript
t.whyUs.title
t.whyUs.subtitle
t.whyUs.reasons[0-5].title/description
```

---

### Sección 3: IndexSeccion3.jsx - Resultados Garantizados (NUEVA)
**Estado**: ⏳ PENDIENTE (REESCRIBIR - era Servicios)
**Cambios necesarios**:
- ❌ REEMPLAZAR COMPLETO: De "servicios destacados" a "resultados garantizados"
- ✅ Crear: 4 métricas grandes (grid 2x2)
- ✅ Crear: Guarantee badge grande
- ✅ Crear: Fondo degradado morado→negro (bloque "cine")
- ✅ Crear: Animación CountUp para métricas

**Propiedades usadas**:
```javascript
t.results.title
t.results.subtitle
t.results.metrics[0-3].value/label/description
t.results.guarantee.badge/text
t.results.microCopy
```

---

### Sección 4: IndexSeccion4.jsx - Servicios Integrales
**Estado**: ⏳ PENDIENTE (REESCRIBIR - era Casos + fusionar con viejo Sec3)
**Cambios necesarios**:
- ❌ REEMPLAZAR COMPLETO: De "casos con métricas" a "servicios integrales"
- ✅ Crear: Grid de 6 servicios (responsive 3x2)
- ✅ Crear: Badges "⚡ DESTACADO" en servicios #4 (Web/Apps) y #6 (IA)
- ✅ Cada card: ícono, título, tagline, bullets (3-5), metric, link

**Propiedades usadas**:
```javascript
t.services.title
t.services.subtitle
t.services.items[0-5].title/tagline/bullets[]/metric/badge/link
```

---

### Sección 5: IndexSeccion5.jsx - Paquetes
**Estado**: ⏳ PENDIENTE (ADAPTAR - era Metodología, usar estructura de viejo Sec9)
**Cambios necesarios**:
- ❌ Cambiar: methodology → packages
- ❌ Actualizar: 5 steps → 3 plans (STARTER/GROWTH/PREMIUM)
- ✅ Cada plan: nombre, precio MXN, descripción, bullets (5-7), CTA
- ✅ Destacar: Plan GROWTH con escala 1.05x + badge "MÁS POPULAR"

**Propiedades usadas**:
```javascript
t.packages.title
t.packages.subtitle
t.packages.plans[0-2].name/priceRange/description/deliverables[]/cta
t.packages.disclaimer
```

---

### Sección 6: IndexSeccion6.jsx - Proceso
**Estado**: ⏳ PENDIENTE (ACTUALIZAR - era Logos Clientes)
**Cambios necesarios**:
- ❌ REEMPLAZAR COMPLETO: De "logos clientes" a "proceso de trabajo"
- ✅ Crear: Timeline horizontal/vertical responsive
- ✅ Crear: 6 pasos numerados con iconos, duración, entregables

**Propiedades usadas**:
```javascript
t.process.title
t.process.subtitle
t.process.steps[0-5].number/title/description/duration/deliverables/icon
```

---

### Sección 7: IndexSeccion7.jsx - Video Showcase
**Estado**: ✅ MANTENER (ya limpio según instrucciones)
**Cambios necesarios**: NINGUNO

---

### Sección 8: IndexSeccion8.jsx - Certificaciones
**Estado**: ⏳ PENDIENTE (REESCRIBIR - era Testimonios)
**Cambios necesarios**:
- ❌ REEMPLAZAR COMPLETO: De "testimonios" a "certificaciones & partners"
- ✅ Crear: Grid de logos (6-8 partners)
- ✅ Logos en escala de grises, hover → color
- ✅ Partners: Google Partner, Meta Business Partner, HubSpot, Shopify, LinkedIn, Microsoft, AWS, Vimeo

**Propiedades usadas**:
```javascript
t.certifications.title
t.certifications.subtitle
t.certifications.partners[0-5] // nombres de partners
t.certifications.microCopy
```

---

### Sección 9: IndexSeccion9.jsx - Testimonios + Stats
**Estado**: ⏳ PENDIENTE (REESCRIBIR - era Planes)
**Cambios necesarios**:
- ❌ REEMPLAZAR COMPLETO: De "planes" a "testimonios + stats"
- ✅ Crear: 2-3 testimonios en cards grandes
- ✅ Crear: 4 estadísticas de satisfacción (badges pequeños)
- ✅ Stats: 98% satisfacción, 85% recurrentes, 92% recomiendan, 4.9/5 rating

**Propiedades usadas**:
```javascript
t.testimonials.title
t.testimonials.subtitle
t.testimonials.items[0-2].text/name/role/company/result
t.testimonials.stats[0-3].value/label/icon
```

---

### Sección 10: IndexSeccion10.jsx - FAQs
**Estado**: ⏳ PENDIENTE (CREAR NUEVO - no existe)
**Cambios necesarios**:
- ✅ CREAR COMPONENTE NUEVO desde cero
- ✅ Accordion expandible/colapsable (framer-motion)
- ✅ 6 preguntas con respuestas (reducir fricción pre-contacto)

**Propiedades usadas**:
```javascript
t.faqs.title
t.faqs.subtitle
t.faqs.items[0-5].question/answer
```

---

### Sección 11: IndexSeccion11.jsx - CTA Final
**Estado**: ⏳ PENDIENTE (EXPANDIR - era Newsletter simple)
**Cambios necesarios**:
- ✅ Expandir: Newsletter básico → CTA épico con oferta
- ✅ Agregar: Badge "OFERTA LIMITADA"
- ✅ Agregar: 5 bullets de valor
- ✅ Mantener: Newsletter al pie (email + validación)

**Propiedades usadas**:
```javascript
t.finalCta.badge
t.finalCta.title
t.finalCta.subtitle
t.finalCta.features[0-4]
t.finalCta.cta
t.finalCta.guarantee
t.finalCta.newsletter.title/emailPlaceholder/buttonText/successMessage/errorMessage
```

---

## Estrategia de Ejecución

Dado que modificar componente por componente es muy lento (IndexSeccion1 falló en merge), 
propongo estrategia alternativa:

### Opción A: Batch Script (MÁS RÁPIDO)
1. Crear script Python/Node que:
   - Lee cada componente
   - Identifica sección (1-11)
   - Genera JSX nuevo basado en template
   - Sobrescribe archivo
   
### Opción B: Manual Selectivo (MÁS CONTROLADO)
1. Modificar SOLO los 3-4 componentes críticos:
   - Sec 3 (Resultados - NUEVA)
   - Sec 4 (Servicios - cambio grande)
   - Sec 10 (FAQs - crear nuevo)
2. Dejar resto con estructura actual (funcional pero con copy viejo)
3. Iterar en siguientes sesiones

### Opción C: Rebuild Completo (MÁS LIMPIO)
1. Crear carpeta `Secciones_NEW/`
2. Generar 11 componentes nuevos desde cero
3. Reemplazar carpeta completa
4. Ajustar imports en index.astro

## Recomendación

**Opción B** por pragmatismo:
- Modifica solo componentes con cambios estructurales mayores (3, 4, 10)
- Mantiene componentes funcionales actuales (1, 2, 5-9, 11)
- Permite testing incremental
- Evita riesgo de romper todo el sitio
- Total: ~40 min vs 90 min estimado original

¿Proceder con Opción B (selectivo) u otra opción?
