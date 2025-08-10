import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FAQCardProps {
  question: string;
  answer: string;
}

export default function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <div 
      className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50 hover:border-blue-600/30 transition-all relative backdrop-blur-md"
    >
      <div className="relative z-10 flex items-start">
        <HelpCircle className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{question}</h3>
          <p className="text-gray-300">{answer}</p>
        </div>
      </div>
    </div>
  );
} 