import './styleLogin.css'
import React, {useState} from 'react';
import raceCar from '../../assets/Race car-pana.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


export default function Login() {

    function initialState(){
        return{user: '', password: ''};
    }

    const[values, setValues] = useState(initialState);

    function onChange(event){
        const{value, name} = event.target;
        setValues({
            ...values,
            [name]: value,

        })
    }

    return(
        <div>
            <title>Login</title>
                <div className="Main-login">
                    <div className="left-login">
                    <h1>FOFORD</h1><h1>
                        <img src={raceCar} className="left-login-image" alt="Recicle" />
                    </h1></div>
                    <div className="right-login">
                    <div className="card-login">
                        <h1>LOGIN</h1>
                        <div className="textfild">
                        <label htmlFor="usuario">Usuário</label> 
                        <input type="text" name="user" onChange={onChange} value={values.user} placeholder="Usuário" />
                        </div>
                        <div className="textfild">
                        <label htmlFor="Senha">Senha</label> 
                        <input id="password" name="password" type="password" onChange={onChange} value={values.password} placeholder="Senha" />
                        </div>
                        <button className="btn-login"><a><Link to="/">Login</Link></a></button>
                    </div>
                    </div>
                </div>
            </div>
        )
}