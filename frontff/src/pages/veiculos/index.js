
import './styleVeiculo.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import pesquisa from '../../assets/pngwing.com.png';
import editar from '../../assets/botao-editar.png';
import excluir from '../../assets/excluir.png';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import VeiculoService from '../../services/VeiculoService';


class Veiculos extends Component {

    constructor(props){
        super(props)

        this.state = {
            veiculos : []
        }

        this.deleteVeiculo = this.deleteVeiculo.bind(this);
    }

    deleteVeiculo(id){
        VeiculoService.deleteVeiculo(id).then(res => {
            this.setState({veiculos: this.state.veiculos.filter(veiculo => veiculo.idVeiculo !== id)});

        })
    }

    //busca de veiculos
    componentDidMount(){
        VeiculoService.getVeiculos().then((res) => {
            this.setState({veiculos : res.data});
        });
    }



    render()
    // eslint-disable-next-line no-lone-blocks
    {
        return(
            <div>
                <body className='veic-body'>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Veiculos</title>
                <header className="veic-header">
                <a><Link to="/">Home</Link></a>
                <nav>
                <ul className="menu">
                    <li><Link to="/veiculos">Veiculos</Link></li>
                    <li><Link to="/venda">Venda</Link></li>
                    <li><Link to="/historico">Histórico</Link></li>
                </ul>
                </nav>
                </header>
                <section className="veic-sessao-principal">
                    <h1>Cadastro de veículo</h1>
                    <div className="veic-faixa-inputs">
                        <Link to="/cadastroVeiculo"><button className="btnCadastro">Cadastrar novo</button></Link>
                    </div>
                    <div className="veic-faixas">
                        <div className="veic-faixa-veic">
                            <ul>
                            <li>Modelo</li>
                            <li>Marca</li>
                            <li>Placa</li>
                            <li>Valor</li>
                            <li>Ação</li>
                            </ul>
                        </div>

                        {
                            this.state.veiculos.map(
                                veiculo =>
                                <div className="veic-faixa-cadastros" key={veiculo.id}>
                                <ul>
                                <li>{veiculo.modelo}</li>
                                <li>{veiculo.marca}</li>
                                <li>{veiculo.placa}</li>
                                <li>{veiculo.valorVeiculo}</li>
                                <li> <button type="submit"><img src={editar} height="13px" alt /></button>
                                    <button type="submit" onClick={() => this.deleteVeiculo(veiculo.idVeiculo)}><img src={excluir} height="13px" alt /></button></li>
                                </ul>
                            </div>
                                )
                        }

                        
                    </div>
                </section>
                <footer className="veic-footer">
                <div className="veic-logo-foford">Foford</div>
                </footer>

            </body>
            </div> 
    
            )
    }
}

export default Veiculos;