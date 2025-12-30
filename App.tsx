
import React from 'react';
import { CurrencyProvider } from './components/CurrencyContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Destinations } from './components/Destinations';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <CurrencyProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          
          {/* Why Choose Us Highlight */}
          <section className="py-20 bg-slate-900 -mt-20 relative z-20 rounded-t-[3rem] shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                    Beyond Travel: <span className="text-amber-500">Exceptional Journeys</span> Curated Just For You
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { title: 'Local Expertise', desc: 'Deep roots in Sri Lanka with global networking power.' },
                      { title: '24/7 Support', desc: 'On-ground assistance wherever your journey takes you.' },
                      { title: 'Best Price Guarantee', desc: 'Competitive rates without compromising quality.' },
                      { title: 'Safe & Secure', desc: 'Full insurance and verified luxury accommodation.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
                          <div className="w-2 h-2 rounded-full bg-amber-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">{item.title}</h4>
                          <p className="text-sm text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 relative">
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop" 
                      alt="Travel Experience" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                      <p className="text-white italic text-lg font-serif">
                        "The best travel experience of my life. Lunarway handled everything from visas to the hidden gems in Malaysia."
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500 overflow-hidden">
                          <img src="https://picsum.photos/100/100?random=1" alt="Testimonial" />
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">Amara Perera</div>
                          <div className="text-amber-500 text-xs">Family Vacationer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Services />
          
          {/* Destination Banner */}
          <section className="py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 text-center mb-16">
              <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">World Class Tours</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Experience Sri Lanka & Beyond</h3>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-12 px-4 no-scrollbar">
              {[
                { title: 'Ancient Sigiriya', loc: 'Sri Lanka', img: 'https://images.unsplash.com/photo-1588598116719-c8ad124e22fb?q=80&w=800&auto=format&fit=crop' },
                { title: 'Petronas Towers', loc: 'Malaysia', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=800&auto=format&fit=crop' },
                { title: 'Burj Khalifa', loc: 'Dubai', img: 'https://images.unsplash.com/photo-1518684661700-f2463759670d?q=80&w=800&auto=format&fit=crop' },
                { title: 'Phi Phi Islands', loc: 'Thailand', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop' },
                { title: 'London Bridge', loc: 'United Kingdom', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop' },
              ].map((item, idx) => (
                <div key={idx} className="min-w-[300px] md:min-w-[400px] h-[500px] rounded-[2rem] overflow-hidden relative group shrink-0">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <div className="text-amber-500 text-sm font-bold uppercase mb-2">{item.loc}</div>
                    <div className="text-2xl font-serif text-white font-bold">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Destinations />

          {/* Contact Inquiry Section */}
          <section className="py-24 bg-amber-500">
            <div className="container mx-auto px-4">
              <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
                <div className="lg:w-1/2">
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Plan Your Dream Trip Today</h2>
                  <p className="text-slate-400 text-lg mb-8">
                    Have questions or ready to book? Our experts are standing by to create your custom itinerary.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber-500 border border-white/10">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Hotline Support</div>
                        <div className="text-xl font-bold font-serif">+94 11 234 5678</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-amber-500 outline-none transition-all" />
                    <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-amber-500 outline-none transition-all" />
                    <input type="text" placeholder="Preferred Destination" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-amber-500 outline-none transition-all md:col-span-2" />
                    <textarea placeholder="Tell us about your trip..." rows={4} className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-amber-500 outline-none transition-all md:col-span-2" />
                    <button className="bg-amber-500 text-slate-900 font-bold py-4 rounded-xl md:col-span-2 hover:bg-amber-600 transition-all">Send Inquiry</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </CurrencyProvider>
  );
};

// Simple icons for the highlight section
const Phone: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default App;
