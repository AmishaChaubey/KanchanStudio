import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "wedding",
    eventDate: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setIsBookingModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isBookingModalOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isBookingModalOpen]);

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Updated handleSubmit with backend fetch
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/Kanchan-Studio/backend/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Booking: ${formData.eventType} on ${formData.eventDate}`,
          message: formData.message,
        }),
      });

      const data = await res.json();
      console.log("Booking form response:", data);

      if (data.success) {
        alert("✅ Booking request submitted successfully! We'll contact you soon.");
        setIsBookingModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "wedding",
          eventDate: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send booking request: " + data.message);
      }
    } catch (error) {
      console.error("Booking submission error:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };

  const isActive = (path) => {
    if (path === "/services") return location.pathname.startsWith("/services");
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const navLinksAfterServices = [
    { name: "Gallery", path: "/gallery" },
    { name: "Video", path: "/videos" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { name: "Photo Framing", path: "/services/photo-framing" },
    { name: "Photo Printing", path: "/services/photo-printing" },
    { name: "Indoor Shoot", path: "/services/indoor-shoot" },
    { name: "Outdoor Shoot", path: "/services/outdoor-photography" },
    { name: "PVC Cards", path: "/services/pvc-cards" },
    { name: "Baby Shoot", path: "/services/baby-shoot" },
    { name: "Birthday Shoot", path: "/services/birthday" },
    { name: "Visa-Passport", path: "/services/visa-passport" },
    { name: "Event Shoot", path: "/services/event-photography" },
    { name: "Portrait Shoot", path: "/services/portrait-shoot" },
    { name: "Product Shoot", path: "/services/product-photography" },
    { name: "Maternity Shoot", path: "/services/maternity-shoot" },
    { name: "Wedding Shoot", path: "/services/wedding-photography" },
    { name: "Pre-Wedding Shoot", path: "/services/prewedding-shoot" },
    { name: "Wedding Cinematography", path: "/services/wedding-cinemo" },
  ];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { width: 0%; }
          to { width: 100%; }
        }
        .active-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, #7f1d1d, #991b1b, #7f1d1d);
          animation: slideDown 0.3s ease-in-out;
        }
        .nav-link-wrapper { position: relative; }
      `}</style>

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <img
                  src="/kn-logo.svg"
                  alt="Logo"
                  className="h-40 w-54 sm:h-42 sm:w-58 md:h-43 md:w-60 object-contain"
                />
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden min-[769px]:flex lg:gap-8 md:gap-4 text-sm font-medium items-center lg:space-x-2 md:space-x-1 ml-4 lg:ml-8">
              {navLinks.map((link) => (
                <div key={link.name} className="nav-link-wrapper">
                  <Link
                    to={link.path}
                    className={`transition-colors duration-300 tracking-widest uppercase ${
                      isActive(link.path) ? "active-link" : ""
                    } ${
                      isScrolled
                        ? "text-black hover:text-red-900"
                        : "text-white hover:text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative nav-link-wrapper"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  onClick={() => navigate("/services")}
                  className={`flex items-center gap-1 transition-colors duration-300 tracking-widest uppercase ${
                    isActive("/services") ? "active-link" : ""
                  } ${
                    isScrolled
                      ? "text-black hover:text-red-900"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg overflow-hidden mt-2 animate-fadeIn max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-6 py-3 text-black hover:bg-red-900 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinksAfterServices.map((link) => (
                <div key={link.name} className="nav-link-wrapper">
                  <Link
                    to={link.path}
                    className={`transition-colors duration-300 tracking-widest uppercase ${
                      isActive(link.path) ? "active-link" : ""
                    } ${
                      isScrolled
                        ? "text-black hover:text-red-900"
                        : "text-white hover:text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Book Now Button */}
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="hidden sm:max-[768px]:block min-[769px]:block bg-red-900 hover:bg-red-800 text-white sm:px-4 md:px-5 lg:px-8 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold tracking-wider uppercase text-xs lg:text-sm flex-shrink-0"
            >
              Book Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`max-[768px]:block min-[769px]:hidden transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* (unchanged) */}
      </nav>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-3 overflow-hidden">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md my-4 overflow-hidden relative">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md z-10 hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-700" />
            </button>

            <div className="w-full h-32 flex-shrink-0">
              <img
                src="/booknow.jpg"
                alt="Wedding Photography"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full p-4 sm:p-5 overflow-y-auto max-h-[90vh]">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                Book Your Photoshoot
              </h2>
              <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                Fill out the form and we'll contact you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* (form fields unchanged — already fine) */}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
