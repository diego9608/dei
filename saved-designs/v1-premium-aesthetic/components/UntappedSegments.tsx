'use client'

import { motion } from 'framer-motion'
import { Users, Clock, TrendingUp, Briefcase, Heart, Home, Building } from 'lucide-react'
import { academyData } from '@/data/academy-data'

const segmentIcons = {
  'Profesionales 25-40 años': Briefcase,
  'Jubilados activos': Heart,
  'Homeschoolers': Home,
  'Corporativos (team building)': Building,
}

export default function UntappedSegments() {
  return (
    <section className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-pattern-notes opacity-5" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            4 Segmentos que ignoran = <span className="text-music-purple">$428,000/mes perdidos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mientras usted espera a los mismos estudiantes de siempre, 
            estos grupos buscan desesperadamente dónde aprender música
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {academyData.untappedSegments.map((segment, index) => {
            const Icon = segmentIcons[segment.name as keyof typeof segmentIcons] || Users
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-music-purple/10 p-4 rounded-xl">
                    <Icon className="w-8 h-8 text-music-purple" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{segment.name}</h3>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-bold text-green-600">{segment.potential}</span>
                        <span className="text-sm text-gray-600">del mercado</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">{segment.bestHours}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{segment.insight}"</p>
                    
                    {/* Cálculo de pérdida */}
                    <div className="mt-4 p-3 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-700">
                        <span className="font-bold">Pérdida mensual:</span> $107,000 aprox.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Caso de éxito */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-music-dark text-white rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Caso Real: Academia Harmony (Miami)
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-music-gold mb-2">De 43%</p>
              <p className="text-lg">Ocupación inicial</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-music-gold mb-2">A 91%</p>
              <p className="text-lg">En 6 meses</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-music-gold mb-2">+$180K</p>
              <p className="text-lg">Mensual adicional</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg mb-4">
              "Implementamos programas para jubilados en la mañana y 
              corporativos los viernes. Ahora tenemos lista de espera."
            </p>
            <p className="text-sm text-gray-400">
              - María González, Directora Ejecutiva
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}