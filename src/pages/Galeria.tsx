import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80',
    title: 'Luxury Armored SUV'
  },
  {
    url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
    title: 'Executive Protection'
  },
  {
    url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80',
    title: 'High Security Transport'
  },
  {
    url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80',
    title: 'Armored Luxury Sedan'
  },
  {
    url: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80',
    title: 'VIP Protection'
  },
  {
    url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
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