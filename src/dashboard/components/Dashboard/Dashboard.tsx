import React from 'react';
import { useState } from 'react';
import ColorPickerTile from './ColorPickerTile';
import AccountInfo from './AccountInfo';
import DesignSelector from './DesignSelector/DesignSelector';
import PreviewCard from './PreviewCard';

export default function Dashboard() {
  const [settings, setSettings] = useState({
    accentColor: '#ffd966',
    selectedDesign: 'disc'
  });

  async function handleSave() {
      const response = await fetch("/api/save", {
        method: 'PUT',
        body: JSON.stringify(settings)
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      alert("Ваши настройки сохранены успешно")
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Настройки</h1>
          <AccountInfo username="{{username}}" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Settings */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-400">Настройте виджет как вам хочется</p>

            {/* Color Picker */}
            <ColorPickerTile
              title="Акцентный цвет"
              description="Выберите цвет на виджете. Работает только на прозрачном и какой-то еще хуйне"
              color={settings.accentColor}
              onChange={(color) => setSettings({ ...settings, accentColor: color })}
            />

            {/* Design Selector */}
            <DesignSelector
              selectedDesign={settings.selectedDesign}
              onDesignSelect={(designId) => setSettings({ ...settings, selectedDesign: designId })}
            />

            {/* Save Button */}
            <div>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Сохранить
              </button>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="space-y-6">
            <PreviewCard
              design={settings.selectedDesign}
            />
          </div>
        </div>
      </div>
    </div>
  );
}