'use client'

import { motion } from 'framer-motion'
import { Music, TrendingDown, ArrowDown } from 'lucide-react'

export default function Hero({ onScrollToNext }: { onScrollToNext: () => void }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Premium gradient overlay with glass morphism */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/30 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-tr from-music-purple/5 via-transparent to-music-gold/5" />
      </div>
      
      {/* Premium floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elegant circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute"
            initial={{ 
              x: `${30 + i * 25}%`,
              y: `${20 + i * 30}%`,
              scale: 0
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.1, 0]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              delay: i * 5,
              ease: "easeInOut"
            }}
          >
            <div className="w-64 h-64 rounded-full border border-music-purple/20" />
          </motion.div>
        ))}
      </div>

      <div className="container text-center relative z-10">
        {/* Premium content backdrop */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl mx-auto max-w-4xl h-full" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative py-16 px-8"
        >
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-music-purple to-music-gold rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-white/80 backdrop-blur p-5 rounded-full shadow-xl">
                <Music className="w-14 h-14 text-music-purple" />
              </div>
            </div>
          </motion.div>

          <motion.h2 
            className="text-2xl md:text-3xl text-gray-600 mb-6 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Su academia tiene <span className="font-bold text-music-purple">65% de asientos vacíos</span> 
            <br />mientras academias de 150 años tienen <span className="font-bold text-music-gold">listas de espera</span>
          </motion.h2>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 font-display relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <span className="text-gradient">Están perdiendo $856,000 al mes</span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-700">
              por no tener el sistema correcto
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Le mostraré exactamente cómo llenar sus salones de 
            <span className="font-semibold"> 8am a 8pm</span>, de 
            <span className="font-semibold"> lunes a domingo</span>, 
            como lo hacen Juilliard, Berklee y Yamaha.
          </motion.p>
          
          <motion.button
            onClick={onScrollToNext}
            className="relative inline-flex items-center gap-2 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-music-purple to-music-gold rounded-lg blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="relative bg-gradient-to-r from-music-purple to-music-gold text-white px-10 py-5 rounded-lg font-semibold shadow-xl">
              Ver el plan exacto
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
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