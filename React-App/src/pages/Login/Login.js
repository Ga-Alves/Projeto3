import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import "./Login.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import Logar from "../../Requests/Usuario/Logar";


export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { authenticated, login } = useContext(AuthContext);

    const handleClick = () => {
        const obj = {
            email, 
            senha,
        }         
        //login(email,senha);
        Logar(obj);
    };

    const handleOnChangeEmail = (e) => {    
        setEmail(e.target.value)
    };
    
      const handleOnChangeSenha = (e) => {    
        setSenha(e.target.value)
    };

    return(
        <div id="Pg1" className ="d-flex justify-content-center align-items-center" >
            <div className="d-flex flex-column mb-1">

            <div className="p-2">
                <label for="email" className="label-Login">Email</label>
                <input type="email" placeholder="" value={email} onChange={handleOnChangeEmail} className="input-Login"></input>
            </div>

            <div className="p-2">
                <label for="senha" className="label-Login">Senha</label>
                <input type="password" placeholder="" value={senha} onChange={handleOnChangeSenha} className="input-Login"></input>
            </div>

            <div className="d-flex justify-content-center">
                <button className="login-btn" onClick={() => handleClick()}>Entrar</button>
            </div>

            <div class="d-flex p-2 justify-content-center">
                <Link className="link" to='/cadastro'>Novo usuário? Cadastre-se Aqui</Link>
            </div>

            </div>
             <p>
               {String(authenticated)} 
            </p>
        </div>
    );
}