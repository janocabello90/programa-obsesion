'use client'

// TODO: Reemplazar con tu URL de Typeform
const TYPEFORM_URL = 'https://TUPLACEHOLDER.typeform.com/to/XXXXXX'

export default function NextStep() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-24 px-4 bg-white border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-navy">
          Siguiente paso
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Aplica ahora. Revisaremos tu perfil y te contactaremos en 24–48 horas.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 text-navy">Qué esperar:</h3>
          <ol className="text-left space-y-3 text-lg text-gray-700 max-w-md mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">1.</span>
              <span>Completas el formulario (2 minutos)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">2.</span>
              <span>Revisamos tu perfil</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">3.</span>
              <span>Te contactamos en 24–48h</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold">4.</span>
              <span>Confirmamos tu acceso</span>
            </li>
          </ol>
        </div>

        <button
          onClick={handleApply}
          className="bg-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
        >
          Aplicar a ACTIVA
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Sin compromiso · Tarda 2 minutos
        </p>
      </div>
    </section>
  )
}
