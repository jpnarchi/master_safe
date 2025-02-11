import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ImageSlideshow from './components/ImageSlideshow';
import ContentSection from './components/ContentSection';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import Nosotros from './pages/Nosotros';
import Galeria from './pages/Galeria';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

const slideshowImages1 = [
  '/mercedes.webp',
  '/mini.webp',
  '/gli.webp',
  '/cross.webp',
];

const slideshowImages2 = [
  '/chevrolet.webp',
  '/gmc.webp',
  '/s450_blindaje_mastersafe-scaled.webp',
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'nosotros':
        return <Nosotros />;
      case 'galeria':
        return <Galeria />;
      case 'servicios':
        return <Servicios />;
      case 'contacto':
        return <Contacto />;
      default:
        return (
          <>
            <Navigation />
            <HeroSection />
            
            <FeatureGrid />

            <ImageSlideshow
              images={slideshowImages1}
              title="SEGURIDAD SIN COMPROMISOS"
              subtitle="Master Safe: Protegiendo lo que más importa."
              variant="split"
              autoplaySpeed={5000}
            />

            <ContentSection
              image="/jeep.webp"
              title="TECHO Y CRISTALES"
              subtitle="Techo panorámico con aramida y blindaje ligero compuesto de la mejor fibra balística."
              imageLeft={true}
            />

            <ContentSection
              image="/suburban.webp"
              title="QUINTA PUERTA"
              subtitle="Mantenemos la ingeniería original de tu vehículo, conservando la funcionalidad de los sistemas de apertura y cierre automático."
              imageLeft={false}
            />

            <Footer />
          </>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {renderPage()}
    </div>
  );
}

export default App;