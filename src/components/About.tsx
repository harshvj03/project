import React from 'react';
import { Code2, Palette, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-gray-600">
              Passionate about building scalable and efficient web applications using modern technologies.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <p className="text-gray-600">
              Creating beautiful and intuitive user interfaces with attention to detail and user experience.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-600">
              Analytical thinker with a knack for finding elegant solutions to complex problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}