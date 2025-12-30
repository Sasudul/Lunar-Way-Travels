
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Currency } from '../types';
import { EXCHANGE_RATE } from '../constants';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceInUsd: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(Currency.LKR);

  const formatPrice = (priceInUsd: number) => {
    if (currency === Currency.USD) {
      return `$${priceInUsd.toLocaleString()}`;
    } else {
      const priceInLkr = priceInUsd * EXCHANGE_RATE;
      return `Rs. ${priceInLkr.toLocaleString()}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within a CurrencyProvider');
  return context;
};
