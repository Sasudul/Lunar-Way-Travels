
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-10 h-10 fill-amber-500 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C55.2285 90 60.2285 89.0457 64.8423 87.2797C50.3154 82.2797 40 67.2797 40 50C40 32.7203 50.3154 17.7203 64.8423 12.7203C60.2285 10.9543 55.2285 10 50 10Z" />
      </svg>
      <div className="flex flex-col -space-y-1">
        <span className="font-serif font-bold text-xl tracking-tight leading-none text-slate-800">LUNARWAY</span>
        <span className="text-[10px] tracking-[0.2em] font-medium text-amber-600 uppercase">Travels</span>
      </div>
    </div>
  );
};
