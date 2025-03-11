import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideshowProps {
  images: string[];
  title: string;
  subtitle: string;
  variant?: 'split' | 'full';
  autoplaySpeed?: number;
}

const ImageSlideshow: React.FC<SlideshowProps> = ({
  images,
  title,
  subtitle,
  variant = 'split',
  autoplaySpeed = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [images.length, isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  useEffect(() => {
    if (!isPaused && !isHovered && autoplaySpeed) {
      const interval = setInterval(nextSlide, autoplaySpeed);
      return () => clearInterval(interval);
    }
  }, [nextSlide, isPaused, isHovered, autoplaySpeed]);

  return (
    <section className="relative -mt-16 bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl brand-heading mb-4 md:mb-6 opacity-0 animate-fade-in">
            {title}
          </h2>
          <p className="text-lg md:text-xl brand-subheading max-w-3xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            {subtitle}
          </p>
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`grid ${
            variant === 'split' ? 'grid-cols-1 md:grid-cols-2 gap-6' : 'grid-cols-1'
          }`}>
            {variant === 'split' ? (
              <>
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <div className="aspect-[4/3]">
                    <img
                      src={images[currentIndex]}
                      alt="Master Safe vehicle"
                      className={`w-full h-full object-cover transform transition-all duration-700 ${
                        isTransitioning ? 'scale-110' : 'scale-100'
                      } group-hover:scale-105`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <div className="aspect-[4/3]">
                    <img
                      src={images[(currentIndex + 1) % images.length]}
                      alt="Master Safe vehicle"
                      className={`w-full h-full object-cover transform transition-all duration-700 ${
                        isTransitioning ? 'scale-110' : 'scale-100'
                      } group-hover:scale-105`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </>
            ) : (
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <div className="aspect-[21/9]">
                  <img
                    src={images[currentIndex]}
                    alt="Master Safe vehicle"
                    className={`w-full h-full object-cover transform transition-all duration-700 ${
                      isTransitioning ? 'scale-110' : 'scale-100'
                    } group-hover:scale-105`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-navy p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0"
            aria-label="Previous slide"
            disabled={isTransitioning}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-navy p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
            aria-label="Next slide"
            disabled={isTransitioning}
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-xs font-medium uppercase tracking-wider bg-white/90 hover:bg-white text-brand-navy px-4 py-2 rounded-full shadow-lg transition-all duration-300"
            >
              {isPaused ? 'Play' : 'Pause'}
            </button>
            <div className="flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsTransitioning(false), 700);
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 w-4 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlideshow;