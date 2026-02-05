'use client'

// TODO: Reemplazar con tu URL de Typeform
const TYPEFORM_URL = 'https://TUPLACEHOLDER.typeform.com/to/XXXXXX'

export default function StickyCTA() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer')
  }

  const handleScrollToProcess = () => {
    const element = document.getElementById('proceso')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy text-white shadow-lg z-50 border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        {/* Desktop: más espacioso, no compacto */}
        <div className="hidden md:flex items-center justify-between gap-6 py-4 px-6">
          <div className="flex-1">
            <p className="text-base font-semibold">Aplicación ACTIVA (2 min)</p>
            <p className="text-xs text-gray-300 mt-1">Beca + acceso especial para solicitantes</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollToProcess}
              className="text-sm text-gray-300 hover:text-white underline transition-colors"
            >
              Ver cómo funciona
            </button>
            <button
              onClick={handleApply}
              className="bg-gold text-navy px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Aplicar
            </button>
          </div>
        </div>

        {/* Mobile: compacto */}
        <div className="md:hidden py-3 px-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Aplicación ACTIVA (2 min)</p>
              <p className="text-xs text-gray-300 truncate">Beca + acceso especial</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={handleScrollToProcess}
                className="text-xs text-gray-300 hover:text-white underline transition-colors whitespace-nowrap"
              >
                Ver cómo funciona
              </button>
              <button
                onClick={handleApply}
                className="bg-gold text-navy px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
