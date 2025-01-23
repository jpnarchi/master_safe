import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana García',
    text: 'La Dra. Rivero transformó mi salud por completo. Su enfoque en la medicina funcional me ayudó a resolver problemas que tenía desde hace años.',
    rating: 5,
  },
  {
    name: 'John Smith',
    text: 'Excellent professional who really takes the time to understand your health issues. The virtual consultations are very convenient.',
    rating: 5,
  },
  {
    name: 'María Rodríguez',
    text: 'Gracias a su programa de pérdida de peso, logré mis objetivos de una manera saludable y sostenible.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Historias reales de transformación y bienestar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <p className="font-medium text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;