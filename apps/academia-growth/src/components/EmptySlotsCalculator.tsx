'use client'

import { motion } from 'framer-motion'
import { Clock, Users, TrendingDown, AlertCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { academyData } from '@/data/academy-data'

export default function EmptySlotsCalculator() {
  const [lostRevenue, setLostRevenue] = useState(0)
  const [emptySlots, setEmptySlots] = useState(0)
  
  useEffect(() => {
    // Calcular slots vacíos por segundo
    const slotsPerSecond = (academyData.capacity.totalSlots * 0.65) / (7 * 24 * 60 * 60) // 65% vacíos
    const revenuePerSecond = slotsPerSecond * academyData.losses.emptySlotCost
    
    const timer = setInterval(() => {
      setEmptySlots(prev => prev + slotsPerSecond)
      setLostRevenue(prev => prev + revenuePerSecond)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  // Visual de horario semanal
  const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
  const hours = Array.from({ length: 12 }, (_, i) => `${8 + i}:00`)

  return (
    <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50 relative">
      <div className="absolute inset-0 bg-pattern-staff opacity-10" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold">Pérdidas en tiempo real</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            Mientras lee esto, su academia está perdiendo...
          </h2>
        </motion.div>

        {/* Contador en tiempo real */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 mb-2">Slots vacíos acumulados:</p>
              <motion.p 
                className="text-5xl md:text-6xl font-bold text-red-600"
                key={Math.floor(emptySlots)}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                {Math.floor(emptySlots)}
              </motion.p>
              <p className="text-sm text-gray-500 mt-2">
                clases que podrían estar generando ingresos
              </p>
            </div>
            
            <div className="text-center">
              <TrendingDown className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <p className="text-gray-600 mb-2">Ingresos perdidos:</p>
              <p className="text-5xl md:text-6xl font-bold text-red-600">
                {formatCurrency(lostRevenue)}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                desde que abrió esta página
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visualización del horario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-6 overflow-x-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Su horario actual vs. Potencial
          </h3>
          
          <div className="schedule-grid min-w-[800px]">
            <div className="schedule-cell font-bold">Hora</div>
            {weekDays.map(day => (
              <div key={day} className="schedule-cell font-bold text-center">
                {day}
              </div>
            ))}
            
            {hours.map((hour, hourIndex) => (
              <motion.div
                key={hour}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: hourIndex * 0.05 }}
                className="contents"
              >
                <div className="schedule-cell font-medium">{hour}</div>
                {weekDays.map((day, dayIndex) => {
                  const random = Math.random()
                  const isFilled = random < 0.35 // 35% ocupación actual
                  const isPotential = !isFilled && random < 0.85 // Potencial hasta 85%
                  
                  return (
                    <div
                      key={`${day}-${hour}`}
                      className={`schedule-cell ${
                        isFilled ? 'filled' : isPotential ? 'potential' : 'empty'
                      }`}
                    >
                      {isFilled ? '●' : isPotential ? '◐' : '○'}
                    </div>
                  )
                })}
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-music-purple rounded"></div>
              <span className="text-sm">Ocupado (35%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded animate-pulse"></div>
              <span className="text-sm">Potencial inmediato (50%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-50 border-2 border-red-300 rounded"></div>
              <span className="text-sm">Vacío perdido (15%)</span>
            </div>
          </div>
        </motion.div>

        {/* Comparación con academias exitosas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {Object.entries(academyData.benchmarks).map(([name, data], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h4 className="text-xl font-bold capitalize mb-2">{name}</h4>
              <p className="text-3xl font-bold text-music-purple mb-2">
                {(data.occupancy * 100).toFixed(0)}%
              </p>
              <p className="text-sm text-gray-600">
                Ocupación · Fundada {data.founded}
              </p>
              {data.waitlist && (
                <p className="text-sm text-green-600 font-semibold mt-2">
                  ✓ Con lista de espera
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}