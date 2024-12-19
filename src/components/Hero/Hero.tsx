import React from 'react';
import { containers } from '../../utils/styles';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
      </div>

      {/* Animated Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white/10 animate-pulse"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 3 + 2 + 's',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`${containers.section} relative z-10`}>
        <HeroContent />
      </div>

      <ScrollIndicator />
    </div>
  );
}