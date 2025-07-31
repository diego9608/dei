'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Mic, Guitar, Piano, Music2, Drum, Music, Users, Monitor } from 'lucide-react'

const instruments = [
  { name: 'Canto', icon: Mic, color: 'bg-red-500' },
  { name: 'Guitarra', icon: Guitar, color: 'bg-orange-500' },
  { name: 'Piano', icon: Piano, color: 'bg-blue-500' },
  { name: 'Violín', icon: Music2, color: 'bg-purple-500' },
  { name: 'Batería', icon: Drum, color: 'bg-green-500' },
  { name: 'Saxofón', icon: Music, color: 'bg-yellow-500' },
  { name: 'Bajo', icon: Guitar, color: 'bg-indigo-500' },
]

const modalities = [
  { name: 'Presencial', icon: Users, description: 'Experiencia completa en nuestras instalaciones' },
  { name: 'En línea', icon: Monitor, description: 'Aprende desde la comodidad de tu hogar' },
  { name: 'Individual', icon: Mic, description: 'Atención personalizada para tu ritmo' },
  { name: 'Grupal', icon: Users, description: 'Comparte tu pasión con otros estudiantes' },
]

export default function Classes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="clases" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-dei-dark mb-4">
            Encuentra tu <span className="text-dei-gold">instrumento perfecto</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Cada instrumento tiene una voz única. Descubre cuál resuena con tu alma.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/images/instrumentospublicidadacademia.jpg"
              alt="Instrumentos de la Academia Dei"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dei-dark/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-2xl font-light">
                Más que instrumentos, son extensiones de tu expresión
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-16">
          {instruments.map((instrument, index) => (
            <motion.div
              key={instrument.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover text-center">
                <div className={`w-16 h-16 ${instrument.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-opacity-20 transition-colors`}>
                  <instrument.icon className={`w-8 h-8 ${instrument.color.replace('bg-', 'text-')}`} />
                </div>
                <p className="font-medium text-dei-dark">{instrument.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-3xl p-8 lg:p-12"
        >
          <h3 className="heading-3 text-dei-dark mb-8 text-center">
            Modalidades que se adaptan a tu vida
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modalities.map((modality, index) => (
              <motion.div
                key={modality.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-dei-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <modality.icon className="w-8 h-8 text-dei-gold" />
                </div>
                <h4 className="font-semibold text-dei-dark mb-2">{modality.name}</h4>
                <p className="text-sm text-dei-gray">{modality.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-dei-gray mb-6">
            ¿Listo para comenzar tu viaje musical?
          </p>
          <a
            href="https://wa.me/5218180690478?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20las%20clases"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Solicita información
          </a>
        </motion.div>
      </div>
    </section>
  )
}