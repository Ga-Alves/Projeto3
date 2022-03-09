import "./Home.css";
import Table from "../../../components/Table/Table";
import Item from '../../../components/Item/Item';
import { getTodosJogos } from "../../../Requests/Jogos/Jogos";
import { useEffect, useState } from "react";
import GetUserId from '../../../Requests/Usuario/GetUserId'
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {    
    const [todosJogos, setTodosJogos] = useState([]);     
    useEffect(() => {
       getTodosJogos().then(setTodosJogos)
    }, [])
    
    const handleRenderPage = () => {
        getTodosJogos().then(setTodosJogos);
    }
    function ofUser (jogo) {
        return jogo.Usuario.id === GetUserId()
    }

    const jogos = todosJogos.map((jogo) => ( 
        <Item 
            preco={jogo.preco}
            titulo={jogo.nome}
            id={jogo.id}
            ofUser={ofUser(jogo)}
            genero={[jogo.genero]}
            onDeletedItem={handleRenderPage}
            onModalClose={handleRenderPage}
        />
    )).filter((jogo) => jogo.props.ofUser)      

    return (
        <>
            <h1>Meus jogos</h1>
            <Table games={jogos} onModalClose={handleRenderPage}></Table>
        </>
    );
  }