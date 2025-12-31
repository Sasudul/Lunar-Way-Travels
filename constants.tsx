
import { Briefcase, CreditCard, Hotel, Plane } from 'lucide-react';
import { Destination, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'flights',
    title: 'Flights & Transfers',
    description: 'Convenient routes and competitive fares for smooth travel across all major airlines.',
    icon: <Plane className="w-8 h-8 text-amber-500" />
  },
  {
    id: 'accommodation',
    title: 'Accommodation Planning',
    description: 'Comfortable hotels with quality service in prime locations suited for every budget.',
    icon: <Hotel className="w-8 h-8 text-amber-500" />
  },
  {
    id: 'packages',
    title: 'Tour Packages',
    description: 'Customized local and international tours designed for your unique travel style.',
    icon: <Briefcase className="w-8 h-8 text-amber-500" />
  },
  {
    id: 'visa',
    title: 'Visa Assistance',
    description: 'Reliable visa guidance for stress-free international travel to your dream destinations.',
    icon: <CreditCard className="w-8 h-8 text-amber-500" />
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'malaysia-1',
    name: 'Kuala Lumpur',
    country: 'Malaysia',
    description: 'Modern cities and rich culture. Landmarks, shopping, and scenic attractions. Great for varied travel experiences.',
    price: 1500,
    imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/b1/ac/e8.jpg?q=80&w=1000&auto=format&fit=crop',
    tags: ['City', 'Shopping', 'Culture']
  },
  {
    id: 'dubai-1',
    name: 'Dubai Skyline',
    country: 'UAE',
    description: 'Luxury shopping, ultramodern architecture, and a lively nightlife scene. The pinnacle of global luxury travel.',
    price: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
    tags: ['Luxury', 'Architecture', 'Desert']
  },
  {
    id: 'thailand-1',
    name: 'Bangkok Explorer',
    country: 'Thailand',
    description: 'Ornate shrines and vibrant street life. A fusion of traditional heritage and modern convenience.',
    price: 1200,
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.EflknbgBWif4Ua5QwaVG9QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3?q=80&w=1000&auto=format&fit=crop',
    tags: ['Street Food', 'Temples', 'Nightlife']
  },
  {
    id: 'srilanka-1',
    name: 'Ella Greenery',
    country: 'Sri Lanka',
    description: 'Breathtaking mountain views and lush tea plantations. Experience the heart of the pearl of the Indian Ocean.',
    price: 800,
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.RAMZk2DDVFNjYFV4ELYd-gHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3?q=80&w=1000&auto=format&fit=crop',
    tags: ['Nature', 'Mountains', 'Tea']
  }
];

export const EXCHANGE_RATE = 310; 
