import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <div 
      className="bg-slate-800/40 rounded-xl p-6 transform hover:scale-105 transition-transform relative backdrop-blur-md border border-slate-700/30"
    >
      <div className="relative z-10">
        <Icon className="h-12 w-12 text-blue-500 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}