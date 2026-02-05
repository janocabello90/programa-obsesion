# Documentación Completa - Landing Page OPTIMIZA

## 📋 Índice
1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Configuración Inicial](#configuración-inicial)
5. [Componentes Principales](#componentes-principales)
6. [Diseño y Estilos](#diseño-y-estilos)
7. [Funcionalidades Implementadas](#funcionalidades-implementadas)
8. [Despliegue](#despliegue)
9. [Lecciones Aprendidas](#lecciones-aprendidas)

---

## Resumen del Proyecto

Landing page para **OPTIMIZA**, un programa de reestructuración para clínicas. La página está diseñada para convertir visitantes en clientes mediante una narrativa clara, diseño premium y una estructura de ventas basada en valor.

**Objetivo**: Crear una landing page de alto rendimiento que comunique el valor del programa y genere solicitudes de acceso.

---

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Fuente**: Inter (Google Fonts)
- **Integraciones**: Calendly (widget embebido)
- **Despliegue**: Vercel

---

## Estructura del Proyecto

```
programa-optimiza/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal con metadata
│   └── page.tsx             # Página principal (landing page)
├── components/
│   ├── CalendlyEmbed.tsx    # Widget de Calendly
│   ├── Header.tsx            # Header fijo con logo y CTA
│   └── OptimizaTimeline.tsx # Timeline interactivo de 90 días
├── public/
│   ├── 8aqrtetyH_4UXUu6unX6q.svg  # Logo principal
│   ├── optimiza-blanco.svg         # Logo para fondos oscuros
│   ├── fr-tip.svg                  # Icono de verificación
│   └── alexyjano - Editada.png     # Imagen de garantía
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Configuración Inicial

### 1. Crear proyecto Next.js

```bash
npx create-next-app@latest programa-optimiza --typescript --tailwind --app
cd programa-optimiza
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar Tailwind CSS

**tailwind.config.ts**:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001f3f',    // Azul marino principal
        gold: '#D4AF37',    // Dorado de marca
      },
    },
  },
  plugins: [],
}
export default config
```

### 4. Configurar Metadata (SEO)

**app/layout.tsx**:
```typescript
export const metadata: Metadata = {
  title: 'OPTIMIZA - De clínica dependiente a negocio rentable en 90 días',
  description: 'Programa 1:1 cerrado para dueños de clínicas que facturan entre 100K y 500K. Reestructura tu clínica sin trabajar más horas ni crecer en volumen.',
}
```

---

## Componentes Principales

### 1. Header.tsx

**Funcionalidad**: Header fijo con logo y CTA de reserva.

**Características**:
- Posición fija (`fixed top-0`)
- Logo con Next.js Image (optimización automática)
- Botón CTA que enlaza a la sección de acceso
- Responsive con diferentes tamaños de texto

**Código clave**:
```tsx
<header className="fixed top-0 left-0 right-0 bg-white w-full py-4 px-4 shadow-sm z-50">
  <Image src="/8aqrtetyH_4UXUu6unX6q.svg" alt="OPTIMIZA Logo" width={200} height={80} priority />
  <a href="#acceso" style={{ backgroundColor: '#D4AF37', color: '#001f3f' }}>
    Reservar sesión
  </a>
</header>
```

### 2. OptimizaTimeline.tsx

**Funcionalidad**: Timeline interactivo que muestra el proceso de 90 días.

**Características**:
- Animación al hacer scroll (Intersection Observer)
- Diseño alterno en desktop (izquierda/derecha)
- Diseño vertical en mobile
- Línea vertical central con nodos
- Flecha final con frase de cierre
- Bloque dorado full-width al final

**Tecnologías usadas**:
- `useState` para controlar items visibles
- `useEffect` + `IntersectionObserver` para animaciones
- Animaciones CSS con `transition-opacity`

**Estructura de datos**:
```typescript
interface TimelineItem {
  period: string      // "FEBRERO — Diagnóstico y dirección"
  title: string       // "Sabes exactamente qué tocar y por qué"
  description: string // Descripción del paso
  deliverable: string // "Diagnóstico + prioridades."
}
```

### 3. CalendlyEmbed.tsx

**Funcionalidad**: Integración del widget de Calendly.

**Implementación**:
```tsx
'use client'
import { useEffect } from 'react'

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/janocabello/admision-en-optimiza?hide_event_type_details=1"
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}
```

---

## Diseño y Estilos

### Paleta de Colores

```css
/* Colores principales */
--navy: #001f3f      /* Azul marino - fondos principales */
--gold: #D4AF37      /* Dorado - acentos, CTAs */
--red: #dc2626       /* Rojo - urgencia, destacados */
--white: #ffffff     /* Blanco - textos sobre fondos oscuros */
--gray-50: #f9fafb   /* Fondos claros */
--gray-600: #4b5563  /* Textos secundarios */
```

### Tipografía

- **Fuente**: Inter (Google Fonts)
- **Tamaños principales**:
  - Títulos hero: `text-5xl md:text-7xl`
  - Títulos sección: `text-3xl md:text-4xl`
  - Subtítulos: `text-xl md:text-2xl`
  - Texto cuerpo: `text-lg`

### Espaciado

- Secciones principales: `py-24` (6rem = 96px)
- Espaciado interno: `space-y-8` o `space-y-12`
- Padding horizontal: `px-4` (móvil) con `max-w-*` en contenedores

### Patrones de Diseño

1. **Hero Section**:
   - Fondo azul marino (#001f3f)
   - Elementos decorativos con blur
   - Badge de urgencia en rojo
   - CTAs destacados en dorado

2. **Secciones de Contenido**:
   - Fondos alternos (blanco/gris-50)
   - Títulos centrados
   - Grids responsive (1 columna móvil, 2-3 desktop)

3. **Callouts/Highlight Boxes**:
   - Fondos con transparencia
   - Bordes dorados
   - Sombras sutiles

---

## Funcionalidades Implementadas

### 1. Secciones de la Landing Page

#### BLOQUE 1 — HERO
- Badge de urgencia
- Título principal con jerarquía visual
- Subtítulo con información clave
- Beneficios destacados (3 cards)
- CTAs principales

#### BLOQUE 2 — IDENTIFICACIÓN / EMPATÍA
- Problema vs Consecuencia (2 columnas)
- Frase final destacada con icono

#### BLOQUE 3 — REENCUADRE DEL PROBLEMA
- Título tachado para contraste
- Lista de problemas comunes
- Cierre con frase de giro

#### BLOQUE 4 — QUÉ ES OPTIMIZA
- Fondo azul marino
- 6 cards con iconos explicando el proceso
- Lista de elementos trabajados

#### BLOQUE 5 — RESULTADOS
- Grid de 6 resultados esperados
- Cards con borde dorado izquierdo

#### BLOQUE 6 — QUÉ INCLUYE OPTIMIZA
- 3 fases del proceso
- Cards expandidos con detalles

#### BLOQUE 6.5 — TIMELINE
- Timeline interactivo de 90 días
- Animaciones al scroll
- Flecha final con frase de cierre
- Bloque dorado full-width

#### BLOQUE 7 — PARA QUIÉN NO ES
- Lista de exclusiones
- Emojis de X para enfatizar
- Callout final con perfil objetivo

#### BLOQUE 8 — GARANTÍA
- Icono de escudo
- 2 columnas: texto + imagen
- Frase destacada en dorado

#### BLOQUE 9 — PRECIO
- Ecuación de valor (5 elementos)
- Precio anclado (tachado, rojo)
- Precio final (dorado, destacado)
- Frase de cierre potente

#### BLOQUE 10 — ACCESO / CALENDLY
- Mensaje de urgencia con warning
- Widget de Calendly embebido
- Información adicional

### 2. Elementos Interactivos

- **Timeline animado**: Aparece progresivamente al hacer scroll
- **Enlaces suaves**: `href="#acceso"` para navegación interna
- **Hover effects**: En botones y enlaces
- **Responsive**: Adaptación completa móvil/desktop

### 3. Optimizaciones

- **Next.js Image**: Optimización automática de imágenes
- **Priority loading**: Logo y hero images
- **Static generation**: Página pre-renderizada
- **Font optimization**: Inter cargada desde Google Fonts

---

## Despliegue

### Opción 1: Vercel CLI (Rápido)

```bash
# 1. Iniciar sesión
npx vercel login

# 2. Desplegar
npx vercel --yes

# 3. Para producción
npx vercel --prod
```

### Opción 2: Vercel + GitHub (Automático)

```bash
# 1. Inicializar Git
git init
git add .
git commit -m "Initial commit"

# 2. Crear repo en GitHub y conectar
git remote add origin https://github.com/USUARIO/programa-optimiza.git
git push -u origin main

# 3. En Vercel Dashboard:
# - Importar proyecto desde GitHub
# - Configuración automática
# - Cada push despliega automáticamente
```

### Variables de Entorno

Si necesitas variables de entorno:
1. Crear `.env.local` (no commitear)
2. En Vercel: Settings → Environment Variables
3. Añadir variables para Production, Preview, Development

---

## Lecciones Aprendidas

### 1. Estructura de Contenido

**Principio**: Narrativa clara y progresiva
- Empatía → Problema → Solución → Valor → Precio → Acción
- Cada sección tiene un propósito específico
- Transiciones suaves entre secciones

### 2. Diseño Premium

**Elementos clave**:
- Mucho espacio en blanco (aire)
- Colores consistentes de marca
- Tipografía con jerarquía clara
- Iconos lineales simples
- Sin urgencias artificiales agresivas

### 3. Copywriting Estratégico

**Técnicas usadas**:
- Reencuadre de problemas
- Exclusión intencionada (filtrado)
- Garantía basada en acompañamiento (no devolución)
- Precio presentado como inversión estratégica
- Preguntas que generan reflexión

### 4. Componentes Reutilizables

**Timeline como componente**:
- Datos separados de la presentación
- Animaciones controladas por estado
- Responsive built-in
- Fácil de modificar y extender

### 5. Integraciones Externas

**Calendly**:
- Script cargado dinámicamente
- Cleanup en useEffect
- URL configurable
- Estilos inline para el widget

---

## Checklist para Replicar el Proyecto

### Setup Inicial
- [ ] Crear proyecto Next.js con TypeScript y Tailwind
- [ ] Configurar colores de marca en `tailwind.config.ts`
- [ ] Configurar metadata SEO en `layout.tsx`
- [ ] Añadir fuente Inter desde Google Fonts

### Componentes Base
- [ ] Crear Header con logo y CTA
- [ ] Crear componente de Timeline (si aplica)
- [ ] Crear componente de integración (Calendly u otro)

### Contenido
- [ ] Estructurar secciones en `page.tsx`
- [ ] Implementar hero section
- [ ] Añadir secciones de valor
- [ ] Crear sección de precio/valor
- [ ] Implementar CTA final

### Assets
- [ ] Optimizar imágenes (SVG preferible para logos)
- [ ] Añadir imágenes a `/public`
- [ ] Verificar tamaños y formatos

### Estilos
- [ ] Aplicar paleta de colores consistente
- [ ] Implementar responsive design
- [ ] Añadir animaciones sutiles
- [ ] Verificar contraste de textos

### Funcionalidades
- [ ] Implementar navegación suave (anchors)
- [ ] Añadir animaciones al scroll
- [ ] Integrar widget externo (Calendly)
- [ ] Verificar todos los enlaces

### Optimización
- [ ] Usar Next.js Image para todas las imágenes
- [ ] Añadir `priority` a imágenes above-the-fold
- [ ] Verificar performance con Lighthouse
- [ ] Optimizar bundle size

### Despliegue
- [ ] Probar build local (`npm run build`)
- [ ] Configurar Git y hacer commit
- [ ] Desplegar en Vercel
- [ ] Verificar URL de producción
- [ ] Configurar dominio personalizado (opcional)

---

## Comandos Útiles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo (localhost:3000)

# Build
npm run build        # Compilar para producción
npm run start        # Servidor de producción local

# Linting
npm run lint         # Verificar errores de código

# Git
git add .            # Añadir cambios
git commit -m "..."   # Hacer commit
git push             # Subir cambios

# Vercel
npx vercel           # Desplegar preview
npx vercel --prod    # Desplegar producción
```

---

## Recursos y Referencias

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Calendly Widget**: https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview

---

## Notas Finales

Este proyecto demuestra cómo crear una landing page de alto rendimiento usando:
- **Next.js 14** para performance y SEO
- **TypeScript** para type safety
- **Tailwind CSS** para diseño rápido y consistente
- **Componentes modulares** para mantenibilidad
- **Narrativa estratégica** para conversión

La clave está en combinar tecnología moderna con copywriting efectivo y diseño que respalde el mensaje.

---

**Última actualización**: Enero 2025
**Versión del proyecto**: 1.0.0
