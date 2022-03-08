import React, { useState } from "react";
import "./ModalEditGame.css";
import ReactDOM from "react-dom";
import { editarJogo } from "../../Requests/Jogos/Jogos";

const portalRoot = document.getElementById("portal-root");
export default function ModalEditGame({ closeModal, onModalClose, jogo}) {
  
  const [nome, setNome] = useState(jogo.titulo);
  const [preco, setPreco] = useState(jogo.preco);
  const [genero, setGenero] = useState(jogo.genero);

  console.log(jogo)

  const handleOnChangeNome = (e) => {    
    setNome(e.target.value)
  }

  const handleOnChangeGenero = (e) => {    
    setGenero(e.target.value)
  }

  const handleOnChangePreco = (e) => {    
    setPreco(e.target.value)
  }


  const handleEdit = () => {
    const obj = {
      nome,
      preco,
      genero: jogo.genero[0]
    }
    
    editarJogo(jogo.id ,obj);
    onModalClose();
    closeModal(false)
  } 
  
  return ReactDOM.createPortal(
    <div className="modalBackground">
      <div className="modalContainerEdit">
        <div className="title">
          <h3 className="titulo">Editar Jogo</h3>
        </div>

        <div className="body"></div>
        <label className="lGame">Nome</label>
        <input className="inpGame" value={nome} onChange={handleOnChangeNome} type="text" name="newGame" />

        <label className="lGame">Preço</label>
        <input className="inpGame" value={preco} onChange={handleOnChangePreco} type="text" name="newGame" />

        <label className="lGame">Gênero</label>
        <input className="inpGame" value={genero} onChange={handleOnChangeGenero} onKey type="text" name="newGame" />

        <div className="footer">
          <button
            onClick={() => {closeModal(false);}}
            id="cancelButton"
          >
            Cancelar
          </button>

          <button onClick={() => handleEdit()}>Confirmar</button>
        </div>
      </div>
    </div>,
    portalRoot
  );
}
