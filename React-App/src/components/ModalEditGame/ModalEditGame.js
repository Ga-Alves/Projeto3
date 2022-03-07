import React from "react";
import "./ModalEditGame.css";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal-root");
export default function ModalEditGame({ closeModal }) {
  return ReactDOM.createPortal(
    <div className="modalBackground">
      <div className="modalContainerEdit">
        <div className="title">
          <h3 className="titulo">Editar Jogo</h3>
        </div>

        <div className="body"></div>
        <label className="lEditGame">Nome</label>
        <input className="inpGame" type="text" name="newGame" />

        <label className="lEditGame">Preço</label>
        <input className="inpGame" type="text" name="newGame" />

        <label className="lEditGame">Gênero</label>
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
    </div>,
    portalRoot
  );
}
