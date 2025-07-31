'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Music, Heart, Sparkles } from 'lucide-react'

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Music,
      title: "Metodología Única",
      description: "Nuestro enfoque revolucionario transforma la manera de aprender música. No más memorización sin sentido."
    },
    {
      icon: Heart,
      title: "Pasión que Inspira",
      description: "Cada clase es una oportunidad para despertar el amor por la música que llevas dentro."
    },
    {
      icon: Sparkles,
      title: "Resultados que Brillan",
      description: "Nuestros estudiantes no solo tocan instrumentos, crean magia con cada interpretación."
    }
  ]

  return (
    <section id="sobre-nosotros" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-2 text-dei-dark mb-6">
              Una academia que <span className="text-dei-gold">entiende</span> tu potencial
            </h2>
            
            <div className="space-y-4 body-text">
              <p>
                En Academia de Música Dei, hemos redefinido la educación musical. 
                Mientras otros se enfocan en la repetición mecánica, nosotros cultivamos 
                el entendimiento profundo que transforma estudiantes en artistas.
              </p>
              
              <p>
                Nuestra filosofía <span className="font-semibold text-dei-dark">"Aprendemos a Entender, no a Memorizar"</span> no 
                es solo un slogan, es la promesa de un viaje musical donde cada 
                nota tiene significado y cada clase te acerca más a tu verdadero potencial.
              </p>

              <p className="italic text-dei-dark/80">
                "La diferencia entre tocar notas y hacer música está en el corazón. 
                Nosotros educamos corazones musicales."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-dei-gold/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-dei-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dei-dark mb-2">
                      {value.title}
                    </h3>
                    <p className="text-dei-gray">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-dei-dark text-white rounded-3xl p-8 lg:p-12 text-center"
        >
          <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            "Imagina donde estarás en un año si empiezas hoy. 
            Ahora imagina donde estarás si no lo haces."
          </p>
          <p className="text-dei-gold mt-4 text-lg">
            El momento perfecto es ahora.
          </p>
        </motion.div>
      </div>
    </section>
  )
}