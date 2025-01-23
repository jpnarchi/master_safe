import React from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Contacto
            </h1>
            <p className="text-xl text-white">
              Estamos aquí para ayudarte en tu camino hacia una mejor salud
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="lg:pr-8">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">
                  Información de Contacto
                </h2>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Ubicación</h3>
                      <p className="text-gray-600">Dallas, Texas</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Consultas</h3>
                      <p className="text-gray-600">Consultas virtuales disponibles</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <a 
                        href="mailto:info@mar360wellness.com" 
                        className="text-gray-600 hover:text-purple-600 transition"
                      >
                        info@mar360wellness.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Horario de Atención</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Lunes a Viernes: 9:00 AM - 5:00 PM</p>
                    <p>Sábado: Con cita previa</p>
                    <p>Domingo: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">
                  Envíanos un Mensaje
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-lg transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;