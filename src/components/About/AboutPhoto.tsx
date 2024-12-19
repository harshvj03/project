import React from 'react';

export default function AboutPhoto() {
  return (
    <div className="relative">
      {/* Main Photo */}
      <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
          alt="Profile Photo"
          className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 -z-10 
        transform rotate-6 scale-105"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-purple-500 blur-3xl opacity-20 -z-10 
        transform -rotate-6 scale-105"></div>
    </div>
  );
}