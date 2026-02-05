import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="relative">
      <Header />

      {/* HERO */}
      <section className="pt-40 pb-32 px-4 bg-navy text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ACTIVA
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300">
            El programa de 4 meses para activar una clínica con dirección, margen y recurrencia (0–100K)
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-bold mb-2">ACTIVA → OPTIMIZA → ESCALA</p>
            <p className="text-base md:text-lg text-gray-300">
              Primero lo enciendes. Luego lo haces rentable. Después lo multiplicas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#acceso"
              className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Solicitar plaza
            </a>
            <a
              href="#beca"
              className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Aplicar a la beca
            </a>
          </div>
        </div>
      </section>

      {/* BLOQUE 1 - DIAGNÓSTICO */}
      <section id="diagnostico" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-navy">
            Tu clínica no necesita más ideas. Necesita dirección.
          </h2>
          
          <p className="text-xl text-center mb-8 text-gray-600">
            Si te suena alguna de estas:
          </p>

          <ul className="space-y-4 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>Trabajas mucho, pero el margen no aparece.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>Cada mes es distinto: no hay estabilidad.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>Vendes "fisioterapia", pero no una propuesta clara.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>La agenda está llena… y aun así estás agotado.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>Tomas decisiones reactivas, no estratégicas.</span>
            </li>
          </ul>

          <div className="bg-gray-50 border-l-4 border-gold p-6 md:p-8 rounded-r-lg max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold text-navy mb-2">
              Esto no es falta de pacientes.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Es falta de enfoque, estructura mínima y un sistema repetible.
            </p>
          </div>

          <div className="text-center mt-8">
            <a
              href="#acceso"
              className="inline-block border border-gold text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-colors"
            >
              Quiero activarlo
            </a>
          </div>
        </div>
      </section>

      {/* BLOQUE 2 - MODELO DMR */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">
            Dirección → Margen → Recurrencia
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            El modelo DMR (marco mental simple)
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-navy">Dirección</h3>
              <p className="text-lg text-gray-700">
                Saber qué vendes, a quién y por qué te eligen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-navy">Margen</h3>
              <p className="text-lg text-gray-700">
                Ganar bien sin estar secuestrado por la agenda.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-navy">Recurrencia</h3>
              <p className="text-lg text-gray-700">
                Estabilidad: que el negocio no dependa de rachas.
              </p>
            </div>
          </div>

          <div className="bg-navy text-white p-8 rounded-lg text-center max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold">
              ACTIVA existe para construir DMR con playbooks y checkpoints, sin humo.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 3 - QUÉ ES ACTIVA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-navy">
            4 meses intensivos para encender la base del negocio (sin quitarte la vida)
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 mb-8">
            <p>
              <strong className="text-navy">ACTIVA</strong> es el programa previo a <strong className="text-navy">OPTIMIZA</strong>.
            </p>
            <p>
              Está diseñado para clínicas entre <strong className="text-navy">0 y 100K</strong> que necesitan:
            </p>
          </div>

          <ul className="space-y-4 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>claridad de propuesta</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>sistema mínimo de captación y conversión</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>primera estructura de recurrencia</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>accountability real para ejecutar</span>
            </li>
          </ul>

          <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-semibold text-navy">
              <strong>Resultado oculto (y real):</strong> salir con una <strong>propuesta de valor validada en el mercado</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 4 - METODOLOGÍA */}
      <section className="py-24 px-4 bg-navy text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            PNL → Estrategia → Implementación
          </h2>
          <p className="text-xl text-center mb-12 text-gray-300">
            Tres bloques. Un objetivo: activar una oferta que el mercado compra.
          </p>

          <div className="space-y-12">
            {/* BLOQUE 1 - PNL */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
                BLOQUE 1 — PNL (Mes 1)
              </h3>
              <p className="text-xl font-semibold mb-4">
                Objetivo: pasar de "técnico reactivo" a "empresario con dirección".
              </p>
              <ul className="space-y-2 mb-6 text-lg">
                <li>• cortar dispersión</li>
                <li>• priorizar decisiones</li>
                <li>• enfoque obsesivo en lo que da retorno</li>
              </ul>
              <p className="text-lg font-semibold text-gold">
                Entregable: mapa de foco y decisiones + plan de ejecución.
              </p>
            </div>

            {/* BLOQUE 2 - Estrategia */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
                BLOQUE 2 — Estrategia (Mes 2)
              </h3>
              <p className="text-xl font-semibold mb-4">
                Objetivo: diseñar tu propuesta de valor y tu oferta mínima vendible.
              </p>
              <ul className="space-y-2 mb-6 text-lg">
                <li>• propuesta clara (dolor → mecanismo → resultado)</li>
                <li>• oferta defendible</li>
                <li>• pricing con margen sano</li>
              </ul>
              <p className="text-lg font-semibold text-gold">
                Entregable: oferta lista para vender + guión de comunicación.
              </p>
            </div>

            {/* BLOQUE 3 - Implementación */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
                BLOQUE 3 — Implementación (Mes 3–4)
              </h3>
              <p className="text-xl font-semibold mb-4">
                Objetivo: salir al mercado, medir y ajustar.
              </p>
              <ul className="space-y-2 mb-6 text-lg">
                <li>• captación simple</li>
                <li>• conversión y cierre ético</li>
                <li>• primera recurrencia</li>
              </ul>
              <p className="text-lg font-semibold text-gold">
                Entregable: sistema mínimo funcionando + métricas básicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 5 - CÓMO FUNCIONA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">
            Poco tiempo semanal. Mucha dirección. Cero improvisación.
          </h2>

          <ul className="space-y-4 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>Duración: <strong>4 meses</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span><strong>Checkpoints</strong> cada 3–4 semanas (revisión + dirección)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>En cada checkpoint recibes <strong>Playbooks</strong> (acción guiada)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span>Entre checkpoints: ejecución ligera (2–3h/semana estimado)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold text-xl mt-1">•</span>
              <span><strong>Accountability</strong>: sin entregas no hay avance (ni feedback)</span>
            </li>
          </ul>

          <div className="bg-gray-50 border-l-4 border-gold p-6 rounded-lg max-w-2xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-semibold text-navy">
              No es "ver contenido". Es implementar y reportar resultados.
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 6 - LOS PLAYBOOKS */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">
            Lo que te damos para que ejecutes
          </h2>

          <div className="mb-8">
            <p className="text-xl font-semibold mb-4 text-navy">Playbooks orientados a DMR:</p>
            <ul className="space-y-3 text-lg max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl mt-1">•</span>
                <span><strong>Dirección:</strong> propuesta, oferta, foco, posicionamiento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl mt-1">•</span>
                <span><strong>Margen:</strong> pricing, paquetes, estructura mínima</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl mt-1">•</span>
                <span><strong>Recurrencia:</strong> continuidad, programas, seguimiento</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            <p className="text-xl font-semibold mb-4 text-navy">Sistema:</p>
            <ol className="space-y-3 text-lg list-decimal list-inside">
              <li>Te damos el playbook</li>
              <li>Lo implementas</li>
              <li>Reportas resultados</li>
              <li>Ajustamos en checkpoint</li>
            </ol>
          </div>
        </div>
      </section>

      {/* BLOQUE 7 - RESULTADOS ESPERABLES */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">
            Lo que deberías tener al terminar
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            (sin prometer humo)
          </p>

          <ul className="space-y-4 mb-12 text-lg md:text-xl max-w-2xl mx-auto">
            <li className="flex items-start border-l-4 border-gold pl-6 py-2">
              <span>Propuesta de valor clara y vendible</span>
            </li>
            <li className="flex items-start border-l-4 border-gold pl-6 py-2">
              <span>Oferta mínima validada (primeras ventas / señales de mercado)</span>
            </li>
            <li className="flex items-start border-l-4 border-gold pl-6 py-2">
              <span>Pricing y estructura con margen mejorado</span>
            </li>
            <li className="flex items-start border-l-4 border-gold pl-6 py-2">
              <span>Un sistema simple de captación y conversión</span>
            </li>
            <li className="flex items-start border-l-4 border-gold pl-6 py-2">
              <span>Primer mecanismo de recurrencia</span>
            </li>
            <li className="flex items-start border-l-4 border-gold pl-6 py-2">
              <span>Dirección clara para el siguiente trimestre</span>
            </li>
          </ul>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
              <p className="font-semibold text-red-600 mb-2">Antes:</p>
              <p className="text-gray-700">caos, dispersión, cansancio</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <p className="font-semibold text-green-600 mb-2">Después:</p>
              <p className="text-gray-700">claridad, control y un negocio activado</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 8 - PARA QUIÉN ES / NO ES */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">
            Esto filtra. Y está bien.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-green-600">ACTIVA es para ti si:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>tienes una clínica en 0–100K y quieres orden</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>estás dispuesto a ejecutar playbooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>quieres dirección, margen y recurrencia (no "likes")</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-red-600">ACTIVA NO es para ti si:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>buscas teoría sin implementar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>quieres una solución mágica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>no puedes comprometerte a entregas mínimas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 9 - PRUEBA SOCIAL */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">
            Casos reales
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 border-l-4 border-gold p-6 rounded-lg">
              <p className="text-lg md:text-xl italic mb-3">
                "Entré con caos y salí con una oferta clara y un plan real."
              </p>
              <p className="text-gray-600">— Nombre, clínica, ciudad</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-gold p-6 rounded-lg">
              <p className="text-lg md:text-xl italic mb-3">
                "Dejé de improvisar. Ahora sé qué vender y cómo sostenerlo."
              </p>
              <p className="text-gray-600">— Nombre, clínica, ciudad</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 10 - PRECIO Y ACCESO */}
      <section id="acceso" className="py-24 px-4 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Reducimos riesgo para que actúes
          </h2>

          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg mb-8 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Valor real del programa
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gray-400 line-through mb-8">
              5.000€
            </p>
            
            <p className="text-5xl md:text-6xl font-bold text-gold mb-8">
              3.000€
            </p>

            <div className="border-t border-white/20 pt-8 space-y-4 text-left max-w-md mx-auto">
              <p className="flex justify-between">
                <span>En cada lanzamiento damos</span>
                <span className="font-bold">1 beca</span>
              </p>
              <p className="text-sm text-gray-300 mt-4">
                Modelo "Pay less now, pay more later":
              </p>
              <ul className="text-sm space-y-2 mt-2">
                <li>• Opción A: acceso promocional por <strong>2.000€</strong> (Giveaway)</li>
                <li>• Opción B: <strong>prueba 15 días</strong> - si te quedas: 3.000€</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#acceso"
              className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Solicitar plaza
            </a>
            <a
              href="#beca"
              className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Aplicar a la beca
            </a>
          </div>
        </div>
      </section>

      {/* BLOQUE 11 - FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">
            FAQ
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-navy">¿Cuánto tiempo a la semana?</h3>
              <p className="text-lg text-gray-700">
                2–3 horas/semana de implementación ligera + checkpoint cada 3–4 semanas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-navy">¿Es para clínicas sin pacientes?</h3>
              <p className="text-lg text-gray-700">
                No. Es para clínicas que necesitan enfoque, oferta y sistema mínimo.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-navy">¿Es compatible con OPTIMIZA?</h3>
              <p className="text-lg text-gray-700">
                ACTIVA es el paso previo natural. OPTIMIZA viene después, cuando ya hay base.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-navy">¿Qué pasa si no entrego?</h3>
              <p className="text-lg text-gray-700">
                No avanzas. El programa está diseñado para ejecutar, no para consumir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 12 - CIERRE FINAL */}
      <section id="beca" className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-navy">
            Si sabes que tu clínica puede más, actívala.
          </h2>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-8 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold text-navy mb-4">
              ACTIVA es para dueños que han entendido algo:
            </p>
            <div className="border-l-4 border-gold pl-6 text-left">
              <p className="text-lg md:text-xl text-gray-700 italic mb-2">
                La libertad no llega con más esfuerzo.
              </p>
              <p className="text-lg md:text-xl text-gray-700 italic">
                Llega con dirección, margen y recurrencia.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#acceso"
              className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Solicitar plaza
            </a>
            <a
              href="#beca"
              className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy hover:text-white transition-colors"
            >
              Aplicar a la beca
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <p>© 2025 ACTIVA. Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}
