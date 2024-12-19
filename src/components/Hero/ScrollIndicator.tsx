import React from 'react';
import { ChevronDown } from 'lucide-react';
import { animations } from '../../utils/styles';

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className={`${animations.bounce} p-2 rounded-full bg-white/10 backdrop-blur-sm 
        border border-white/20`}>
        <ChevronDown size={24} className="text-white" />
      </div>
    </div>
  );
}