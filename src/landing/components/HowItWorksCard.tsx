import React, { ReactNode } from 'react';
import { useMouseGlow } from '../hooks/useMouseGlow';

interface HowItWorksCardProps {
  index: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function HowItWorksCard({ index, title, description, icon }: HowItWorksCardProps) {
  return (
    <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/60 hover:from-slate-800/80 hover:to-blue-900/30 backdrop-blur-sm rounded-xl overflow-hidden relative transition-all duration-300 group border-l-4 border-blue-600 hover:border-indigo-500">
      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/5 rounded-tr-full"></div>
      
      <div className="flex flex-col md:flex-row items-center p-6 relative z-10">
        {/* Левая часть с номером и иконкой */}
        <div className="flex-shrink-0 flex flex-col items-center mb-4 md:mb-0 md:mr-6">
          <div className="w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center mb-3 group-hover:bg-blue-800/60 transition-colors">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {index + 1}
            </span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
            {icon}
          </div>
        </div>
        
        {/* Разделительная линия, видна только на MD+ */}
        <div className="hidden md:block w-px h-20 bg-gradient-to-b from-blue-500/10 via-blue-500/30 to-indigo-500/10 mx-4"></div>
        
        {/* Правая часть с текстом */}
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
} 