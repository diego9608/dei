'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, MessageCircle, Instagram, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Diego de Montemayor 100",
      subtitle: "San Pedro Garza García, N.L.",
      action: "https://maps.google.com/?q=Diego+de+Montemayor+100+San+Pedro+Garza+Garcia",
      actionText: "Ver en mapa"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "81 1215 1125",
      action: "tel:+528112151125",
      actionText: "Llamar ahora"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+52 1 81 8069 0478",
      action: "https://wa.me/5218180690478",
      actionText: "Enviar mensaje"
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@deiacademia",
      action: "https://www.instagram.com/deiacademia/?hl=es",
      actionText: "Seguir"
    },
    {
      icon: Mail,
      title: "Email",
      content: "alonso_gz@hotmail.com",
      action: "mailto:alonso_gz@hotmail.com",
      actionText: "Escribir correo"
    }
  ]

  return (
    <section id="contacto" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-dei-dark mb-4">
            Estamos <span className="text-dei-gold">esperándote</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            El primer paso hacia tu futuro musical está a solo un mensaje de distancia. 
            No dejes que otro día pase sin descubrir tu potencial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-50 rounded-3xl p-8 h-full">
              <h3 className="heading-3 text-dei-dark mb-8">Información de contacto</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                        <item.icon className="w-6 h-6 text-dei-gold" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-dei-dark mb-1">{item.title}</h4>
                      <p className="text-dei-gray">{item.content}</p>
                      {item.subtitle && (
                        <p className="text-dei-gray text-sm">{item.subtitle}</p>
                      )}
                      <a
                        href={item.action}
                        target={item.action.startsWith('http') ? '_blank' : undefined}
                        rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-dei-gold hover:text-dei-gold/80 text-sm font-medium inline-flex items-center mt-1 transition-colors"
                      >
                        {item.actionText} →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-dei-gold mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-dei-dark mb-2">Horario de atención</h4>
                    <p className="text-dei-gray text-sm">
                      Lunes a Viernes: 3:00 PM - 8:00 PM<br />
                      Sábados: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-dei-dark text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                ¿Por qué esperar más?
              </h3>
              <div className="space-y-4 text-gray-200">
                <p>
                  Cada día que pasa es una oportunidad perdida de desarrollar el talento 
                  que ya existe dentro de ti o tu hijo.
                </p>
                <p>
                  Mientras otros siguen pensándolo, nuestros estudiantes ya están tocando 
                  sus canciones favoritas y preparándose para brillar en el escenario.
                </p>
                <p className="text-dei-gold font-medium text-lg">
                  La música no espera. ¿Y tú?
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-300 mb-4">
                  Mensaje directo por WhatsApp:
                </p>
                <a
                  href="https://wa.me/5218180690478?text=Hola,%20acabo%20de%20ver%20su%20página%20web%20y%20me%20interesa%20conocer%20más%20sobre%20la%20Academia%20de%20Música%20Dei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iniciar conversación
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-dei-gold/10 to-dei-gold/5 rounded-3xl p-8 border border-dei-gold/20"
            >
              <div className="text-center">
                <p className="text-2xl font-display text-dei-dark mb-3">
                  Primera clase de prueba
                </p>
                <p className="text-lg text-dei-gold font-semibold mb-2">
                  ¡Completamente GRATIS!
                </p>
                <p className="text-dei-gray text-sm">
                  Conoce nuestra metodología sin compromiso
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 bg-gray-100 rounded-3xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.1234567890123!2d-100.3987654321098!3d25.666543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQwJzAwLjAiTiAxMDDCsDI0JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1234567890123"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Academia de Música Dei"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}