import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const PhotoStudioWebsite = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Wedding Photography",
      coverImage: "/wedd-img/wedd5.jpg",
      images: [
        "/wedd-img/wedd1.jpg",
        "/wedd-img/wedd2.jpg",
        "/wedd-img/wedd3.jpg",
        "/wedd-img/wedd4.jpg",
        "/wedd-img/wedd6.jpg",
        "/wedd-img/wedd7.jpg",
      ],
    },
    {
      id: 2,
      title: "Portrait Studio",
      coverImage: "pot-img/pot11.jpg",
      images: [
        "pot-img/pot11.jpg",
        "pot-img/pot1.jpg",
        "pot-img/pot4.jpg",
        "pot-img/pot6.jpg",
        "pot-img/pot9.jpg",
        "pot-img/pot10.jpg",
      ],
    },
    {
      id: 3,
      title: "Pre-Wedding Photography",
      coverImage: "pre-wedd/pre-wedd1.jpeg",
      images: [
        "pre-wedd/pre-wedd2.jpeg",
        "pre-wedd/pre-wedd4.jpeg",
        "pre-wedd/pre-wedd8.jpeg",
        "pre-wedd/pre-wedd10.jpeg",
        "pre-wedd/pre-wedd11.jpeg",
        "pre-wedd/pre-wedd12.jpeg",
      ],
    },
    {
      id: 4,
      title: "Product Photography",
      coverImage: "product-img/product2.webp",
      images: [
        "product-img/product3.webp",
        "product-img/product4.webp",
        "product-img/product5.webp",
        "product-img/product12.webp",
        "product-img/product14.webp",
        "product-img/product15.webp",
      ],
    },
    {
      id: 5,
      title: "Event Photography",
      coverImage: "/event-img/event2.jpeg",
      images: [
        "/event-img/event2.jpeg",
        "/event-img/event3.jpg",
        "/event-img/event4.jpg",
        "/event-img/event5.jpg",
        "/event-img/event6.jpg",
        "/event-img/event7.jpg",
      ],
    },
    {
      id: 6,
      title: "Candid Photography",
      coverImage: "/candid-img/candid1.jpg",
      images: [
        "/candid-img/candid2.jpg",
        "/candid-img/candid3.jpg",
        "/candid-img/candid4.jpg",
        "/candid-img/candid5.jpg",
        "/candid-img/candid6.jpg",
        "/candid-img/candid7.jpg",
      ],
    },
      {
      id: 7,
      title: "Photo Printing",
      coverImage: "/printout-img/printout1.jpg",
      images: [
        "/printout-img/printout2.jpg",
        "/printout-img/printout3.jpg",
        "/printout-img/printout4.jpg",
        "/printout-img/printout5.jpg",
        "/printout-img/printout7.jpg",
        "/printout-img/printout8.jpg",
      ],
    },
      {
      id: 8,
      title: "PVC Cards",
      coverImage: "/pvc-img/pvc1.jpg",
      images: [
        "/pvc-img/pvc2.jpg",
        "/pvc-img/pvc3.jpg",
        "/pvc-img/pvc4.jpg",
        "/pvc-img/pvc5.jpg",
        "/pvc-img/pvc6.jpg",
        "/pvc-img/pvc7.jpg",
      ],
    },
      {
      id: 9,
      title: "Visa Passport",
      coverImage: "/visa-passport/visa1.jpg",
      images: [
        "/visa-passport/visa2.jpg",
        "/visa-passport/visa3.jpg",
        "/visa-passport/visa4.jpg",
        "/visa-passport/visa5.jpg",
        "/visa-passport/visa6.jpg",
        "/visa-passport/passport.jpg",
      ],
    },
  ];

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Custom Animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes border-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4),
                        0 0 40px rgba(236, 72, 153, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.6),
                        0 0 60px rgba(236, 72, 153, 0.4);
          }
        }

        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .animate-zoom {
          animation: zoom 15s infinite ease-in-out;
        }

        .shimmer-border {
          position: relative;
        }

        .shimmer-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          padding: 2px;
          background: linear-gradient(90deg,
            rgba(168, 85, 247, 0.5),
            rgba(236, 72, 153, 0.5),
            rgba(251, 146, 60, 0.5),
            rgba(168, 85, 247, 0.5)
          );
          background-size: 200% 100%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
                         linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .shimmer-border:hover::before {
          opacity: 1;
          animation: shimmer 2s linear infinite, border-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* ====== Banner Section ====== */}
      <section className="relative h-[60vh] sm:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/banner/gallery-banner.jpg"
          alt="Photo Studio Banner"
          className="absolute inset-0 w-full h-full object-cover animate-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 sm:px-6 lg:px-8 px-6 py-45 md:py-55">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            Moments That Speak Volumes
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Capturing life's precious moments with artistry and passion
          </p>
        </div>
      </section>

      {/* ====== Categories Section ====== */}
      <main className="max-w-7xl mx-auto px-6 py-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="shimmer-border group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <img
                  src={category.coverImage}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                    {category.title}
                  </h3>
                  <p className="text-gray-200 text-sm mt-2 opacity-90">
                    Click to view gallery
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ====== Modal / Overlay ====== */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-y-auto">
          <div className="min-h-screen px-6 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-white">
                  {categories.find((c) => c.id === selectedCategory)?.title}
                </h2>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="bg-red-900 hover:bg-red-800 text-white p-3 rounded-full transition-colors duration-300"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories
                  .find((c) => c.id === selectedCategory)
                  ?.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-lg shadow-xl group aspect-[3/4]"
                    >
                      <img
                        src={image}
                        alt={`Gallery image ${idx + 1}`}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                  ))}
              </div>

              <div className="mt-8 text-center">
                <Link to="/gallery">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
                  >
                    Back to Gallery
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoStudioWebsite;
