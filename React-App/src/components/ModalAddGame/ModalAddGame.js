import React from "react";
import "./ModalAddGame.css";
// import ReactDOM from "react-dom";


export default function ModalAddGame({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainerAddGame">
        <div className="title">
          <h3 className="titulo">Adicionar um Jogo</h3>
        </div>

        <div className="body"></div>
        <label className="lGame">Nome</label>
        <input className="inpGame" type="text" name="newGame" />

        <label className="lGame">Preço</label>
        <input className="inpGame" type="text" name="newGame" />

        <label className="lGame">Gênero</label>
        <input className="inpGame" type="text" name="newGame" />

        <div className="footer">
          <button
            onClick={() => {closeModal(false);}}
            id="cancelButton"
          >
            Cancelar
          </button>

          <button>Confirmar</button>
        </div>
      </div>
    </div>
  );
}
