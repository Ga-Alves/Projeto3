import React from "react";
import "./ModalSenha.css";

export default function ModalSenha({ closeModal, handleFormChange, name, onSubmit}) {

 
  return (
    <div className="modalBackground">
      <div className="modalContainerSenha">
        <div className="title">
          <h2>Trocar Nome</h2>
        </div>

        <div className="body" ></div>

        <label className="labeleSenha">Novo nome</label>
        <input
            onChange = {(e) => handleFormChange(e)}
            className="inputeSenha"
            name="nome"
            />

        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelButton"
          >
            Cancelar
          </button>

          <button
            type="submit"
            onClick={() => {
            closeModal(false)
            onSubmit();
            }}
          >Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
