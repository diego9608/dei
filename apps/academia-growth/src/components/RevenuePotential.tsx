'use client'

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Target, Award } from 'lucide-react'
import { academyData } from '@/data/academy-data'

export default function RevenuePotential() {
  const currentRevenue = academyData.losses.currentMonthlyRevenue
  const potentialRevenue = academyData.losses.monthlyPotentialRevenue
  const additionalRevenue = potentialRevenue - currentRevenue

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(num)
  }

  return (
    <section className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/30" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
            <Target className="w-5 h-5" />
            <span className="font-semibold">Potencial real de ingresos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            De sobrevivir a <span className="text-green-600">prosperar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estos son números conservadores basados en ocupación del 85% 
            (estándar de academias exitosas)
          </p>
        </motion.div>

        {/* Comparación visual de ingresos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Estado actual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-200"
          >
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Ingresos actuales</p>
              <p className="text-4xl font-bold text-red-600 mb-2">
                {formatCurrency(currentRevenue)}
              </p>
              <p className="text-lg text-gray-600">mensuales</p>
              
              <div className="mt-6 space-y-2 text-left">
                <p className="text-sm flex justify-between">
                  <span>Ocupación:</span>
                  <span className="font-semibold text-red-600">35%</span>
                </p>
                <p className="text-sm flex justify-between">
                  <span>Slots llenos:</span>
                  <span className="font-semibold">706/semana</span>
                </p>
                <p className="text-sm flex justify-between">
                  <span>Alumnos activos:</span>
                  <span className="font-semibold">~280</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Flecha de transformación */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-music-purple animate-pulse" />
              <p className="text-2xl font-bold text-music-purple mb-2">+142%</p>
              <p className="text-lg text-gray-600">de crecimiento</p>
              
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-4"
              >
                <span className="text-4xl">→</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Potencial con sistema */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-2xl shadow-xl transform scale-105"
          >
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm uppercase tracking-wide mb-2 opacity-90">Con nuestro sistema</p>
              <p className="text-4xl font-bold mb-2">
                {formatCurrency(potentialRevenue)}
              </p>
              <p className="text-lg">mensuales</p>
              
              <div className="mt-6 space-y-2 text-left">
                <p className="text-sm flex justify-between">
                  <span>Ocupación:</span>
                  <span className="font-semibold">85%</span>
                </p>
                <p className="text-sm flex justify-between">
                  <span>Slots llenos:</span>
                  <span className="font-semibold">1,714/semana</span>
                </p>
                <p className="text-sm flex justify-between">
                  <span>Alumnos activos:</span>
                  <span className="font-semibold">~680</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desglose del crecimiento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-music-purple to-purple-700 text-white rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            ¿De dónde vienen los {formatCurrency(additionalRevenue)} extra?
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-music-gold mb-2">35%</p>
              <p className="text-sm">Nuevos segmentos (profesionales, jubilados)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-music-gold mb-2">25%</p>
              <p className="text-sm">Programas corporativos B2B</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-music-gold mb-2">20%</p>
              <p className="text-sm">Membresías premium</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-music-gold mb-2">20%</p>
              <p className="text-sm">Optimización de horarios</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/20 backdrop-blur rounded-xl">
            <p className="text-center text-lg">
              <span className="font-bold text-2xl">{formatCurrency(additionalRevenue * 12)}</span>
              <br />
              adicionales al año con el mismo espacio y personal
            </p>
          </div>
        </motion.div>

        {/* Proyección a largo plazo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 mb-4">
            Con reinversión inteligente en 24 meses:
          </p>
          <div className="inline-flex items-center gap-3 bg-music-gold text-white px-8 py-4 rounded-full">
            <Award className="w-6 h-6" />
            <span className="text-xl font-bold">
              Academia #1 de la región con lista de espera
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}