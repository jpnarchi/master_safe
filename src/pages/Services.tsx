import React from 'react';
import { Calendar } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Conoce más sobre
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
              NUESTROS SERVICIOS
            </h2>
          </div>
        </div>
      </section>

      {/* Medicina Funcional */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                Medicina Funcional
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La medicina funcional es un enfoque holístico que busca sanar el cuerpo desde adentro. 
                Como practicante de medicina funcional en Dallas, me enfoco en identificar y tratar las causas 
                subyacentes de tus síntomas, en lugar de simplemente abordar las manifestaciones externas.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Al integrar prácticas médicas tradicionales y modernas, enfatizo la importancia de la nutrición 
                y el estilo de vida en la salud general. Mi objetivo es promover una función óptima, reparar 
                daños celulares y mejorar tu calidad de vida a largo plazo.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agenda tu Consulta
              </a>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="/assets/services/medicina-funcional.jpg"
                alt="Medicina Funcional"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Salud Intestinal */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-first lg:order-first">
              <img
                src="/assets/services/salud-intestinal.jpg"
                alt="Salud Intestinal"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                Salud Intestinal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tu intestino juega un papel fundamental en tu salud y bienestar general. Cuando está en 
                equilibrio, facilita una digestión adecuada, la absorción de nutrientes y la eliminación 
                de desechos, al mismo tiempo que fortalece tu sistema inmunológico y mejora tu claridad mental.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Un microbioma intestinal saludable—compuesto por microorganismos diversos y beneficiosos—ayuda 
                a regular la inflamación, producir vitaminas esenciales y mantener la armonía en tu cuerpo.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  ¿Por qué es tan importante la salud intestinal?
                </h3>
                <p className="text-gray-600">
                  Tu intestino es mucho más que un sistema digestivo; es la base de tu bienestar general. 
                  Un intestino saludable permite una digestión adecuada, absorción de nutrientes y eliminación 
                  de desechos, además de ser el hogar del 70% de tus células inmunológicas.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agenda tu Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pérdida de Peso */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                Pérdida de Peso
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La pérdida de peso es un proceso complejo que va más allá de comer menos y hacer más ejercicio. 
                En Mar360 Wellness, abordo la pérdida de peso desde una perspectiva de medicina funcional, 
                considerando factores como desequilibrios hormonales, problemas digestivos, inflamación y 
                deficiencias nutricionales.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                A través de evaluaciones integrales y herramientas de diagnóstico avanzadas, identifico las 
                causas subyacentes del aumento de peso y desarrollo planes personalizados que se adaptan a 
                tus necesidades específicas.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agenda tu Consulta
              </a>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="/assets/services/perdida-peso.jpg"
                alt="Pérdida de Peso"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Balance Hormonal */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-first lg:order-first">
              <img
                src="/assets/services/balance-hormonal.jpg"
                alt="Balance Hormonal"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                Balance Hormonal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Las hormonas juegan un papel crucial en casi todos los aspectos de tu salud, desde el 
                metabolismo y el peso hasta el estado de ánimo y la energía. Cuando tus hormonas están 
                desequilibradas, puedes experimentar una amplia gama de síntomas que afectan tu calidad de vida.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Utilizo pruebas avanzadas y un enfoque integral para identificar desequilibrios hormonales 
                y crear un plan de tratamiento personalizado que restaure tu equilibrio natural.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agenda tu Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Salud Tiroidea */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                Salud Tiroidea
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La tiroides es una glándula pequeña pero poderosa que afecta prácticamente cada célula, 
                tejido y órgano de tu cuerpo. Los problemas tiroideos pueden manifestarse de muchas formas, 
                desde fatiga y aumento de peso hasta depresión y problemas de concentración.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Mi enfoque para la salud tiroidea va más allá de las pruebas estándar. Realizo una 
                evaluación exhaustiva para identificar la causa raíz de tus síntomas y desarrollar un 
                plan de tratamiento personalizado.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agenda tu Consulta
              </a>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="/assets/services/salud-tiroidea.jpg"
                alt="Salud Tiroidea"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pruebas de Laboratorio */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-first lg:order-first">
              <img
                src="/assets/services/laboratorio.jpg"
                alt="Pruebas de Laboratorio"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                Pruebas de Laboratorio
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Las pruebas de laboratorio son una herramienta esencial en la medicina funcional. 
                Nos permiten obtener una imagen clara y detallada de tu estado de salud actual, 
                identificar desequilibrios y monitorear tu progreso.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Utilizo pruebas avanzadas y específicas que van más allá de los análisis convencionales 
                para obtener una comprensión profunda de tu bioquímica única y desarrollar un plan de 
                tratamiento personalizado.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agenda tu Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8 font-display">
            ¿Lista(o) para transformar tu salud?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Ya sea que estés en Dallas o en cualquier lugar de Estados Unidos o México, 
            mis consultas virtuales te permiten acceder a orientación experta desde la 
            comodidad de tu hogar.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            ¡Comencemos este viaje juntos!
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;