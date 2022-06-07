import React from 'react';
import { useState } from 'react';
import Veiculos from '../veiculos';
import axios from 'axios';
import './styleVenda.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import VeiculoService from '../../services/VeiculoService';


export default function Venda() {
    
    const [venda, setVendas] = useState('');
    const [nome, setNome] = useState('');
    const [valorVenda, setValorVenda] = useState(0);
    const [rg, setRg] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nomeVeiculo, setVeiculo] = useState('');
    const [forma_pagamento, setForma_pagamento] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [celular, setCelular] = useState('');
    const [dataVenda, setData] = useState('');
    const [parcela, setParcela] = useState('');

    async function salvarVenda() {

        const bodyRequest = {

            nomeVeiculo: nomeVeiculo,
            nome: nome,
            rg: rg,
            endereco: endereco,
            forma_pagamento: forma_pagamento,
            email: email,
            valorVenda : valorVenda,
            cpf: cpf,
            celular: celular,
            dataVenda: dataVenda,
            parcela: parcela

        }
        axios.post('http://localhost:5000/vendas/' , bodyRequest);
        alert('Venda cadastrada com sucesso');
    }
    return(
            <div>
                <body className='venda-body'>
                    <header className="venda-header">
                    <a><Link to="/">Home</Link></a>
                        <nav>
                        <ul className="menu">
                            <li><Link to="/veiculos">Veiculos</Link></li>
                            <li><Link to="/venda">Venda</Link></li>
                            <li><Link to="/historico">Histórico</Link></li>
                        </ul>
                        </nav>
                    </header>
                    <section id="venda-sessao-venda">
                        <h1>Cadastro de venda</h1>
                        <div className="venda-container-venda">
                            <div className="venda-inputEsquerda">
                                <div>
                                    <label htmlFor="nome">Nome do cliente: </label>
                                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="rg">RG: </label>
                                    <input type="text" value={rg} onChange={e => setRg(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="endereco">Endereço: </label>
                                    <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="veiculo">Veiculo: </label>
                                    <input type="text" value={nomeVeiculo} onChange={e => setVeiculo(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="pagamento">Forma de pagamento: </label>
                                    <input type="text" value={forma_pagamento} onChange={e => setForma_pagamento(e.target.value)} />
                                </div>

                                <div>
                                    <label htmlFor="valorVenda">Valor Venda: </label>
                                    <input type="number" value={valorVenda} onChange={e => Number(setValorVenda(e.target.value))} />
                                </div>

                                <div className="venda-IDVenda">
                                    <label htmlFor="IDvenda">ID Venda: </label>
                                    <input type="number" disabled="disabled" value={venda} onChange={e => Number(setVendas(e.target.value))} />
                                </div>
                            </div>
                            <div className="venda-inputDireita">
                                <div>
                                    <label htmlFor="email">Email: </label>
                                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="cpf">CPF: </label>
                                    <input type="number" value={cpf} onChange={e => Number(setCpf(e.target.value))} />
                                </div>
                                <div>
                                    <label htmlFor="celular">Celular: </label>
                                    <input type="number" value={celular} onChange={e => Number(setCelular(e.target.value))} />
                                </div>
                                <div>
                                    <label htmlFor="data">Data: </label>
                                    <input type="date" value={dataVenda} onChange={e => setData(e.target.value)} />
                                </div>
                                <div>
                                    <span>Parcelamento: </span>
                                    <select name id="parcela" value={parcela} onChange={e => setParcela(e.target.value)}>
                                        <option value="Qtd Parcelas">Qtd Parcelas</option>
                                        <option value="24">24</option>
                                        <option value="48">48</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="venda-buttons-cadastro">
                            <div>
                                <button type="submit" onClick={salvarVenda}>Finalizar</button>
                            </div>
                            <div>
                                <button type="submit">Cancelar</button>
                            </div>
                        </div>
                    </section>
                    <footer className="venda-footer">
                        <div className="venda-logo-foford">Foford</div>
                    </footer>
                </body>
            </div>
        )
}