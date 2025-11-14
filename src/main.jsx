import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import Landing from './Landing.jsx'
import Login from './Login.jsx'
import Cadastro from './Cadastro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Cadastro' element={<Cadastro />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
