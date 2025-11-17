import React, {useEffect, useState, useRef } from 'react';
import { Play, Clock, Eye, Star, Award, Zap, Heart, TrendingUp, Users, Camera, Aperture, Image } from 'lucide-react';
import CTA from "../CTA";

const VideoSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [liked, setLiked] = useState({});
  const [activeCategory, setActiveCategory] = useState('All');
  const videoRefs = useRef({});
  

  // First Set - Wedding Photography
  const weddingVideos = [
    {
      id: 1,
      title: "Portrait Photography Masterclass",
      duration: "12:45",
      views: "2.4M",
      thumbnail: "/thumbnails/th2.jpg",
      videoUrl: "/videosection/videos.mp4",
      category: "Portraits",
      rating: 4.9,
      featured: true
    },
    {
      id: 2,
      title: "Studio Lighting Techniques",
      duration: "8:30",
      views: "1.8M",
      thumbnail: "/thumbnails/th7.jpg",
      videoUrl: "/videosection/videos3.mp4",
      category: "Lighting",
      rating: 4.7
    },
    {
      id: 3,
      title: "Professional Editing Workflow",
      duration: "15:20",
      views: "3.2M",
      thumbnail: "/thumbnails/th10.jpg",
      videoUrl: "/videosection/videos4.mp4",
      category: "Editing",
      rating: 4.8,
      trending: true
    },
    {
      id: 4,
      title: "Product Photography Secrets",
      duration: "10:15",
      views: "2.1M",
      thumbnail: "/thumbnails/th1.jpg",
      videoUrl: "/videosection/videos1.mp4",
      category: "Wedding",
      rating: 4.6
    },
    {
      id: 5,
      title: "Fashion Photography Guide",
      duration: "18:40",
      views: "4.5M",
      thumbnail: "/thumbnails/th9.jpg",
      videoUrl: "/videosection/videos5.mp4",
      category: "Wedding",
      rating: 5.0,
      featured: true
    },
    {
      id: 6,
      title: "Composition & Framing",
      duration: "14:25",
      views: "1.9M",
      thumbnail: "/thumbnails/th8.jpg",
      videoUrl: "/videosection/videos6.mp4",
      category: "Wedding",
      rating: 4.5
    }
  ];

  // Second Set - Portrait Photography
  const portraitVideos = [
    {
      id: 7,
      title: "Natural Light Portraits",
      duration: "9:20",
      views: "1.5M",
      thumbnail: "/thumbnails/th11.jpg",
      videoUrl: "/videosection/videos7.mp4",
      category: "Portraits",
      rating: 4.8,
      featured: true
    },
    {
      id: 8,
      title: "Posing Techniques Guide",
      duration: "11:35",
      views: "2.2M",
      thumbnail: "/thumbnails/th14.jpg",
      videoUrl: "/videosection/videos8.mp4",
      category: "Portraits",
      rating: 4.7
    },
    {
      id: 9,
      title: "Black & White Portraiture",
      duration: "13:45",
      views: "1.8M",
      thumbnail: "/thumbnails/th13.jpg",
      videoUrl: "/videosection/videos9.mp4",
      category: "Portraits",
      rating: 4.9,
      trending: true
    },
    {
      id: 10,
      title: "Environmental Portraits",
      duration: "16:10",
      views: "1.3M",
      thumbnail: "/thumbnails/th12.jpg",
      videoUrl: "/videosection/videos10.mp4",
      category: "Portraits",
      rating: 4.6
    },
    {
      id: 11,
      title: "Family Portrait Session",
      duration: "14:30",
      views: "2.7M",
      thumbnail: "/thumbnails/th6.jpg",
      videoUrl: "/videosection/videos11.mp4",
      category: "Portraits",
      rating: 4.8
    },
    {
      id: 12,
      title: "Creative Portrait Lighting",
      duration: "12:15",
      views: "1.9M",
      thumbnail: "/thumbnails/th5.jpg",
      videoUrl: "/videosection/videos12.mp4",
      category: "Portraits",
      rating: 4.7
    }
  ];

  // Third Set - Fashion Photography
  const fashionVideos = [
    {
      id: 13,
      title: "Runway Photography Tips",
      duration: "8:45",
      views: "1.6M",
      thumbnail: "/fashion-img/fashion1.jpg",
      videoUrl: "/videosection/videos13.mp4",
      category: "Fashion",
      rating: 4.7
    },
    {
      id: 14,
      title: "Editorial Fashion Shoots",
      duration: "15:20",
      views: "2.3M",
      thumbnail: "/fashion-img/fashion2.jpg",
      videoUrl: "/videosection/videos14.mp4",
      category: "Fashion",
      rating: 4.9,
      featured: true
    },
    {
      id: 15,
      title: "Beauty Photography",
      duration: "10:30",
      views: "1.4M",
      thumbnail: "/fashion-img/fashion3.jpg",
      videoUrl: "/videosection/videos15.mp4",
      category: "Fashion",
      rating: 4.6
    },
    {
      id: 16,
      title: "Street Style Photography",
      duration: "12:45",
      views: "2.1M",
      thumbnail: "/fashion-img/fashion4.jpg",
      videoUrl: "/videosection/videos16.mp4",
      category: "Fashion",
      rating: 4.8,
      trending: true
    },
    {
      id: 17,
      title: "Model Direction Techniques",
      duration: "14:15",
      views: "1.7M",
      thumbnail: "/fashion-img/fashion5.jpg",
      videoUrl: "/videosection/videos17.mp4",
      category: "Fashion",
      rating: 4.7
    },
    {
      id: 18,
      title: "High Fashion Lighting",
      duration: "11:50",
      views: "2.0M",
      thumbnail: "/fashion-img/fashion6.jpg",
      videoUrl: "/videosection/videos18.mp4",
      category: "Fashion",
      rating: 4.9
    }
  ];

  // Fourth Set - Landscape Photography
  const landscapeVideos = [
    {
      id: 19,
      title: "Golden Hour Landscapes",
      duration: "13:20",
      views: "2.8M",
      thumbnail: "/landscape-img/landscape1.jpg",
      videoUrl: "/videosection/videos19.mp4",
      category: "Landscape",
      rating: 4.9,
      featured: true
    },
    {
      id: 20,
      title: "Long Exposure Water",
      duration: "16:45",
      views: "1.9M",
      thumbnail: "/landscape-img/landscape2.jpg",
      videoUrl: "/videosection/videos20.mp4",
      category: "Landscape",
      rating: 4.8
    },
    {
      id: 21,
      title: "Mountain Photography",
      duration: "14:30",
      views: "2.2M",
      thumbnail: "/landscape-img/landscape3.jpg",
      videoUrl: "/videosection/videos21.mp4",
      category: "Landscape",
      rating: 4.7,
      trending: true
    },
    {
      id: 22,
      title: "Seascape Techniques",
      duration: "11:15",
      views: "1.6M",
      thumbnail: "/landscape-img/landscape4.jpg",
      videoUrl: "/videosection/videos22.mp4",
      category: "Landscape",
      rating: 4.6
    },
    {
      id: 23,
      title: "Urban Landscape Photography",
      duration: "12:40",
      views: "2.1M",
      thumbnail: "/landscape-img/landscape5.jpg",
      videoUrl: "/videosection/videos23.mp4",
      category: "Landscape",
      rating: 4.8
    },
    {
      id: 24,
      title: "Night Sky Photography",
      duration: "18:20",
      views: "3.2M",
      thumbnail: "/landscape-img/landscape6.jpg",
      videoUrl: "/videosection/videos24.mp4",
      category: "Landscape",
      rating: 5.0,
      featured: true
    }
  ];

  // Combine all videos
  const allVideos = [...weddingVideos, ...portraitVideos, ...fashionVideos, ...landscapeVideos];

  const categories = ['All','Wedding'];

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMouseEnter = (videoId) => {
    setHoveredCard(videoId);
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      videoElement.play().catch(error => {
        console.log('Auto-play prevented:', error);
      });
    }
  };

  const handleMouseLeave = (videoId) => {
    setHoveredCard(null);
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  const filteredVideos = activeCategory === 'All' 
    ? allVideos 
    : allVideos.filter(v => v.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-100 relative overflow-hidden">
      {/* Photo Studio Header */}
      <header className="relative h-[60vh] sm:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/video-banner2.jpg"
          alt="Photo Studio Banner"
          className="absolute inset-0 w-full h-full object-cover animate-zoom"
        />
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        {/* Studio Lights Effect */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-red-200 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-red-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-40 md:py-45">
          {/* <div className="inline-flex items-center gap-3  backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-white/10">
            <Camera className="text-white" size={20} />
            <span className="text-white font-bold text-sm tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              PROFESSIONAL PHOTO STUDIO
            </span>
          </div> */}
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            Capture Perfect Moments
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Master the art of photography with professional techniques and studio secrets across all genres
          </p>
        </div>
      </header>

      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        {/* Compact Hero with Side Stats */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: Title */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 bg-red-900 px-4 py-2 rounded-full mb-4">
                <Aperture className="text-white" size={18} />
                <span className="text-white font-bold text-xs tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  STUDIO MASTERY
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-900 to-red-900 mb-4" 
                  style={{ fontFamily: 'Playfair Display, serif', lineHeight: '1.1' }}>
                Beauty captured <br /> <span className='bg-black bg-clip-text text-transparent'>through motion</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed" 
                 style={{ fontFamily: 'Inter, sans-serif' }}>
                Professional photography techniques across wedding, portrait, fashion, and landscape genres from industry experts
              </p>
            </div>

            {/* Right: Stats Cards */}
            <div className="flex gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-4xl font-black text-red-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  200+
                </div>
                <div className="text-sm text-gray-600 font-medium flex items-center gap-1">
                  <Users size={14} />
                  Tutorials
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-4xl font-black text-red-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  4.8★
                </div>
                <div className="text-sm text-gray-600 font-medium flex items-center gap-1">
                  <Star size={14} />
                  Avg Rating
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photography Categories */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full ml-1 mt-1 font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-red-900 text-white shadow-lg scale-105'
                    : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Featured Large Card - Spans 8 columns */}
            {filteredVideos.slice(0, 1).map((video) => (
              <div
                key={video.id}
                className="md:col-span-8 group relative"
                onMouseEnter={() => handleMouseEnter(video.id)}
                onMouseLeave={() => handleMouseLeave(video.id)}
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-900/20 transition-all duration-500 h-full">
                  <div className="relative overflow-hidden h-105">
                    {/* Video Element */}
                    <video
                      ref={el => videoRefs.current[video.id] = el}
                      src={video.videoUrl}
                      muted
                      loop
                      preload="metadata"
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredCard === video.id ? 'opacity-100 scale-110' : 'opacity-0 absolute'
                      }`}
                    />
                    
                    {/* Thumbnail Fallback */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredCard === video.id ? 'opacity-0 scale-110' : 'opacity-100'
                      }`}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Play Button Overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      hoveredCard === video.id ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-900 rounded-full animate-ping opacity-50" />
                        <div className="relative bg-red-900 rounded-full p-10 shadow-2xl hover:bg-red-800 cursor-pointer transition-transform hover:scale-110">
                          <Play className="text-white" size={48} fill="white" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-6 left-6 flex gap-2">
                      <div className="bg-red-900 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl" 
                           style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Award size={16} />
                        FEATURED
                      </div>
                    </div>

                    <button
                      onClick={() => toggleLike(video.id)}
                      className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white/30 transition-all hover:scale-110"
                    >
                      <Heart 
                        size={24} 
                        className={liked[video.id] ? 'text-red-500 fill-red-500' : 'text-white'}
                      />
                    </button>

                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-red-400 text-xs font-bold tracking-widest uppercase mb-2 block flex items-center gap-2" 
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Camera size={14} />
                        {video.category}
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-3" 
                          style={{ fontFamily: 'Playfair Display, serif' }}>
                        {video.title}
                      </h3>
                    
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Sidebar Cards - Spans 4 columns */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {filteredVideos.slice(1, 3).map((video) => (
                <div
                  key={video.id}
                  className="group relative"
                  onMouseEnter={() => handleMouseEnter(video.id)}
                  onMouseLeave={() => handleMouseLeave(video.id)}
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden h-48">
                      {/* Video Element */}
                      <video
                        ref={el => videoRefs.current[video.id] = el}
                        src={video.videoUrl}
                        muted
                        loop
                        preload="metadata"
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredCard === video.id ? 'opacity-100 scale-110' : 'opacity-0 absolute'
                        }`}
                      />
                      
                      {/* Thumbnail Fallback */}
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredCard === video.id ? 'opacity-0 scale-110' : 'opacity-100'
                        }`}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      
                      {video.trending && (
                        <div className="absolute top-3 left-3 bg-red-900 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                          <Zap size={12} />
                          TRENDING
                        </div>
                      )}

                      <button
                        onClick={() => toggleLike(video.id)}
                        className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-all hover:scale-110"
                      >
                        <Heart 
                          size={18} 
                          className={liked[video.id] ? 'text-red-500 fill-red-500' : 'text-white'}
                        />
                      </button>

                      <div className="absolute bottom-3 left-3 right-3">
                        <h4 className="text-lg font-bold text-white mb-1" 
                            style={{ fontFamily: 'Playfair Display, serif' }}>
                          {video.title}
                        </h4>
                     
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 3 Equal Cards */}
            {filteredVideos.slice(3, 6).map((video) => (
              <div
                key={video.id}
                className="md:col-span-4 group relative"
                onMouseEnter={() => handleMouseEnter(video.id)}
                onMouseLeave={() => handleMouseLeave(video.id)}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative overflow-hidden h-56">
                    {/* Video Element */}
                    <video
                      ref={el => videoRefs.current[video.id] = el}
                      src={video.videoUrl}
                      muted
                      loop
                      preload="metadata"
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredCard === video.id ? 'opacity-100 scale-110' : 'opacity-0 absolute'
                      }`}
                    />
                    
                    {/* Thumbnail Fallback */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredCard === video.id ? 'opacity-0 scale-110' : 'opacity-100'
                      }`}
                    />
                    
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/20 transition-colors duration-500" />
                    
                    {/* Play Button */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      hoveredCard === video.id ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <div className="bg-white rounded-full p-5 shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                        <Play className="text-red-900" size={28} fill="currentColor" />
                      </div>
                    </div>

                    {video.featured && (
                      <div className="absolute top-3 left-3 bg-red-900 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Award size={12} />
                        FEATURED
                      </div>
                    )}

                    <button
                      onClick={() => toggleLike(video.id)}
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all hover:scale-110"
                    >
                      <Heart 
                        size={18} 
                        className={liked[video.id] ? 'text-red-900 fill-red-900' : 'text-gray-600'}
                      />
                    </button>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-red-900 text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2" 
                          style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <Image size={14} />
                      {video.category}
                    </span>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-900 transition-colors flex-1" 
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      {video.title}
                    </h3>

                  </div>
                </div>
              </div>
            ))}

            {/* Additional Rows for More Videos */}
            {filteredVideos.length > 6 && (
              <>
                {/* Second Row */}
                <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {filteredVideos.slice(6, 9).map((video) => (
                    <div
                      key={video.id}
                      className="group relative"
                      onMouseEnter={() => handleMouseEnter(video.id)}
                      onMouseLeave={() => handleMouseLeave(video.id)}
                    >
                      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                        <div className="relative overflow-hidden h-56">
                          <video
                            ref={el => videoRefs.current[video.id] = el}
                            src={video.videoUrl}
                            muted
                            loop
                            preload="metadata"
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              hoveredCard === video.id ? 'opacity-100 scale-110' : 'opacity-0 absolute'
                            }`}
                          />
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              hoveredCard === video.id ? 'opacity-0 scale-110' : 'opacity-100'
                            }`}
                          />
                          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                            hoveredCard === video.id ? 'opacity-0' : 'opacity-100'
                          }`}>
                            <div className="bg-white rounded-full p-4 shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                              <Play className="text-red-900" size={20} fill="currentColor" />
                            </div>
                          </div>
                        </div>
                          <button
                      onClick={() => toggleLike(video.id)}
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all hover:scale-110"
                    >
                      <Heart 
                        size={18} 
                        className={liked[video.id] ? 'text-red-900 fill-red-900' : 'text-gray-600'}
                      />
                    </button>
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                        
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Third Row */}
                {filteredVideos.length > 9 && (
                  <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {filteredVideos.slice(9, 12).map((video) => (
                      <div
                        key={video.id}
                        className="group relative"
                        onMouseEnter={() => handleMouseEnter(video.id)}
                        onMouseLeave={() => handleMouseLeave(video.id)}
                      >
                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                          <div className="relative overflow-hidden h-56">
                            <video
                              ref={el => videoRefs.current[video.id] = el}
                              src={video.videoUrl}
                              muted
                              loop
                              preload="metadata"
                              className={`w-full h-full object-cover transition-all duration-700 ${
                                hoveredCard === video.id ? 'opacity-100 scale-110' : 'opacity-0 absolute'
                              }`}
                            />
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className={`w-full h-full object-cover transition-all duration-700 ${
                                hoveredCard === video.id ? 'opacity-0 scale-110' : 'opacity-100'
                              }`}
                            />
                            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                              hoveredCard === video.id ? 'opacity-0' : 'opacity-100'
                            }`}>
                              <div className="bg-white rounded-full p-4 shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                                <Play className="text-red-900" size={20} fill="currentColor" />
                              </div>
                            </div>
                          </div>
                            <button
                      onClick={() => toggleLike(video.id)}
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all hover:scale-110"
                    >
                      <Heart 
                        size={18} 
                        className={liked[video.id] ? 'text-red-900 fill-red-900' : 'text-gray-600'}
                      />
                    </button>
                          <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                          
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <CTA/>
       
      </div>
      
      <style>{`
        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-zoom {
          animation: zoom 15s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default VideoSection;