# DEI - Sistema de Crecimiento para Academias de Música

Monorepo para propuestas de transformación digital de academias de música, diseñado para convertir espacios vacíos en instituciones con lista de espera.

## 🎯 Propósito

Ayudar a academias de música a pasar de 35% a 85% de ocupación en 6 meses, como las academias centenarias (Juilliard, Berklee, Yamaha).

## 📊 Estructura

```
dei/
├── apps/
│   └── academia-growth/      # Propuesta de crecimiento para academias
├── packages/                 # Paquetes compartidos (futuro)
└── turbo.json               # Configuración de Turbo
```

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build
```

## 💡 Características principales

### 1. **Calculadora de pérdidas en tiempo real**
- Muestra slots vacíos acumulándose por segundo
- Visualización de horario semanal actual vs. potencial
- Comparación con academias exitosas (87-92% ocupación)

### 2. **Identificación de segmentos no explotados**
- Profesionales (horario vespertino)
- Jubilados activos (horario matutino)
- Homeschoolers (mediodía)
- Corporativos B2B (viernes tarde)

### 3. **Sistema de 4 pilares**
1. Membresías Premium (+23% ocupación)
2. Programas Corporativos (+18% ingresos)
3. Academia Digital Híbrida (+35% alcance)
4. Eventos y Showcases (+42% retención)

### 4. **Proyección financiera**
- De $352,800/mes (35%) a $856,800/mes (85%)
- ROI: +142% en 6 meses
- Garantía 50/90: 50% más ocupación en 90 días

## 🎨 Stack técnico

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Recharts** para visualizaciones (opcional)
- **Turbo** para monorepo management

## 🎯 Psicología de ventas aplicada

1. **FOMO**: Pérdidas en tiempo real ($28,533/día)
2. **Dolor cuantificado**: 65% asientos vacíos = $856,000/mes perdidos
3. **Prueba social**: Casos de éxito reales con números
4. **Urgencia**: "Solo 2 espacios en su ciudad"
5. **Garantía**: Elimina el riesgo de inversión

## 📱 Personalización

### Datos a modificar:
- `src/data/academy-data.ts`: Capacidad, precios, segmentos
- `src/components/CTA.tsx`: Teléfono y Calendly
- Colores en `tailwind.config.ts`

### Paleta actual:
- Purple: `#6B46C1` (principal)
- Gold: `#F59E0B` (acento)
- Dark: `#1F2937`
- Light: `#F9FAFB`

## 🌐 Deploy

Configurado para Netlify. Solo conecta el repo y despliega.

## 📈 Métricas de éxito

- **35% → 85%** ocupación en 6 meses
- **+$504,000** mensuales adicionales
- **680** alumnos activos (vs. 280 actuales)
- **Lista de espera** activa al año