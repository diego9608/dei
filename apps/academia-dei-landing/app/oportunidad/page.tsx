'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  AlertCircle, CheckCircle, TrendingUp, Mail, Globe, 
  Calendar, MessageSquare, Zap, School, DollarSign,
  Users, Sparkles, ArrowRight, Lightbulb, Target,
  Rocket, Shield, Clock, Award
} from 'lucide-react'

export default function Oportunidad() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  
  const [timeWasted, setTimeWasted] = useState(0)
  const [potentialLost, setPotentialLost] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeWasted(prev => prev + 1)
      setPotentialLost(prev => prev + 127) // $127 por minuto basado en pérdidas potenciales
    }, 60000) // Cada minuto

    return () => clearInterval(interval)
  }, [])

  const currentState = [
    { 
      icon: Mail, 
      issue: "Sin correo profesional",
      impact: "Pierdes credibilidad cada día",
      cost: "-32% conversión"
    },
    { 
      icon: Globe, 
      issue: "Sin presencia digital real",
      impact: "Invisible para 78% de padres que buscan en Google",
      cost: "280 alumnos perdidos/año"
    },
    { 
      icon: Calendar, 
      issue: "Agenda manual y WhatsApp saturado",
      impact: "4 horas diarias en tareas repetitivas",
      cost: "$84,000 en tiempo perdido"
    },
    { 
      icon: MessageSquare, 
      issue: "Sin automatización de seguimiento",
      impact: "67% de interesados nunca regresan",
      cost: "$168,000 en ventas perdidas"
    }
  ]

  const futureVision = [
    {
      icon: Award,
      title: "Correo @deiacademia.com",
      benefit: "Profesionalismo instantáneo que convierte",
      value: "+45% confianza"
    },
    {
      icon: Rocket,
      title: "Web indexada + SEO local",
      benefit: "#1 en búsquedas de 'academia música San Pedro'",
      value: "+380 leads/mes"
    },
    {
      icon: Zap,
      title: "Automatización inteligente",
      benefit: "Respuestas 24/7, agenda digital, recordatorios",
      value: "20 hrs/semana libres"
    },
    {
      icon: School,
      title: "Plataforma de cursos online",
      benefit: "Ingresos pasivos mientras duermes",
      value: "+$120,000/mes"
    },
    {
      icon: Users,
      title: "Modelo franquiciable listo",
      benefit: "De 1 a 10 sucursales en 24 meses",
      value: "10X tu impacto"
    }
  ]

  const transformationSteps = [
    { week: "Semana 1", action: "Dominio + Correos + Web profesional", impact: "Credibilidad instantánea" },
    { week: "Semana 2", action: "SEO + Google My Business optimizado", impact: "Visibilidad máxima" },
    { week: "Semana 3", action: "Automatización WhatsApp + Agenda", impact: "Cero fricción" },
    { week: "Mes 2", action: "Plataforma cursos + Comunidad", impact: "Ingresos recurrentes" },
    { week: "Mes 3", action: "Sistema completo funcionando", impact: "Listo para escalar" }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Emocional */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src="/assets/images/instrumentospublicidadacademia.jpg"
            alt="Academia Dei"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="container-custom relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="heading-1 text-dei-dark mb-6 max-w-4xl mx-auto">
              Lo que puedes lograr con <span className="text-dei-gold">lo que ya tienes</span>
            </h1>
            
            <p className="text-xl text-dei-gray mb-8 max-w-2xl mx-auto">
              Un paso. Una visión. Un cambio definitivo.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="#diagnostico"
                className="btn-primary inline-flex items-center"
              >
                Ver plan maestro
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="text-center">
              <p className="text-sm text-dei-gray mb-2">Mientras lees esto...</p>
              <p className="text-2xl font-bold text-red-600">
                ${potentialLost.toLocaleString()} perdidos
              </p>
              <p className="text-xs text-dei-gray">en {timeWasted} minutos</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diagnóstico Elegante */}
      <section id="diagnostico" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-dei-dark mb-4">
              La <span className="text-red-600">realidad</span> que nadie te dice
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              Cada día sin estrategia digital es dinero que tu competencia está ganando
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {currentState.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-dei-dark mb-1">
                      {item.issue}
                    </h3>
                    <p className="text-dei-gray mb-2">{item.impact}</p>
                    <p className="text-red-600 font-bold">{item.cost}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 text-center"
          >
            <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-dei-dark mb-2">
              Resultado: Estás trabajando 3X más duro por 1/3 de los resultados
            </p>
            <p className="text-lg text-dei-gray">
              Mientras academias con estrategia digital tienen lista de espera
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visualización del Futuro */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-dei-dark mb-4">
              Tu academia en <span className="text-dei-gold">90 días</span>
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              Todo esto ya está diseñado. Solo falta activarlo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {futureVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-dei-gold/5 to-dei-gold/10 rounded-2xl p-6 border border-dei-gold/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-dei-gold/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-dei-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dei-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-dei-gray mb-2">{item.benefit}</p>
                    <p className="text-dei-gold font-bold">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline de Transformación */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8"
          >
            <h3 className="heading-3 text-dei-dark mb-8 text-center">
              Ruta de implementación
            </h3>
            
            <div className="space-y-4">
              {transformationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-sm font-semibold text-dei-gold">
                      {step.week}
                    </span>
                  </div>
                  <div className="w-4 h-4 bg-dei-gold rounded-full" />
                  <div className="flex-grow bg-white rounded-xl p-4 shadow-sm">
                    <p className="font-semibold text-dei-dark">{step.action}</p>
                    <p className="text-sm text-dei-gray">{step.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantía y CTA Final */}
      <section className="section-padding bg-dei-dark text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Shield className="w-20 h-20 text-dei-gold mx-auto mb-6" />
            
            <h2 className="heading-2 mb-6">
              Garantía <span className="text-dei-gold">50/90</span>
            </h2>
            
            <p className="text-xl mb-8 text-gray-300">
              50% más alumnos en 90 días o trabajamos gratis hasta lograrlo
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
              <p className="text-2xl font-light mb-4">
                "Lo más difícil ya lo tienes: <span className="text-dei-gold">tu talento y tu misión</span>. 
                Lo que falta es activarlo con estrategia."
              </p>
              
              <p className="text-lg text-gray-300">
                La diferencia entre donde estás y donde quieres estar 
                es una decisión tomada hoy.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <a
                href="https://wa.me/5218180690478?text=Vi%20el%20plan%20maestro.%20Quiero%20activarlo%20ahora."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-6 bg-dei-gold hover:bg-yellow-500 text-dei-dark font-bold text-lg rounded-full transition-all duration-200 transform hover:scale-105"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Activa esto ahora
              </a>
              
              <p className="text-sm text-gray-400">
                Solo 2 espacios disponibles este mes en San Pedro
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16 pt-8 border-t border-gray-700"
            >
              <p className="text-sm text-gray-400">
                Esta oportunidad es exclusiva. No la encontrarás en otro lugar.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}