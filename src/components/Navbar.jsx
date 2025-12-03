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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll on modal open
  useEffect(() => {
    if (isBookingModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isBookingModalOpen]);

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setIsBookingModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submit with email fetch
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://kpstudioandphotoframing.in/backend/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      console.log(result);

      alert("Booking request submitted! We will contact you soon.");
      setIsBookingModalOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "wedding",
        eventDate: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isActive = (path) =>
    path === "/services" ? location.pathname.startsWith("/services") : location.pathname === path;

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
    { name: "Live Event Shoot", path: "/services/live-event-photography" },
    { name: "Food Shoot", path: "/services/food-photography" },
    { name: "Wedding Event Shoot", path: "/services/event-photography" },
    { name: "Portrait Shoot", path: "/services/portrait-shoot" },
    { name: "Product Shoot", path: "/services/product-photography" },
    { name: "Maternity Shoot", path: "/services/maternity-shoot" },
    { name: "Wedding Shoot", path: "/services/wedding-photography" },
    { name: "Pre-Wedding Shoot", path: "/services/prewedding-shoot" },
    { name: "Wedding Cinematography", path: "/services/wedding-cinemo" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
            <Link to="/" className="flex-shrink-0">
              <img src="/kn-logo.svg" alt="Logo" className="h-40 w-54 sm:h-42 sm:w-58 md:h-43 md:w-60 object-contain" />
            </Link>

            {/* Desktop Links */}
            <div className="hidden min-[769px]:flex lg:gap-8 md:gap-4 text-sm font-medium items-center lg:space-x-2 md:space-x-1 ml-4 lg:ml-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`transition-colors duration-300 tracking-widest uppercase ${
                      isActive(link.path) ? "text-red-900" : isScrolled ? "text-black hover:text-red-900" : "text-white hover:text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}

              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={handleServicesMouseEnter} onMouseLeave={handleServicesMouseLeave}>
                <button
                  onClick={() => navigate("/services")}
                  className={`flex items-center gap-1 transition-colors duration-300 tracking-widest uppercase ${
                    isActive("/services") ? "text-red-900" : isScrolled ? "text-black hover:text-red-900" : "text-white hover:text-gray-300"
                  }`}
                >
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg overflow-hidden mt-2 max-h-80 overflow-y-auto">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-6 py-3 text-black hover:bg-red-900 hover:text-white transition-colors text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinksAfterServices.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`transition-colors duration-300 tracking-widest uppercase ${
                      isActive(link.path) ? "text-red-700" : isScrolled ? "text-black hover:text-red-700" : "text-white hover:text-gray-300"
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
              className={`max-[768px]:block min-[769px]:hidden transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`max-[768px]:block min-[769px]:hidden bg-white border-t border-red-700/30 overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
          <div className={`px-4 py-2 transform transition-transform duration-500 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"}`}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={`block px-4 py-3 hover:bg-red-700/20 hover:text-red-400 transition-colors font-bold tracking-widest uppercase rounded-lg ${isActive(link.path) ? "text-red-900 bg-red-50" : "text-black"}`} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div className="mt-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 hover:bg-red-700/20 hover:text-red-400 transition-colors font-bold tracking-widest uppercase rounded-lg ${isActive("/services") ? "text-red-900 bg-red-50" : "text-black"}`}
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                <Link to="/services" className="block px-4 py-2 text-gray-700 hover:text-red-400 text-sm font-semibold" onClick={() => { setIsMobileMenuOpen(false); setIsServicesOpen(false); }}>All Services</Link>
                <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                  {serviceItems.map((item) => (
                    <Link key={item.name} to={item.path} className="block px-4 py-2 text-gray-700 hover:text-red-400 text-sm" onClick={() => { setIsMobileMenuOpen(false); setIsServicesOpen(false); }}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinksAfterServices.map((link) => (
              <Link key={link.name} to={link.path} className={`block px-4 py-3 hover:bg-red-700/20 hover:text-red-400 transition-colors font-bold tracking-widest uppercase rounded-lg ${isActive(link.path) ? "text-red-900 bg-red-50" : "text-black"}`} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => { setIsBookingModalOpen(true); setIsMobileMenuOpen(false); }}
              className="w-full mt-4 block text-center px-4 py-3 bg-red-900 hover:bg-red-800 text-white font-bold tracking-widest uppercase rounded-full transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-3 overflow-hidden">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md my-4 overflow-hidden relative">
            <button onClick={() => setIsBookingModalOpen(false)} className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md z-10 hover:bg-gray-100">
              <X className="w-4 h-4 text-gray-700" />
            </button>

            <div className="w-full h-32 flex-shrink-0">
              <img src="/booknow.jpg" alt="Wedding Photography" className="w-full h-full object-cover" />
            </div>

            <div className="w-full p-4 sm:p-5 overflow-y-auto max-h-[90vh]">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">Book Your Photoshoot</h2>
              <p className="text-gray-600 mb-3 text-xs sm:text-sm">Fill out the form and we'll contact you soon.</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name & Phone */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"><User className="h-3.5 w-3.5 text-gray-400" /></div>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full pl-8 pr-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-transparent text-xs" placeholder="Your name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Phone</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"><Phone className="h-3.5 w-3.5 text-gray-400" /></div>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full pl-8 pr-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-transparent text-xs" placeholder="1234567890" />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 text-xs font-medium mb-1">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"><Mail className="h-3.5 w-3.5 text-gray-400" /></div>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-8 pr-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-transparent text-xs" placeholder="your.email@example.com" />
                  </div>
                </div>

                {/* Event Type & Date */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Event Type</label>
                    <select name="eventType" value={formData.eventType} onChange={handleInputChange} className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-transparent text-xs">
                      <option value="wedding">Wedding</option>
                      <option value="prewedding">Pre-Wedding</option>
                      <option value="birthday">Birthday</option>
                      <option value="babyshoot">Baby Shoot</option>
                      <option value="maternity">Maternity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Event Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"><Calendar className="h-3.5 w-3.5 text-gray-400" /></div>
                      <input type="date" name="eventDate" value={formData.eventDate} onChange={handleInputChange} required className="w-full pl-8 pr-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-transparent text-xs" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 text-xs font-medium mb-1">Message</label>
                  <div className="relative">
                    <div className="absolute top-2 left-2 pointer-events-none"><MessageSquare className="h-3.5 w-3.5 text-gray-400" /></div>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows="2" className="w-full pl-8 pr-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-transparent text-xs" placeholder="Your message..." />
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className={`w-full bg-red-900 hover:bg-red-800 text-white py-2 rounded-md font-semibold transition-all duration-300 text-xs sm:text-sm ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}>
                  {isSubmitting ? "Sending..." : "Submit Booking"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
