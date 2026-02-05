'use client'

// TODO: Reemplazar con tu URL de Typeform
const TYPEFORM_URL = 'https://TUPLACEHOLDER.typeform.com/to/XXXXXX'

export default function RiskReversal() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-24 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-navy">
          Reducimos tu riesgo
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center border-l-4 border-gold">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-bold mb-3 text-navy">Beca disponible</h3>
            <p className="text-gray-700 leading-relaxed">
              Se becará 1 plaza entre todas las solicitudes. La selección prioriza compromiso y ejecución.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center border-l-4 border-gold">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-3 text-navy">Proceso transparente</h3>
            <p className="text-gray-700 leading-relaxed">
              Aplicas → Revisamos → Comunicamos beca y plazas → Confirmas tu acceso.
            </p>
          </div>
        </div>

        <div className="bg-navy text-white p-8 rounded-lg text-center">
          <p className="text-xl md:text-2xl font-semibold mb-6">
            No compites por descuento. Compites por demostrar compromiso.
          </p>
          <button
            onClick={handleApply}
            className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Aplicar ahora
          </button>
          <p className="text-sm text-gray-300 mt-4">
            Tarda 2 minutos · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  )
}
