import React from 'react';
import './indexVenda.css'
import { useState } from 'react';
import axios from 'axios';

export default function Venda() {
    
    const [venda, setVendas] = useState('');
    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');
    const [endereco, setEndereco] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [forma_pagamento, setForma_pagamento] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [celular, setCelular] = useState('');
    const [data, setData] = useState('');
    const [parcela, setParcela] = useState('');

    async function salvarVenda() {
        const bodyRequest = {
            idVeiculo: veiculo,
            nome: nome,
            rg: rg,
            endereco: endereco,
            forma_pagamento: forma_pagamento,
            email: email,
            cpf: cpf,
            celular: celular,
            data: data,
            parcela: parcela

        }
        axios.post('http://localhost:5000/' , bodyRequest);
        alert('Venda cadastrada com sucesso');
    }
    return(
            <div>
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
                <section id="sessao-venda">
                    <h1>Cadastro de venda</h1>
                    <div className="container-venda">
                        <div className="inputEsquerda">
                            <div>
                                <label htmlFor="nome">Nome do cliente</label>
                                <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="rg">RG</label>
                                <input type="text" value={rg} onChange={e => setRg(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="endereco">Endereço</label>
                                <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} />
                            </div>
                            <div>
                                <span>Veiculo</span>
                                <select name="veiculo" value={veiculo} onChange={e => Number(setVeiculo(e.target.value))}>Veiculo
                                    <option value>Selecione o veiculo</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="pagamento">Forma de pagamento</label>
                                <input type="text" value={forma_pagamento} onChange={e => setForma_pagamento(e.target.value)} />
                            </div>
                            <div className="IDVenda">
                                <label htmlFor="IDvenda">ID Venda</label>
                                <input type="number" value={venda} onChange={e => Number(setVendas(e.target.value))} />
                            </div>
                        </div>
                        <div className="inputDireita">
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" value={nome} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="cpf">CPF</label>
                                <input type="number" value={nome} onChange={e => Number(setCpf(e.target.value))} />
                            </div>
                            <div>
                                <label htmlFor="celular">Celular</label>
                                <input type="number" value={nome} onChange={e => Number(setCelular(e.target.value))} />
                            </div>
                            <div>
                                <label htmlFor="data">Data</label>
                                <input type="text" value={data} onChange={e => setData(e.target.value)} />
                            </div>
                            <div>
                                <span>Parcelamento</span>
                                <select name id="parcela" value={parcela} onChange={e => setParcela(e.target.value)}>
                                    <option value="Qtd Parcelas">Qtd Parcelas</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-cadastro">
                        <div>
                            <button type="submit" onClick={salvarVenda}>Finalizar</button>
                        </div>
                        <div>
                            <button type="submit">Cancelar</button>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="logo-foford">Foford</div>
                </footer>
            </div>
        )
}