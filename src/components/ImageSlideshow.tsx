import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideshowProps {
  images: string[];
  title: string;
  subtitle: string;
  variant?: 'split' | 'full';
}

const ImageSlideshow: React.FC<SlideshowProps> = ({
  images,
  title,
  subtitle,
  variant = 'split'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative -mt-16 bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-16 opacity-0 animate-fade-in">
          <h2 className="text-2xl md:text-3xl brand-heading mb-3 md:mb-4">{title}</h2>
          <p className="text-base md:text-lg brand-subheading">{subtitle}</p>
        </div>

        <div className="relative">
          <div className={`grid ${
            variant === 'split' ? 'grid-cols-1 md:grid-cols-2 gap-4' : 'grid-cols-1'
          }`}>
            {variant === 'split' ? (
              <>
                <div className="overflow-hidden">
                  <img
                    src={images[currentIndex]}
                    alt="Master Safe vehicle"
                    className="w-full h-[300px] md:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src={images[(currentIndex + 1) % images.length]}
                    alt="Master Safe vehicle"
                    className="w-full h-[300px] md:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </>
            ) : (
              <div className="overflow-hidden">
                <img
                  src={images[currentIndex]}
                  alt="Master Safe vehicle"
                  className="w-full h-[400px] md:h-[800px] object-cover"
                />
              </div>
            )}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-brand-navy hover:text-brand-navy/80 transition-colors p-2"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} md:size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-brand-navy hover:text-brand-navy/80 transition-colors p-2"
            aria-label="Next slide"
          >
            <ChevronRight size={24} md:size={32} />
          </button>

          <div className="flex justify-center mt-4 md:mt-8 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-brand-navy' : 'bg-brand-navy/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlideshow;