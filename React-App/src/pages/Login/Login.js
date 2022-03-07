import React from "react";
import "./Login.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'


export default function Login(){
    return(
        <div id="Pg1" class ="d-flex justify-content-center align-items-center" >
            <div class="d-flex flex-column mb-1">

            <div class="p-2">
                <label for="email" className="label-Login">Email</label>
                <input type="email" placeholder="" className="input-Login"></input>
            </div>

            <div class="p-2">
                <label for="senha" className="label-Login">Senha</label>
                <input type="password" placeholder="" className="input-Login"></input>
            </div>

            <div class="d-flex justify-content-center">
                <button className="login-btn">Entrar</button>
            </div>

            <div class="d-flex p-2 justify-content-center">
                <Link className="link" to='/cadastro'>Novo usuário? Cadastre-se Aqui</Link>
            </div>

            </div>
        </div>
    );
}