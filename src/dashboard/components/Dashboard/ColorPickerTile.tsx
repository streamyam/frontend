import React from 'react';
import DashboardTile from './DashboardTile';

interface ColorPickerTileProps {
  title: string;
  description: string;
  color: string;
  onChange: (color: string) => void;
}

export default function ColorPickerTile({ title, description, color, onChange }: ColorPickerTileProps) {
  return (
    <DashboardTile title={title} description={description}>
      <div className="flex items-center space-x-4">
        <input
          type="color"
          title="Color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-16 rounded cursor-pointer bg-transparent"
        />
        <span className="text-gray-300 text-sm uppercase">{color}</span>
      </div>
    </DashboardTile>
  );
}