import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-blue-400">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/harshvj03" className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/harsh-vijay-singh-0303b482/" className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:harshvj03@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </div>
  );
}