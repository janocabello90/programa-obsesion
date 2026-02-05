'use client'

import { getTestimonialsByCategory } from './testimonials-data'
import TestimonialCard from './TestimonialCard'

export default function TestimonialsCarousel() {
  const socialTestimonials = getTestimonialsByCategory('social')

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            Comunidad ACTIVA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lo que dicen los dueños de clínicas que forman parte de la comunidad
          </p>
        </div>

        {/* Carrusel horizontal con scroll */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4 scroll-smooth scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {socialTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-80 md:w-96"
              >
                <TestimonialCard
                  testimonial={testimonial}
                  variant="default"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Desliza para ver más testimonios →
          </p>
        </div>
      </div>
    </section>
  )
}
