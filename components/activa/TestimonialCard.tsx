import { Testimonial } from './testimonials-data'

interface TestimonialCardProps {
  testimonial: Testimonial
  variant?: 'default' | 'featured'
}

const categoryLabels = {
  impact: 'Impacto',
  validation: 'Gestión',
  social: 'Comunidad',
}

export default function TestimonialCard({ testimonial, variant = 'default' }: TestimonialCardProps) {
  // Extraer clínica/ciudad del role si existe
  const clinicCity = testimonial.role || ''

  if (variant === 'featured') {
    return (
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg border-l-4 border-gold relative">
        {/* Badge de categoría */}
        <div className="absolute top-4 right-4">
          <span className="bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full">
            {categoryLabels[testimonial.category]}
          </span>
        </div>
        
        {/* Comillas grandes */}
        <div className="mb-6">
          <svg
            className="w-12 h-12 text-gold/60 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 pr-8">
          {testimonial.quote}
        </blockquote>
        <div className="border-t border-gray-200 pt-4">
          <p className="font-bold text-navy text-lg">{testimonial.name}</p>
          {clinicCity && (
            <p className="text-gray-600 text-sm mt-1">{clinicCity}</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-gold/30">
      {/* Comillas */}
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-gold/40"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
        {testimonial.quote}
      </blockquote>
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <p className="font-semibold text-navy">{testimonial.name}</p>
            {clinicCity && (
              <p className="text-gray-600 text-sm mt-1">{clinicCity}</p>
            )}
          </div>
          <span className="bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full">
            {categoryLabels[testimonial.category]}
          </span>
        </div>
      </div>
    </div>
  )
}
