import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'events', name: 'Events' },
    { id: 'candid', name: 'Candid' },
  ];

  const portfolio = [
    { id: 1, category: 'wedding', title: 'Wedding Photoshoot', description: 'Elegant ceremony capturing timeless moments', image: '/wedd-img/wedd11.jpg' },
    { id: 2, category: 'portrait', title: 'Portrait Shoot', description: 'Professional headshot for corporate branding', image: '/pot-img/pot2.jpg' },
    //{ id: 3, category: 'commercial', title: 'Product Photography', description: 'High-end product showcase for luxury brand', image: '/product-img.jpeg' },
    { id: 4, category: 'Pre-Wedding', title: 'Pre-Wedding Shoot', description: 'Bold fashion editorial for magazine spread', image: '/pre-wedd/pre-wedd4.jpeg' },
    { id: 5, category: 'events', title: 'Event Shoot', description: 'Annual gala with celebrity guests', image: '/event-img/event1.jpg' },
    { id: 6, category: 'portrait', title: 'Outdoor Shoot', description: 'Warm family moments in natural setting', image: '/out-img/out7.jpeg' },
   // { id: 7, category: 'wedding', title: 'Maternity Shoot', description: 'Breathtaking beachside celebration', image: '/maternity-img/maternity3.jpeg' },
    { id: 8, category: 'baby', title: 'Baby Photography', description: 'Culinary artistry and ambiance captured', image: '/baby-img/baby1.jpg' },
    //{ id: 9, category: 'candid', title: 'Candid Photography', description: 'High fashion runway documentation', image: '/candid-img/candid1.jpg' },
  ];

  const filteredPortfolio =
    selectedCategory === 'all'
      ? portfolio
      : portfolio.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-8 sm:py-18 bg-white relative overflow-hidden" id="portfolio">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(127, 29, 29) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-red-900"></div>
            <Camera className="w-6 h-6 text-red-900" />
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-red-900"></div>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our <span className="text-red-900">Portfolio</span>
          </h2>

          <p
            className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore our diverse collection of visual stories, each frame crafted with precision and passion.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-red-900 text-white shadow-md shadow-red-900/40 scale-105'
                  : 'bg-gray-100 text-black hover:bg-gray-200 hover:shadow-md'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-50"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
              onClick={() => setSelectedImage(item)}
            >
              {/* Image */}
              <div className="relative aspect-[4/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Black Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

                {/* Text + Red Underline */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <div className="w-10 h-0.5 bg-red-600 mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  <h3
                    className="text-white text-2xl font-bold mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Link to="/portfolio">
            <button className="group inline-flex items-center gap-3 px-10 py-4 bg-red-900 text-white rounded-full hover:bg-red-800 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-red-900/30 transform hover:scale-105">
              <span
                className="text-lg font-semibold tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                View Full Portfolio
              </span>
              <div className="w-6 h-px bg-white group-hover:w-10 transition-all duration-300"></div>
            </button>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fadeIn overflow-auto"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-red-900 transition-all duration-300 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3
                className="text-white text-3xl font-bold mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {selectedImage.title}
              </h3>
              <p
                className="text-gray-300 text-lg"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@400;500;600;700&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
