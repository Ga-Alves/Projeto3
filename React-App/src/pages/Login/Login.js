import React, { useState } from "react";
import "./Login.css"
import {Link} from 'react-router-dom'
import Logar from "../../Requests/Usuario/Logar";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleClick = () => {
        const obj = {
            email, 
            senha,
        }         
        Logar(obj);
    };

    const handleOnChangeEmail = (e) => {    
        setEmail(e.target.value)
    };
    
      const handleOnChangeSenha = (e) => {    
        setSenha(e.target.value)
    };

    return(
        <div id="Pg1">
            <div className="container">

<<<<<<< HEAD
            <div>
=======
            <div className="p-2 ">
>>>>>>> 2fb80053b05249a14e23ae4c91e081eff5af676d
                <label for="email" className="label-Login">Email</label>
                <input type="email" placeholder="" value={email} onChange={handleOnChangeEmail} className="input-Login"></input>
            </div>

            <div>
                <label for="senha" className="label-Login">Senha</label>
                <input type="password" placeholder="" value={senha} onChange={handleOnChangeSenha} className="input-Login"></input>
            </div>

<<<<<<< HEAD
            <div>
=======
            <div className="d-flex mt-3 justify-content-center">
>>>>>>> 2fb80053b05249a14e23ae4c91e081eff5af676d
                <button className="login-btn" onClick={() => handleClick()}>Entrar</button>
            </div>

            <div>
                <Link className="link" to='/cadastro'>Novo usuário? Cadastre-se Aqui</Link>
            </div>

            </div>
        </div>
    );
}