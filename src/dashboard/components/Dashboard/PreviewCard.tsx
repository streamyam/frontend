import React from 'react';
interface PreviewCardProps {
  design: string;
}

const designImages: Record<string, string> = {
  disc: "/img/disc.png",
  square: "/img/square.png",
  simple: "/img/simple.png",
  transparent: "/img/transparent.png",
  fullscreen: "/img/fullscreen.png",
};

export default function PreviewCard({ design }: PreviewCardProps) {
  const imageUrl = designImages[design];

  return (
    <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
      <img
        src={imageUrl}
        alt={design}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
