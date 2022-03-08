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
            <div class="game row">
                <div class="col-3">{props.titulo}</div>
                <div class="col-3">R${props.preco}</div>
                <div class="col-4">
                    <div class=" col-4 bd-highlight mb-3 flex-row d-inline-flex">
                        {props.genero.map(a => <div class="genero">{a}</div>)}
                    </div>
                </div>
                <div class="pointer col" onClick={() => { if (!openModalEdit) setOpenModalEdit(true);}}><img src={edit} alt="out"></img></div>
                <div 
                    class="pointer col" 
                    onClick={() => handleRemove()} ><img src={remove} alt="out"></img></div>
                {openModalEdit && <ModalEditGame closeModal={setOpenModalEdit} onModalClose={handleClose()} jogo={props} />}
            </div>
        </>
    );
  }