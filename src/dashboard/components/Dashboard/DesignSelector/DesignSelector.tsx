import React from 'react';
import DesignSection from './DesignSection';
import DesignOption from './DesignOption';

interface Design {
  id: string;
  name: string;
  description: string;
}

const designs: Design[] = [
  {
    id: 'disc',
    name: 'Диск',
    description: 'Обложка альбома крутится как диск, а рядом информация о песне'
  },
  {
    id: 'square',
    name: 'Квадратный',
    description: 'Чистый дизайн с квадратной основой. Сверху обложка, а снизу все остальное'
  },
  {
    id: 'simple',
    name: 'Простой',
    description: 'Статичный виджет без анимаций. Обложка, трек и темная подложка снизу'
  },
  {
    id: 'transparent',
    name: 'Прозрачный простой',
    description: 'То же самое как "Простой", но без подложки'
  },
  {
    id: 'fullscreen',
    name: 'Полный экран',
    description: 'Это уже не виджет для стримов. Хорошо подходит для того чтобы использовать где-то самому'
  }
];

interface DesignSelectorProps {
  selectedDesign: string;
  onDesignSelect: (designId: string) => void;
}

export default function DesignSelector({ selectedDesign, onDesignSelect }: DesignSelectorProps) {
  return (
    <div className="space-y-8">
      <DesignSection title="Настройка дизайнов">
        {designs.map((design) => (
          <DesignOption
            key={design.id}
            name={design.name}
            description={design.description}
            isSelected={selectedDesign === design.id}
            onClick={() => onDesignSelect(design.id)}
          />
        ))}
      </DesignSection>
    </div>
  );
}