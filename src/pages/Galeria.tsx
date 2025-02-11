import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  {
    url: '/gli.webp',
    title: 'Luxury Armored SUV'
  },
  {
    url: '/cross.webp',
    title: 'Executive Protection'
  },
  {
    url: '/s450_blindaje_mastersafe-scaled.webp',
    title: 'Armored Luxury Sedan'
  },
  {
    url: '/chevrolet.webp',
    title: 'VIP Protection'
  },
  {
    url: '/mercedes.webp',
    title: 'Secure Transportation'
  }
];

const Galeria = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <section className="pt-20">
        {/* Hero Slider */}
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src={images[currentSlide].url}
              alt={images[currentSlide].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gray-900/50" />
          </div>

          <div className="absolute inset-0 flex items-center justify-between px-8">
            <button
              onClick={prevSlide}
              className="text-white hover:opacity-75 transition-opacity"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={nextSlide}
              className="text-white hover:opacity-75 transition-opacity"
            >
              <ChevronRight size={48} />
            </button>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="container mx-auto px-8 py-24 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <h3 className="text-white text-2xl font-light tracking-wider">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-gray-900/95 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:opacity-75 transition-opacity"
          >
            <X size={32} />
          </button>
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].title}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
          <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl font-light tracking-wider">
            {images[selectedImage].title}
          </h3>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galeria;