import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export default function AboutCard({ icon: Icon, title, description, color }: AboutCardProps) {
  return (
    <div className="group hover:shadow-lg transition-all duration-300 rounded-xl p-6">
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4
        transform transition-transform group-hover:scale-110`}>
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}