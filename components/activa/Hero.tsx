'use client'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // TODO: Reemplazar con tu URL de Typeform
  const TYPEFORM_URL = 'https://TUPLACEHOLDER.typeform.com/to/XXXXXX'

  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="pt-32 pb-32 px-4 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Badge superior */}
        <div className="text-center mb-8">
          <span className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-2 rounded-full border border-gold/30">
            ACTIVA → OPTIMIZA → ESCALA
          </span>
        </div>

        {/* Layout 2 columnas en desktop */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Copy */}
          <div>
            {/* H1 con outcome + timeframe + público */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy leading-tight">
              Activa tu clínica{' '}
              <span className="text-gold">(o tu nueva clínica)</span> en{' '}
              <span className="text-gold">4 meses</span>
            </h1>

            {/* Subheadline con 3 resultados medibles */}
            <p className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700 leading-relaxed">
              Dirección clara · Oferta validada · Recurrencia funcionando
            </p>

            {/* Bloque de 3 bullets escaneable */}
            <div className="mb-10">
              <p className="text-xl md:text-2xl font-bold text-navy mb-6">
                En 4 meses sales con:
              </p>
              <ul className="space-y-4 text-lg md:text-xl">
                <li className="flex items-start gap-4">
                  <span className="text-gold text-2xl font-bold mt-1">✓</span>
                  <span className="leading-relaxed">
                    <strong className="text-navy">Propuesta de valor clara</strong> y validada en el mercado
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gold text-2xl font-bold mt-1">✓</span>
                  <span className="leading-relaxed">
                    <strong className="text-navy">Sistema mínimo</strong> de captación y conversión funcionando
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gold text-2xl font-bold mt-1">✓</span>
                  <span className="leading-relaxed">
                    <strong className="text-navy">Primera recurrencia</strong> implementada y medida
                  </span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <button
                  onClick={handleApply}
                  className="w-full bg-navy text-white px-8 py-5 rounded-lg font-bold text-xl hover:opacity-90 transition-opacity shadow-lg"
                >
                  Aplicar ahora
                </button>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Aplicación en 2 minutos · Sin compromiso
                </p>
              </div>
              <div className="flex-1">
                <button
                  onClick={() => scrollToSection('proceso')}
                  className="w-full border-2 border-navy text-navy px-8 py-5 rounded-lg font-bold text-xl hover:bg-navy hover:text-white transition-colors"
                >
                  Ver el plan
                </button>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Cómo funciona ACTIVA
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Card resumen */}
          <div className="bg-gray-50 border-2 border-gold/30 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-navy text-center">
              Resumen del programa
            </h3>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm font-semibold text-gray-600 mb-2">DURACIÓN</p>
                <p className="text-2xl font-bold text-navy">4 meses</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm font-semibold text-gray-600 mb-2">CHECKPOINTS</p>
                <p className="text-xl font-bold text-navy">Cada 3–4 semanas</p>
                <p className="text-sm text-gray-600 mt-1">Revisión + dirección + playbooks</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm font-semibold text-gray-600 mb-2">TIEMPO SEMANAL</p>
                <p className="text-xl font-bold text-navy">2–3 horas</p>
                <p className="text-sm text-gray-600 mt-1">Implementación ligera entre checkpoints</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">PARA QUIÉN</p>
                <p className="text-lg font-bold text-navy">Clínicas 0–100K</p>
                <p className="text-sm text-gray-600 mt-1">Montando clínica o recién abierta</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                <strong className="text-navy">No es contenido para consumir.</strong>
                <br />
                Es estructura para ejecutar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
