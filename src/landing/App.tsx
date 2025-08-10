import React from 'react';
import { Music2Icon, Palette, Settings, Rss, HelpCircle, Play, Wrench, Cable, PaintRoller } from 'lucide-react';
import Navbar from './components/Navbar';
import ScrollingText from './components/ScrollingText';
import FeatureCard from './components/FeatureCard';
import SocialProofCard from './components/SocialProofCard';
import FAQCard from './components/FAQCard';
import HowItWorksCard from './components/HowItWorksCard';
import Footer from '@shared/Footer';

const ScrollItems = [
  <span><img src="/img/emojis-main/violin_3d.png" className="inline-block h-6 w-6 mr-2" alt="музыка" /> Музыка в реальном времени</span>,
  <span><img src="/img/emojis-main/video_game_3d.png" className="inline-block h-6 w-6 mr-2" alt="игра" /> Совместимо с любыми приложениями</span>,
  <span><img src="/img/emojis-main/wrench_3d.png" className="inline-block h-6 w-6 mr-2" alt="настройка" /> Настройка виджетов</span>,
  <span><img src="/img/emojis-main/rocket_3d.png" className="inline-block h-6 w-6 mr-2" alt="ракета" /> Легкая настройка</span>,
  <span><img src="/img/emojis-main/warning_3d.png" className="inline-block h-6 w-6 mr-2" alt="предупреждение" /> Маленькая задержка</span>,
  <span><img src="/img/emojis-main/volcano_3d.png" className="inline-block h-6 w-6 mr-2" alt="вулкан" /> Запуск за 2 клика</span>,
  <span><img src="/img/emojis-main/toolbox_3d.png" className="inline-block h-6 w-6 mr-2" alt="инструменты" /> Простая интеграция</span>,
  <span><img src="/img/emojis-main/tropical_fish_3d.png" className="inline-block h-6 w-6 mr-2" alt="рыба" /> Отображение текущего трека</span>,
  <span><img src="/img/emojis-main/wrapped_gift_3d.png" className="inline-block h-6 w-6 mr-2" alt="подарок" /> Бесплатное использование</span>,
  <span><img src="/img/emojis-main/up_arrow_3d.png" className="inline-block h-6 w-6 mr-2" alt="стрелка" /> Точная синхронизация</span>,
  <span><img src="/img/emojis-main/worm_3d.png" className="inline-block h-6 w-6 mr-2" alt="червь" /> Разнообразные шаблоны</span>,
  <span><img src="/img/emojis-main/wine_glass_3d.png" className="inline-block h-6 w-6 mr-2" alt="бокал" /> Настройка цветовой схемы</span>,
  <span><img src="/img/emojis-main/womans_hat_3d.png" className="inline-block h-6 w-6 mr-2" alt="шляпа" /> Персонализация виджета</span>,
  <span><img src="/img/emojis-main/turtle_3d.png" className="inline-block h-6 w-6 mr-2" alt="черепаха" /> Поддержка плейлистов</span>,
];

const YANDEX_AUTH_URL = `https://oauth.yandex.ru/authorize?client_id=070cbc48b77b4e3399bda2df6e0acf4c&response_type=token&scope=music%3Acontent&scope=music%3Aread&scope=music%3Awrite&redirect_uri=${import.meta.env.VITE_APP_URL}/api/tokencatcher_sm`;

const FAQItems = [
  {
    question: "С какими стриминговыми программами совместимо?",
    answer: "StreamYam совместим со всеми популярными стриминговыми программами, включая OBS Studio, Streamlabs, XSplit и другие через Browser Source."
  },
  {
    question: "Нужна ли подписка Яндекс Плюс?",
    answer: "Нет, для использования виджета она не требуется, но для Яндекс Музыки она пригодится (зачем вам виджет для музыки без самой музыки?)"
  },
  {
    question: "Как подключить аккаунт Яндекс Музыки?",
    answer: "Просто нажмите кнопку 'Войти' и авторизуйтесь через Яндекс ID."
  },
  {
    question: "А это безопасно?",
    answer: "Да, ваш пароль зашифрован в базе данных и никто кроме Вас не сможет получить доступ к виджету или к вашему аккаунту."
  },
  {
    question: "Это бесплатно?",
    answer: "StreamYam полностью бесплатен! Главная наша цель, сделать крутой сервис, а не способ дохода"
  },
  {
    question: "Как получить поддержку, если что-то не работает?",
    answer: "Свяжитесь с нами через телеграм @pmartembay или электронную почту support@streamyam.ru"
  }
];

const HowItWorksSteps = [
  {
    icon: <Cable className="h-12 w-12 text-blue-500 mb-2" />,
    title: "Подключи Яндекс Музыку",
    description: "Авторизуйтесь через свой аккаунт Яндекс Музыки в один клик"
  },
  {
    icon: <PaintRoller className="h-12 w-12 text-blue-500 mb-2" />,
    title: "Настрой внешний вид",
    description: "Выберите один из готовых шаблонов или создайте свой уникальный дизайн"
  },
  {
    icon: <Wrench className="h-12 w-12 text-blue-500 mb-2" />,
    title: "Добавь в OBS/XSplit",
    description: "Скопируйте URL и добавьте его как Browser Source в вашу программу для стриминга"
  },
  {
    icon: <Play className="h-12 w-12 text-blue-500 mb-2" />,
    title: "Готово!",
    description: "Начните стрим и покажите своим зрителям, что вы слушаете"
  }
];

function App() {
  const handleLoginClick = () => {
    window.location.href = YANDEX_AUTH_URL;
  };

  return (
    <div>

      {/* Continuous gradient background that spans entire page */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 opacity-80 -z-10"></div>
      
      <Navbar onLoginClick={handleLoginClick} />
      
      {/* Hero Section на весь экран с эффектом матового стекла */}
      <section className="h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Анимированные круги на фоне */}
        <div className="absolute inset-0 -z-5">
          {/* Large circles - увеличен размер и усилен блюр */}
          <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-blue-600/20 animate-float-slow blur-3xl"></div>
          <div className="absolute top-3/4 left-1/3 w-[25rem] h-[25rem] rounded-full bg-indigo-600/20 animate-float-medium blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] rounded-full bg-purple-600/20 animate-float-fast blur-3xl"></div>
          
          {/* Small circles - увеличен размер и усилен блюр */}
          <div className="absolute top-1/5 right-1/3 w-48 h-48 rounded-full bg-blue-500/25 animate-float-fast blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/5 w-56 h-56 rounded-full bg-indigo-500/25 animate-float-medium blur-3xl"></div>
          <div className="absolute top-2/3 right-1/5 w-40 h-40 rounded-full bg-purple-500/25 animate-float-slow blur-3xl"></div>
        </div>
        
        {/* Бегущая строка сверху */}
        <div className="absolute top-24 w-full">
          <ScrollingText direction="left" items={ScrollItems} />
        </div>
        
        {/* Центрированный контент */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex flex-col justify-center">
          <div className="">
            <div className="text-center">
              <span className="inline-block px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full mb-6 text-sm font-medium border border-blue-500/20">Первый виджет для стримеров с Яндекс Музыкой</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 ym-font-music bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Идеальный инструмент для вашей трансляции
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Легко используемый виджет, работающий с яндекс музыкой
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                  onClick={handleLoginClick}
                  className="relative overflow-hidden text-white px-8 py-4 rounded-lg text-xl font-semibold w-full sm:w-auto shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                  style={{
                    backgroundImage: 'linear-gradient(45deg, #3b82f6, #4f46e5, #6366f1, #8b5cf6, #4f46e5, #3b82f6)',
                    backgroundSize: '300% 300%',
                    animation: 'gradient-shift 10s ease infinite'
                  }}
                >
                  <span className="relative z-10">Добавить виджет на стрим</span>
                </button>
                <a href="#features" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white/20 transition-all border border-white/10 w-full sm:w-auto">
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Бегущая строка снизу */}
        <div className="absolute bottom-20 w-full">
          <ScrollingText direction="right" items={[...ScrollItems].reverse()} />
        </div>
        
        {/* Стрелка вниз для перехода к следующей секции */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all border border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full mb-4 text-sm font-medium backdrop-blur-sm">ВОЗМОЖНОСТИ</span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Преимущества StreamYam
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Наш виджет создан специально для стримеров, которые ценят качество и эстетику</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              Icon={Music2Icon}
              title="Работа с Яндексом"
              description="Единственный виджет с полной поддержкой Яндекс Музыки для стримеров"
            />
            <FeatureCard
              Icon={Palette}
              title="Настраиваемый дизайн"
              description="Настройте виджет под стиль вашего канала: выберите шрифты, цвета и анимации"
            />
            <FeatureCard
              Icon={Settings}
              title="Быстрая интеграция"
              description="Легко интегрируется в OBS Studio, Streamlabs и XSplit и работает в браузере"
            />
            <FeatureCard
              Icon={Rss}
              title="Частые обновления"
              description="Разработчики активно прислушиваются к комьюнити и регулярно добавляют новые функции"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full mb-4 text-sm font-medium backdrop-blur-sm">КАК ЭТО РАБОТАЕТ</span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Начните использовать за 4 простых шага
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Настройка занимает меньше минуты</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {HowItWorksSteps.map((step, index) => (
              <HowItWorksCard 
                key={index}
                index={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full mb-4 text-sm font-medium backdrop-blur-sm">ОТЗЫВЫ</span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Что говорят стримеры
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Присоединяйтесь к сотням довольных пользователей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SocialProofCard
              review="«StreamYam самый удобный виджет для отображения музыки в реальном времени на стриме, который не требует установки сторонних плагинов и сложной настройки, такого я еще нигде не видел»"
              name="Meowtw1xx"
              role="Twitch стример"
              image="/img/streamers/meowtwixx.jpg"
            />
            <SocialProofCard
              review="«Стильный и удобный виджет, прям понравился когда друг рассказал про него. Теперь использую его на каждом своем стриме»"
              name="Neura_kun"
              role="Twitch стример"
              image="/img/streamers/neura_kun.jpg"
            />
            <SocialProofCard
              review="«Мне нравится, что можно настроить виджет под дизайн моего стрима. Большое спасибо разработчикам за такой клевый сайт!»"
              name="baechkartem"
              role="Twitch стример"
              image="/img/streamers/artembaechka.png"
            />
          </div>
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 inline-block py-3 px-8 rounded-full shadow-lg backdrop-blur-sm">
              <p className="text-xl text-white font-semibold flex items-center">
                <span className="text-blue-400 text-3xl mr-2">300+</span> 
                стримеров уже используют StreamYam!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full mb-4 text-sm font-medium">FAQ</span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Всё, что вы хотели узнать о StreamYam</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FAQItems.map((item, index) => (
              <FAQCard
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full mb-4 text-sm font-medium">СОВМЕСТИМОСТЬ</span>
            <h3 className="text-3xl font-bold text-white mb-4">
              Совместимо с популярными платформами
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">StreamYam работает везде, где есть источник с браузером</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/img/programs/obs.png" alt="OBS Studio" className="h-full" />
            </div>
            <div className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/img/programs/streamlabs.png" alt="Streamlabs" className="h-full" />
            </div>
            <div className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/img/programs/xsplit.png" alt="XSplit" className="h-full" />
            </div>
            <div className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/img/programs/prism.png" alt="Prsim Live" className="h-full" />
            </div>
            <div className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/img/programs/twitch.png" alt="Twitch" className="h-full" />
            </div>
            <div className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/img/programs/youtube.png" alt="YouTube" className="h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-800/80 to-blue-900/40 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 shadow-xl">
            <span className="inline-block px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full mb-4 text-sm font-medium">НАЧНИТЕ СЕЙЧАС</span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Готовы улучшить свои стримы?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Полностью бесплатно. Начните использовать StreamYam прямо сейчас!
            </p>
            <div>
            <button
              onClick={handleLoginClick}
              className="relative overflow-hidden text-white px-10 py-5 rounded-lg text-xl font-semibold w-auto shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              style={{
                backgroundImage: 'linear-gradient(45deg, #3b82f6, #4f46e5, #6366f1, #8b5cf6, #4f46e5, #3b82f6)',
                backgroundSize: '300% 300%',
                animation: 'gradient-shift 10s ease infinite'
              }}
            >
              <span className="relative z-10">Начать бесплатно</span>
            </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;