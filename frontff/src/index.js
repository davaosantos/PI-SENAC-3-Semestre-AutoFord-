import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Historico from './pages/historico'
import Home from './pages/home'
import Login from './pages/login'
import Veiculos from './pages/veiculos'
import Venda from './pages/venda'
import {BrowserRouter,Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/historico" element={<Historico/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/veiculos" element={<Veiculos/>} />
        <Route path="/venda" element={<Venda/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

