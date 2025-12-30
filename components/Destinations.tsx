
import React, { useState } from 'react';
import { MapPin, ArrowRight, Sparkles, X } from 'lucide-react';
import { DESTINATIONS } from '../constants';
import { useCurrency } from './CurrencyContext';
import { getTravelAdvice } from '../services/geminiService';
import { Destination } from '../types';

export const Destinations: React.FC = () => {
  const { formatPrice } = useCurrency();
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [aiAdvice, setAiAdvice] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleShowDetails = async (dest: Destination) => {
    setSelectedDest(dest);
    setLoading(true);
    setAiAdvice('');
    const advice = await getTravelAdvice(dest.name);
    setAiAdvice(advice);
    setLoading(false);
  };

  return (
    <section id="destinations" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Places We Take You Worldwide</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Discover Curated Experiences</h3>
            <p className="text-slate-600 leading-relaxed">
              Discover destinations chosen for their experiences, culture, and unforgettable moments, both close to home and across the world.
            </p>
          </div>
          <button className="flex items-center gap-2 text-amber-600 font-bold hover:gap-4 transition-all">
            View All Destinations <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESTINATIONS.map((dest) => (
            <div 
              key={dest.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.imageUrl} 
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-slate-900 rounded-full shadow-sm">
                    {dest.country}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    From {formatPrice(dest.price)}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-1 text-slate-400 text-xs uppercase tracking-widest mb-2">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  {dest.country}
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">{dest.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {dest.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {dest.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-100 text-[10px] font-bold text-slate-500 rounded uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => handleShowDetails(dest)}
                  className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Details Drawer */}
      {selectedDest && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedDest(null)} />
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedDest(null)}
              className="absolute top-4 right-4 z-20 bg-white/50 backdrop-blur rounded-full p-2 text-slate-900 hover:bg-amber-500 hover:text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img src={selectedDest.imageUrl} className="w-full h-full object-cover" alt={selectedDest.name} />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold text-sm uppercase mb-4">
                <Sparkles className="w-5 h-5" />
                AI Itinerary Suggestions
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">{selectedDest.name}</h2>
              <div className="text-2xl font-bold text-amber-500 mb-6">{formatPrice(selectedDest.price)} <span className="text-sm font-normal text-slate-400">/ Person</span></div>
              
              <div className="prose prose-sm max-w-none text-slate-600">
                {loading ? (
                  <div className="flex flex-col gap-4 py-8">
                    <div className="h-4 bg-slate-100 rounded animate-pulse w-full" />
                    <div className="h-4 bg-slate-100 rounded animate-pulse w-5/6" />
                    <div className="h-4 bg-slate-100 rounded animate-pulse w-4/6" />
                    <div className="flex items-center justify-center mt-4">
                      <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap font-serif text-lg leading-relaxed">
                    {aiAdvice}
                  </div>
                )}
              </div>

              <button className="w-full bg-amber-500 text-slate-900 font-bold py-4 rounded-2xl mt-8 hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20">
                Book This Destination Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
