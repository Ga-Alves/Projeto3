import "./MyAccount.css";
import React,{useState, useEffect} from "react";
import Edit_User from '../../../Requests/Usuario/Edit_User'
import Swal from 'sweetalert2'
import GetUserId from "../../../Requests/Usuario/GetUserId";
import Ver_Usuario from "../../../Requests/Usuario/Ver_Usuario";

export default function MyAccount() {
  const [usuario, setUsuario] = useState('')

  const Id = GetUserId();
  
  useEffect(() => {
    Ver_Usuario(Id).then(setUsuario)
  }, [])
  console.log(usuario)


  const onSubmitNome =(value)=>{
    const Body = {
      nome: value
    }
    Edit_User(Body, Id)
  }
  
  const onSubmitEmail =(value)=>{
    const Body = {
      email: value
    }
    Edit_User(Body, Id)
  }

  const OpenModalNome =()=>{
    Swal.fire({
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
          icon: "success" ,
          timer: '1000' , 
          showConfirmButton: false,
          text: "Edição enviada"
        }).then(()=> document.location.reload())
        
      }
      
    })   
  }

  const OpenModalEmail =()=>{
    Swal.fire({
      title:'Editar Email',
      input: 'text',
      inputLabel: 'Novo Email',
      cancelButtonText:`Cancelar`,
      confirmButtonText: `Confirmar`, 
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
        })
         
      }   
      
    })   
    
  }

 
  return (
    <div className="MyAccount">
      <h2 className ="title">MINHA CONTA</h2>

      <div className="forms">
        <label className="labele">Nome</label>
        <input
            className="input"
            type = "text"
            readOnly={true}
            value={usuario.nome}
             />
        <label className="labele">Email</label>

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
      </div>
    </div>
  );
}
