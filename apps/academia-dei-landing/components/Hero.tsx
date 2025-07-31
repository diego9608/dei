'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToNextSection = () => {
    const element = document.getElementById('sobre-nosotros')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white z-0" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/assets/images/logo.png"
            alt="Academia de Música Dei"
            width={200}
            height={200}
            className="mx-auto mb-6"
            priority
          />
          <p className="text-lg sm:text-xl text-dei-gray font-light tracking-wide">
            Aprendemos a Entender, no a Memorizar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="heading-1 text-dei-dark max-w-4xl mx-auto">
            Tu talento merece ser <span className="text-dei-gold">escuchado</span>
          </h1>
          
          <p className="body-text max-w-2xl mx-auto">
            Descubre el poder transformador de la música en un espacio donde cada nota cuenta tu historia
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8"
          >
            <a
              href="https://wa.me/5218180690478?text=Hola,%20me%20interesa%20agendar%20una%20clase%20de%20prueba"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agenda tu clase de prueba
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNextSection}
            className="text-dei-gray hover:text-dei-dark transition-colors duration-200"
            aria-label="Scroll to next section"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </button>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-dei-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-dei-gold/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}