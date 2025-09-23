import React from 'react';
import Cabecalho from './cabecalho';
import Rodape from './rodape';
import { useTheme } from '../context/context';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}>
      <Cabecalho />
      <main className="flex-grow py-8">
        {children}
      </main>
      <Rodape />
    </div>
  );
};

export default Layout;
