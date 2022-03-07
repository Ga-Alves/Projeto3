import "./MyAccount.css";
import ModalEmail from "../../components/ModalEmail/ModalEmail";
import ModalSenha from "../../components/ModalSenha/ModalSenha";
import React, {useState} from "react";
import Logar from "../../Requests/Usuario/Logar";
import Edit_User from '../../Requests/Usuario/Edit_User'

export default function MyAccount() {
  const [openModalEmail, setOpenModalEmail] = useState(false);
  const [openModalSenha, setOpenModalSenha] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  

  const handleFormChange =(e)=>{
    if(e.target.getAttribute('name') === 'nome'){
      setName(e.target.value)
    }else if(e.target.getAttribute('name') === 'email'){
      setEmail(e.target.value)
    }
  }

  const onSubmit =()=>{
    const Body = {
      email : email,
      nome: name
    }
    Edit_User(Body, 1)
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
            type=""
             />
        <label className="labele">Email</label>

        <input
          className="input"
          type="text"
          
        />
      </div>

      <div >
        <button
          className="botao"
          onClick={() => { if (!openModalSenha) setOpenModalEmail(true); }}
        >
          Editar Email
        </button>

        {openModalEmail && <ModalEmail 
                            closeModal={setOpenModalEmail} 
                            handleFormChange = {handleFormChange}
                            onSubmit = {onSubmit}
                            />}

        <button
          className="botao"
          style={{top: "45%", marginTop: "30px"}}
          onClick={() => { if (!openModalEmail) setOpenModalSenha(true);}}
        >
          Editar Nome
        </button>

        {openModalSenha && <ModalSenha 
                            closeModal={setOpenModalSenha}
                            handleFormChange = {handleFormChange}
                            onSubmit = {onSubmit}
                            setName = {setName}
                            />}

        <button onClick= {handleLogar}>
          logar
        </button>
      </div>
    </>
  );
}
