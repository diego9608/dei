'use client'

import { motion } from 'framer-motion'
import { Calendar, Phone, Clock, ArrowRight } from 'lucide-react'

export default function CTA() {
  const handleCall = () => {
    window.location.href = 'tel:+525512345678' // Reemplazar con número real
  }

  const handleSchedule = () => {
    window.open('https://calendly.com/tu-academia-digital', '_blank') // Reemplazar con link real
  }

  return (
    <section className="section-padding bg-gradient-to-br from-music-purple to-purple-800 text-white relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-music-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full mb-6"
          >
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Oferta por tiempo limitado</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            ¿Seguirá perdiendo $28,533 cada día?
          </h2>
          
          <p className="text-xl mb-8 text-gray-100">
            O tomará acción ahora para transformar su academia en la institución 
            <br className="hidden md:block" />
            de referencia que siempre soñó dirigir
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">
              Próximos pasos (solo toma 15 minutos):
            </h3>
            
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="bg-music-gold text-music-dark w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <p className="text-lg">
                  Agendamos una llamada de diagnóstico gratuita
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-music-gold text-music-dark w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <p className="text-lg">
                  Analizamos su ocupación actual y potencial real
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-music-gold text-music-dark w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <p className="text-lg">
                  Le mostramos el plan exacto para llegar al 85% en 6 meses
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              onClick={handleSchedule}
              className="bg-music-gold text-music-dark px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              Agendar diagnóstico gratuito
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={handleCall}
              className="bg-white text-music-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Llamar ahora: (55) 1234-5678
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <p className="text-sm text-gray-300">
              Solo trabajamos con 3 academias por ciudad para garantizar exclusividad
            </p>
            <p className="text-lg font-semibold text-music-gold">
              Quedan 2 espacios disponibles en su zona
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}