import React from 'react';
import { useTheme } from '../context/context';
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

function Cabecalho(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <header className={`fixed top-0 w-full z-50 shadow-lg ${isDarkMode ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white' : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800'}`}>
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex-grow flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Alternar tema"
          >
            {isDarkMode ? (
              <GoSun className="w-6 h-6 text-yellow-300" />
            ) : (
              <IoMoonOutline className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
        <div className="flex-shrink-0 flex items-center space-x-2">
          <svg className={`w-10 h-10 ${isDarkMode ? 'text-emerald-400' : 'text-blue-500'}`} fill="none" viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
            <rect className="stroke-current" x="0" y="0" width="50" height="30" rx="5" ry="5" strokeWidth="2" />
            <polyline className="stroke-current" points="0,0 25,18 50,0" strokeWidth="2" />
          </svg>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">
            <span className={isDarkMode ? 'text-emerald-400' : 'text-blue-500'}>e-mail</span> <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>express</span>
          </h1>
        </div>
        <div className="flex-grow flex justify-end items-center" />
      </nav>
    </header>
  );
}

export default Cabecalho;
