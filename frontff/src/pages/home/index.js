
import mercedez from '../../assets/mercedezBenz.png';
import carro1 from '../../assets/carroOne1.png';
import audi from '../../assets/2017-Audi-A5-Coupe-image-01-800.jpg';
import audiAmerica from '../../assets/The-forbidden-Audi-is-finally-coming-to-America.webp'
import s11 from '../../assets/S110001_full.jpg'
import whatssap from '../../assets/whatsapp.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import maps from '../../assets/Google-Maps.jpg'
import logout from '../../assets/logout.png'
import '../../styles/landing.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


export default function Home(){
    return(
        <div>
            <header id="header">
              <a><Link to="/">Home</Link></a>
              <nav>
                <ul className="menu">
                  <li><Link to="/veiculos">Veiculos</Link></li>
                  <li><Link to="/venda">Venda</Link></li>
                  <li><Link to="/historico">Histórico</Link></li>
                </ul>
              </nav>
            <a className='logout'><Link to="/login"><img src={logout} height="20px" width="20px"></img></Link></a>
          </header>
   
          <section className="container-carros">
            <div className="carroOne">
              <img width="800px" src={carro1}/>
            </div>
            <div className="welcome"><p>WELCOME TO FOFORD</p></div>  
            <div className="carroMercedez">
              <img width="600px" src={mercedez} />
              <span><strong>Mercedes - Benz</strong><br /> 
                "Foi inspirada numa figura <br /> que ele havia 
                desenhado <br /> num postal , o qual remeteu <br /> a sua esposa com o <br /> seguinte comentário: um 
                <br /> dia essa 
                estrela brilhará"
              </span>
            </div>
            <div className="faixa-carros">
              <ul>
                <li><img src={audi} width="250px" height="170px"  /></li>
                <li><img src={audiAmerica} width="250px" height="170px"  /></li>
                <li><img src={s11} width="250px" height="170px" /></li>
              </ul>
            </div>
          </section>
          <footer className="footer">
            <div className="logotipos">
              <ul>
                <li><img src={whatssap} width="30px"/></li>
                <li><img src={facebook} width="30px"/></li>
                <li><img src={instagram} width="30px"/></li>
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
              <img src={maps} width="250px"/>
            </div>
          </footer>

        </div>
    )
}