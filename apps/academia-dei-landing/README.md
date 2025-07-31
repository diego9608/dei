# Academia de Música Dei - Landing Page

Landing page profesional para la Academia de Música Dei, ubicada en San Pedro Garza García, N.L.

## 🚀 Características

- Diseño minimalista y elegante con base en blanco
- Animaciones suaves con Framer Motion
- Totalmente responsivo
- Optimizado para SEO
- Integración con WhatsApp para contacto directo
- Página oculta de pitch en `/oportunidad`

## 🛠️ Tecnologías

- Next.js 14 con App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🌐 Despliegue en Netlify

1. Sube el proyecto a GitHub
2. Conecta tu repositorio con Netlify
3. Configura los siguientes ajustes de build:
   - Base directory: `apps/academia-dei-landing`
   - Build command: `npm install && npm run build`
   - Publish directory: `.next`
   - Node version: 18.x o superior

## 📱 Secciones

### Landing Principal (/)
1. **Hero**: Presentación principal con logo y CTA
2. **Sobre Nosotros**: Filosofía y valores de la academia
3. **Clases**: Instrumentos disponibles y modalidades
4. **Eventos**: Información del último festival y galería
5. **Contacto**: Información completa y mapa de ubicación

### Pitch Oculto (/oportunidad)
- Diagnóstico de situación actual
- Visualización del futuro con automatización
- Timeline de implementación
- Garantía 50/90

## 🎨 Personalización

- Colores principales definidos en `tailwind.config.ts`
- Fuentes: Inter (sans) y Playfair Display (display)
- Animaciones personalizables en cada componente

## 🔗 URLs

- Pitch principal (Sistema Academia 92): `https://academiadei.netlify.app`
- Landing institucional: `https://academiadei.netlify.app/landing`
- Pitch premium oculto: `https://academiadei.netlify.app/oportunidad`