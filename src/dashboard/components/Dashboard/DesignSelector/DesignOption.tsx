import React from 'react';
import { Check } from 'lucide-react';

interface DesignOptionProps {
  name: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function DesignOption({ name, description, isSelected, onClick }: DesignOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-colors ${
        isSelected ? 'bg-blue-600/20 border border-blue-500' : 'bg-slate-800/50 hover:bg-slate-800/70'
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          isSelected ? 'border-blue-500' : 'border-gray-500'
        }`}>
          {isSelected && <Check className="w-4 h-4 text-blue-500" />}
        </div>
        <span className="text-white">{name}</span>
      </div>
      <p className="mt-2 text-sm text-gray-400 ml-8">{description}</p>
    </button>
  );
}