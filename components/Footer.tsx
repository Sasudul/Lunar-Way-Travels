
import React from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Logo className="brightness-0 invert h-10" />
            <p className="text-slate-400 leading-relaxed">
              Your premier Sri Lankan partner for unforgettable journeys. Explore the world with confidence and luxury.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-slate-400">
              {['Popular Destinations', 'Tour Packages', 'Visa Services', 'Travel Guides', 'Contact Us'].map((item) => (
                <li key={item}><a href="#" className="hover:text-amber-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Support</h4>
            <ul className="flex flex-col gap-4 text-slate-400">
              {['Privacy Policy', 'Terms of Service', 'Booking Conditions', 'Refund Policy', 'FAQ'].map((item) => (
                <li key={item}><a href="#" className="hover:text-amber-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-6 text-slate-400">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-500 shrink-0" />
                <span>123 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-amber-500 shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-amber-500 shrink-0" />
                <span>hello@lunarway.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/5 w-full mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Lunarway Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <img src="https://img.icons8.com/color/48/visa.png" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Visa" />
            <img src="https://img.icons8.com/color/48/mastercard.png" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/amex.png" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Amex" />
          </div>
        </div>
      </div>
    </footer>
  );
};
