import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock } from 'lucide-react';

const services = [
  {
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
    title: 'BLINDAJE TRANSPARENTE',
    description: 'Todos los cristales originales son sustituidos por Cristales Blindados ultraligeros marca "PG Products SUPER SLIM", de 18 mm +/- 2mm. de espesor con ceja de acero balístico, certificados por los laboratorios internacionales más reconocidos. Los cristales delanteros bajan hasta el 95% de su capacidad original.',
    imageLeft: true
  },
  {
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80',
    title: 'BLINDAJE OPACO',
    description: 'El blindaje opaco se compone de una combinación de MANTAS DE ARAMIDA TWARON 13 CAPAS Multihit y Placas de Acero Balístico de 2.5mm. SSAB de la más alta calidad, todas estas cortadas, termo formadas o moldeadas a la medida exacta de su ubicación, el poco uso de acero en el vehículo hace que no pierda el performance de el auto y que el peso sea por apenas los 160 Kgs.',
    imageLeft: false
  }
];

const additionalInfo = {
  title: 'TECNOLOGÍA AVANZADA',
  description: 'Utilizamos máquinas de cortado (CNC) de la más alta tecnología, mismas que incrementan la calidad y terminado de cada pieza. El del habitáculo está protegido contra impactos de proyectiles de armas de fuego de los calibres mencionados anteriormente. Cero huecos balísticos.'
};

const Servicios = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <section className="pt-20">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80"
            alt="Armored vehicle service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl brand-heading mb-6 text-white">
              NUESTROS SERVICIOS
            </h1>
            <p className="text-xl brand-subheading max-w-3xl text-white">
              Soluciones de blindaje y seguridad automotriz de clase mundial
            </p>
          </div>
        </div>

        {services.map((service, index) => (
          <div key={index} className="py-24 bg-white">
            <div className="container mx-auto px-8">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                service.imageLeft ? '' : 'md:flex-row-reverse'
              }`}>
                <div className={`${service.imageLeft ? '' : 'md:order-2'}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[600px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={`${service.imageLeft ? '' : 'md:order-1'} px-8`}>
                  <h2 className="text-3xl brand-heading mb-8">
                    {service.title}
                  </h2>
                  <p className="text-lg brand-text">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-gray-50 py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl brand-heading mb-8">
                {additionalInfo.title}
              </h2>
              <p className="text-lg brand-text">
                {additionalInfo.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;