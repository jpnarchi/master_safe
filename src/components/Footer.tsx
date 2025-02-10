import React from 'react';
import { Facebook, Instagram, Linkedin, Sun } from 'lucide-react';

const Footer = () => {
  const sitemapLinks = [
    'Automotive', 'Timepieces', 'Ownership', 'Cinema',
    'Contact Us', 'Partners', 'Press', 'Careers'
  ];

  const legalLinks = [
    'Terms & Conditions', 'Privacy Policy',
    'Cookies', 'Porsche Disclaimer'
  ];

  return (
    <footer className="bg-gray-50 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl brand-heading">MASTER SAFE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-16">
          <div className="text-center md:text-left">
            <ul className="space-y-3 md:space-y-4">
              {sitemapLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm brand-text hover:text-brand-navy transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <ul className="space-y-3 md:space-y-4">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm brand-text hover:text-brand-navy transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="#"
                className="text-gray-600 hover:text-brand-navy transition-colors p-2"
                aria-label="Facebook"
              >
                <Facebook size={20} md:size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-brand-navy transition-colors p-2"
                aria-label="Instagram"
              >
                <Instagram size={20} md:size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-brand-navy transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} md:size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8 gap-4 md:gap-0">
          <p className="text-sm brand-text">© Master Safe 2024</p>
          <div className="flex items-center gap-4 md:gap-8">
            <button className="text-sm brand-text hover:text-brand-navy transition-colors p-2">
              EN / ES
            </button>
            <button
              className="text-gray-600 hover:text-brand-navy transition-colors p-2"
              aria-label="Toggle theme"
            >
              <Sun size={20} md:size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;