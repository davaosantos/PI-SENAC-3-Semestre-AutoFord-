import './index.css'
import 'assets/img/fundoBk.png'

export default function Home() {
    
    return(
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home Page</title>
        <link rel="stylesheet" href="styles/styleLanding.css" />
        <header id="header">
          <a href>Home</a>
          <nav>
            <ul className="menu">
              <li> <a href="veiculos.html">Veiculos</a> </li>
              <li> <a href="venda.html">Venda</a> </li>
              <li> <a href="historico.html">Histórico</a> </li>
            </ul>
          </nav>
          <a href="TelaLogin.html" className="logout"><img src="assets/img/logout.png" width="20px" height="20px" alt="logout" /></a>
        </header>
        <section className="container-carros">
          <div className="carroOne">
            <img width="800px" src="assets/img/carroOne1.png" alt="one1" />
          </div>
          <div className="welcome"><p>WELCOME TO FOFORD</p></div>  
          <div className="carroMercedez">
            <img width="600px" src="assets/img/mercedezBenz.png" alt="mercedez" />
            <span><strong>Mercedes - Benz</strong><br /> 
              "Foi inspirada numa figura <br /> que ele havia 
              desenhado <br /> num postal , o qual remeteu <br /> a sua esposa com o <br /> seguinte comentário: um 
              <br /> dia essa 
              estrela brilhará"
            </span>
          </div>
          <div className="faixa-carros">
            <ul>
              <li><img src="assets/img/2017-Audi-A5-Coupe-image-01-800.jpg" width="250px" height="170px" alt /></li>
              <li><img src="assets/img/The-forbidden-Audi-is-finally-coming-to-America.webp" width="250px" height={170} alt /></li>
              <li><img src="assets/img/S110001_full.jpg" width="250px" height="170px" alt /></li>
            </ul>
          </div>
        </section>
        <footer className="footer">
          <div className="logotipos">
            <ul>
              <li><img src="assets/img/whatsapp.png" width="30px" alt /></li>
              <li><img src="assets/img/facebook.png" width="30px" alt /></li>
              <li><img src="assets/img/instagram.png" width="30px" alt /></li>
            </ul>
          </div>
          <div className="sobreNos">
            <p>Sobre...</p>
            <p>Sobre nos</p>
            <p>Sobre a Audi</p>
            <p>Contato</p>
            <p>Aconselhamento de compra</p>
          </div>
          <div className="mapa">
            <img src="assets/img/Google-Maps.jpg" width="250px" alt />
          </div>
        </footer>
      </div> 
        )
}