'use client'
import Hero from '@/components/activa/Hero'
import StickyCTA from '@/components/activa/StickyCTA'
import StatsStrip from '@/components/activa/StatsStrip'
import Process from '@/components/activa/Process'
import WhatIncludes from '@/components/activa/WhatIncludes'
import BonusEventSection from '@/components/activa/BonusEventSection'
import Deliverables from '@/components/activa/Deliverables'
import TestimonialSection from '@/components/activa/TestimonialSection'
import TestimonialsGrid from '@/components/activa/TestimonialsGrid'
import TestimonialsCarousel from '@/components/activa/TestimonialsCarousel'
import FAQ from '@/components/activa/FAQ'

// TODO: Reemplazar con tu URL de Typeform
const TYPEFORM_URL = 'https://TUPLACEHOLDER.typeform.com/to/XXXXXX'

export default function Home() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="relative min-h-screen bg-white pb-20 md:pb-28">
      <StickyCTA />
      
      <Hero />

      {/* Stats Strip */}
      <StatsStrip />

      {/* SECTION 2 — EL PROBLEMA REAL */}
      <section id="problema" className="py-24 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-navy">
            El verdadero bloqueo no es la captación.
          </h2>
          <p className="text-xl md:text-2xl text-center mb-12 text-gray-600">
            Si te pasa esto, no estás solo… pero sí estás en riesgo
          </p>

          {/* 2 Columnas: Síntomas vs Coste oculto */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Columna izquierda - Síntomas */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-gold">
              <h3 className="text-2xl font-bold mb-6 text-navy flex items-center gap-3">
                <span className="text-gold text-3xl">⚠️</span>
                Síntomas
              </h3>

              {/* Clínica en marcha */}
              <div className="mb-8">
                <p className="font-semibold text-gray-700 mb-4 text-lg">
                  Si tu clínica ya está en marcha:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className="text-gray-700 leading-relaxed">Trabajas mucho pero el margen no aparece</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className="text-gray-700 leading-relaxed">Cada mes es distinto: no hay estabilidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className="text-gray-700 leading-relaxed">Vendes "fisioterapia" pero no una propuesta clara</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className="text-gray-700 leading-relaxed">La agenda está llena y aun así estás agotado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className="text-gray-700 leading-relaxed">Tomas decisiones reactivas, no estratégicas</span>
                  </li>
                </ul>
              </div>

              {/* Clínica recién abierta/montando */}
              <div>
                <p className="font-semibold text-gray-700 mb-4 text-lg">
                  Si estás montando o recién abriste:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className="text-gray-700 leading-relaxed">No sabes qué priorizar entre mil cosas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className="text-gray-700 leading-relaxed">Inviertes sin saber si toca ahora</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className="text-gray-700 leading-relaxed">Precios sin criterio real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className="text-gray-700 leading-relaxed">Servicios mal planteados desde el inicio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className="text-gray-700 leading-relaxed">Mucho esfuerzo y poco margen desde el día 1</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Columna derecha - Coste oculto */}
            <div className="bg-red-50 p-8 rounded-lg shadow-sm border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center gap-3">
                <span className="text-red-600 text-3xl">💰</span>
                Coste oculto
              </h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                La mayoría de clínicas pequeñas <strong className="text-navy">no falla por falta de pacientes</strong>.
              </p>

              <p className="font-semibold text-red-600 mb-4 text-lg">
                Falla porque:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">•</span>
                  <span className="text-gray-700">no hay propuesta clara</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">•</span>
                  <span className="text-gray-700">no hay estructura mínima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">•</span>
                  <span className="text-gray-700">no hay dirección estratégica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">•</span>
                  <span className="text-gray-700">se reacciona en vez de decidir</span>
                </li>
              </ul>

              <div className="bg-white p-6 rounded-lg mt-6">
                <p className="font-bold text-red-600 mb-3">Eso genera:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">→</span>
                    <span>Agotamiento constante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">→</span>
                    <span>Margen pobre o inexistente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">→</span>
                    <span>Crecimiento errático</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">→</span>
                    <span>Frustración y desgaste</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mini reframe */}
          <div className="bg-navy text-white p-8 md:p-10 rounded-lg text-center max-w-3xl mx-auto mb-8">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              No necesitas más esfuerzo.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gold">
              Necesitas un sistema.
            </p>
          </div>

          {/* Bloque "Por qué funciona" fusionado */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy text-center">
              Por qué funciona ACTIVA
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gold">
                <div className="text-3xl mb-3 text-gold">🎯</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Dirección clara</h4>
                <p className="text-gray-700 leading-relaxed">
                  Sabes exactamente qué hacer y por qué. Sin dispersión.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gold">
                <div className="text-3xl mb-3 text-gold">⚡</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Ejecución guiada</h4>
                <p className="text-gray-700 leading-relaxed">
                  Playbooks accionables. Implementación real con accountability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gold">
                <div className="text-3xl mb-3 text-gold">📊</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Validación real en mercado</h4>
                <p className="text-gray-700 leading-relaxed">
                  Sales al mercado en 4 meses. Mides. Ajustas. Avanzas con datos.
                </p>
              </div>
            </div>
            <div className="bg-navy text-white p-6 rounded-lg text-center max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl font-semibold">
                No es motivación. Es estructura que te obliga a avanzar.
              </p>
            </div>
          </div>

          {/* Link secundario */}
          <div className="text-center">
            <button
              onClick={() => {
                const element = document.getElementById('proceso')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="text-gold underline hover:text-gold/80 transition-colors text-lg"
            >
              Ver cómo se implementa →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PRESENTACIÓN DE ACTIVA */}
      <section id="activa" className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-navy">
            Qué es ACTIVA
          </h2>

          {/* Frase contundente */}
          <p className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy max-w-3xl mx-auto">
            ACTIVA = 4 meses de implementación guiada
          </p>

          {/* Bloque "Para quién" */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy text-center">
              Para quién
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold text-center">
                <div className="text-3xl mb-3">📊</div>
                <p className="text-lg font-semibold text-navy">0–100K</p>
                <p className="text-sm text-gray-600 mt-1">Facturación anual</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold text-center">
                <div className="text-3xl mb-3">🏗️</div>
                <p className="text-lg font-semibold text-navy">Montando clínica</p>
                <p className="text-sm text-gray-600 mt-1">En fase de apertura</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold text-center">
                <div className="text-3xl mb-3">🚀</div>
                <p className="text-lg font-semibold text-navy">Recién abierta</p>
                <p className="text-sm text-gray-600 mt-1">Primeros meses</p>
              </div>
            </div>
          </div>

          {/* Bloque "Qué obtienes" - Value Stack en cards */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-navy text-center">
              Qué obtienes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gold/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Oferta</h4>
                <p className="text-gray-700 leading-relaxed">
                  Propuesta de valor clara y validada en el mercado
                </p>
              </div>

              <div className="bg-white border-2 border-gold/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">💰</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Pricing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Estructura de precios con margen sano y defendible
                </p>
              </div>

              <div className="bg-white border-2 border-gold/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Sistema captación</h4>
                <p className="text-gray-700 leading-relaxed">
                  Mecanismo simple de captación y conversión funcionando
                </p>
              </div>

              <div className="bg-white border-2 border-gold/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Recurrencia</h4>
                <p className="text-gray-700 leading-relaxed">
                  Primera estructura de recurrencia implementada y medida
                </p>
              </div>

              <div className="bg-white border-2 border-gold/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🧭</div>
                <h4 className="text-xl font-bold mb-2 text-navy">Dirección 90 días</h4>
                <p className="text-gray-700 leading-relaxed">
                  Plan claro para los siguientes 90 días con prioridades definidas
                </p>
              </div>
            </div>
          </div>

          {/* Bloque "Por qué funciona" - Mecanismo */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-navy text-center">
              Por qué funciona
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-navy text-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">✓</div>
                <h4 className="text-xl font-bold mb-2">Checkpoints</h4>
                <p className="text-sm text-gray-300">
                  Revisión cada 3–4 semanas
                </p>
              </div>

              <div className="bg-navy text-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📚</div>
                <h4 className="text-xl font-bold mb-2">Playbooks</h4>
                <p className="text-sm text-gray-300">
                  Acción guiada paso a paso
                </p>
              </div>

              <div className="bg-navy text-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💬</div>
                <h4 className="text-xl font-bold mb-2">Feedback</h4>
                <p className="text-sm text-gray-300">
                  Ajustes en tiempo real
                </p>
              </div>

              <div className="bg-navy text-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-xl font-bold mb-2">Accountability</h4>
                <p className="text-sm text-gray-300">
                  Sin entregas no hay avance
                </p>
              </div>
            </div>
          </div>

          {/* Link secundario */}
          <div className="text-center">
            <button
              onClick={() => {
                const element = document.getElementById('acceso')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="text-gold underline hover:text-gold/80 transition-colors text-lg"
            >
              Ver acceso y beca →
            </button>
          </div>
        </div>
      </section>

      {/* PROCESO - Cómo se implementa */}
      <Process />

      {/* QUÉ INCLUYE ACTIVA - Value Stack Visual */}
      <WhatIncludes />

      {/* BONUS EXTRA - Evento presencial + graduación */}
      <BonusEventSection />

      {/* QUÉ IMPLEMENTAS EN 4 MESES - Entregables */}
      <Deliverables />

      {/* SECTION 5 — BECA GIVEAWAY */}
      <section className="py-24 px-4 bg-gold/5 border-t border-gold/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-navy">
            Aplicar tiene premio (aunque no ganes la beca)
          </h2>

          {/* Card central destacada */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-2 border-gold/30 mb-12">
            {/* 3 pasos */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-navy text-center">
                Cómo funciona
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Paso 1 */}
                <div className="text-center">
                  <div className="inline-block bg-gold text-navy w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                    1
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-navy">Aplicas</h4>
                  <p className="text-gray-700 leading-relaxed">
                    2 minutos. Sin compromiso.
                  </p>
                </div>

                {/* Paso 2 */}
                <div className="text-center">
                  <div className="inline-block bg-gold text-navy w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                    2
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-navy">Elegimos 1 beca</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Criterio: compromiso + perfil
                  </p>
                </div>

                {/* Paso 3 */}
                <div className="text-center">
                  <div className="inline-block bg-gold text-navy w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                    3
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-navy">Todos reciben respuesta</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Comunicamos beca y plazas disponibles para todos los solicitantes
                  </p>
                </div>
              </div>
            </div>

            {/* Por qué hacemos esto */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-navy text-center">
                Por qué hacemos esto
              </h3>
              <ul className="space-y-4 max-w-2xl mx-auto">
                <li className="flex items-start gap-4">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-navy">Filtrar ejecutores:</strong> buscamos personas que van a implementar, no solo consumir contenido
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-navy">Crear casos reales:</strong> cada cohorte genera resultados validados que mejoran el programa
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-navy">Proteger calidad del grupo:</strong> grupos pequeños con perfiles alineados generan mejor experiencia
                  </span>
                </li>
              </ul>
            </div>

            {/* Qué evalúa la beca */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-navy text-center">
                Qué evalúa la beca
              </h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">•</span>
                  <span className="text-gray-700">Situación actual</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">•</span>
                  <span className="text-gray-700">Claridad de objetivos</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">•</span>
                  <span className="text-gray-700">Disposición a ejecutar</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">•</span>
                  <span className="text-gray-700">Disponibilidad real</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA grande */}
          <div className="text-center">
            <button
              onClick={handleApply}
              className="bg-navy text-white px-12 py-6 rounded-lg font-bold text-2xl hover:opacity-90 transition-opacity shadow-lg"
            >
              Aplicar ahora
            </button>
            <p className="text-sm text-gray-600 mt-4">
              Plazas limitadas por cohorte · Respuesta por email
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ACCESO A ACTIVA */}
      <section id="acceso" className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-navy">
            Acceso a ACTIVA
          </h2>

          {/* Card central con información de precio */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-sm border-2 border-gold/30 mb-12">
            {/* Valor real */}
            <div className="text-center mb-8 pb-8 border-b border-gray-200">
              <p className="text-lg md:text-xl text-gray-600 mb-3">
                Valor real del programa
              </p>
              <p className="text-4xl md:text-5xl font-bold text-red-600">
                5.000€ + IVA
              </p>
            </div>

            {/* Precio lanzamiento - Blurred */}
            <div className="text-center mb-8 pb-8 border-b border-gray-200 relative">
              <p className="text-lg md:text-xl text-gray-700 mb-2">
                Lanzamiento mayo
              </p>
              
              {/* Bloque desenfocado con overlay */}
              <div className="relative inline-block group">
                <div className="relative px-8 py-4">
                  {/* Texto con blur */}
                  <p 
                    className="text-5xl md:text-6xl font-bold text-navy mb-2 blur-md select-none pointer-events-none"
                    aria-label="Precio de lanzamiento oculto. Se revela al aplicar."
                  >
                    3.000€ + IVA
                  </p>
                  
                  {/* Overlay nublado sutil */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:blur-sm transition-all duration-300">
                    <div className="text-center">
                      <span className="text-xl md:text-2xl font-bold text-slate-500 select-none flex items-center gap-2">
                        <span>🔒</span>
                        <span>PRECIO DE LANZAMIENTO</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Tooltip al hover (opcional) */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <div className="bg-slate-800 text-white text-xs px-3 py-1.5 rounded whitespace-nowrap shadow-lg">
                    Se revela al aplicar
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                  </div>
                </div>
              </div>
              
              {/* Microcopy */}
              <p className="text-xs tracking-widest text-slate-500 uppercase mt-8 mb-2 font-semibold">
                RELLENA EL FORMULARIO
              </p>
              <p className="text-sm text-gray-600">
                Plazas limitadas por cohorte
              </p>
            </div>

            {/* Beca */}
            <div className="text-center">
              <div className="inline-block bg-gold/10 border-2 border-gold p-6 rounded-lg mb-6">
                <p className="text-2xl font-bold text-navy mb-2">🎁 Beca disponible</p>
                <p className="text-lg text-gray-700">
                  Se becará <strong className="text-navy">1 plaza</strong> entre todas las solicitudes
                </p>
              </div>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                La selección prioriza <strong className="text-navy">compromiso y ejecución</strong>, no necesidad económica.
              </p>
            </div>
          </div>

          {/* Flujo de acceso */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-navy text-center">
              Cómo funciona el acceso
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-block bg-navy text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h4 className="font-bold mb-2 text-navy">Aplicar</h4>
                <p className="text-sm text-gray-600">
                  Completa el formulario (2 minutos)
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block bg-navy text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h4 className="font-bold mb-2 text-navy">Revisión</h4>
                <p className="text-sm text-gray-600">
                  Evaluamos tu perfil y compromiso
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block bg-navy text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h4 className="font-bold mb-2 text-navy">Resolución</h4>
                <p className="text-sm text-gray-600">
                  Comunicamos beca y plazas disponibles
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block bg-navy text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <h4 className="font-bold mb-2 text-navy">Confirmación</h4>
                <p className="text-sm text-gray-600">
                  Reservas tu plaza y comienzas
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={handleApply}
              className="bg-navy text-white px-12 py-6 rounded-lg font-bold text-2xl hover:opacity-90 transition-opacity shadow-lg"
            >
              Aplicar ahora
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Tarda 2 minutos · Sin compromiso · Plazas limitadas por cohorte
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PRUEBA SOCIAL */}
      {/* Testimonios de Impacto Alto */}
      <TestimonialSection />

      {/* Validación Profesional */}
      <TestimonialsGrid
        category="validation"
        title="Validación profesional"
        subtitle="Dueños de clínicas que han transformado su gestión"
      />

      {/* Refuerzo Social - Carrusel */}
      <TestimonialsCarousel />

      {/* CTA Final Testimonios */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <button
            onClick={handleApply}
            className="bg-gold text-navy px-12 py-5 rounded-lg font-bold text-xl hover:opacity-90 transition-opacity shadow-lg"
          >
            Aplicar (2 min)
          </button>
          <p className="text-sm text-gray-300 mt-4">
            Sin compromiso · Plazas limitadas por cohorte
          </p>
        </div>
      </section>

      {/* SECTION 8 — FILTRO */}
      <section className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-navy">
            ACTIVA es para ti si…
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-green-50 border-l-4 border-green-600 p-10 rounded-lg shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-600">
                ACTIVA es para ti si…
              </h3>
              <ul className="space-y-4 text-lg md:text-xl">
                <li className="flex items-start gap-4">
                  <span className="text-green-600 text-2xl">✔</span>
                  <span className="leading-relaxed">tienes clínica 0–100K</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-600 text-2xl">✔</span>
                  <span className="leading-relaxed">estás montando clínica o acabas de abrir</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-600 text-2xl">✔</span>
                  <span className="leading-relaxed">tienes 1 fisio o equipo pequeño</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-600 text-2xl">✔</span>
                  <span className="leading-relaxed">quieres estructura real</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-600 text-2xl">✔</span>
                  <span className="leading-relaxed">vas a ejecutar playbooks</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-600 text-2xl">✔</span>
                  <span className="leading-relaxed">buscas dirección</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-10 rounded-lg shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-600">
                ACTIVA no es para ti si…
              </h3>
              <ul className="space-y-4 text-lg md:text-xl">
                <li className="flex items-start gap-4">
                  <span className="text-red-600 text-2xl">✘</span>
                  <span className="leading-relaxed">quieres teoría sin acción</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-600 text-2xl">✘</span>
                  <span className="leading-relaxed">buscas soluciones mágicas</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-600 text-2xl">✘</span>
                  <span className="leading-relaxed">no puedes comprometerte</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ejemplos rápidos */}
          <div className="bg-gray-50 p-10 rounded-lg border-2 border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-navy">
              Ejemplos rápidos
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-lg font-semibold text-navy mb-3">
                  "Abrí hace 3 meses…"
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Tengo pacientes pero no sé si estoy ganando dinero. Necesito saber cómo estructurar precios, servicios y captación desde el principio.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-lg font-semibold text-navy mb-3">
                  "Facturo 4–8k/mes…"
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Trabajo mucho pero el margen es bajo. Quiero optimizar mi oferta y crear recurrencia antes de crecer más.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-lg font-semibold text-navy mb-3">
                  "Agenda llena pero margen bajo…"
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Tengo trabajo pero no sé si mi modelo es sostenible. Necesito dirección para tomar decisiones estratégicas.
                </p>
              </div>
            </div>
          </div>

          {/* Link secundario */}
          <div className="text-center mt-12">
            <button
              onClick={() => {
                const element = document.getElementById('acceso')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="text-gold underline hover:text-gold/80 transition-colors text-lg"
            >
              Ver acceso y beca →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9 — CIERRE */}
      <section className="py-24 px-4 bg-navy text-white border-t border-gold/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Tu siguiente paso es simple
          </h2>

          {/* 3 pasos */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
              <div className="bg-gold text-navy w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                Rellenas Typeform
              </h3>
              <p className="text-gray-300 text-lg">
                2 minutos
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
              <div className="bg-gold text-navy w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                Revisamos si encajas
              </h3>
              <p className="text-gray-300 text-lg">
                Evaluamos tu perfil y situación
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
              <div className="bg-gold text-navy w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                Te damos la mejor vía
              </h3>
              <p className="text-gray-300 text-lg">
                Beca / Acceso / Prueba
              </p>
            </div>
          </div>

          {/* Mini disclaimer */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 mb-12 max-w-3xl mx-auto">
            <p className="text-center text-gray-300 text-lg italic">
              "No vendemos por vender; priorizamos perfiles ejecutores"
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleApply}
              className="bg-gold text-navy px-12 py-5 rounded-lg font-bold text-xl hover:opacity-90 transition-opacity shadow-lg w-full sm:w-auto"
            >
              Aplicar a ACTIVA
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('proceso')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border-2 border-white text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Ver plan
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <FAQ />

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 px-4 text-center border-t border-gray-800">
        <p className="text-3xl md:text-4xl font-bold mb-4">ACTIVA → OPTIMIZA → ESCALA</p>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          FisioReferentes te acompaña en todo el proceso: desde activar tu clínica hasta construir un negocio sólido, rentable y preparado para crecer.
        </p>
      </footer>
    </main>
  )
}
