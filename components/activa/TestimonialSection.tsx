import { getTestimonialsByCategory } from './testimonials-data'
import TestimonialCard from './TestimonialCard'
import StatsStrip from './StatsStrip'

export default function TestimonialSection() {
  const impactTestimonials = getTestimonialsByCategory('impact')

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            Resultados reales de dueños de clínica
          </h2>
        </div>

        {/* StatsStrip */}
        <div className="mb-16">
          <StatsStrip />
        </div>

        {/* Grid 2 columnas para Impacto - Limitado a 4 */}
        <div className="grid md:grid-cols-2 gap-8">
          {impactTestimonials.slice(0, 4).map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
              variant="featured"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
