import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ColorPickerTile from './components/Dashboard/ColorPickerTile';
import AccountInfo from './components/Dashboard/AccountInfo';
import DesignSelector from './components/Dashboard/DesignSelector/DesignSelector';
import PreviewCard from './components/Dashboard/PreviewCard';
import LinkCard from './components/Dashboard/LinkCard';
import Footer from '@shared/Footer';
import { Eye, EyeOff, AlertTriangle, Settings, Palette, Layout, Save, Link as LinkIcon, ImageIcon } from 'lucide-react';

function App() {
    const [settings, setSettings] = useState({
      accentColor: '#FFBC0D',
      selectedDesign: 'disc',
    });
    const [username, setUsername] = useState('');
    const [link, setLink] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showLink, setShowLink] = useState(false);
    const [saveAnimation, setSaveAnimation] = useState(false);
    const token = localStorage.getItem('jwt_token');

    useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch("/api/dashboard", {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (response.status === 401) {
            window.location.href = '/';
            return;
          }
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setSettings({
            accentColor: data.accentColor || '#FFBC0D',
            selectedDesign: data.selectedDesign || 'disc',
          });
          setUsername(data.username || '');
          setLink(data.link || '');
        } catch (e) {
          console.error("Ошибка при загрузке данных:", e);
          setError("Не удалось загрузить настройки. Попробуйте обновить страницу.");
        } finally {
          setIsLoading(false);
        }
      }

      fetchData();
    }, []);

    async function handleSave() {
      setSaveAnimation(true);
      setTimeout(() => setSaveAnimation(false), 1000);
      
      try {
        const response = await fetch("/api/dashboard/save", {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(settings),
          redirect: "follow",
        });
    
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        toast.success('Ваши настройки сохранены успешно', {
          duration: 3000,
          style: {
            background: '#10B981',
            color: '#fff'
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#10B981',
          }
        });
      } catch (error) {
        toast.error(`Ошибка при сохранении настроек: ${error}`, {
          duration: 4000,
          style: {
            background: '#EF4444',
            color: '#fff'
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#EF4444',
          }
        });
      }
    }

    if (isLoading) {
      return (
        <div className="min-h-screen bg-slate-900 flex justify-center items-center text-white">
          <div className="flex flex-col items-center animate-pulse">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mb-4"></div>
            <p className="text-xl text-blue-400">Загрузка данных...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center text-red-500 animate-fadeIn">
          <AlertTriangle className="h-16 w-16 mb-4 animate-bounce" />
          <p className="text-xl mb-4">{error}</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="mt-4 px-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-white rounded-lg transition-all hover:scale-105"
          >
            Перейти на главную
          </button>
        </div>
      );
    }

    return (
      <div className="min-h-screen flex flex-col bg-slate-900 relative overflow-hidden animate-fadeIn">
        {/* Декоративные плавающие элементы */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-20 w-64 h-64 rounded-full bg-blue-600/5 animate-float-slow blur-3xl"></div>
          <div className="absolute bottom-40 -left-10 w-72 h-72 rounded-full bg-indigo-600/5 animate-float-medium blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-56 h-56 rounded-full bg-purple-600/5 animate-float-fast blur-3xl"></div>
        </div>
        
        <Toaster 
          toastOptions={{
            className: 'font-medium',
          }}
        />
        
        <div className="flex-grow p-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8 bg-slate-800/70 rounded-lg p-4 border border-slate-700/50 transition-all hover:bg-slate-800/80 hover:border-slate-600/50 shadow-lg animate-slideDown">
              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-lg mr-3 transition-transform hover:rotate-12">
                  <Settings className="h-5 w-5 text-white animate-pulse-slow" />
                </div>
                <h1 className="text-2xl font-bold text-white ym-font-music">Настройки виджета</h1>
              </div>
              <AccountInfo username={username} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-slate-800/70 rounded-lg p-6 border border-slate-700/50 hover:shadow-lg transition-all hover:border-slate-600/50 animate-slideRight">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-500 mr-2 transition-transform hover:scale-110">
                      <Palette className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Персонализация</h2>
                  </div>
                  <p className="text-gray-400 mb-6">Настройте виджет как вам нравится</p>

                  <ColorPickerTile
                    title="Акцентный цвет"
                    description="Выберите цвет элементов виджета. Работает только с прозрачным и простым дизайном."
                    color={settings.accentColor}
                    onChange={(color) => setSettings({ ...settings, accentColor: color })}
                  />

                  <div className="mt-8">
                    <div className="flex items-center mb-4">
                      <div className="text-blue-500 mr-2 transition-transform hover:scale-110">
                        <Layout className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium text-white">Выбор дизайна</h3>
                    </div>
                    <DesignSelector
                      selectedDesign={settings.selectedDesign}
                      onDesignSelect={(designId) => setSettings({ ...settings, selectedDesign: designId })}
                    />
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={handleSave}
                      className={`group relative overflow-hidden rounded-lg px-6 py-3 transition-all transform ${saveAnimation ? 'scale-95' : 'hover:scale-105'}`}
                      style={{
                        background: 'linear-gradient(45deg, #3b82f6, #4f46e5, #6366f1, #8b5cf6)',
                        backgroundSize: '300% 300%',
                        animation: 'gradient-shift 3s ease infinite'
                      }}
                    >
                      <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-0 group-hover:scale-100 transition-transform rounded-lg"></span>
                      <span className="relative flex items-center justify-center text-white">
                        <Save className={`h-5 w-5 mr-2 ${saveAnimation ? 'animate-ping' : ''}`} />
                        Сохранить настройки
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800/70 rounded-lg p-6 border border-slate-700/50 hover:shadow-lg transition-all hover:border-slate-600/50 animate-slideLeft">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-500 mr-2 transition-transform hover:scale-110">
                      <ImageIcon className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Предпросмотр</h2>
                  </div>
                  <PreviewCard
                    design={settings.selectedDesign}
                  />
                </div>
                
                <div className="bg-slate-800/70 rounded-lg p-6 border border-slate-700/50 hover:shadow-lg transition-all hover:border-slate-600/50 animate-slideUp">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="text-blue-500 mr-2 transition-transform hover:scale-110">
                        <LinkIcon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold text-white">Ссылка на виджет</h2>
                    </div>
                    <button 
                      onClick={() => setShowLink(!showLink)}
                      className="flex items-center text-gray-400 hover:text-white transition-all hover:bg-slate-700/50 p-2 rounded-lg"
                    >
                      {showLink ? (
                        <>
                          <EyeOff className="h-5 w-5 mr-1" />
                          <span className="text-sm">Скрыть</span>
                        </>
                      ) : (
                        <>
                          <Eye className="h-5 w-5 mr-1" />
                          <span className="text-sm">Показать</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="mb-4 bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 flex items-start transition-all hover:bg-amber-500/15">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5 animate-pulse-slow" />
                    <p className="text-amber-200 text-sm">
                      Не делитесь этой ссылкой с посторонними. Тот, у кого есть ссылка, 
                      может получить доступ к вашему аккаунту Яндекс Музыки.
                    </p>
                  </div>
                  
                  {showLink ? (
                    <div className="animate-fadeIn">
                      <LinkCard
                        link={import.meta.env.VITE_APP_URL + "/widget/" + link}
                      />
                    </div>
                  ) : (
                    <div className="bg-slate-700/50 rounded-lg p-6 text-center animate-fadeIn">
                      <p className="text-gray-400 mb-2">Ссылка скрыта</p>
                      <p className="text-sm text-gray-500">Нажмите "Показать", чтобы отобразить ссылку на виджет</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />

        {/* Добавить CSS-анимации в стили */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes slideRight {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slideLeft {
            from { transform: translateX(20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-10px) translateX(10px); }
            50% { transform: translateY(-15px) translateX(-5px); }
            75% { transform: translateY(-5px) translateX(-10px); }
          }
          
          @keyframes float-medium {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-15px) translateX(15px); }
            50% { transform: translateY(-20px) translateX(-10px); }
            75% { transform: translateY(-10px) translateX(-15px); }
          }
          
          @keyframes float-fast {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-20px) translateX(20px); }
            50% { transform: translateY(-30px) translateX(-15px); }
            75% { transform: translateY(-15px) translateX(-20px); }
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          
          .animate-slideDown {
            animation: slideDown 0.6s ease-out forwards;
          }
          
          .animate-slideRight {
            animation: slideRight 0.7s ease-out forwards;
          }
          
          .animate-slideLeft {
            animation: slideLeft 0.7s ease-out forwards;
          }
          
          .animate-slideUp {
            animation: slideUp 0.7s ease-out forwards;
          }
          
          .animate-float-slow {
            animation: float-slow 15s ease-in-out infinite;
          }
          
          .animate-float-medium {
            animation: float-medium 12s ease-in-out infinite;
          }
          
          .animate-float-fast {
            animation: float-fast 10s ease-in-out infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
}

export default App;