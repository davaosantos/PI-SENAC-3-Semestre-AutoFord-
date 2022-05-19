import './indexHistorico.css'

export default function Historico() {
    
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
          <section className="sessao-historico">
            <h1>Histórico de vendas</h1>        
            <div className="faixa-inputs-hist">
              <label htmlFor="IDVenda">ID Venda:</label>
              <input id="IDVenda" type="number" />
              <label htmlFor="Data">Data:</label>
              <input id="Data" type="datetime" />
            </div>
            <div className="faixa-historico">
              <div>IDVenda</div>
              <div>Nome</div>
              <div>Veiculo</div>
              <div>Valor</div>
            </div>
            <div className="faixa-dados-historico">
              <div />
              <div />
              <div />
              <div />
            </div>
          </section>
          <footer className="footer">
            <div className="logo-foford">Foford</div>
          </footer>
        </div>
        )
}