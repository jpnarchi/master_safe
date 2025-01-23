import React, { useState } from 'react';
import { Menu, X, Globe2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-hero w-full z-50 fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white text-2xl font-bold font-display" onClick={closeMenu}>
                Mar360 Wellness
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-white hover:text-purple-200 transition">
              {language === 'es' ? 'Servicios' : 'Services'}
            </Link>
            <Link to="/about" className="text-white hover:text-purple-200 transition">
              {language === 'es' ? 'Sobre Mí' : 'About'}
            </Link>
            <Link to="/blog" className="text-white hover:text-purple-200 transition">Blog</Link>
            <Link to="/contact" className="text-white hover:text-purple-200 transition">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </Link>
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center text-white hover:text-purple-200"
            >
              <Globe2 className="w-5 h-5 mr-1" />
              {language.toUpperCase()}
            </button>
            <Link
              to="/#book"
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition shadow-lg"
            >
              {language === 'es' ? 'Agendar Cita' : 'Book Appointment'}
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm fixed top-24 left-0 right-0 z-50 border-t border-purple-100">
          <div className="px-4 pt-2 pb-3 space-y-3">
            <Link 
              to="/services" 
              className="block px-4 py-3 text-purple-700 hover:bg-purple-50 rounded-lg transition"
              onClick={closeMenu}
            >
              {language === 'es' ? 'Servicios' : 'Services'}
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-3 text-purple-700 hover:bg-purple-50 rounded-lg transition"
              onClick={closeMenu}
            >
              {language === 'es' ? 'Sobre Mí' : 'About'}
            </Link>
            <Link 
              to="/blog" 
              className="block px-4 py-3 text-purple-700 hover:bg-purple-50 rounded-lg transition"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-3 text-purple-700 hover:bg-purple-50 rounded-lg transition"
              onClick={closeMenu}
            >
              {language === 'es' ? 'Contacto' : 'Contact'}
            </Link>
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center px-4 py-3 text-purple-700 hover:bg-purple-50 rounded-lg transition w-full"
            >
              <Globe2 className="w-5 h-5 mr-2" />
              {language.toUpperCase()}
            </button>
            <Link
              to="/#book"
              className="block px-4 py-3 bg-purple-600 text-white text-center rounded-full hover:bg-purple-700 transition mx-4"
              onClick={closeMenu}
            >
              {language === 'es' ? 'Agendar Cita' : 'Book Appointment'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;