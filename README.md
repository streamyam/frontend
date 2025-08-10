# StreamYam Frontend

StreamYam - это приложение позволяющие стримерам добавить на свою трансляцию виджет с музыкой, которая играет прямо сейчас в приложении "Яндекс Музыка". Сейчас сервис не поддерживается, но его функциональность не нарушена

## Стек технологий

### Основные технологии
- **React 18.3.1** - библиотека для создания пользовательских интерфейсов
- **TypeScript 5.5.3** - типизированный JavaScript для повышения надежности кода
- **Vite 5.4.2** - современный инструмент сборки и dev-сервер

### Стилизация и UI
- **Tailwind CSS 3.4.1** - utility-first CSS фреймворк
- **PostCSS 8.4.35** - инструмент для трансформации CSS
- **Autoprefixer** - автоматическое добавление вендорных префиксов
- **Lucide React** - библиотека иконок

### Дополнительные библиотеки
- **React Hot Toast** - уведомления и тосты
- **React Copy to Clipboard** - функциональность копирования в буфер обмена

### Инструменты разработки
- **ESLint 9.9.1** - линтер для JavaScript/TypeScript
- **TypeScript ESLint** - правила ESLint для TypeScript
- **Vite Plugin React** - поддержка React в Vite

## Скриншоты сайта

![alt text](https://github.com/streamyam/frontend/blob/main/github/images/start.png?raw=true)
![alt text](https://github.com/streamyam/frontend/blob/main/github/images/features.png?raw=true)
![alt text](https://github.com/streamyam/frontend/blob/main/github/images/dashboard.png?raw=true)
## Запуск фронта

Без запущенного [бэкенда](https://github.com/streamyam/baeckend) дашборд (/dashboard) будет недоступен

### Установка зависимостей
```bash
npm install
```

### Запуск в режиме разработки
```bash
npm run dev
```
Приложение будет доступно по адресу `http://localhost:5173`

### Сборка для продакшена
```bash
npm run build
```
Также есть возможность сборки проекта используя Docker. Использовалось в связке с CI/CD

### Линтинг кода
```bash
npm run lint
```
