import React from 'react';
import { animations } from '../../utils/styles';
import HeroSocials from './HeroSocials';

export default function HeroContent() {
  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-center text-white">
      {/* Main Heading */}
      <h1 className={`${animations.fadeIn} text-5xl md:text-7xl font-bold mb-6`}>
        Hi, I'm{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Harsh Vijay Singh
        </span>
      </h1>

      {/* Subtitle with Typing Effect */}
      <div className={`${animations.fadeIn} [animation-delay:200ms] mb-8`}>
        <p className="text-xl md:text-2xl text-gray-300">
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </p>
      </div>

      {/* Social Links */}
      <div className={`${animations.fadeIn} [animation-delay:400ms] mb-10`}>
        <HeroSocials />
      </div>

      {/* CTA Button */}
      <div className={`${animations.fadeIn} [animation-delay:600ms]`}>
        <button
          onClick={scrollToProjects}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/10 
            backdrop-blur-sm border border-white/20 rounded-full overflow-hidden 
            transition-all duration-300 hover:bg-white/20 hover:scale-105"
        >
          <span className="relative z-10 font-medium">View My Work</span>
          <svg 
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}