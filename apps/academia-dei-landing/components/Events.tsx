'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, MapPin, Clock, Camera, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentImage, setCurrentImage] = useState(0)

  const placeholderImages = [
    { id: 1, alt: "Festival de Música - Presentación 1" },
    { id: 2, alt: "Festival de Música - Presentación 2" },
    { id: 3, alt: "Festival de Música - Presentación 3" },
    { id: 4, alt: "Festival de Música - Presentación 4" },
    { id: 5, alt: "Festival de Música - Presentación 5" },
    { id: 6, alt: "Festival de Música - Presentación 6" },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % placeholderImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + placeholderImages.length) % placeholderImages.length)
  }

  return (
    <section id="eventos" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-dei-dark mb-4">
            Momentos que <span className="text-dei-gold">trascienden</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Cada presentación es una oportunidad para brillar. Nuestros festivales son 
            el escenario donde los sueños cobran vida.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-dei-gold/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-dei-gold" />
                </div>
                <h3 className="heading-3 text-dei-dark">8° Festival</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-dei-gray">
                  <Calendar className="w-5 h-5" />
                  <span>16 de junio de 2024</span>
                </div>
                <div className="flex items-center space-x-3 text-dei-gray">
                  <Clock className="w-5 h-5" />
                  <span>11:30 AM</span>
                </div>
                <div className="flex items-center space-x-3 text-dei-gray">
                  <MapPin className="w-5 h-5" />
                  <span>San Pedro de Pinta</span>
                </div>
              </div>

              <div className="bg-dei-gold/5 rounded-2xl p-6 border border-dei-gold/20">
                <p className="text-dei-dark font-medium mb-2">
                  Un evento inolvidable
                </p>
                <p className="text-dei-gray text-sm">
                  Más de 50 estudiantes compartieron su talento en una mañana llena de 
                  música, emociones y aplausos. Cada presentación demostró el poder 
                  transformador de nuestra metodología.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-dei-gray italic">
                  "Ver a nuestros estudiantes en el escenario es presenciar el nacimiento 
                  de artistas que entienden la música desde el alma."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="relative h-96 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dei-dark/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-lg font-medium mb-2">Galería del Festival</p>
                  <p className="text-sm opacity-90">
                    {placeholderImages[currentImage].alt}
                  </p>
                </div>
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-center space-x-2">
                  {placeholderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImage ? 'bg-dei-gold' : 'bg-gray-300'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-dei-gold text-white rounded-2xl p-4 shadow-lg"
            >
              <p className="font-semibold">Próximo Festival</p>
              <p className="text-sm opacity-90">¡Pronto anunciaremos la fecha!</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-white rounded-3xl p-8 shadow-lg"
        >
          <p className="text-xl text-dei-dark mb-2">
            ¿Te imaginas a tu hijo brillando en nuestro próximo festival?
          </p>
          <p className="text-dei-gray">
            Cada gran artista comenzó con una primera clase.
          </p>
        </motion.div>
      </div>
    </section>
  )
}