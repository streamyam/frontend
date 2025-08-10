import React from 'react';

interface DashboardTileProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function DashboardTile({ title, description, children }: DashboardTileProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      {children}
    </div>
  );
}