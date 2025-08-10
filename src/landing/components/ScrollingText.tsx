import React from 'react';

interface ScrollingTextProps {
  direction: 'left' | 'right';
  items: React.ReactNode[];
}

export default function ScrollingText({ direction, items }: ScrollingTextProps) {
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-4 group">
      <div className={`flex ${animationClass} group-hover:animate-pause`}>
        {items.map((item, index) => (
          <span
            key={`original-${index}`}
            className="mx-8 text-blue-400 flex-shrink-0"
          >
            {item}
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`duplicate-${index}`}
            className="mx-8 text-blue-400 flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}