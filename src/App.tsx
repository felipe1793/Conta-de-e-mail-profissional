import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './app/components/context/context';

// Importa o componente de Layout para envolver todas as páginas
import Layout from './app/components/layout/layout';

// Importa os componentes das suas páginas
import Inicio from './pages/inicio';
import Desafio from './pages/desafio';
import Regras from './pages/regras';
import Principal from './pages/principal';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/desafio" element={<Desafio />} />
            <Route path="/regras" element={<Regras />} />
            <Route path="/principal" element={<Principal />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
