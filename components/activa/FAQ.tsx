'use client'
import { useState } from 'react'

interface FAQItem {
  question: string
  directAnswer: string
  bullets: string[]
}

const faqs: FAQItem[] = [
  {
    question: 'Estoy montando clínica o acabo de abrir, ¿me sirve?',
    directAnswer: 'Sí. ACTIVA está diseñado específicamente para clínicas en fase inicial o recién abiertas.',
    bullets: [
      'Evitas errores costosos que se pagan durante años (precios mal planteados, servicios sin margen, contrataciones prematuras).',
      'Construyes estructura desde el principio en lugar de corregir después, cuando ya has invertido tiempo y dinero mal.',
    ],
  },
  {
    question: 'Si soy 1 fisio solo, ¿tiene sentido?',
    directAnswer: 'Totalmente. ACTIVA está pensado para dueños de clínicas con equipo pequeño (1–3 fisios).',
    bullets: [
      'No necesitas equipo grande para implementar sistemas de dirección, pricing y recurrencia.',
      'Aprender a ser empresario de fisioterapia es independiente del tamaño; la estructura es la misma.',
    ],
  },
  {
    question: '¿Qué pasa si todavía no vendo lo suficiente?',
    directAnswer: 'ACTIVA te ayuda a estructurar tu oferta y captación para empezar a vender de forma sostenible.',
    bullets: [
      'Si tienes 0 pacientes, ACTIVA no es para ti (necesitas primero generar actividad mínima).',
      'Si tienes algunos pacientes pero facturas poco, ACTIVA te da la dirección para escalar con margen real.',
    ],
  },
  {
    question: '¿Cuánto tiempo REAL requiere?',
    directAnswer: '2–3 horas semanales de trabajo autónomo + 1 checkpoint mensual de 90 minutos.',
    bullets: [
      'No es un curso que consumes; es implementación guiada con entregables concretos cada mes.',
      'El tiempo real depende de tu velocidad de ejecución, pero el mínimo es 2–3h/semana para avanzar.',
    ],
  },
  {
    question: '¿Qué incluye exactamente cada checkpoint?',
    directAnswer: 'Cada checkpoint es una sesión de 90 minutos donde revisamos tu progreso, ajustamos estrategia y definimos próximos pasos.',
    bullets: [
      'Revisión de entregables del mes anterior (mapa de foco, oferta, sistema de captación, etc.).',
      'Feedback directo sobre implementación, ajustes estratégicos y plan de acción para el siguiente mes.',
    ],
  },
  {
    question: '¿Por qué ACTIVA antes que OPTIMIZA?',
    directAnswer: 'ACTIVA construye la base (dirección, oferta, sistemas mínimos). OPTIMIZA optimiza lo que ya funciona.',
    bullets: [
      'Si no tienes estructura clara, optimizar sin base es como acelerar sin dirección: gastas más pero no avanzas.',
      'ACTIVA te da el mapa y los sistemas básicos; OPTIMIZA los hace más eficientes cuando ya están funcionando.',
    ],
  },
  {
    question: '¿Qué pasa si no ejecuto?',
    directAnswer: 'No avanzas. ACTIVA no es un curso de consumo; requiere implementación real para generar resultados.',
    bullets: [
      'Si no entregas los checkpoints mensuales, no puedes continuar (protegemos la calidad del grupo).',
      'El programa está diseñado para ejecutores; si buscas solo teoría, no es el lugar adecuado.',
    ],
  },
  {
    question: '¿Necesito tener pacientes ya?',
    directAnswer: 'Sí, necesitas tener actividad mínima (algunos pacientes o facturación inicial) para que ACTIVA tenga sentido.',
    bullets: [
      'ACTIVA optimiza dirección y estructura; no crea negocio desde cero ni enseña a conseguir primeros clientes.',
      'Si estás en 0 absoluto, primero necesitas generar actividad básica antes de estructurar y optimizar.',
    ],
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-lg text-navy">
                  {faq.question}
                </span>
                <span className="text-gold text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 py-4 bg-gray-50 text-gray-700"
                >
                  <p className="font-semibold text-lg text-navy mb-4">
                    {faq.directAnswer}
                  </p>
                  <ul className="space-y-2 ml-4">
                    {faq.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <span className="text-gold text-xl mt-1">•</span>
                        <span className="text-gray-700 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
