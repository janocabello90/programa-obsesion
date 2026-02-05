'use client'

import Image from 'next/image'

// TODO: Reemplazar con tu URL de Typeform
const TYPEFORM_URL = 'https://TUPLACEHOLDER.typeform.com/to/XXXXXX'

export default function BonusEventSection() {
  const handleApply = () => {
    window.open(TYPEFORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="evento" className="py-24 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: Copy + Bullets + CTA */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy">
              Bonus extra: Evento presencial + graduación
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Cerramos ACTIVA en Zaragoza con un evento final para terminar el programa, graduarte y celebrarlo a bombo y platillo.
            </p>

            {/* Bullets */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <span className="text-gold text-2xl mt-1">✓</span>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Evento presencial en Zaragoza al finalizar la cohorte
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-2xl mt-1">✓</span>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Cierre final + conclusiones + siguientes pasos
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-2xl mt-1">✓</span>
                <span className="text-lg text-gray-700 leading-relaxed">
                  Graduación oficial ACTIVA + foto del momento
                </span>
              </li>
            </ul>

            {/* Microcopy */}
            <p className="text-sm text-gray-600 mb-8 font-semibold">
              Plazas limitadas · Solo para alumnos de la cohorte
            </p>

            {/* CTA */}
            <div>
              <button
                onClick={handleApply}
                className="bg-navy text-white px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Aplicar a ACTIVA
              </button>
              <p className="text-sm text-gray-600 mt-3">
                Tarda 2 minutos · Sin compromiso
              </p>
            </div>
          </div>

          {/* Columna derecha: Imagen */}
          <div className="relative">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/graduacion.jpg"
                  alt="Graduación ACTIVA en Zaragoza"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 text-center mt-3 italic">
                Graduación Alumnos Septiembre 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
