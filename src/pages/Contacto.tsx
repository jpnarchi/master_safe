import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactSections = [
  {
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
    title: 'SERVICIO PERSONALIZADO',
    description: 'Nuestro equipo de expertos está disponible para asesorarte en la mejor solución de seguridad para tu vehículo.',
    imageLeft: true
  },
  {
    image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80',
    title: 'ATENCIÓN 24/7',
    description: 'Contamos con servicio de asistencia las 24 horas para garantizar tu seguridad en todo momento.',
    imageLeft: false
  }
];

const Contacto = () => {
  return (
    <div className="bg-brand-navy min-h-screen">
      <Navigation />
      
      <section className="pt-20">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80"
            alt="Contact header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl brand-heading mb-6">CONTACTO</h1>
            <p className="text-xl brand-subheading max-w-3xl">
              Tu seguridad es nuestra prioridad
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="container mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl brand-heading mb-12">
                SOLICITA UNA CONSULTA
              </h2>
              
              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="form-input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-input"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="form-input"
                  />
                </div>
                <div>
                  <select className="form-input">
                    <option value="">Selecciona un servicio</option>
                    <option value="blindaje">Blindaje Vehicular</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="asesoria">Asesoría Técnica</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Mensaje"
                    rows={6}
                    className="form-input"
                  ></textarea>
                </div>
                <button className="brand-button w-full bg-white/10 hover:bg-white/20">
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>

            <div className="text-white space-y-12">
              <h2 className="text-3xl brand-heading mb-12">
                INFORMACIÓN DE CONTACTO
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <MapPin size={24} className="flex-shrink-0 text-white" />
                  <div>
                    <h3 className="brand-subheading mb-2">SHOWROOM</h3>
                    <p className="text-white brand-text">
                      Av. Principal #123<br />
                      Ciudad, Estado 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <Phone size={24} className="flex-shrink-0 text-white" />
                  <div>
                    <h3 className="brand-subheading mb-2">TELÉFONO</h3>
                    <p className="text-white brand-text">+1 234 567 8900</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <Mail size={24} className="flex-shrink-0 text-white" />
                  <div>
                    <h3 className="brand-subheading mb-2">EMAIL</h3>
                    <p className="text-white brand-text">info@mastersafe.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <Clock size={24} className="flex-shrink-0 text-white" />
                  <div>
                    <h3 className="brand-subheading mb-2">HORARIO</h3>
                    <p className="text-white brand-text">
                      Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                      Sábado: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Sections */}
        {contactSections.map((section, index) => (
          <div key={index} className="py-24">
            <div className="container mx-auto px-8">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                section.imageLeft ? '' : 'md:flex-row-reverse'
              }`}>
                <div className={`${section.imageLeft ? '' : 'md:order-2'}`}>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                <div className={`${section.imageLeft ? '' : 'md:order-1'} px-8`}>
                  <h2 className="text-3xl brand-heading mb-8">
                    {section.title}
                  </h2>
                  <p className="text-lg brand-text text-white">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Contacto