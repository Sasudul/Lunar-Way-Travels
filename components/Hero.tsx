
import React from 'react';
import { ChevronRight, Play, Compass, Globe2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2400&auto=format&fit=crop" 
          className="w-full h-full object-cover scale-105"
          alt="Sri Lanka Travel Background"
        />
        {/* Advanced Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-900/40 to-slate-900/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-20 md:mt-24">
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
            
            <button className="px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-[1.5rem] transition-all flex items-center justify-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-slate-900 text-slate-900 ml-0.5" />
              </div>
              Watch Tour Film
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-500">
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

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-2 bg-amber-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
