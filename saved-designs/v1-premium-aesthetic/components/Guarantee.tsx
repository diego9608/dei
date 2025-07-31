'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, Lock } from 'lucide-react'

export default function Guarantee() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative">
      <div className="absolute inset-0 bg-pattern-notes opacity-5" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-music-purple/5 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-music-purple/10 p-6 rounded-full"
                >
                  <Shield className="w-12 h-12 text-music-purple" />
                </motion.div>
              </div>

              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-center mb-8 font-display"
              >
                <Lock className="inline-block w-10 h-10 mr-3 text-music-purple" />
                Garantía 50/90
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-music-purple to-purple-700 text-white p-8 rounded-2xl mb-6"
              >
                <p className="text-xl md:text-2xl font-semibold text-center leading-relaxed">
                  Si no aumentamos su ocupación al menos 50% en 90 días, 
                  <br className="hidden md:block" />
                  seguimos trabajando sin costo hasta lograrlo.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-600" />
                  <p className="font-semibold">Sin letra pequeña</p>
                  <p className="text-sm text-gray-600">Contrato claro y directo</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-600" />
                  <p className="font-semibold">Métricas transparentes</p>
                  <p className="text-sm text-gray-600">Dashboard en tiempo real</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-600" />
                  <p className="font-semibold">Soporte continuo</p>
                  <p className="text-sm text-gray-600">Equipo dedicado 24/7</p>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-sm text-gray-500 text-center italic"
              >
                *Aplicable con implementación completa del sistema de 4 pilares
              </motion.p>
            </div>
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-700 italic mb-4">
              "En 60 días pasamos de 40% a 75% de ocupación. 
              El sistema funciona si lo trabajas con disciplina."
            </p>
            <p className="text-sm text-gray-600">
              — Carlos Mendoza, Academia Beethoven (Guadalajara)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}