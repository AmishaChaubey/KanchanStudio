import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  PhoneCall,
  ChevronDown,
} from "lucide-react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Book Photoshoot",
      detail: "+91 9876543210",
      subdDetail: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@amishastudio.com",
      subdDetail: "We reply within 24 hrs",
    },
    {
      icon: MapPin,
      title: "Studio Location",
      detail: "Galaxy Diamond Plaza",
      subdDetail: "Sector 4, Greater Noida, UP",
    },
  ];

  const faqs = [
    {
      question: "How can I book a photoshoot?",
      answer:
        "You can fill the contact form or call our booking number. Our team will get in touch with you within 24 hours to schedule your shoot.",
    },
    {
      question: "Do you offer outdoor photoshoots?",
      answer:
        "Yes, we specialize in both indoor and outdoor shoots. You can choose any location or we can suggest beautiful outdoor spots nearby.",
    },
    {
      question: "What should I wear for my shoot?",
      answer:
        "You can wear anything that makes you comfortable and confident. We also provide outfit guidance based on the theme of your shoot.",
    },
    {
      question: "How long does it take to get edited photos?",
      answer:
        "Usually, you'll receive your edited photos within 5–7 working days. We also offer express delivery options on request.",
    },
    {
      question: "Can I get raw photos too?",
      answer:
        "Yes, raw photos can be provided upon request. We keep all your files safe for up to 30 days after the shoot.",
    },
    {
      question: "Do you travel for destination shoots?",
      answer:
        "Absolutely! We love capturing destination events and offer custom travel packages for outstation shoots.",
    },
  ];

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Banner */}
      <div className="relative bg-red-900 text-white overflow-hidden h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom"
          style={{
            backgroundImage: "url('/banner/contact-banner.jpg')",
            transform: `translateY(${offsetY}px)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center z-10 max-w-6xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif text-white">
            Let's Create Magic Together
          </h1>
          <p className="text-lg text-white/90">
            Have a photoshoot idea in mind? Reach out and let's make it happen.
          </p>
        </div>
        <style>{`
          @keyframes zoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          .animate-zoom { animation: zoom 15s infinite ease-in-out; }
        `}</style>
      </div>

     {/* Contact Info Cards with Animated Borders */}
<div className="max-w-5xl mx-auto px-6 py-20">
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
    {contactInfo.map((info, index) => {
      const Icon = info.icon;
      return (
        <div
          key={index}
          className="relative group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[#C8252C]/20 overflow-hidden"
        >
          {/* Animated borders like AboutStats */}
          <span className="absolute left-0 top-0 w-0 h-[2px] bg-[#C8252C] group-hover:w-full transition-all duration-500"></span>
          <span className="absolute right-0 bottom-0 w-0 h-[2px] bg-[#C8252C] group-hover:w-full transition-all duration-500"></span>
          <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#C8252C] group-hover:h-full transition-all duration-500"></span>
          <span className="absolute left-0 bottom-0 h-0 w-[2px] bg-[#C8252C] group-hover:h-full transition-all duration-500"></span>

          <div className="relative flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-900 rounded-xl mb-5">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-red-900 text-lg mb-2">{info.title}</h3>
            <p className="text-sm font-semibold text-red-900 mb-1">{info.detail}</p>
            <p className="text-sm text-gray-700">{info.subdDetail}</p>
          </div>
        </div>
      );
    })}
  </div>
</div>


      {/* Contact Form & Map */}
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 z-10">
          {/* Form */}
          <div className="relative bg-white border border-red-900 shadow-lg rounded-2xl p-8 transition-all duration-500 hover:border-red-900/50">
            <h2 className="text-3xl font-bold mb-6 text-red-900">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[ 
                { label: "Full Name", name: "name", icon: User, type: "text" },
                { label: "Email", name: "email", icon: Mail, type: "email" },
                { label: "Phone Number", name: "phone", icon: PhoneCall, type: "tel" },
                { label: "Subject", name: "subject", icon: MessageSquare, type: "text" },
              ].map((field, i) => {
                const Icon = field.icon;
                return (
                  <div key={i}>
                    <label className="block text-sm font-semibold mb-2 text-red-900">
                      {field.label}
                    </label>
                    <div className="relative">
                      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-900/50" />
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white text-red-900 border border-red-900/30 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-transparent placeholder-red-900/50 outline-none transition-all"
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                        required
                      />
                    </div>
                  </div>
                );
              })}

              <div>
                <label className="block text-sm font-semibold mb-2 text-red-900">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-red-900/50" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 bg-white text-red-900 border border-red-900/30 rounded-lg focus:ring-2 focus:ring-red-900 placeholder-red-900/50 outline-none transition-all"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-900 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-[1.03] flex items-center justify-center gap-2 shadow-lg shadow-red-900/30"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-red-900 transition-all duration-500 hover:border-red-900/50">
            <iframe
              title="Studio Map"
              className="w-full h-full min-h-[400px] transform transition-transform duration-500 hover:scale-95"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.604186890961!2d77.434!3d28.606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee4b71461185%3A0xd1989111c49e52fa!2sGalaxy%20Diamond%20Plaza%2C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1760015752682"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section - UPDATED DESIGN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black px-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked{" "}
            <span
              className="text-transparent bg-red-900 bg-clip-text"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Questions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Everything you need to know about our photography services
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="relative group bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/10"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-amber-700 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative">
                <button
                  className="w-full p-5 sm:p-6 flex justify-between items-start gap-4 text-left group/btn"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex-1">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-red-900 text-white rounded-full font-bold text-sm sm:text-base transition-transform duration-300 group-hover/btn:scale-110">
                        {index + 1}
                      </span>
                      <h3 className="font-bold text-red-900 text-base sm:text-lg leading-snug pt-1">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-red-900/10 rounded-full transition-all duration-300 group-hover/btn:bg-red-900 group-hover/btn:rotate-180">
                    <ChevronDown 
                      className={`w-5 h-5 text-red-900 transition-all duration-300 group-hover/btn:text-white ${
                        openFaq === index ? "rotate-180" : ""
                      }`} 
                    />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="pl-12 sm:pl-14 pr-2 sm:pr-4">
                      <div className="w-full h-[1px] bg-gradient-to-r from-red-900/20 via-amber-700/20 to-transparent mb-4"></div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}