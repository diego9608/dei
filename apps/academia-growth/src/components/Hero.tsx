'use client'

import { motion } from 'framer-motion'
import { Music, TrendingDown, ArrowDown } from 'lucide-react'

export default function Hero({ onScrollToNext }: { onScrollToNext: () => void }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with music notes animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-music-light via-white to-purple-50/30" />
      
      {/* Floating music notes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-music-purple/10 text-6xl"
            initial={{ y: '100vh', x: `${20 + i * 15}%` }}
            animate={{ y: '-100vh' }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              delay: i * 3,
              ease: 'linear'
            }}
          >
            ♪
          </motion.div>
        ))}
      </div>

      <div className="container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-music-purple/10 p-4 rounded-full">
              <Music className="w-12 h-12 text-music-purple" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
            Su academia tiene <span className="font-bold text-music-purple">65% de asientos vacíos</span> 
            <br />mientras academias de 150 años tienen <span className="font-bold text-music-gold">listas de espera</span>
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 font-display">
            <span className="text-gradient">Están perdiendo $856,000 al mes</span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-700">
              por no tener el sistema correcto
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Le mostraré exactamente cómo llenar sus salones de 
            <span className="font-semibold"> 8am a 8pm</span>, de 
            <span className="font-semibold"> lunes a domingo</span>, 
            como lo hacen Juilliard, Berklee y Yamaha.
          </p>
          
          <motion.button
            onClick={onScrollToNext}
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver el plan exacto
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-8 flex items-center justify-center gap-2 text-red-600"
          >
            <TrendingDown className="w-5 h-5" />
            <span className="text-sm font-medium">
              Cada día que pasa = $28,533 menos en su cuenta
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}