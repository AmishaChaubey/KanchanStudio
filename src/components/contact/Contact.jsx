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
      detail: "+91 9958138641",
      subdDetail: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "Kpstudioandphotoframing@gmail.com",
      subdDetail: "We reply within 24 hrs",
    },
    {
      icon: MapPin,
      title: "Studio Location",  
      detail: "Gate No - 4, Parmukh Market, Shop-3, Bisrakh Rd,opposite STELLAR JEEVAN",
      subdDetail: "Greater Noida, Uttar Pradesh 201306",
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
        "Usually, you’ll receive your edited photos within 5–7 working days. We also offer express delivery options on request.",
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

  // ⭐⭐ API Integrated Here ⭐⭐
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://kpstudioandphotoframing.in/backend/send-mail.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (data.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again.");
    }
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
            Let’s Create Magic Together
          </h1>
          <p className="text-lg text-white/90">
            Have a photoshoot idea in mind? Reach out and let’s make it happen.
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

      {/* Info Cards */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="relative group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[#C8252C]/20 overflow-hidden"
              >
                <span className="absolute left-0 top-0 w-0 h-[2px] bg-[#C8252C] group-hover:w-full transition-all duration-500"></span>
                <span className="absolute right-0 bottom-0 w-0 h-[2px] bg-[#C8252C] group-hover:w-full transition-all duration-500"></span>
                <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#C8252C] group-hover:h-full transition-all duration-500"></span>
                <span className="absolute left-0 bottom-0 h-0 w-[2px] bg-[#C8252C] group-hover:h-full transition-all duration-500"></span>

                <div className="relative flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C8252C] rounded-xl mb-5">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-red-900 text-lg mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm font-semibold text-red-900 mb-1">
                    {info.detail}
                  </p>
                  <p className="text-sm text-gray-700">{info.subdDetail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form + Map */}
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
                {
                  label: "Phone Number",
                  name: "phone",
                  icon: PhoneCall,
                  type: "tel",
                },
                {
                  label: "Subject",
                  name: "subject",
                  icon: MessageSquare,
                  type: "text",
                },
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
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d529153.2451992526!2d77.32019303488845!3d28.493852918194584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cefeb1c19ffad%3A0xf989fc42fb6f281!2sGate%20No%20-%204%2C%20Parmukh%20Market%2C%20Shop-3%2C%20Bisrakh%20Rd%2C%20opposite%20STELLAR%20JEEVAN%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201306!3m2!1d28.565932399999998!2d77.4483253!5e0!3m2!1sen!2sin!4v1764148183184!5m2!1sen!2sin"
               allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked{" "}
            <span
              className="text-transparent bg-red-900 bg-clip-text"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              question
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-red-900 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full p-4 flex justify-between items-center text-left"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h3 className="font-semibold text-red-900">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-red-900 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-4 pb-4 text-gray-700 transition-all duration-300 ${
                  openFaq === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
