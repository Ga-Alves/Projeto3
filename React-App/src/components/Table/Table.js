import 'bootstrap/dist/css/bootstrap.min.css';
import ModalAddGame from "../ModalAddGame/ModalAddGame";
import "./Table.css";
import add from '../../images/add.svg';
import { useState } from "react";

export default function Table({ games, handleRenderPage }) {
    const [openModalAddGame, setOpenModalAddGame] = useState(false);
    const handleClose = () => {
        handleRenderPage()
    }
            
    return (
        <>
          <div className="tabela">
              <div className="titulo row">
                  <div className="col-3">Titulo</div>
                  <div className="col-3">Preço</div>
                  <div className="col-3">Gênero</div>
                  <div
                      className="col add"
                      onClick={() => { if (!openModalAddGame) setOpenModalAddGame(true);}}>
                          Adicionar um Jogo
                      <img style={{paddingLeft: "7px"}} src={add} alt="out">
                      </img>
                  </div>
              </div>

              {games.map(a => <>{a}</>)}

              <div
                  className="add"
                  onClick={() => { if (!openModalAddGame) setOpenModalAddGame(true);}}>
                      Adicionar um Jogo
                  <img src={add} alt="out" style={{paddingLeft: "7px"}}></img>
              </div>
              
              {openModalAddGame && <ModalAddGame closeModal={setOpenModalAddGame} onModalClose={handleClose}/>}
          </div>
        </>
    );
  }