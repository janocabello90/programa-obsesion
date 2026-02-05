import { getTestimonialsByCategory, Testimonial } from './testimonials-data'
import TestimonialCard from './TestimonialCard'

interface TestimonialsGridProps {
  category: Testimonial['category']
  title: string
  subtitle?: string
}

export default function TestimonialsGrid({ category, title, subtitle }: TestimonialsGridProps) {
  const categoryTestimonials = getTestimonialsByCategory(category)

  // Layout según categoría: 3 columnas para Validación
  const gridCols = category === 'validation' ? 'md:grid-cols-3' : 'md:grid-cols-2'

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid ${gridCols} gap-6`}>
          {categoryTestimonials.slice(0, category === 'validation' ? 3 : undefined).map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
              variant="default"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
