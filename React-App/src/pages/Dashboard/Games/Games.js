import "./Games.css";
import Table from "../../../components/Table/Table";
import Item from '../../../components/Item/Item';
import { getTodosJogos } from "../../../Requests/Jogos/Jogos";
import { useEffect, useState } from "react";
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Games() {    
    const [todosJogos, setTodosJogos ] = useState([]);     

    useEffect(() => {
       getTodosJogos().then(setTodosJogos)
    }, [])
    
    const handleRenderPage = () => {
        console.log("passa qui");
        getTodosJogos().then(setTodosJogos);
    }

    const jogos = todosJogos.map((jogo) => ( 
        <Item preco={jogo.preco} titulo={jogo.nome} id={jogo.id} genero={[jogo.genero]} onDeletedItem={handleRenderPage} />
    ))        

    return (
        <>
            <h1>Todos os jogos</h1>
            <Table idUsuario={2} games={jogos} onModalClose={handleRenderPage}></Table>
        </>
    );
  }