import React from "react";
import "./Cadastro.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

import voltar from '../../images/voltar.svg';


export default function Cadastro(){
    return(
        <div id="Pg2" className ="d-flex flex-column justify-content-center align-items-center" >
            <div className="d-flex">

            <div className="d-flex flex-column p-5 ml-2">
                <label for="nome" className="label-Cadastro">Nome</label>
                <input type="email" placeholder="" className="input-Cadastro"></input>
                <label for="senha" className="label-Cadastro">Senha</label>
                <input type="password" placeholder="" className="input-Cadastro"></input>
            </div>

            <div className="d-flex flex-column p-5 ml-2">
                <label for="email" className="label-Cadastro">Email</label>
                <input type="email" placeholder="" className="input-Cadastro"></input>
                <label for="senha" className="label-Cadastro">Confirmar Senha</label>
                <input type="password" placeholder="" className="input-Cadastro"></input>
            </div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="login-btn">Cadastre-se</button>
            </div>

            <Link to="/"><img className="voltar-btn" src={voltar} alt="voltar"/></Link>
            

        </div>
    );
}