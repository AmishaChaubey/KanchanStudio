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
      <div className="relative text-white py-24 sm:py-32 md:py-45 overflow-hidden"> {/* Increased height */}
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

        <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 tracking-wide leading-tight text-white">
            {bannerConfig.title}
          </h1>
          <p className="sm:text-base md:text-lg text-white max-w-2xl font-light leading-relaxed">
            {bannerConfig.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mb-8 sm:mb-12 font-light overflow-x-auto">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-red-300 flex-shrink-0">•</span>}
              {item.active ? (
                <span className="text-red-900 font-medium whitespace-nowrap">{item.label}</span>
              ) : (
                <a
                  href={item.href}
                  className="hover:text-red-900 transition-colors whitespace-nowrap"
                >
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
