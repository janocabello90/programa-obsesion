export default function ValueStack() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">
          Qué incluye ACTIVA
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          Valor real del programa
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gold">
            <h3 className="text-2xl font-bold mb-4 text-navy">Estructura</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>Checkpoints cada 3–4 semanas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>Playbooks accionables</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>Accountability obligatorio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>Comunidad privada</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gold">
            <h3 className="text-2xl font-bold mb-4 text-navy">Entregables</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>Mapa de foco y decisiones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>Oferta lista para vender</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>Sistema mínimo funcionando</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>Métricas básicas implementadas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
