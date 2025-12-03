import React, { useState, useEffect, useRef } from "react";

const ServicesSection = () => {
  const services = [
    { id: 1, title: "Wedding Photography", description: "Capture your special day with timeless elegance and emotion", image: "/wedd-img/wedd3.jpg", link: "/services/wedding-photography" },
    { id: 2, title: "Portrait Sessions", description: "Professional portraits that showcase your unique personality", image: "/pot-img/pot15.JPG", link: "/services/portrait-shoot" },
    { id: 4, title: "Event Photography", description: "Preserve precious moments with your loved ones forever", image: "/event-img/event10.jpeg", link: "/services/event-photography" },
        { id: 5, title: "Indoor Photography", description: "From cozy corners to grand halls — every shot matters.", image: "/indoor-img/indoor3.jpg", link: "/services/indoor-shoot" },

            { id: 6, title: "Outdoor Photography", description: "Where nature becomes your backdrop and magic unfolds.", image: "/out-img/out2.jpeg", link: "/services/outdoor-photography" },

    { id: 7, title: "Prewedding-shoot", description: "Professional coverage for your business occasions and team", image: "/pre-wedd/pre-wedd1.jpeg", link: "/services/prewedding-shoot" },
    { id: 8, title: "Photo-framing", description: "Gentle and artistic portraits of your newest family member", image: "/frames/frame1.jpeg", link: "/services/photo-framing" },
    { id: 9, title: "Product Photography", description: "Stunning visuals that make your products shine and sell", image: "/service-img/pro1.jpeg", link: "/services/product-photography" },
    { id: 10, title: "PVC Card", description: "Premium PVC cards that make your brand truly shine", image: "/pvc-img/pvc1.jpg", link: "/services/pvc-cards" },
    { id: 11, title: "Printout", description: "High-quality photo printouts that make memories come alive.", image: "/printout-img/printout2.jpg", link: "services/photo-printing" },
        { id: 12, title: "Visa photo passport", description: "Professional visa photos capturing your identity clearly and accurately.", image: "/visa-passport/visa2.jpg", link: "/services/visa-passport" }

  ];

  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  // Auto-slide for mobile with infinite loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = scrollContainer.children[0].clientWidth + 16; // card width + gap

    const interval = setInterval(() => {
      let nextIndex = current + 1;
      if (nextIndex >= services.length) {
        nextIndex = 0; // loop back to first card
      }
      scrollContainer.scrollTo({ left: nextIndex * cardWidth, behavior: "smooth" });
      setCurrent(nextIndex);
    }, 3000); // slide every 3 seconds

    return () => clearInterval(interval);
  }, [current, services.length]);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.children[0].clientWidth + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrent(index);
  };

  const renderCard = (service, key) => (
    <div key={key} className="px-1 py-6 rounded-2xl flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-4">
      <div tabIndex={0} className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-500 hover:scale-105 focus-within:scale-105 active:scale-105">
        <img src={service.image} alt={service.title} className="w-full h-72 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-110 group-focus-within:scale-110" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-0 group-focus-within:opacity-0 group-active:opacity-0"></div>
        <div className="absolute bottom-4 left-0 right-0 text-center px-4 transition-opacity duration-500 group-hover:opacity-0 group-focus-within:opacity-0 group-active:opacity-0">
          <h3 className="text-lg sm:text-xl font-semibold text-white tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 text-center px-6 py-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-700 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-black mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3" style={{ fontFamily: "'Lora', serif" }}>{service.description}</p>
          <a href={service.link} className="mt-2 inline-block px-4 py-2 bg-red-900 text-white text-xs font-semibold rounded-full uppercase tracking-widest hover:bg-red-700 transition-all duration-300">View More</a>
        </div>
        <span className="absolute top-0 left-0 w-0 h-[2px] bg-amber-700 shadow-[0_0_10px_#b45309] group-hover:w-full transition-all duration-500"></span>
        <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-amber-700 shadow-[0_0_10px_#b45309] group-hover:w-full transition-all duration-500 delay-150"></span>
        <span className="absolute top-0 right-0 h-0 w-[2px] bg-amber-700 shadow-[0_0_10px_#b45309] group-hover:h-full transition-all duration-500 delay-300"></span>
        <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-amber-700 shadow-[0_0_10px_#b45309] group-hover:h-full transition-all duration-500 delay-450"></span>
      </div>
    </div>
  );

  return (
    <div className=" bg-white py-16 sm:py-20 px-2 sm:px-4 relative overflow-hidden">
      <div className="text-center mb-12 sm:mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-black mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Our <span className="text-red-900">Services</span></h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>We offer a wide range of photography services tailored to your needs</p>
      </div>

      {/* Desktop marquee */}
      <div className="hidden md:block overflow-hidden">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {services.map((s) => renderCard(s, `a-${s.id}`))}
            {services.map((s) => renderCard(s, `b-${s.id}`))}
          </div>
        </div>
      </div>

      {/* Mobile auto-slide */}
      <div className="md:hidden overflow-x-auto no-scrollbar flex px-4 gap-4 snap-x snap-mandatory" ref={scrollRef} onScroll={handleScroll}>
        {services.map((s) => (
          <div key={s.id} className="snap-center">{renderCard(s, s.id)}</div>
        ))}
      </div>

      {/* Mobile pagination dots */}
      <div className="md:hidden flex justify-center mt-4 space-x-2">
        {services.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 transform ${
              current === i ? "bg-red-900 scale-125" : "bg-gray-400 scale-100"
            }`}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lora:wght@400;600&display=swap');

        .marquee-wrapper { overflow: hidden; }
        .marquee-content { display: flex; width: max-content; animation: marquee 25s linear infinite; }
        .marquee-content:hover { animation-play-state: paused; }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default ServicesSection;
