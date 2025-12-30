
import React from 'react';

export enum Currency {
  LKR = 'LKR',
  USD = 'USD'
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  price: number;
  imageUrl: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
