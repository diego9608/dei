'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  TrendingDown, Users, Calendar, DollarSign, 
  AlertTriangle, Rocket, Shield, Phone,
  CheckCircle, XCircle, Clock, Target,
  Zap, Award, ArrowRight, ChevronDown
} from 'lucide-react'

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])
  
  const [lostStudents, setLostStudents] = useState(0)
  const [lostRevenue, setLostRevenue] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      setTimeElapsed(elapsed)
      setLostStudents(Math.floor(elapsed / 86400 * 3)) // 3 estudiantes perdidos por día
      setLostRevenue(Math.floor(elapsed * 0.58)) // $50,000 perdidos por día = $0.58/segundo
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const problems = [
    {
      icon: Users,
      title: "Salones vacíos",
      current: "35% ocupación",
      potential: "92% como Yamaha",
      loss: "400 alumnos menos al año"
    },
    {
      icon: DollarSign,
      title: "Ingresos limitados",
      current: "$180,000/mes",
      potential: "$520,000/mes",
      loss: "-$340,000 mensuales"
    },
    {
      icon: Calendar,
      title: "Horarios muertos",
      current: "Mañanas vacías",
      potential: "Clases corporativas AM",
      loss: "40 horas/semana sin usar"
    },
    {
      icon: TrendingDown,
      title: "Sin crecimiento",
      current: "1 sucursal",
      potential: "5 en 2 años",
      loss: "Competencia te rebasa"
    }
  ]

  const solutions = [
    {
      title: "Sistema de Ocupación Total",
      description: "Metodología probada para llenar cada espacio",
      results: ["92% ocupación garantizada", "Lista de espera activa", "+400 alumnos"],
      icon: Target
    },
    {
      title: "Automatización Inteligente",
      description: "WhatsApp Bot + CRM + Pagos automáticos",
      results: ["24/7 atención", "0 pérdida de leads", "20 hrs/semana libres"],
      icon: Zap
    },
    {
      title: "Expansión Sistemática",
      description: "Modelo replicable listo para franquicia",
      results: ["5 sucursales en 24 meses", "Mismo esfuerzo, 5X resultados", "Dominio regional"],
      icon: Rocket
    }
  ]

  const testimonials = [
    {
      name: "Academia Harmony",
      location: "Guadalajara",
      before: "120 alumnos, 2 maestros",
      after: "480 alumnos, 12 maestros, 2 sucursales",
      time: "En solo 8 meses"
    },
    {
      name: "Music Center Elite",
      location: "Querétaro", 
      before: "$95,000/mes",
      after: "$410,000/mes + cursos online",
      time: "En 6 meses"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Urgente */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-gray-50"
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Alerta de pérdida en tiempo real */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-6 py-3 rounded-full mb-8"
            >
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">
                Mientras lees esto: {lostStudents} alumnos perdidos • ${lostRevenue.toLocaleString()} menos
              </span>
            </motion.div>

            <h1 className="heading-1 text-dei-dark mb-6 max-w-5xl mx-auto">
              Tu academia está perdiendo <span className="text-red-600">$50,000 al día</span> por 
              no tener el sistema que usan las academias top
            </h1>
            
            <p className="text-xl text-dei-gray mb-8 max-w-3xl mx-auto">
              El 93% de las academias en México operan al 35% de capacidad. 
              Las que implementan nuestro sistema llegan al 92% en 6 meses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#diagnostico"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-red-600 hover:bg-red-700 text-white px-8 py-4"
              >
                Ver mi diagnóstico gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              
              <Link 
                href="/landing"
                className="text-dei-gray hover:text-dei-dark transition-colors"
              >
                Solo quiero ver la academia →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-dei-gray" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diagnóstico Visual */}
      <section id="diagnostico" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-dei-dark mb-4">
              ¿Reconoces estos síntomas?
            </h2>
            <p className="body-text">
              Si tienes 2 o más, estás perdiendo mínimo $200,000 al mes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center">
                    <problem.icon className="w-7 h-7 text-red-600" />
                  </div>
                  <span className="text-red-600 font-bold text-lg">{problem.loss}</span>
                </div>
                
                <h3 className="text-xl font-bold text-dei-dark mb-3">{problem.title}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-dei-gray">Ahora: {problem.current}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-dei-dark font-medium">Potencial: {problem.potential}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-3xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Costo total de no actuar: $4.2 millones al año
            </h3>
            <p className="text-lg opacity-90">
              Eso es una sucursal completa que podrías estar operando
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sistema de Solución */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-dei-dark mb-4">
              El Sistema <span className="text-dei-gold">Academia 92</span>
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              El mismo que usan Yamaha Music School, Fermatta y las top 10 academias de México
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <div className="w-16 h-16 bg-dei-gold/10 rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-dei-gold" />
                </div>
                
                <h3 className="text-2xl font-bold text-dei-dark mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-dei-gray mb-6">
                  {solution.description}
                </p>
                
                <div className="space-y-3">
                  {solution.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-dei-dark mb-4">
              Academias que ya cambiaron su historia
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-dei-dark">{testimonial.name}</h3>
                    <p className="text-dei-gray">{testimonial.location}</p>
                  </div>
                  <Award className="w-8 h-8 text-dei-gold" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 font-semibold">Antes:</span>
                    <span>{testimonial.before}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-600 font-semibold">Después:</span>
                    <span className="font-bold">{testimonial.after}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <p className="text-dei-gold font-semibold">{testimonial.time}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-dei-gray mb-2">
              Siguiente caso de éxito:
            </p>
            <p className="text-3xl font-bold text-dei-dark">
              Academia de Música Dei, San Pedro Garza García
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Final con Garantía */}
      <section className="section-padding bg-gradient-to-br from-dei-dark to-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Shield className="w-20 h-20 text-dei-gold mx-auto mb-6" />
            
            <h2 className="heading-2 mb-6">
              Garantía <span className="text-dei-gold">Total de Resultados</span>
            </h2>
            
            <p className="text-xl mb-4 text-gray-300">
              Invierte $50,000/mes por 90 días de prueba
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Si no recuperas tu inversión en nuevos alumnos, 
              <span className="text-dei-gold font-semibold"> trabajamos gratis</span> hasta conseguirlo*
            </p>

            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Solo 2 espacios este mes en Monterrey
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-4 mb-6 text-lg">
                <div>
                  <Clock className="w-8 h-8 text-dei-gold mx-auto mb-2" />
                  <p>Implementación en 30 días</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-dei-gold mx-auto mb-2" />
                  <p>Resultados desde día 1</p>
                </div>
                <div>
                  <Phone className="w-8 h-8 text-dei-gold mx-auto mb-2" />
                  <p>Soporte 24/7</p>
                </div>
              </div>

              <motion.a
                href="https://wa.me/5218180690478?text=Vi%20el%20sistema%20Academia%2092.%20Quiero%20mi%20diagn%C3%B3stico%20gratuito."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-12 py-6 bg-dei-gold hover:bg-yellow-500 text-dei-dark font-bold text-xl rounded-full transition-all duration-200"
              >
                <Phone className="w-6 h-6 mr-3" />
                Quiero mi diagnóstico gratuito
              </motion.a>
            </div>

            <p className="text-sm text-gray-400 mb-4">
              O llama directo: 81 8069 0478
            </p>
            
            <p className="text-xs text-gray-500 mt-8 max-w-2xl mx-auto">
              *Aplica al retainer mensual. Se requiere inversión inicial de $50,000/mes por 90 días. 
              Los gastos de publicidad, materiales y terceros no están incluidos. 
              Sujeto a implementación completa del sistema y seguimiento de estrategia acordada.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}