import React, { useState } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/img/icon.svg" width="35" className="sm:w-[35px]" alt="StreamYam Logo" />
            <span className="ml-1 sm:ml-2 text-m sm:text-xl font-bold text-white ym-font-music truncate">StreamYam</span>
          </div>
          
          {/* Десктопное меню */}
          <div className="hidden sm:flex items-center space-x-4">
            <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Преимущества</a>
            <button
              onClick={onLoginClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Войти
            </button>
          </div>
          
          {/* Мобильная кнопка меню */}
          <div className="sm:hidden flex">
            <a href="#features" className="text-gray-300 hover:text-white px-2 py-2 rounded-md text-xs font-medium mr-1">Преимущества</a>
            <button
              onClick={onLoginClick}
              className="bg-blue-600 text-white px-2 py-1.5 rounded-md text-xs font-medium hover:bg-blue-700 transition-colors"
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}