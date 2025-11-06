import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: "Radhika Singh", role: "Bride", text: "The team captured our wedding perfectly! Every moment was beautifully documented.", rating: 5 },
    { name: "Sushma Shree", role: "Business Owner", text: "Professional product photography that increased our sales by 40%. Highly recommended!", rating: 5 },
    { name: "Adhya Singh", role: "Model", text: "Creative and talented photographers who know how to bring out the best in their subjects.", rating: 5 },
    { name: "Deepak Kumar", role: "Father", text: "Our family photos turned out amazing. They made everyone feel comfortable and natural.", rating: 5 },
    { name: "Jaya Shah", role: "Event Planner", text: "Working with this team was an absolute pleasure. They delivered beyond our expectations!", rating: 5 },
    { name: "Suraj Kumar", role: "Actor", text: "Their headshots are incredible. They have a unique ability to capture personality.", rating: 5 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (paused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [paused, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="py-12 md:py-16 bg-white relative overflow-hidden" 
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div 
          className="text-center mb-12 md:mb-24 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <h2 className="text-4xl md:text-8xl font-bold text-black mb-4 md:mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Client <span className="text-red-900">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Discover why clients trust us to capture their most precious moments with artistry and passion
          </p>
        </div>

        {/* Mobile Card */}
        <div className="md:hidden mb-12">
          <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-md transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:scale-[0.98] overflow-hidden">
            
            <div className="mb-6">
              <Quote className="w-10 h-10 text-red-900 opacity-30" />
            </div>

            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-red-900 fill-red-900" />
              ))}
            </div>

            <p className="text-gray-700 mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {currentTestimonial.text}
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-bold">
                {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-black font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {currentTestimonial.name}
                </h4>
                <p className="text-red-900 text-sm">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop - 3 Cards */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-16">
          {getVisibleTestimonials().map((t, i) => (
            <div 
              key={t.name}
              className={`bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1 hover:scale-[0.98]`}
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-red-900 opacity-30" />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-red-900 fill-red-900" />
                ))}
              </div>
              <p className="text-gray-700 mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {t.text}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-black font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {t.name}
                  </h4>
                  <p className="text-red-900 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <div className="flex gap-4 md:gap-6">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full transition-all ${
                  i === currentIndex 
                    ? 'bg-red-900 w-8 md:w-12 h-3' 
                    : 'bg-gray-300 w-3 h-3 hover:bg-red-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
