import React, { useEffect } from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    return () => document.head.removeChild(link);
  }, []);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Photo Framing", path: "/services/photo-framing" },
    { name: "Event Coverage", path: "/services/event-photography" },
    { name: "Maternity Shoot", path: "/services/maternity-shoot" },
    { name: "Outdoor Photography", path: "/services/outdoor-photography" },
    { name: "Wedding Photography", path: "/services/wedding-photography" },
  ];

  return (
    <footer className="bg-white text-red-900 border-t border-red-100 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* Company Info (centered) */}
          <div className="flex flex-col items-center text-center space-y-5">
            <img
              src="/kn-logo.svg"
              alt="Kanchan Photo Studio"
              className="h-20 w-auto mb-2"
            />
            <p className="text-sm md:text-base leading-relaxed text-gray-800 max-w-xs">
              Capturing moments that last a lifetime. Professional photography
              services for all occasions.
            </p>
            <div className="flex gap-4 mt-2">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <Link
                  key={idx}
                  to="#"
                  className="p-2.5 rounded-full bg-red-50 hover:bg-red-100 text-red-900 transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label={`social-${idx}`}
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-lg md:text-xl font-semibold mb-5 border-b-2 border-red-900 inline-block pb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-800 hover:text-red-900 text-sm md:text-base transition-colors duration-300"
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
              className="text-lg md:text-xl font-semibold mb-5 border-b-2 border-red-900 inline-block pb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-800 hover:text-red-900 text-sm md:text-base transition-colors duration-300"
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
              className="text-lg md:text-xl font-semibold mb-5 border-b-2 border-red-900 inline-block pb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Us
            </h4>
            <div className="space-y-4 text-gray-800 text-sm md:text-base">
              <div className="flex gap-3 items-start">
                <MapPin size={20} className="text-red-900 mt-1 flex-shrink-0" />
                <p>KANCHAN STUDIO, Greater Noida, UP</p>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={20} className="text-red-900 flex-shrink-0" />
                <p>9958138641</p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail
                  size={20}
                  strokeWidth={1.8}
                  className="text-red-900 flex-shrink-0"
                />
                <a
                  href="mailto:Kpstudioandphotoframing@gmail.com"
                  className="hover:underline text-gray-800 break-all "
                >
                  Kpstudioandphotoframing@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-200 pt-8">
          <p className="text-center text-gray-600 text-xs md:text-sm">
            &copy; {currentYear}{" "}
            <span className="font-semibold text-red-900">
              Kanchan PhotoStudio
            </span>{" "}
            | Developed by{" "}
            <Link
              to="https://deboxtechnology.com/"
              className="text-red-900 hover:underline"
            >
              Debox Technology
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
