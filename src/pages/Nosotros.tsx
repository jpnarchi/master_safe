import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const sections = [
  {
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80',
    title: 'INNOVACIÓN',
    description: 'Nos enorgullece ofrecer un servicio integral, desde la asesoría inicial hasta la instalación final del blindaje. Trabajamos en estrecha colaboración con nuestros clientes, escuchando sus necesidades y diseñando soluciones adaptadas a sus requerimientos específicos.',
    imageLeft: true
  },
  {
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80',
    title: 'SEGURIDAD',
    description: 'Nos esforzamos por superar las expectativas de nuestros clientes, brindándoles tranquilidad y seguridad en todo momento. Nuestro compromiso no solo radica en proporcionar un blindaje confiable, sino también en mantener una comunicación constante y transparente con cada uno de nuestros clientes.',
    imageLeft: false
  },
  {
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80',
    title: 'CONFIANZA',
    description: 'En nuestra empresa, valoramos enormemente la seguridad y la integridad de las personas. Por eso, nos mantenemos actualizados con los últimos avances tecnológicos y estándares de calidad en el campo del blindaje vehicular, garantizando así la máxima protección en cada proyecto que llevamos a cabo.',
    imageLeft: true
  }
];

const Nosotros = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <section className="pt-20">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80"
            alt="Luxury armored car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl brand-heading mb-6 text-white">MASTER SAFE</h1>
            <p className="text-xl brand-subheading max-w-3xl text-white">
              Líderes en blindaje y seguridad automotriz, donde la protección 
              se encuentra con la excelencia.
            </p>
          </div>
        </div>

        {sections.map((section, index) => (
          <div key={index} className="py-24 bg-white">
            <div className="container mx-auto px-8">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                section.imageLeft ? '' : 'md:flex-row-reverse'
              }`}>
                <div className={`${section.imageLeft ? '' : 'md:order-2'}`}>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[600px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={`${section.imageLeft ? '' : 'md:order-1'} px-8`}>
                  <h2 className="text-3xl brand-heading mb-8">
                    {section.title}
                  </h2>
                  <p className="text-lg brand-text">
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

export default Nosotros;