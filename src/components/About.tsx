import React from 'react';
import { Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
              <img
                src="/assets/dra-maria-rivero.jpg"
                alt="Dra. María Rivero"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Dr. Mar Rivero
            </h1>
            <p className="text-xl text-white font-display">
              Functional Medicine Pratitioner
            </p>
            <p className="text-lg text-white mt-2 font-display">
              MD • MS • IFMCP
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Siempre he creído que la verdadera salud va más allá de tratar síntomas: se trata de
              comprender a la persona en su totalidad. En México, hay un dicho: "No puedes
              tapar el sol con un dedo," que refleja cómo las soluciones incompletas suelen
              ignorar el panorama general. Esta comprensión me llevó a estudiar medicina con
              el propósito más profundo: descubrir y sanar las causas raíz de los problemas de
              salud.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Mi propio camino comenzó con desafíos de tiroides a una edad temprana, lo que
              me mostró las carencias del sistema de salud convencional. Sabía que debía haber
              una mejor manera. Hoy, como especialista en Medicina Funcional, combino el
              conocimiento médico tradicional con soluciones innovadoras centradas en el
              estilo de vida. Mi enfoque no solo trata síntomas individuales, sino que te
              empodera para tomar el control de tu salud al abordar tu cuerpo como un sistema
              conectado.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Como madre de cuatro hijos, entiendo las exigencias de equilibrar la vida, la familia
              y el cuidado personal. Veo los mismos desafíos en mis pacientes, ya sea aumento
              de peso, malestar digestivo o falta de energía. Pero también sé que, con la guía
              adecuada, es posible romper el ciclo de soluciones rápidas y descubrir una salud
              duradera.
            </p>

            <p className="text-lg text-gray-600 mb-12">
              Me apasiona ayudarte a encontrar tu camino único hacia el bienestar. Juntos,
              crearemos un plan personalizado que priorice tus necesidades y te ayude a
              recuperar tu vitalidad. Porque la verdadera transformación comienza con la
              estrategia correcta, y estoy aquí para guiarte en cada paso del camino.
            </p>

            <div className="bg-purple-50 p-8 rounded-xl shadow-lg">
              <p className="text-xl font-semibold text-purple-800 text-center">
                Tenemos la oportunidad de mejorar las cosas... solo se necesita
                la estrategia correcta.
              </p>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agenda tu Consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;