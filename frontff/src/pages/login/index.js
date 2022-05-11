import './index.css'


export default function Login() {
    
    return(
        <div>
            <title>Login</title>
                <div className="Main-login">
                    <div className="left-login">
                    <h1>FOFORD</h1><h1>
                        <img src="assets/Race car-pana.svg" className="left-login-image" alt="Recicle" />
                    </h1></div>
                    <div className="right-login">
                    <div className="card-login">
                        <h1>LOGIN</h1>
                        <div className="textfild">
                        <label htmlFor="usuario">Usuário</label> 
                        <input type="text" name="Usuario" placeholder="Usuário" />
                        </div>
                        <div className="textfild">
                        <label htmlFor="Senha">Senha</label> 
                        <input type="password" name="Senha" placeholder="Senha" />
                        </div>
                        <button className="btn-login"><a href="landing.html">Login</a></button>
                    </div>
                    </div>
                </div>
            </div>
        )
}