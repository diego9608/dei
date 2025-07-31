export const academyData = {
  // Capacidad y ocupación actual
  capacity: {
    totalRooms: 12,
    hoursPerDay: 12, // 8am a 8pm
    daysPerWeek: 7,
    slotsPerHour: 2, // Clases de 30 min
    totalSlots: 12 * 12 * 7 * 2, // 2016 slots semanales
    currentOccupancy: 0.35, // 35% ocupación actual
    targetOccupancy: 0.85, // 85% objetivo (como academias centenarias)
  },

  // Datos financieros
  pricing: {
    averageMonthlyFee: 2500, // Mensualidad promedio
    groupClassFee: 1800,
    individualClassFee: 3500,
    workshopFee: 500,
    materialsFee: 300,
  },

  // Pérdidas actuales
  losses: {
    emptySlotCost: 125, // Costo por slot vacío por hora
    monthlyPotentialRevenue: 2016 * 0.85 * 125 * 4, // Si estuviera al 85%
    currentMonthlyRevenue: 2016 * 0.35 * 125 * 4, // Con 35% actual
  },

  // Segmentos de mercado no explotados
  untappedSegments: [
    {
      name: 'Profesionales 25-40 años',
      potential: '32%',
      bestHours: '7-9pm',
      insight: 'Buscan desestresarse después del trabajo',
    },
    {
      name: 'Jubilados activos',
      potential: '28%',
      bestHours: '9am-12pm',
      insight: 'Horarios muertos que podrían ser gold mine',
    },
    {
      name: 'Homeschoolers',
      potential: '15%',
      bestHours: '10am-2pm',
      insight: 'Mercado creciente post-pandemia',
    },
    {
      name: 'Corporativos (team building)',
      potential: '25%',
      bestHours: 'Viernes 4-7pm',
      insight: 'Contratos B2B de alto valor',
    },
  ],

  // Comparación con academias exitosas
  benchmarks: {
    juilliard: {
      occupancy: 0.92,
      waitlist: true,
      founded: 1905,
    },
    berklee: {
      occupancy: 0.89,
      waitlist: true,
      founded: 1945,
    },
    yamaha: {
      occupancy: 0.87,
      waitlist: false,
      founded: 1954,
    },
  },

  // Estrategias probadas
  strategies: [
    {
      name: 'Sistema de Membresías Premium',
      impact: '+23% ocupación',
      implementation: '30 días',
    },
    {
      name: 'Programas Corporativos B2B',
      impact: '+18% ingresos',
      implementation: '45 días',
    },
    {
      name: 'Academia Digital Híbrida',
      impact: '+35% alcance',
      implementation: '60 días',
    },
    {
      name: 'Eventos y Showcases Mensuales',
      impact: '+42% retención',
      implementation: '15 días',
    },
  ],
}