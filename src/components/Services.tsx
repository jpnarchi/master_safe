import React from 'react';
import { Leaf, Heart, Weight, Brain, Activity, FlaskRound as Flask } from 'lucide-react';

const services = [
  {
    title: 'Medicina Funcional',
    description: 'Tratamiento personalizado que aborda la causa raíz de tus problemas de salud.',
    image: '/assets/services/medicina-funcional.jpg',
    icon: <Leaf className="w-6 h-6 text-purple-600" />
  },
  {
    title: 'Salud Intestinal',
    description: 'Optimiza tu microbioma y mejora tu salud digestiva con planes personalizados.',
    image: '/assets/services/salud-intestinal.jpg',
    icon: <Heart className="w-6 h-6 text-purple-600" />
  },
  {
    title: 'Pérdida de Peso',
    description: 'Programas efectivos y sostenibles para alcanzar tu peso ideal de forma saludable.',
    image: '/assets/services/perdida-peso.jpg',
    icon: <Weight className="w-6 h-6 text-purple-600" />
  },
  {
    title: 'Balance Hormonal',
    description: 'Restaura tu equilibrio hormonal y mejora tu bienestar general.',
    image: '/assets/services/balance-hormonal.jpg',
    icon: <Activity className="w-6 h-6 text-purple-600" />
  },
  {
    title: 'Salud Tiroidea',
    description: 'Diagnóstico y tratamiento especializado para problemas de tiroides.',
    image: '/assets/services/salud-tiroidea.jpg',
    icon: <Brain className="w-6 h-6 text-purple-600" />
  },
  {
    title: 'Pruebas de Laboratorio',
    description: 'Análisis completos para un diagnóstico preciso y personalizado.',
    image: '/assets/services/laboratorio.jpg',
    icon: <Flask className="w-6 h-6 text-purple-600" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-display">
            Conoce más sobre
          </h2>
          <p className="mt-4 text-4xl text-purple-700 font-display font-bold">
            NUESTROS SERVICIOS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition"
                >
                  Más Información
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;