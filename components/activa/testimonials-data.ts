export type Testimonial = {
  name: string
  role?: string
  quote: string
  category: 'impact' | 'validation' | 'social'
}

export const testimonials: Testimonial[] = [
  // SECTION — Testimonios de Impacto Alto
  {
    name: 'Maite',
    quote: 'El PROGRAMA es imprescindible para cualquiera que tenga una clínica. Debería enseñarse incluso en la carrera. Te cambia completamente la forma de ver la profesión. El equipo sabe de lo que habla y le pone mucha alma.',
    category: 'impact',
  },
  {
    name: 'Fernando Navarro',
    quote: 'El PROGRAMA ha sido un gran descubrimiento. A algunos de aquí nos ha cambiado la vida.',
    category: 'impact',
  },
  {
    name: 'Juan A.',
    role: 'Fisio Aravaca',
    quote: 'Aprender a ser empresario de fisioterapia con este PROGRAMA te cambia la vida. Recuperas control, claridad y dirección.',
    category: 'impact',
  },
  {
    name: 'Virginia',
    quote: 'El PROGRAMA es totalmente recomendable y debería ser obligatorio para cualquiera que tenga una clínica, incluso siendo autónomo. Te ayuda a entender realmente los números… y mucho más.',
    category: 'impact',
  },
  // SECTION — Validación Profesional
  {
    name: 'Alicia Franqueza',
    quote: 'El mejor dinero invertido. Recomiendo el PROGRAMA al 100% a cualquier empresario o autónomo, con o sin trabajadores.',
    category: 'validation',
  },
  {
    name: 'Mari Paz',
    quote: 'Está enfocado tanto a autónomos como a sociedades. El PROGRAMA te abre los ojos sobre cómo administrar y gestionar la clínica. Para mí ha sido el mejor dinero invertido.',
    category: 'validation',
  },
  {
    name: 'Mari Paz',
    quote: 'Estoy cursando el PROGRAMA y lo recomiendo totalmente. Todo lo que estoy aprendiendo sobre gestión es increíble.',
    category: 'validation',
  },
  {
    name: 'Susana',
    quote: 'Estoy cursando el PROGRAMA y estoy aprendiendo muchísimo: gestión, marketing, liderazgo… Es una formación que te cambia la perspectiva.',
    category: 'validation',
  },
  {
    name: 'Sonia',
    quote: 'He hecho otras formaciones, pero ninguna enfocada a la fisioterapia como este PROGRAMA. Totalmente recomendable.',
    category: 'validation',
  },
  {
    name: 'C.',
    quote: 'Estoy en el PROGRAMA y lo recomiendo al 100%. Ahora entiendo muchas cosas que antes no veía, y sobre todo sé cómo aplicarlas.',
    category: 'validation',
  },
  // SECTION — Refuerzo Social
  {
    name: 'Mari Paz',
    quote: 'Lo increíble del PROGRAMA es la comunidad que lo formamos. Ver cómo los compañeros aplican lo aprendido y avanzan es brutal. Otro 10 para todos.',
    category: 'social',
  },
  {
    name: 'Rosa',
    quote: '200% recomendable… por no decir imprescindible.',
    category: 'social',
  },
  {
    name: 'Miriam',
    quote: 'Yo también estoy en el PROGRAMA y lo recomiendo muchísimo. No lo dudéis.',
    category: 'social',
  },
  {
    name: 'María Jesús',
    quote: '100% recomendable.',
    category: 'social',
  },
  {
    name: 'David',
    role: 'Fisiocastro',
    quote: 'Recomendable 100x100.',
    category: 'social',
  },
]

export const getTestimonialsByCategory = (category: Testimonial['category']) => {
  return testimonials.filter((t) => t.category === category)
}
