import React, { useState, useRef } from 'react';
import { Play, Pause, Camera, Video, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredVideo, setHoveredVideo] = useState(null);
  
  // Refs for video elements
  const featuredVideoRef = useRef(null);
  const videoRefs = useRef([]);

  const categories = [
    { id: 'all', label: 'All Work', icon: Camera },
    //{ id: 'wedding', label: 'Weddings', icon: Video },

  ];

  // Handle video hover
  const handleVideoHover = (videoIndex, isHovering) => {
    setHoveredVideo(isHovering ? videoIndex : null);
    
    const videoElement = videoRefs.current[videoIndex];
    if (videoElement) {
      if (isHovering) {
        videoElement.play().catch(error => {
          console.log('Video play failed:', error);
        });
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }
  };

  // Handle featured video play/pause
  const handleFeaturedVideoToggle = () => {
    setPlaying(!playing);
    if (featuredVideoRef.current) {
      if (playing) {
        featuredVideoRef.current.pause();
      } else {
        featuredVideoRef.current.play().catch(error => {
          console.log('Featured video play failed:', error);
        });
      }
    }
  };

  // Initialize video refs array
  if (videoRefs.current.length !== 3) {
    videoRefs.current = [null, null, null];
  }

  return (
    <div className="relative bg-white overflow-hidden py-20 lg:py-32">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-red-900 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-red-900 opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-red-900"></div>
              <span className="text-red-900 text-sm font-medium tracking-wider uppercase">Video Showcase</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              STORIES THAT
              <br />
              <span className="text-red-900">Come Alive</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Watch our journey through the lens. Every video tells a unique story, crafted with passion and precision.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
              <Link to='/videos'>  <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === cat.id
                      ? 'bg-red-900 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium text-sm hidden sm:inline">{cat.label}</span>
                </button></Link>
              );
            })}
          </div>
        </div>

        {/* Video Grid Layout */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          
          {/* Large Featured Video - Left Side */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative group h-full">
              <div className="relative overflow-hidden rounded-3xl h-full min-h-[500px] lg:min-h-[700px] shadow-2xl">
                {/* Video element for featured video */}
                <video
                  ref={featuredVideoRef}
                  className="w-full h-full object-cover"
                  poster="/videosection/videos.mp4"
                  loop
                  muted
                >
                  <source src="/videosection/videos.mp4" type="video/mp4" />
                </video>
                
                {/* Fallback image */}
                <img
                  src="/thumbnails/th2.jpg"
                  alt="Featured video"
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                    playing ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Play Button */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  playing ? 'opacity-0' : 'opacity-100'
                }`}>
                  <button
                    onClick={handleFeaturedVideoToggle}
                    className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl"
                  >
                    {playing ? (
                      <Pause className="text-red-900" size={40} fill="currentColor" />
                    ) : (
                      <Play className="text-red-900 ml-2" size={40} fill="currentColor" />
                    )}
                  </button>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <div className="inline-block bg-red-900 text-white px-4 py-2 rounded-full text-xs font-medium mb-4">
                    FEATURED
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-bold text-white mb-3">
                    The Perfect Moment
                  </h3>
                  {/* <p className="text-gray-200 text-lg mb-6 max-w-lg">
                    A beautiful wedding story captured in stunning 4K. Watch how we transform moments into memories.
                  </p> */}
                  <div className="flex items-center gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">8:45 mins</span>
                    </div>
                    <div className="w-px h-4 bg-white/30"></div>
                    <span className="text-sm">12K views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Video Stack */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            
            {/* Video Card 1 */}
            <div 
              className="relative group overflow-hidden rounded-3xl shadow-xl h-[320px] lg:h-[330px] cursor-pointer"
              onMouseEnter={() => handleVideoHover(0, true)}
              onMouseLeave={() => handleVideoHover(0, false)}
            >
              {/* Video element */}
              <video
                ref={el => videoRefs.current[0] = el}
                className="w-full h-full object-cover"
                poster="/videosection/videos1.mp4"
                loop
                muted
              >
                <source src="/videosection/videos1.mp4" type="video/mp4" />
              </video>
              
              {/* Fallback image */}
              <img
                src="/thumbnails/th1.jpg"
                alt="Portrait session"
                className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                  hoveredVideo === 0 ? 'opacity-0' : 'opacity-100'
                }`}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Play Overlay - Now hides when video is playing */}
              <div className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${
                hoveredVideo === 0 ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Play className="text-red-900 ml-1" size={24} fill="currentColor" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                  Portrait
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Elegance Captured
                </h4>
                <div className="flex items-center gap-4 text-gray-200 text-sm">
                  <span>4:20 mins</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>8.5K views</span>
                </div>
              </div>
            </div>

            {/* Video Card 2 */}
            <div 
              className="relative group overflow-hidden rounded-3xl shadow-xl h-[320px] lg:h-[330px] cursor-pointer"
              onMouseEnter={() => handleVideoHover(1, true)}
              onMouseLeave={() => handleVideoHover(1, false)}
            >
              {/* Video element */}
              <video
                ref={el => videoRefs.current[1] = el}
                className="w-full h-full object-cover"
                poster="/videosection/videos2.mp4"
                loop
                muted
              >
                <source src="/videosection/videos2.mp4" type="video/mp4" />
              </video>
              
              {/* Fallback image */}
              <img
                src="/thumbnails/th5.jpg"
                alt="Wedding highlights"
                className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                  hoveredVideo === 1 ? 'opacity-0' : 'opacity-100'
                }`}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Play Overlay - Now hides when video is playing */}
              <div className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${
                hoveredVideo === 1 ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Play className="text-red-900 ml-1" size={24} fill="currentColor" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                  Wedding
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Love in Motion
                </h4>
                <div className="flex items-center gap-4 text-gray-200 text-sm">
                  <span>6:15 mins</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>15K views</span>
                </div>
              </div>
            </div>

            {/* Video Card 3 */}
            <div 
              className="relative group overflow-hidden rounded-3xl shadow-xl h-[320px] lg:h-[330px] cursor-pointer"
              onMouseEnter={() => handleVideoHover(2, true)}
              onMouseLeave={() => handleVideoHover(2, false)}
            >
              {/* Video element */}
              <video
                ref={el => videoRefs.current[2] = el}
                className="w-full h-full object-cover"
                poster="/videosection/videos3.mp4"
                loop
                muted
              >
                <source src="/videosection/videos3.mp4" type="video/mp4" />
              </video>
              
              {/* Fallback image */}
              <img
                src="/thumbnails/th7.jpg"
                alt="Wedding highlights"
                className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                  hoveredVideo === 2 ? 'opacity-0' : 'opacity-100'
                }`}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Play Overlay - Now hides when video is playing */}
              <div className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${
                hoveredVideo === 2 ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Play className="text-red-900 ml-1" size={24} fill="currentColor" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                  Wedding
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Feel Yourself
                </h4>
                <div className="flex items-center gap-4 text-gray-200 text-sm">
                  <span>6:15 mins</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>15K views</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="mt-16 lg:mt-24 text-center">
          <Link to="/videos">
          <button className="group inline-flex items-center gap-3 bg-red-900 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
            View Full Videos
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Play size={16} className="ml-0.5" />
            </div>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}