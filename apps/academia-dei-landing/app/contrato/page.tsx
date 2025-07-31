'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { 
  FileText, CheckCircle, AlertCircle, Calendar,
  DollarSign, Shield, Clock, Users, Zap, Target
} from 'lucide-react'
import Link from 'next/link'

export default function Contrato() {
  const ref = useRef(null)

  const servicios = [
    { item: "Auditoría inicial y diagnóstico de ocupación", included: true },
    { item: "Diseño de estrategia de crecimiento personalizada", included: true },
    { item: "Implementación de sistema de automatización", included: true },
    { item: "Configuración de CRM y WhatsApp Business", included: true },
    { item: "Creación de landing page y presencia digital", included: true },
    { item: "Capacitación del personal en nuevos procesos", included: true },
    { item: "Seguimiento semanal y ajustes de estrategia", included: true },
    { item: "Reportes mensuales de métricas y ROI", included: true },
    { item: "Gastos de publicidad en redes sociales", included: false },
    { item: "Contratación de personal adicional", included: false },
    { item: "Remodelación física de instalaciones", included: false },
    { item: "Licencias de software de terceros", included: false },
  ]

  const timeline = [
    { week: "Semana 1-2", tasks: "Auditoría completa + Setup inicial" },
    { week: "Semana 3-4", tasks: "Implementación de automatizaciones" },
    { week: "Mes 2", tasks: "Optimización y primeros resultados" },
    { week: "Mes 3", tasks: "Escalamiento y evaluación de ROI" },
  ]

  const terminos = [
    {
      titulo: "Inversión y Pagos",
      items: [
        "Inversión mensual: $50,000 MXN + IVA",
        "Periodo mínimo de prueba: 90 días",
        "Pago por adelantado cada mes",
        "Facturación con todos los requisitos fiscales"
      ]
    },
    {
      titulo: "Garantía de Resultados",
      items: [
        "Si no se recupera la inversión en nuevos alumnos durante los primeros 90 días",
        "Continuamos trabajando sin cobrar retainer hasta lograr el ROI",
        "Solo aplica si se implementan todas las estrategias acordadas",
        "Gastos operativos y publicidad corren por cuenta del cliente"
      ]
    },
    {
      titulo: "Compromisos del Cliente",
      items: [
        "Asignar un punto de contacto dedicado",
        "Implementar las estrategias recomendadas",
        "Proporcionar acceso a métricas y sistemas",
        "Presupuesto mínimo de $10,000/mes para publicidad"
      ]
    },
    {
      titulo: "Términos de Cancelación",
      items: [
        "Aviso con 30 días de anticipación",
        "Entrega de todos los assets y accesos creados",
        "Sin penalizaciones después del periodo mínimo",
        "Opción de pausar servicios por temporada baja"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-dei-dark text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <FileText className="w-16 h-16 text-dei-gold mx-auto mb-6" />
            <h1 className="heading-1 mb-4">
              Acuerdo de Transformación Digital
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Academia de Música Dei + Diego Villarreal | Alear Transformación Digital
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumen Ejecutivo */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-dei-dark mb-6">
                Objetivo del Acuerdo
              </h2>
              <p className="text-lg text-dei-gray mb-4">
                Transformar la Academia de Música Dei de una ocupación del 35% a un mínimo 
                del 70% en 90 días, implementando sistemas de automatización, marketing digital 
                y procesos optimizados que generen un crecimiento sostenible.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Target className="w-12 h-12 text-dei-gold mx-auto mb-2" />
                  <p className="font-bold text-2xl text-dei-dark">70%</p>
                  <p className="text-sm text-dei-gray">Ocupación objetivo</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-dei-gold mx-auto mb-2" />
                  <p className="font-bold text-2xl text-dei-dark">90 días</p>
                  <p className="text-sm text-dei-gray">Periodo de prueba</p>
                </div>
                <div className="text-center">
                  <DollarSign className="w-12 h-12 text-dei-gold mx-auto mb-2" />
                  <p className="font-bold text-2xl text-dei-dark">$50,000</p>
                  <p className="text-sm text-dei-gray">Inversión mensual</p>
                </div>
              </div>
            </div>

            {/* Servicios Incluidos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dei-dark mb-6">
                Alcance de Servicios
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {servicios.map((servicio, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-start space-x-3 p-4 rounded-lg ${
                      servicio.included ? 'bg-green-50' : 'bg-red-50'
                    }`}
                  >
                    {servicio.included ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${
                      servicio.included ? 'text-gray-800' : 'text-gray-600'
                    }`}>
                      {servicio.item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dei-dark mb-6">
                Cronograma de Implementación
              </h2>
              <div className="space-y-4">
                {timeline.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-dei-gold/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-dei-gold" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-dei-dark">{phase.week}</p>
                      <p className="text-dei-gray">{phase.tasks}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Términos y Condiciones */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dei-dark mb-6">
                Términos y Condiciones
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {terminos.map((seccion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md"
                  >
                    <h3 className="font-bold text-lg text-dei-dark mb-4">
                      {seccion.titulo}
                    </h3>
                    <ul className="space-y-2">
                      {seccion.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-dei-gray flex items-start">
                          <span className="text-dei-gold mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Firmas */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-dei-dark mb-8 text-center">
                Aceptación del Acuerdo
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="border-b-2 border-gray-300 pb-2 mb-2">
                    <p className="h-8">&nbsp;</p>
                  </div>
                  <p className="font-semibold text-dei-dark">Alonso González</p>
                  <p className="text-sm text-dei-gray">Director General</p>
                  <p className="text-sm text-dei-gray">Academia de Música Dei</p>
                </div>
                <div className="text-center">
                  <div className="border-b-2 border-gray-300 pb-2 mb-2">
                    <p className="h-8">&nbsp;</p>
                  </div>
                  <p className="font-semibold text-dei-dark">Diego Villarreal</p>
                  <p className="text-sm text-dei-gray">Consultor Estratégico</p>
                  <p className="text-sm text-dei-gray">Alear Transformación Digital</p>
                </div>
              </div>
              <p className="text-center text-sm text-dei-gray mt-8">
                Fecha: _________________
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/436765748509?text=He%20revisado%20el%20contrato.%20Estoy%20listo%20para%20proceder."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Acepto los términos
                </a>
                <Link
                  href="/"
                  className="btn-secondary"
                >
                  Revisar propuesta
                </Link>
              </div>
              <p className="text-sm text-dei-gray mt-6">
                ¿Preguntas? Llama directo: 81 1743 7991
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}