import React, { useState, useEffect } from 'react';
import GalleryCard from '../common-component/Design';
import { galleryItems, bannerConfig, breadcrumbItems } from './data';

const PhotographyGallery = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.5); // Parallax speed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      
      {/* Banner */}
      <div className="relative text-white h-[100vh] sm:h-[90vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bannerConfig.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${offsetY}px)`,
          }}
        ></div>

        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

        {/* Centered Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          {/* Badge */}
          {bannerConfig.badge && (
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white text-xs sm:text-sm font-light tracking-widest uppercase">
                {bannerConfig.badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 tracking-wide leading-tight">
            {bannerConfig.title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-lg text-white max-w-2xl font-light leading-relaxed">
            {bannerConfig.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mb-8 sm:mb-12 font-light overflow-x-auto">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-red-300 flex-shrink-0">•</span>}
              {item.active ? (
                <span className="text-red-900 font-medium whitespace-nowrap">{item.label}</span>
              ) : (
                <a href={item.href} className="hover:text-red-900 transition-colors whitespace-nowrap">
                  {item.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Responsive Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotographyGallery;
