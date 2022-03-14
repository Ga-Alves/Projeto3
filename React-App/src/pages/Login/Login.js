import React, { useState } from "react";
import "./Login.css"
import {Link} from 'react-router-dom'
import Logar from "../../Requests/Usuario/Logar";

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleClick = () => {
        const obj = {
            email, 
            senha,
        }         
        Logar(obj);
        setEmail("");
        setSenha("");
    };

    const handleOnChangeEmail = (e) => {    
        setEmail(e.target.value)
    };
    
      const handleOnChangeSenha = (e) => {    
        setSenha(e.target.value)
    };

    return(
        <div id="Pg1">
            <div className="bloco">

            <div>
                <label for="email" className="label-Login">Email</label>
                <input type="email" placeholder="" value={email} onChange={handleOnChangeEmail} className="input-Login"></input>
            </div>

            <div>
                <label for="senha" className="label-Login">Senha</label>
                <input type="password" placeholder="" value={senha} onChange={handleOnChangeSenha} className="input-Login"></input>
            </div>

            <div className="div-btn">
                <button className="login-btn" onClick={() => handleClick()}>Entrar</button>
            </div>

            <div className="div-btn">
                <Link className="link" to='/cadastro'>Novo usuário? Cadastre-se aqui</Link>
            </div>

            </div>
        </div>
    );
}