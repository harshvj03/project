import React from 'react';
import AboutCard from './AboutCard';
import AboutPhoto from './AboutPhoto';
import { aboutCards } from './aboutData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AboutPhoto />
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi there! I'm a passionate Full Stack Developer with a keen eye for creating 
              beautiful and functional web applications. I love turning complex problems 
              into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With expertise in modern web technologies and a strong foundation in both 
              frontend and backend development, I strive to create seamless user experiences 
              that make a difference.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <AboutCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}