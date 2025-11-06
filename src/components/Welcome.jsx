import React from 'react';
import { Camera, Sparkles, Award } from 'lucide-react';
import { Link } from "react-router-dom";

const Welcome = () => {
    window.scrollTo(0, 0);
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-amber-200 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text Content - Left Side */}
          <div className="space-y-8 animate-fade-in">
        <div className="text-center sm:text-left">
  <p className="text-red-900 text-sm sm:text-base font-semibold uppercase tracking-widest mb-4">
    Welcome
  </p>
  <h2
    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    Kanchan Studio
  </h2>
  <div className="w-16 h-1 bg-red-900 rounded-full mx-auto sm:mx-0"></div>
</div>

<div className="text-center sm:text-left">
  <p className="text-black text-base sm:text-lg leading-relaxed font-light">
    We are a team of passionate photographers dedicated to capturing life's most precious moments. With over 10 years of experience, we specialize in creating timeless memories that you'll cherish forever.
  </p>

  <p className="text-black text-sm sm:text-base leading-relaxed font-light mt-4">
    Our state-of-the-art studio and creative approach ensure that every shoot is a unique and unforgettable experience.
  </p>
</div>


            {/* Features */}
            <div className="space-y-5 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors">
                    <Camera className="w-5 h-5 text-red-900" />
                  </div>
                </div>
                <div>
                  <h3 className="text-black font-semibold text-base sm:text-sm">Professional Equipment</h3>
                  <p className="text-black text-sm font-light">Latest technology and tools</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors">
                    <Award className="w-5 h-5 text-red-900" />
                  </div>
                </div>
                <div>
                  <h3 className="text-black font-semibold text-base sm:text-sm">Experienced Team</h3>
                  <p className="text-black text-sm font-light">Seasoned professionals dedicated to you</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors">
                    <Sparkles className="w-5 h-5 text-red-900" />
                  </div>
                </div>
                <div>
                  <h3 className="text-black font-semibold text-base sm:text-sm">Creative Vision</h3>
                  <p className="text-black text-sm font-light">Unique perspectives and ideas</p>
                </div>
              </div>
            </div>

            {/* CTA Button - Centered on Mobile */}
          
<div className="text-center sm:text-left mt-6">
  <Link to="/contact">
    <button className="px-6 sm:px-8 py-2 sm:py-3 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-950 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
      Book Your Session
    </button>
  </Link>


</div>
          </div>

          {/* Image Content - Right Side */}
          <div className="relative animate-fade-in-left">
            <div className="relative z-20 shadow-2xl overflow-hidden rounded-4xl">
              <img
                src='/welcome-img.jpg'
                alt="Studio"
                className="w-full h-64 sm:h-96 md:h-128 lg:h-165 rounded-4xl object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Welcome;
