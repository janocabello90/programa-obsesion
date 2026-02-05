export default function Mechanism() {
  return (
    <section className="py-24 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">
          Por qué funciona ACTIVA
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          El mecanismo detrás de la activación
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4 text-gold">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-navy">Dirección clara</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sabes exactamente qué hacer y por qué. Sin dispersión. Sin ruido.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4 text-gold">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-navy">Ejecución guiada</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Playbooks accionables. No teoría. Implementación real con accountability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl mb-4 text-gold">📊</div>
            <h3 className="text-2xl font-bold mb-4 text-navy">Validación rápida</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sales al mercado en 4 meses. Mides. Ajustas. Avanzas con datos reales.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-navy text-white p-8 rounded-lg text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold">
            No es motivación. Es estructura + ejecución + validación.
          </p>
        </div>
      </div>
    </section>
  )
}
