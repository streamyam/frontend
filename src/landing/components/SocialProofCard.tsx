import React from 'react';

interface SocialProofCardProps {
  review: string;
  name: string;
  role: string;
  image: string;
}

export default function SocialProofCard({ review, name, role, image }: SocialProofCardProps) {

  return (
    <div 
      className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50 hover:border-violet-600/30 transition-all relative backdrop-blur-md flex flex-col h-full"
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
              ))}
            </div>
          </div>
          <p className="text-gray-300 italic mb-4">{review}</p>
        </div>
        <div className="flex items-center mt-auto">
          <img src={image} alt={name} className="h-12 w-12 rounded-full mr-4" />
          <div>
            <p className="text-white font-medium">{name}</p>
            <p className="text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 