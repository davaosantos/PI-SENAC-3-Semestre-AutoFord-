
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styleHistorico.css'
import {Component} from 'react'
import VendaService from '../../services/VendaService';
import { useState } from 'react';

class Historico extends Component{

    constructor(props){
        super(props)

        this.state = {
            vendas : []
        }

    }

      //busca vendas
      componentDidMount(){
        VendaService.getVendas().then((res) => {
            this.setState({vendas : res.data});
        });
    }

    render(){
    return(
        <div>
        <body>
            <header className='hist-header'>
                <a><Link to="/">Home</Link></a>
                <nav>
                <ul className="hist-menu">
                    <li><Link to="/veiculos">Veiculos</Link></li>
                    <li><Link to="/venda">Venda</Link></li>
                    <li><Link to="/historico">Histórico</Link></li>
                </ul>
                </nav>
            </header>
            <section className="sessao-historico">
            <h1>Histórico de vendas</h1>        

            <div className="faixa-historico">
              <div>IDVenda</div>
              <div>Nome</div>
              <div>Veiculo</div>
              <div>Valor</div>
            </div>

            <div className="listagem-vendas">
            {
                this.state.vendas.map(
                  venda => 
                  <div className="faixa-dados-historico" key={venda.idVenda}>
                      <div>{venda.idVenda}</div>
                      <div> {venda.nome} </div>
                      <div> {venda.nomeVeiculo} </div>
                      <div> {venda.valorVenda} </div>
                </div>
                )
            }
            </div>
          </section>
          <footer className="hist-footer">
            <div className="hist-logo-foford">Foford</div>
          </footer>
          </body>
        </div>
    )
  }
}

export default Historico;