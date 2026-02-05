'use client'

// TODO: Reemplazar con tu URL de Typeform
const TYPEFORM_URL = 'https://TUPLACEHOLDER.typeform.com/to/XXXXXX'

export default function Deliverables() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer')
  }

  const deliverables = [
    {
      title: 'Oferta + pricing',
      description: 'Propuesta de valor clara con precios que generan margen real',
    },
    {
      title: 'Sistema captación',
      description: 'Mecanismo simple y probado para atraer pacientes de forma sostenible',
    },
    {
      title: 'Script de conversión',
      description: 'Guión para cerrar consultas y convertir leads en pacientes',
    },
    {
      title: 'Primer mecanismo de recurrencia',
      description: 'Sistema básico para generar ingresos recurrentes y predecibles',
    },
    {
      title: 'Dashboard de métricas básicas',
      description: 'Panel simple para medir lo que importa: ingresos, margen, recurrencia',
    },
  ]

  return (
    <section className="py-24 px-4 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-navy">
          Qué implementas en 4 meses
        </h2>
        <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
          Entregables concretos que activan tu clínica
        </p>

        {/* Checklist en 2 columnas */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border-l-4 border-gold hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
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
