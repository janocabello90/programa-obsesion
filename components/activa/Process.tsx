'use client'

// TODO: Reemplazar con tu URL de Typeform
const TYPEFORM_URL = 'https://TUPLACEHOLDER.typeform.com/to/XXXXXX'

export default function Process() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="proceso" className="py-24 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">
          Cómo se implementa ACTIVA
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          Proceso claro de 4 meses
        </p>

        <div className="space-y-12">
          {/* Mes 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 text-center md:text-right">
              <div className="inline-block bg-gold text-navy px-6 py-3 rounded-full text-2xl font-bold mb-4">
                MES 1
              </div>
              <h3 className="text-2xl font-bold text-navy">Activación mental</h3>
            </div>
            <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg border-l-4 border-gold">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Objetivo:</strong> Pasar de técnico reactivo a empresario con dirección.
              </p>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• Cortar dispersión</li>
                <li>• Priorizar decisiones</li>
                <li>• Enfoque obsesivo en lo que da retorno</li>
              </ul>
              <p className="mt-4 text-gold font-semibold">
                Entregable: Mapa de foco y decisiones + plan de ejecución
              </p>
            </div>
          </div>

          {/* Mes 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="inline-block bg-gold text-navy px-6 py-3 rounded-full text-2xl font-bold mb-4">
                MES 2
              </div>
              <h3 className="text-2xl font-bold text-navy">Estrategia</h3>
            </div>
            <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg border-l-4 border-gold">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Objetivo:</strong> Diseñar tu propuesta de valor y oferta mínima vendible.
              </p>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• Propuesta clara (dolor → mecanismo → resultado)</li>
                <li>• Oferta defendible</li>
                <li>• Pricing con margen sano</li>
              </ul>
              <p className="mt-4 text-gold font-semibold">
                Entregable: Oferta lista para vender + guión de comunicación
              </p>
            </div>
          </div>

          {/* Mes 3-4 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 text-center md:text-right">
              <div className="inline-block bg-gold text-navy px-6 py-3 rounded-full text-2xl font-bold mb-4">
                MES 3–4
              </div>
              <h3 className="text-2xl font-bold text-navy">Implementación</h3>
            </div>
            <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg border-l-4 border-gold">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Objetivo:</strong> Salir al mercado, medir y ajustar.
              </p>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• Captación simple</li>
                <li>• Conversión y cierre ético</li>
                <li>• Primera recurrencia</li>
              </ul>
              <p className="mt-4 text-gold font-semibold">
                Entregable: Sistema mínimo funcionando + métricas básicas
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
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
