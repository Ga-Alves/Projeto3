import "./MyAccount.css";
import React from "react";
import Logar from "../../../Requests/Usuario/Logar";
import Edit_User from '../../../Requests/Usuario/Edit_User'
import Swal from 'sweetalert2'

export default function MyAccount() {

  const OpenModalNome =()=>{
    Swal.fire({
      title: "Editar Nome",
      input: 'text',
      inputLabel: 'Novo Nome',
      showCancelButton: true,
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage(
            ' Insira um nome'
          )
        }
      }

    }).then((res)=>{
      console.log(res);
      if(res.isConfirmed){
        onSubmitNome(res.value);
        Swal.fire({
          icon: "success" ,
          timer: "3000"  , 
          showConfirmButton: false,
          text: "Edição enviada"
        })
      }
    })   
  }

  const OpenModalEmail =()=>{
    Swal.fire({
      title:'Editar Email',
      input: 'text',
      inputLabel: 'Novo Email',
      showCancelButton: true,
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage(
            ' Insira um email'
          )
        }
      }
      
    }).then((res)=>{
      console.log(res);
      if(res.isConfirmed){
        Swal.fire({
          icon: "success", 
          timer: "3000" ,
          showConfirmButton: false,
          text: 'Edição enviada'
        })
        onSubmitEmail(res.value)
      }   
    })   
    
  }

  const onSubmitNome =(value)=>{
    const Body = {
      nome: value
    }
    Edit_User(Body, 3)
  }
  
  const onSubmitEmail =(value)=>{
    const Body = {
      email: value
    }
    Edit_User(Body, 3)
  }


  function handleLogar (){
    const corpo = {
      email: 'marcelomrad@gmail.com',
      senha: '123456',
    }
    Logar(corpo);  
  }

  return (
    <>
      <h1 className = 'conta'>MINHA CONTA</h1>

      <div className="forms">
        <label className="labele">Nome</label>
        <input
            className="input"
            type = "text"
            readOnly='true'
            value={'marcelo'}
             />
        <label className="labele">Email</label>

        <input
          className="input"
          type="text"
          readOnly='true'
          value={'marcelo@gmail.com'}
          
        />
      </div>

      <div >
        <button
          className="botao"
          onClick={() => OpenModalEmail()}
        >
          Editar Email
        </button>


        <button
          className="botao"
          style={{top: "45%", marginTop: "30px"}}
          onClick={() => OpenModalNome()}
        >
          Editar Nome
        </button>

        <button onClick= {handleLogar}>
          logar
        </button>
      </div>
    </>
  );
}
