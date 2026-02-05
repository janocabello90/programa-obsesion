interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '150', label: 'clínicas' },
  { value: '300', label: 'alumnos' },
  { value: '90%', label: 'recomendación' },
]

export default function StatsStrip() {
  return (
    <section className="py-16 px-4 bg-navy text-white border-t border-b border-gold/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
