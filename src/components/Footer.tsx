import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-peach-200 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Copyright */}
          <div className="flex items-center">
            <div className="relative">
              <div className="rounded-full border-2 border-white p-8 w-32 h-32 flex items-center justify-center">
                <span className="text-white text-sm font-display text-center">
                  Dr. María Rivero
                </span>
              </div>
              <p className="text-white text-sm mt-4">
                © Copyright • mar360wellness.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-display mb-4">Quick links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-white hover:text-purple-200 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/#about" className="text-white hover:text-purple-200 transition">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white hover:text-purple-200 transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/#blog" className="text-white hover:text-purple-200 transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className="text-white hover:text-purple-200 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-right">
              <a href="mailto:info@mar360wellness.com" className="text-white hover:text-purple-200 transition">
                info@mar360wellness.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;