import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Compass, Globe2, Maximize2, Minus, Play, Volume2, VolumeX, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-minimize on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150 && isVideoOpen) {
        setIsMinimized(true);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVideoOpen]);

  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2400&auto=format&fit=crop" 
          className="w-full h-full object-cover scale-105"
          alt="Sri Lanka Travel Background"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-900/40 to-slate-900/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 md:pt-48">
        <div className="max-w-4xl">
          {/* Floating Tag */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-[13px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            Sri Lanka's Premier Travel Agency
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[1.05] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Design Your <br />
            <span className="text-amber-500 italic relative">
              Global
              <svg className="absolute -bottom-4 left-0 w-full h-4 text-amber-500/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span> Adventure
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl leading-relaxed font-light animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            Complete planning and on-ground support for curated tours across <span className="font-semibold text-white">Sri Lanka, Dubai, Malaysia, and Thailand.</span> Travel with absolute confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <button className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-black rounded-[1.5rem] transition-all flex items-center justify-center gap-3 group shadow-xl shadow-amber-500/20">
              Explore Destinations
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => { setIsVideoOpen(true); setIsMinimized(false); }}
              className="px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-[1.5rem] transition-all flex items-center justify-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-slate-900 text-slate-900 ml-0.5" />
              </div>
              Watch Tour Film
            </button>
          </div>

          <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-500">
             {/* Features... (Unchanged) */}
             <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-amber-500">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Tailored Routes</h3>
                <p className="text-slate-400 text-sm">Bespoke itineraries built for your unique travel style.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-amber-500">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Local & Global</h3>
                <p className="text-slate-400 text-sm">Presence in 40+ countries with 24/7 on-ground support.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-amber-500">
                <Play className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Premium Comfort</h3>
                <p className="text-slate-400 text-sm">Verified luxury hotels and private transport services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DRAGGABLE VIDEO PLAYER */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            drag
            dragConstraints={{ left: -1000, right: 0, top: -1000, bottom: 0 }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              width: isMinimized ? 320 : '90%',
              maxWidth: isMinimized ? 320 : 896,
              height: isMinimized ? 180 : 'auto',
              x: isMinimized ? -32 : 0, 
              bottom: isMinimized ? 32 : 'auto',
              top: isMinimized ? 'auto' : '50%',
              left: isMinimized ? 'auto' : '50%',
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
                position: 'fixed', 
                zIndex: 100, 
                translateY: isMinimized ? 0 : '-50%', 
                translateX: isMinimized ? 0 : '-50%',
                touchAction: 'none' // Essential for drag to work well on mobile
            }}
            className="group shadow-2xl overflow-hidden rounded-2xl border border-white/20 bg-black cursor-move"
          >
            {/* Top Bar / Controls */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/80 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end px-4 gap-2">
              <button 
                onClick={() => setIsMuted(!isMuted)} 
                className="p-1.5 bg-white/10 hover:bg-amber-500 rounded-lg text-white transition-colors"
                title="Mute/Unmute"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              
              <button 
                onClick={() => setIsMinimized(!isMinimized)} 
                className="p-1.5 bg-white/10 hover:bg-amber-500 rounded-lg text-white transition-colors"
                title={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
              </button>

              <button 
                onClick={() => setIsVideoOpen(false)} 
                className="p-1.5 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className={`${isMinimized ? 'h-full' : 'aspect-video'} w-full`}>
              <iframe
                className="w-full h-full pointer-events-none" // pointer-events-none makes the drag handle work anywhere on the video
                src={`https://www.youtube.com/embed/Ngx0znqkbXo?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&loop=1&playlist=Ngx0znqkbXo`}
                title="Tour Film"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-2 bg-amber-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};