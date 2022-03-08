import React, { useState } from "react";
import "./ModalAddGame.css";
// import ReactDOM from "react-dom";


import { criarJogo } from "../../Requests/Jogos/Jogos";


export default function ModalAddGame({ closeModal , onModalClose}) {

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [genero, setGenero] = useState('');

  const handleOnChangeNome = (e) => {    
    setNome(e.target.value)
  }

  const handleOnChangeGenero = (e) => {    
    setGenero(e.target.value)
  }

  const handleOnChangePreco = (e) => {    
    setPreco(e.target.value)
  }

  const handleClickModal = () => {
    const obj = {
      nome,
      preco, 
      genero,
    }

    console.log(obj);
    criarJogo(obj);
    onModalClose();
    closeModal(false)
  }

  return (
    <div className="modalBackground">
      <div className="modalContainerAddGame">
        <div className="title">
          <h3 className="titulo">Adicionar um Jogo</h3>
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

          <button onClick={() => handleClickModal()}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}
