import React from 'react';
import '@shared/styles';

export default function Footer() {
  return (
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made with ❤️ by <a href="https://artembay.ru/" className="hover:underline dark:text-gray-100">ArtemBay</a></span><br />
          </div>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-100 sm:mt-0">
            <li>
              <a href="https://t.me/streamyam" className="hover:underline me-4 md:me-6">Телеграм</a>
            </li>
            <li>
                <a href="/tos" className="hover:underline me-4 md:me-6">Условия использования</a>
            </li>
            <li>
                <a href="/policy" className="hover:underline me-4 md:me-6">Политика конфиденциальности</a>
            </li>
            <li>
                <a href="https://pay.cloudtips.ru/p/400a1897" className="hover:underline me-4 md:me-6">Донат</a>
            </li>
            <li>
              <a href="mailto:support@streamyam.ru" className="hover:underline">support@streamyam.ru</a>
            </li>
        </ul>
        </div>
    </footer>
  );
}