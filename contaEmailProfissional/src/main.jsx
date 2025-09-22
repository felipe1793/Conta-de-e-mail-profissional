import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import './main.css'
import App from './App.jsx'
import Inicio from './pages/inicio/index.jsx'
import Cabecalho from './pages/cabecalho/index.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Rodape from './pages/rodape/index.jsx'

const router = createBrowserRouter ([
  {
    path: "/teste",
    element: <Inicio/>
  },
  {
    path: "/",
    element: <Inicio/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabecalho/>
    <RouterProvider router={router}/>
    <Rodape/>
  </StrictMode>,
)
