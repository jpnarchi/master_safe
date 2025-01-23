import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-hero min-h-screen pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8 sm:space-y-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-display leading-tight">
              Medicina Funcional para una Vida Plena
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Descubre un enfoque personalizado que trata las causas raíz de tus problemas de salud, 
              no solo los síntomas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Agenda tu Consulta
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-medium rounded-full text-purple-700 bg-white hover:bg-purple-50 transition shadow-lg"
              >
                Conoce Nuestros Servicios
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </div>

          {/* Right Column - Doctor Image */}
          <div className="lg:block relative mt-8 lg:mt-0">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/dra-maria-rivero.jpg"
                alt="Dra. María Rivero"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center space-y-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">10+</p>
              <p className="text-white/90 text-sm sm:text-base">Años de Experiencia</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">1000+</p>
              <p className="text-white/90 text-sm sm:text-base">Pacientes Atendidos</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">100%</p>
              <p className="text-white/90 text-sm sm:text-base">Atención Personalizada</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">24/7</p>
              <p className="text-white/90 text-sm sm:text-base">Soporte Virtual</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;