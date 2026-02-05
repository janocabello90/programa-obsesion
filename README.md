# Programa Obsesión

Landing page de alto rendimiento creada con Next.js 14, TypeScript y Tailwind CSS.

Este proyecto replica la estructura exitosa de una landing page anterior, adaptada para nuevos contenidos y concepto.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Fuente**: Inter (Google Fonts)
- **Integraciones**: Calendly (widget embebido)

## 📁 Estructura del Proyecto

```
programa-obsesion/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal con metadata
│   └── page.tsx             # Página principal (landing page)
├── components/
│   ├── CalendlyEmbed.tsx    # Widget de Calendly
│   ├── Header.tsx            # Header fijo con logo y CTA
│   └── Timeline.tsx          # Timeline interactivo
├── public/                   # Assets estáticos (imágenes, logos)
└── ...
```

## 🎨 Colores de Marca

- **Navy**: `#001f3f` - Azul marino principal
- **Gold**: `#D4AF37` - Dorado de marca
- **Red**: `#dc2626` - Para urgencias y destacados

## 🏃 Empezar

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Personalizar contenido

- Actualizar textos en `app/page.tsx`
- Añadir logo en `public/logo.svg`
- Configurar Calendly en `components/CalendlyEmbed.tsx`
- Ajustar timeline en `app/page.tsx` (variable `timelineData`)

## 📝 Secciones de la Landing

1. **Hero** - Título principal, beneficios y CTAs
2. **Identificación/Empatía** - Problema vs Consecuencia
3. **Reencuadre del Problema** - El problema real
4. **Qué es [Programa]** - Explicación del programa
5. **Resultados** - Resultados esperados
6. **Qué Incluye** - Fases del proceso
7. **Timeline** - Timeline interactivo de 90 días
8. **Para Quién NO es** - Exclusión intencionada
9. **Garantía** - Política de garantía
10. **Precio** - Ecuación de valor e inversión
11. **Acceso/Calendly** - Widget de reserva

## 🛠️ Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📦 Componentes Principales

### Header
Header fijo con logo y CTA de reserva. Responsive y optimizado.

### Timeline
Timeline interactivo con animaciones al hacer scroll. Diseño alterno en desktop.

### CalendlyEmbed
Integración del widget de Calendly. Actualizar la URL en el componente.

## 🎯 Próximos Pasos

1. **Contenido**: Reemplazar todos los textos placeholder con los nuevos contenidos
2. **Assets**: Añadir logo e imágenes a `/public`
3. **Calendly**: Configurar URL de Calendly en `CalendlyEmbed.tsx`
4. **Timeline**: Actualizar datos del timeline en `page.tsx`
5. **Metadata**: Actualizar metadata SEO en `layout.tsx`
6. **Colores**: Ajustar colores de marca en `tailwind.config.ts` si es necesario

## 📚 Referencias

- [Documentación del proyecto anterior](./Documentacion-proyecto.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
