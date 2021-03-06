// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Item.css";
import { useState } from "react";
// import add from '../../images/add.svg';
import edit from '../../images/edit.svg';
import remove from '../../images/remove.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalEditGame from "../ModalEditGame/ModalEditGame";
import { deleteJogo } from '../../Requests/Jogos/Jogos';

export default function Item(props) {
    const [openModalEdit, setOpenModalEdit] = useState(false);

    const handleRemove = () => {
        deleteJogo(props.id).then(() => props.onDeletedItem())
        console.log("deletou")       
    }
    
    const handleClose = () => {
        props.onModalClose()
    }

    return (
        <>
            <div className="game row">
                <div className="col-3">{props.titulo}</div>
                <div className="col-2">R${props.preco}</div>
                <div className="col-4">
                    <div className=" col-4 bd-highlight mb-3 ml-5 flex-row d-inline-flex">
                        {props.genero.map(a => <div className="genero">{a}{props.ofUser}</div>)}
                    </div>
                </div>
                <div 
                    className="pointer col"
                    style={ props.ofUser ? {} : { display: "none" } } 
                    onClick={() => { if (!openModalEdit) setOpenModalEdit(true);}}><img className="icon" src={edit} alt="out"></img>
                </div>
                <div 
                    className="pointer col"
                    style={ props.ofUser ? {} : { display: "none" } } 
                    onClick={() => handleRemove()} ><img className="icon"src={remove} alt="out"></img>
                </div>
                {openModalEdit && <ModalEditGame closeModal={setOpenModalEdit} onModalClose={handleClose()} jogo={props} />}
            </div>
        </>
    );
  }