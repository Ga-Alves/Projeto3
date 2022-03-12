import React, { useState } from "react";
import "./Cadastro.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Criar_Usuario from "../../Requests/Usuario/Criar_Usuario";
<<<<<<< HEAD
import Swal from 'sweetalert2'

=======
>>>>>>> 2fb80053b05249a14e23ae4c91e081eff5af676d
import voltar from '../../images/voltar.svg';

export default function Cadastro(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [nome, setNome] = useState('');

    const handleClick = () => {
        const obj = {
            email, 
            senha,
            nome,
        }
        if( senha === confirmarSenha ){
            Criar_Usuario(obj);
        }
        else{
            console.log("senhas diferentes");
            Swal.fire({
                icon: 'error',
                text: 'Senhas não coincidem',
            });
            // setSenha("");
            // setConfirmarSenha("");
        }
    };

    const handleOnChangeEmail = (e) => {    
        setEmail(e.target.value)
    };
    const handleOnChangeSenha = (e) => {    
        setSenha(e.target.value)
    };
    const handleOnChangeConfirmarSenha = (e) => {    
        setConfirmarSenha(e.target.value)
    };
    const handleOnChangeNome = (e) => {    
        setNome(e.target.value)
    };

    return(
        <div id="Pg2" className ="d-flex flex-column justify-content-center align-items-center" >
            <div className="d-flex">

            <div className="d-flex flex-column p-5 ml-2">
                <label for="nome" className="label-Cadastro">Nome</label>
                <input type="nome" value={nome} onChange={handleOnChangeNome} className="input-Cadastro"></input>
                <label for="senha" className="label-Cadastro">Senha</label>
                <input type="password" value={senha} onChange={handleOnChangeSenha} className="input-Cadastro"></input>
            </div>

            <div className="d-flex flex-column p-5 ml-2">
                <label for="email" className="label-Cadastro">Email</label>
                <input type="email" value={email} onChange={handleOnChangeEmail} className="input-Cadastro"></input>
                <label for="senha" className="label-Cadastro">Confirmar Senha</label>
                <input type="password" value={confirmarSenha} onChange={handleOnChangeConfirmarSenha} className="input-Cadastro"></input>
            </div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="login-btn" onClick={() => handleClick()}>Cadastre-se</button>
            </div>

            <Link to="/"><img className="voltar-btn" src={voltar} alt="voltar"/></Link>

        </div>
    );
}