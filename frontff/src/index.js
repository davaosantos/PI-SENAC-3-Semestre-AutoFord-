import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Historico from './pages/historico';
import Login from './pages/login';
import Veiculos from './pages/veiculos';
import Venda from './pages/venda';
import CadastroVeiculos from './pages/cadastroVeiculo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" exact={true} element={<Home/>} ></Route>
        <Route path="/historico" element={<Historico/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/veiculos" element={<Veiculos/>}></Route>
        <Route path="/venda" element={<Venda/>}></Route>
        <Route path="/cadastroVeiculo" element={<CadastroVeiculos/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

