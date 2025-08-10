import React from 'react';

interface DesignSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function DesignSection({ title, children }: DesignSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="h-px bg-gray-700 flex-grow" />
        <h3 className="text-gray-400 font-medium">{title}</h3>
        <div className="h-px bg-gray-700 flex-grow" />
      </div>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}