import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import Landing from './Landing.jsx'
import Login from './Login.jsx'
import Cadastro from './Cadastro.jsx'
import DashColaborador from './pages/DashColaborador.jsx'
import TimesColaborador from './pages/TimesColaborador.jsx'
import ProjetosColaborador from './pages/ProjetosColaborador.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Cadastro' element={<Cadastro />}></Route>
        <Route path='/DashColaborador' element={<DashColaborador />}></Route>
        <Route path='/TimesColaborador' element={<TimesColaborador />}></Route>
        <Route path='/ProjetosColaborador' element={<ProjetosColaborador />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
