
import { Menu, PhoneCall, User, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Currency } from '../types';
import { useCurrency } from './CurrencyContext';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-outpx-4 md:px-8 py-2`}
      >
        <div 
          className={`container mx-auto transition-all duration-500 h-20 md:h-24 px-6 md:px-10 rounded-[2rem] flex items-center justify-between border ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-white/40 translate-y-2' 
              : 'bg-white/10 backdrop-blur-md border-white/20'
          }`}
        >
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Logo className={isScrolled ? 'brightness-100' : 'brightness-0 invert'} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {['Home', 'Destinations', 'Services', 'Tours', 'About Us'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`text-[15px] font-semibold tracking-wide transition-all duration-300 relative group ${
                  isScrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white hover:text-amber-400'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions Section */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex rounded-full p-1.5 border transition-colors ${
              isScrolled ? 'bg-slate-100 border-slate-200' : 'bg-white/10 border-white/20'
            }`}>
              <button 
                onClick={() => setCurrency(Currency.LKR)}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${
                  currency === Currency.LKR ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/70 hover:text-white'
                }`}
              >
                Rs
              </button>
              <button 
                onClick={() => setCurrency(Currency.USD)}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${
                  currency === Currency.USD ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/70 hover:text-white'
                }`}
              >
                USD
              </button>
            </div>
            
            <button className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              isScrolled ? 'bg-slate-900 text-white hover:bg-amber-600' : 'bg-white text-slate-900 hover:bg-amber-500'
            }`}>
              <User className="w-4 h-4" />
              Sign In
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-3 rounded-2xl transition-colors ${
              isScrolled ? 'bg-amber-500 text-white' : 'bg-white/20 text-white border border-white/20'
            }`}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Modern Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Panel */}
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 flex items-center justify-between border-b border-slate-100">
            <Logo />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-amber-500 hover:text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-8">
            <nav className="flex flex-col gap-6">
              {['Home', 'Destinations', 'Services', 'Tours', 'About Us'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-2xl font-serif font-bold text-slate-900 hover:text-amber-500 transition-colors flex items-center justify-between group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <span className="text-lg">→</span>
                  </div>
                </a>
              ))}
            </nav>
            
            <div className="mt-12 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Pricing Currency</div>
              <div className="flex bg-white rounded-full p-1 shadow-inner border border-slate-200">
                <button 
                  onClick={() => setCurrency(Currency.LKR)}
                  className={`flex-1 py-3 text-sm font-bold rounded-full transition-all ${
                    currency === Currency.LKR ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'text-slate-500'
                  }`}
                >
                  LKR (Rs.)
                </button>
                <button 
                  onClick={() => setCurrency(Currency.USD)}
                  className={`flex-1 py-3 text-sm font-bold rounded-full transition-all ${
                    currency === Currency.USD ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'text-slate-500'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-8 border-t border-slate-100 bg-slate-50/50">
            <button className="w-full bg-slate-900 text-white py-5 rounded-[1.5rem] font-bold text-lg hover:bg-amber-600 transition-all flex items-center justify-center gap-3">
              <PhoneCall className="w-5 h-5" />
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
