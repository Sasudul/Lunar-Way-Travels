
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Seamless Travel Services</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            From your first flight to the final hotel stay, we handle every detail so you can focus on making memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
