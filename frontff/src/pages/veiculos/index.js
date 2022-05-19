import './indexVeiculos.css'
import './popup.css'
import axios from 'axios';
import { useState } from 'react';

export default function Veiculos() {
    
    return(
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Veiculos</title>
            <header className="header">
            <a href="landing.html">Home </a>
            <nav>
                <ul className="menu">
                <li> <a href="veiculos.html">Veiculos</a> </li>
                <li> <a href="venda.html">Venda</a> </li>
                <li> <a href="historico.html">Histórico</a> </li>
                </ul>
            </nav>
            </header>
            <section className="sessao-principal">
            <h1>Cadastro de veículo</h1>
            <div className="faixa-inputs">
                <button className="btnCadastro" onclick="showModal()">Cadastrar novo</button>
                <label htmlFor="Modelo">Modelo</label>
                <input id="Modelo" type="text" />
                <label htmlFor="Placa">Placa</label>
                <input id="Placa" type="text" />
                <button className="pesquisa" type="submit"><img src="assets/img/pngwing.com.png" height="10px" alt /></button>
            </div>
            <div className="faixa-veic">
                <ul>
                <li>Modelo</li>
                <li>Marca</li>
                <li>Placa</li>
                <li>Valor</li>
                <li>Ação</li>
                </ul>
            </div>
            <div className="faixa-cadastros">
                <div className="lista-cadastro">
                <ul>
                    <li />
                    <li />
                    <li />
                    <li />
                    <li>
                    <button type="submit"><img src="assets/img/botao-editar.png" height="13px" alt /></button>
                    <button type="submit"><img src="assets/img/excluir.png" height="13px" alt /></button>
                    </li>
                </ul>
                </div>
            </div>
            </section>
            <footer className="footer">
            <div className="logo-foford">Foford</div>
            </footer>
            {/* div do popup*/}
            <div className="modal" id="modal">
            <div className="modal-content">
                <span onclick="hideModal()">&times</span>
                <div className="cdnovo">
                <h1>Cadastro de Veículo</h1>
                <div>
                    <label htmlFor="modelo">Modelo Veículo:</label>
                    <input type="text" id="modelo" />
                </div>
                <div>
                    <label htmlFor="ano">Ano:</label>
                    <input type="text" id="ano" />
                </div>
                <div>
                    <label htmlFor="cor">Cor:</label>
                    <input type="text" id="cor" />
                </div>
                <div>
                    <label htmlFor="marca">Marca:</label>
                    <input type="text" id="marca" />
                </div>
                <div>
                    <label htmlFor="valor">Valor:</label>
                    <input type="text" id="valor" />
                </div>
                <div>
                    <label htmlFor="chassi">Chassi:</label>
                    <input type="text" id="chassi" />
                </div>
                <div>
                    <label htmlFor="placa">Placa:</label>
                    <input type="text" id="placa" />
                </div>
                </div>
                <div className="Salvar-cadastro">
                <button>SALVAR</button>
                </div>
          </div>
          </div>
          </div>
        )
}