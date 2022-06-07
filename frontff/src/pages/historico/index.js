
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styleHistorico.css'
import {Component} from 'react'
import VendaService from '../../services/VendaService';
import { useState, React } from 'react';

class Historico extends Component{

    constructor(props){
        super(props)

        this.state = {
            vendas : [],
            searchQuery:''
        }

    }

      //busca vendas
      componentDidMount(){
        VendaService.getVendas().then((res) => {
            this.setState({vendas : res.data});
        });
    }

      componentDidUpdate(previousProps, previousState){
        if(previousState.searchQuery !== this.state.searchQuery){
          console.log('O componenteDidUpdate() foi disparado')
          this.fetchData();
        }
      }

      fetchData = async () => {
        const resp = await fetch(
          'http://localhost:3000/vendas/' + this.state.searchQuery
        );
        const resJson = await resp.json();
        this.setState({venda : resJson[0]});
      }

      handleInputChange = (event) => {
        this.setState({
          searchQuery: event.target.value
        })
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
            <div className="faixa-inputs-hist">
              <label htmlFor="IDVenda">ID Venda:</label>
              <input id="IDVenda" type="search" value={this.state.searchQuery} onChange={(e) => this.handleInputChange(e)} />
              <label htmlFor="Data">Data:</label>
              <input id="Data" type="datetime" />
            </div>
            <div className="faixa-historico">
              <div>IDVenda</div>
              <div>Nome</div>
              <div>Veiculo</div>
              <div>Valor</div>
            </div>

            {
                this.state.vendas ?(
                  <div className="faixa-dados-historico">
                      <div>{this.state.idVenda}</div>
                      <div> {this.state.nome} </div>
                      <div> {this.state.nomeVeiculo} </div>
                      <div> {this.state.valorVenda} </div>
                </div>
                ) : (
                  <p>Nada encontrado</p>
                )
            }
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