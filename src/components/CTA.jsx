import React, { useEffect, useState } from 'react';
import { Camera, Calendar, Star } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from "react-router-dom";

const CTA = () => {
  const [inView, setInView] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '-50px 0px' }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Animations
  const imageSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(1.05)',
    config: { tension: 280, friction: 20 },
  });

  const contentSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 200,
    config: { tension: 280, friction: 20 },
  });

  const buttonSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 400,
    config: { tension: 280, friction: 20 },
  });

  return (
    <section
      id="cta-section"
      className="relative w-full py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23ffffff%22 width=%22100%22 height=%22100%22/><circle cx=%2250%22 cy=%2250%22 r=%225%22 fill=%22%23f3f4f6%22/></svg>')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-16 sm:w-24 md:w-40 lg:w-56 xl:w-64 bg-amber-300 rounded-full mix-blend-soft-light blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-14 sm:w-20 md:w-32 lg:w-48 bg-amber-200 rounded-full mix-blend-soft-light blur-3xl opacity-15 animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 flex justify-center">
        <div className="w-full max-w-7xl rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl">
          <animated.div style={imageSpring} className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-black/30 z-10"></div>

            {/* Responsive Image */}
            <img
              src="/cta-im.jpeg"
              alt="Professional photoshoot"
              className="w-full h-[400px] xs:h-[420px] sm:h-[440px] md:h-[460px] lg:h-[520px] xl:h-[580px] 2xl:h-[650px] object-cover object-center"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <animated.div
                style={contentSpring}
                className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] flex flex-col items-center sm:items-start"
              >
                {/* Badge */}
                <div className="mt-2 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-5 w-fit">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-900 animate-pulse"></div>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg text-amber-900 font-medium whitespace-nowrap">
                    Limited Time Offer
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-[13px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200 mb-4 sm:mb-5 md:mb-6 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Our professional photographers are ready to create stunning memories that will last a lifetime. Book your session today and receive a complimentary 10" x 8" print!
                </p>

                {/* Features */}
                <div className="space-y-2 sm:space-y-2.5 md:space-y-3 mb-4 sm:mb-6 md:mb-8">
                  {[
                    'Professional equipment and expertise',
                    'Customized photoshoot packages',
                    'Fast delivery with digital edits',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 md:p-2.5 bg-amber-700/20 rounded-lg backdrop-blur-sm flex-shrink-0 mt-0.5">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-700" />
                      </div>
                      <span
                        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-snug"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </animated.div>

              {/* Buttons */}
              <animated.div
                style={buttonSpring}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start mt-3 sm:mt-4"
              >
                <Link to="/contact">
                  <button className="group relative w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-red-900 text-white font-semibold text-sm md:text-base rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-700/30 active:scale-95">
                    <span className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                      Book Session
                    </span>
                  </button>
                </Link>

                <Link to="/portfolio">
                  <button className="group relative w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-gray-300 text-white/90 font-semibold text-sm md:text-base rounded-full transition-all duration-500 transform hover:scale-105 hover:bg-gray-100/10 hover:border-gray-400 active:scale-95">
                    <span className="flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 md:w-5 md:h-5" />
                      Portfolio
                    </span>
                  </button>
                </Link>
              </animated.div>
            </div>

            {/* Floating Camera Icon */}
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 z-20">
              <div className="p-2 sm:p-3 md:p-4 bg-red-900 rounded-full shadow-lg shadow-amber-700/30 backdrop-blur-sm">
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
