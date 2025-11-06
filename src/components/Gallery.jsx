import React, { useState } from 'react';
import { Camera, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MarqueePhotoGallery() {
  const [isPaused, setIsPaused] = useState(false);
  const [animationPlayState, setAnimationPlayState] = useState('running');

  const images = [
    { url: '/wedd-img/wedd12.jpg', alt: 'Wedding photoshoot', category: 'Wedding', link: '/services/wedding-photography' },
    { url: '/pre-wedd/pre-wedd9.jpeg', alt: 'Pre-Wedding shoot', category: 'Pre-Wedding', link: '/services/prewedding-shoot' },
    { url: '/pot-img/pot5.jpg', alt: 'Portrait photography', category: 'Portrait', link: '/services/portrait-shoot' },
    { url: '/event-img/event3.jpg', alt: 'Event Photography', category: 'Event', link: '/services/event-photography' },
    { url: '/product-img/product2.jpg', alt: 'Product photography setup', category: 'Product', link: '/services/product-photography' },
    { url: '/out-img/out1.jpeg', alt: 'Outdoor photoshoot', category: 'Outdoor', link: '/services/outdoor-photography' },
    { url: '/birthday-img/birthday10.jpg', alt: 'Birthday photoshoot', category: 'Birthday', link: '/services/birthday' },
    { url: '/baby-img/baby22.jpg', alt: 'Baby Photoshoot', category: 'Baby Photoshoot', link: '/services/baby-shoot' },
    { url: '/printout-img/printout4.jpg', alt: 'Photo Printout Service', category: 'Photo Printing', link: '/services/photo-printing' },
  ];

  // Duplicate images for seamless loop
  const allImages = [...images, ...images];

  return (
    <div className="min-h-screen bg-white py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-4">
          <Camera className="w-4 h-4 text-red-600" />
          <span className="text-xs sm:text-sm text-red-700 uppercase tracking-wider font-medium">Gallery</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Photoshoot <span className="text-red-900">Moments</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Every frame tells a <span className="text-red-900 font-semibold">beautiful story</span>
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div
          className="inline-flex gap-6 whitespace-nowrap"
          style={{ 
            animation: 'marquee 40s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {allImages.map((image, index) => (
            <div
              key={`${image.url}-${index}`}
              className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-xl 
                         border-4 border-white hover:border-red-100 transition-all duration-500 hover:scale-102"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img src={image.url} alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 hover:opacity-100 transition duration-500">
                <div className="absolute bottom-0 p-4">

                  <span className="px-3 py-1 bg-red-600 text-white text-xs rounded-full mb-2 inline-block">
                    {image.category}
                  </span>

                  <h3 className="text-white font-bold text-lg mb-2">{image.alt}</h3>

                  <div className="flex gap-4">
                    <Link to={image.link}>
                      <button className="bg-red-600 px-4 py-2 rounded text-white text-sm hover:bg-red-700">
                        View More
                      </button>
                    </Link>
                  </div>

                </div>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}