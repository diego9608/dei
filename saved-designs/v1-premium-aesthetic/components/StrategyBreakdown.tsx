'use client'

import { motion } from 'framer-motion'
import { 
  Trophy, 
  Users, 
  Smartphone, 
  Calendar,
  DollarSign,
  BarChart,
  CheckCircle
} from 'lucide-react'
import { academyData } from '@/data/academy-data'

const strategyIcons = {
  'Sistema de Membresías Premium': Trophy,
  'Programas Corporativos B2B': Users,
  'Academia Digital Híbrida': Smartphone,
  'Eventos y Showcases Mensuales': Calendar,
}

export default function StrategyBreakdown() {
  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-amber-50 relative">
      <div className="absolute inset-0 bg-pattern-staff opacity-5" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            El Sistema de 4 Pilares para Llenar su Academia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estrategias probadas que transformaron academias vacías en instituciones con lista de espera
          </p>
        </motion.div>

        {/* Grid de estrategias */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {academyData.strategies.map((strategy, index) => {
            const Icon = strategyIcons[strategy.name as keyof typeof strategyIcons] || BarChart
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-music-purple to-purple-700 p-4 rounded-xl text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{strategy.name}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                        {strategy.impact}
                      </span>
                      <span className="text-gray-600">
                        Implementación: {strategy.implementation}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Detalles específicos por estrategia */}
                <div className="space-y-3">
                  {strategy.name === 'Sistema de Membresías Premium' && (
                    <>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Acceso ilimitado a clases grupales</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Reserva prioritaria de horarios prime</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>10% descuento en instrumentos</span>
                      </div>
                    </>
                  )}

                  {strategy.name === 'Programas Corporativos B2B' && (
                    <>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Team building musical</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Contratos anuales garantizados</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Horarios exclusivos viernes tarde</span>
                      </div>
                    </>
                  )}

                  {strategy.name === 'Academia Digital Híbrida' && (
                    <>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Clases online para foráneos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>App con práctica gamificada</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Biblioteca de recursos 24/7</span>
                      </div>
                    </>
                  )}

                  {strategy.name === 'Eventos y Showcases Mensuales' && (
                    <>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Conciertos para padres y amigos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Masterclasses con artistas locales</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Competencias inter-academias</span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline de implementación */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-music-dark text-white rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Cronograma de Transformación
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-music-gold text-music-dark w-12 h-12 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-1">Semana 1-2: Auditoría y Setup</h4>
                <p className="text-gray-300">Análisis de ocupación actual, segmentación de mercado, setup de sistemas</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-music-gold text-music-dark w-12 h-12 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-1">Semana 3-4: Lanzamiento Soft</h4>
                <p className="text-gray-300">Membresías beta, primeros programas corporativos, eventos piloto</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-music-gold text-music-dark w-12 h-12 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-1">Mes 2: Escalamiento</h4>
                <p className="text-gray-300">Campañas activas, onboarding masivo, primeros showcases públicos</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-music-gold text-music-dark w-12 h-12 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-1">Mes 3-6: Optimización</h4>
                <p className="text-gray-300">Ajustes basados en data, expansión de horarios, lista de espera activa</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-music-gold/20 rounded-xl text-center">
            <p className="text-2xl font-bold text-music-gold">
              Meta: 85% de ocupación en 6 meses
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}