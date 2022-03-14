import "./MyAccount.css";
import React,{useState, useEffect} from "react";
import Edit_User from '../../../Requests/Usuario/Edit_User'
import Swal from 'sweetalert2'
import GetUserId from "../../../Requests/Usuario/GetUserId";
import Ver_Usuario from "../../../Requests/Usuario/Ver_Usuario";

export default function MyAccount() {
  const [usuario, setUsuario] = useState('')

  useEffect(() => {
    Ver_Usuario(GetUserId()).then(setUsuario)
  }, [])
  console.log(usuario)

  const onSubmitNome =(value)=>{
    const Body = {
      nome: value
    }
    Edit_User(Body, GetUserId())
  }
  
  const onSubmitEmail =(value)=>{
    const Body = {
      email: value
    }
    Edit_User(Body, GetUserId())
  }

  const OpenModalNome =()=>{
    Swal.fire({
      customClass: {
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        popup: 'MyAccountSwall',
      },
      title: "Editar Nome",
      input: 'text',
      inputLabel: 'Novo Nome',
      showCancelButton: true,
      cancelButtonText:`Cancelar`,
      confirmButtonText: `Confirmar`, 
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
        setUsuario(res.value)

        Swal.fire({
          customCLass: {
            popup: 'MyAccountSwallCheck'
          },
          icon: "success" ,
          timer: '3000' , 
          showConfirmButton: false,
          text: "Edição enviada"
        }).then(()=> document.location.reload())
        
      }
      
    })   
  }

  const OpenModalEmail =()=>{
    Swal.fire({
      customClass: {
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        popup: 'MyAccountSwall',
      },
      title:'Editar Email',
      input: 'text',
      inputLabel: 'Novo Email',
      confirmButtonText: `Confirmar`,
      cancelButtonText:`Cancelar`,
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
        onSubmitEmail(res.value)
        setUsuario(res.value)
        Swal.fire({
          icon: "success", 
          timer: "3000" ,
          showConfirmButton: false,
          text: 'Edição enviada'
        }).then(()=> document.location.reload())
         
      }   
      
    })   
  }
 
  return (
    <div className="MyAccount">
      <h2 className="MyAccountTitle">Minha Conta</h2>

      <div className="forms">
        <label className="Nome_Iput">Nome</label>
        <input
            className="input"
            type = "text"
            readOnly={true}
            value={usuario.nome}
             />
        <label className="Nome_Iput">Email</label>

        <input
          className="input"
          type="text"
          readOnly={true}
          value={usuario.email}
          
        />
      </div>

      <div className="botões" >
       
        <button
          className="botao"
          onClick={() => OpenModalNome()}
        >
          Editar Nome
        </button>

        <button
          className="botao"
          onClick={() => OpenModalEmail()}
        >
          Editar Email
        </button>

      </div>
    </div>
  );
}
