import React, { useEffect } from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
    
    return () => document.head.removeChild(link);
  }, []);
  
  // Navigation links
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];
  
  // Service links - UPDATE THESE PATHS TO MATCH YOUR ACTUAL ROUTES
  const serviceLinks = [
             { name: 'Photo Framing', path: '/services/photo-framing' },

     { name: 'Event Coverage', path: '/services/event-photography' },
    { name: 'Maternity Shoot', path: '/services/maternity-shoot' },
   
    { name: 'Outdoor Photography', path: '/services/outdoor-photography' },
 { name: 'Wedding Photography', path: '/services/wedding-photography' },
   ,
  ];
  
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
          
          {/* Company Info */}
          <div className="flex flex-col">
          <img src="/Logo-footer.svg" alt="Kanchan Photo-Studio" className='h-25 w-28'/>
            <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
              Capturing moments that last a lifetime. Professional photography services for all occasions.
            </p>
            <div className="flex gap-4">
              <Link
                to="#"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300"
              >
                <Facebook size={18} />
              </Link>
              <Link
                to="#"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300"
              >
                <Instagram size={18} />
              </Link>
              <Link
                to="#"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300"
              >
                <Twitter size={18} />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4
              className="text-lg md:text-xl font-semibold mb-4 md:mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Navigations
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white text-sm md:text-base transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4
              className="text-lg md:text-xl font-semibold mb-4 md:mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white text-sm md:text-base transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4
              className="text-lg md:text-xl font-semibold mb-4 md:mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact
            </h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 text-white/60 mt-0.5" />
                <p className="text-gray-300 text-sm md:text-base">
                  KANCHAN STUDIO, Greater Noida, UP
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={20} className="flex-shrink-0 text-white/60" />
                <p className="text-gray-300 text-sm md:text-base">(123) 456-7890</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={20} className="flex-shrink-0 text-white/60" />
                <p className="text-gray-300 text-sm md:text-base">info@photostudio.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
       <div className="border-t border-white/10 py-8 md:py-10">
  {/* Bottom Section */}
  <div className="flex justify-center">
    <Link to="https://deboxtechnology.com/">
      <p className="text-gray-400 text-xs md:text-sm text-center">
        &copy; Kanchan PhotoStudio {currentYear} | Developed by Debox Technology.
      </p>
    </Link>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;