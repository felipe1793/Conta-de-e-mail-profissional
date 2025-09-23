import React, { useState, useEffect } from 'react';
import { MdQuestionMark } from "react-icons/md";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useTheme } from '../context/context';

function Rodape(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(-1);
  const pages = ['/', '/principal', '/regras', '/desafio'];
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const alturaJanela = window.innerHeight;
      const alturaTotal = document.documentElement.scrollHeight;
      setIsVisible(scrollY + alturaJanela >= alturaTotal);
    };

    const currentPath = window.location.pathname;
    const index = pages.indexOf(currentPath === '/' ? '/' : currentPath);
    setCurrentPageIndex(index);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pages]);

  const handleGoBack = () => {
    if (currentPageIndex > 0) {
      window.location.href = pages[currentPageIndex - 1];
    }
  };

  const handleGoForward = () => {
    if (currentPageIndex < pages.length - 1) {
      window.location.href = pages[currentPageIndex + 1];
    }
  };

  const handleGoToDesafios = () => {
    window.location.href = '/desafio';
  };

  const isFirstPage = currentPageIndex === 0;
  const isRegrasPage = window.location.pathname === '/regras';

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 p-4 transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <section>
        <article>
          <div className="flex justify-center mt-1 gap-4">
            {!isFirstPage && (
              <button
                onClick={handleGoBack}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 shadow-md"
                aria-label="Voltar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {isRegrasPage && (
              <button
                onClick={handleGoToDesafios}
                data-tooltip-id="desafio-tooltip"
                data-tooltip-content="Desafio acima"
                className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-200
                  ${isDarkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-green-500 hover:bg-green-600'}
                  animate-pulse-slow
                `}
                aria-label="Desafio"
              >
                <MdQuestionMark className="w-8 h-8 text-white" />
               <Tooltip id="desafio-tooltip" place="top" className="z-[999]" />
              </button>
            )}

            {(currentPageIndex === 0 || currentPageIndex === 1) && (
              <button
                onClick={handleGoForward}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 shadow-md"
                aria-label="Avançar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </article>
      </section>
    </footer>
  );
}

export default Rodape;
