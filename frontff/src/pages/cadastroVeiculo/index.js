import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './popup.css'
import axios from 'axios';
import { useState } from 'react';
export default function CadastroVeiculos(){

    const[modelo, setModelo] = useState('');
    const[ano, setAno] = useState('');
    const[cor, setCor] = useState('');
    const[marca, setMarca] = useState('');
    const[valorVeiculo, setValor] = useState(0);
    const[chassi, setChassi] = useState(''); 
    const[placa, setPlaca] = useState('');    
    
    async function salvarVeiculo(){
        const bodyRequest = {
            modelo : modelo,
            ano : ano,
            cor : cor,
            marca : marca,
            valorVeiculo : valorVeiculo,
            chassi : chassi,
            placa : placa 
        }

        await axios.post('http://localhost:5000/veiculos/', bodyRequest)
        alert('Veiculo cadastrado')
    }

return(

    <div>

        <body>
        <header className='popup-header'>
                    <a><Link to="/">Home</Link></a>
                    <nav>
                    <ul className="popup-menu">
                        <li><Link to="/veiculos">Veiculos</Link></li>
                        <li><Link to="/venda">Venda</Link></li>
                        <li><Link to="/historico">Histórico</Link></li>
                    </ul>
                    </nav>
                </header>

            <div className="veic-modal">

                <div className="veic-modal-content">
                    
                    <h1>Cadastro de Veículo</h1>
                    <div className="veic-cdnovo">
                    <div className="inputs-label">
                        <label htmlFor="modelo">Modelo:</label>
                        <input type="text" id="modelo" value={modelo} onChange={e => setModelo(e.target.value)} />
                    </div>
                    <div className="inputs-label">
                        <label htmlFor="ano">Ano:</label>
                        <input type="number" id="ano" value={ano} onChange={e => Number(setAno(e.target.value))} />
                    </div>
                    <div className="inputs-label">
                        <label htmlFor="cor">Cor:</label>
                        <input type="text" id="cor" value={cor} onChange={e => setCor(e.target.value)} />
                    </div>
                    <div className="inputs-label">
                        <label htmlFor="marca">Marca:</label>
                        <input type="text" id="marca" value={marca} onChange={e => setMarca(e.target.value)} />
                    </div>
                    <div className="inputs-label">
                        <label htmlFor="valor">Valor:</label>
                        <input type="number" id="valorVeiculo" value={valorVeiculo} onChange={e => Number(setValor(e.target.value))}/>
                    </div>
                    <div className="inputs-label">
                        <label htmlFor="chassi">Chassi:</label>
                        <input type="text" id="chassi" value={chassi} onChange={e => setChassi(e.target.value)} />
                    </div>
                    <div className="inputs-label">
                        <label htmlFor="placa">Placa:</label>
                        <input type="text" id="placa" value={placa} onChange={e => setPlaca(e.target.value)}/>
                    </div>
                    </div>
                    <div className="veic-Salvar-cadastro">
                    <button className="btn-salvar" onClick={salvarVeiculo}>SALVAR</button>
                    </div>
            </div> 
            </div>

        </body> 
    </div>
)
}
