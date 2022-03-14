import React, { useState } from "react";
import "./Cadastro.css";
import {Link} from 'react-router-dom';
import Criar_Usuario from "../../Requests/Usuario/Criar_Usuario";
import Swal from 'sweetalert2';

import voltar from '../../images/voltar.svg';
import { useNavigate } from "react-router-dom";

export default function Cadastro(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [nome, setNome] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        const obj = {
            email, 
            senha,
            nome,
        }
        if( senha === confirmarSenha ){
            Criar_Usuario(obj);
            navigate("/");
        }
        else{
            console.log("senhas diferentes");
            Swal.fire({
                customClass:{
                    popup: 'erroSenhas',
                },
                icon: 'error',
                title: 'Senhas não coincidem',
            });
            setSenha("");
            setConfirmarSenha("");
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
        <div id="Pg2">
            <div className="container">

            <div className="bloco">
                <label for="nome" className="label-Cadastro">Nome</label>
                <input type="nome" value={nome} onChange={handleOnChangeNome} className="input-Cadastro"></input>
                <label for="senha" className="label-Cadastro">Senha</label>
                <input type="password" value={senha} onChange={handleOnChangeSenha} className="input-Cadastro"></input>
            </div>

            <div className="bloco">
                <label for="email" className="label-Cadastro">Email</label>
                <input type="email" value={email} onChange={handleOnChangeEmail} className="input-Cadastro"></input>
                <label for="senha" className="label-Cadastro">Confirmar Senha</label>
                <input type="password" value={confirmarSenha} onChange={handleOnChangeConfirmarSenha} className="input-Cadastro"></input>
            </div>
            </div>
            <div className="div-btn">
                <button className="login-btn" onClick={() => handleClick()}>Cadastre-se</button>
            </div>

            <Link to="/"><img className="voltar-btn" src={voltar} alt="voltar"/></Link>

        </div>
    );
}