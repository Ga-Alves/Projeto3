// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalAddGame from "../ModalAddGame/ModalAddGame";
import "./Table.css";
import add from '../../images/add.svg';
import { useState } from "react";
// import edit from '../../images/edit.svg';
// import remove from '../../images/remove.svg';
// import Item from '../Item/Item';
export default function Table({games}) {
    const [openModalAddGame, setOpenModalAddGame] = useState(false);
    return (
        <>
            <div class="tabela">
                <div class="titulo row">
                    <div class="col-3">Titulo</div>
                    <div class="col-3">Preço</div>
                    <div class="col-3">Gênero</div>
                    <div
                        class="col add"
                        onClick={() => { if (!openModalAddGame) setOpenModalAddGame(true); }}>
                            Adicionar um Jogo
                        <img style={{paddingLeft: "7px"}} src={add} alt="out">
                        </img>
                    </div>
                </div>
                {games.map(a => <>{a}</>)}

                <div
                    class="add"
                    onClick={() => { if (!openModalAddGame) setOpenModalAddGame(true);}}>
                        Adicionar um Jogo
                    <img src={add} alt="out" style={{paddingLeft: "7px"}}></img>
                </div>
                {openModalAddGame && <ModalAddGame closeModal={setOpenModalAddGame} />}
            </div>
        </>
    );
  }