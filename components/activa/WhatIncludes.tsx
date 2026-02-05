'use client'

// TODO: Reemplazar con tu URL de Typeform
const TYPEFORM_URL = 'https://TUPLACEHOLDER.typeform.com/to/XXXXXX'

export default function WhatIncludes() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer')
  }

  const items = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Playbooks',
      count: '12+',
      subtitle: 'Guías paso a paso para implementar cada sistema',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Checkpoints',
      count: '4',
      subtitle: 'Sesiones mensuales de revisión y ajuste estratégico',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Revisiones',
      count: 'Ilimitadas',
      subtitle: 'Feedback continuo sobre tu implementación',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'Plantillas',
      count: '20+',
      subtitle: 'Documentos listos para usar: pricing, ofertas, sistemas',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Soporte',
      count: 'Directo',
      subtitle: 'Acceso a comunidad privada y respuestas en 24h',
    },
  ]

  return (
    <section className="py-24 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-navy">
          Qué incluye ACTIVA
        </h2>
        <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
          Todo lo que necesitas para activar tu clínica en 4 meses
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-gold/50"
            >
              <div className="text-gold mb-4">
                {item.icon}
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <h3 className="text-2xl font-bold text-navy">{item.title}</h3>
                <span className="text-gold font-semibold text-lg">({item.count})</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleApply}
            className="bg-navy text-white px-12 py-5 rounded-lg font-bold text-xl hover:opacity-90 transition-opacity shadow-lg"
          >
            Aplicar a ACTIVA
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Tarda 2 minutos · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  )
}
