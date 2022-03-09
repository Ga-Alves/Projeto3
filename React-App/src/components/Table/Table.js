// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalAddGame from "../ModalAddGame/ModalAddGame";
import "./Table.css";
import add from '../../images/add.svg';
import Edit_User from '../../Requests/Usuario/Edit_User'
import { useState } from "react";
import Swal from 'sweetalert2'
import GetUserId from "../../Requests/Usuario/GetUserId";
// import edit from '../../images/edit.svg';
// import remove from '../../images/remove.svg';
// import Item from '../Item/Item';
export default function Table({idUsuario, games, onModalClose}) {
    const [openModalAddGame, setOpenModalAddGame] = useState(false);
    
    const handleClose = () => {
        onModalClose()
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