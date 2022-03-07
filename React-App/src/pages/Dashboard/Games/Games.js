import "./Games.css";
import Table from "../../../components/Table/Table";
import Item from '../../../components/Item/Item';
import { getTodosJogos } from "../../../Requests/Jogos/Jogos";
import { useEffect, useState } from "react";
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Games() {
    const array = [
        <Item preco={20} titulo={'Teste'} genero={['terror','romance']} />,
        <Item preco={20} titulo={'Teste'} genero={['terror','ação']} />
    ]
    const [todosJogos, setTodosJogos ] = useState([]);
     

    useEffect(() => {
       getTodosJogos().then(setTodosJogos)
    }, [])
    

    console.group("dentro de todos os jogos")
    console.log(todosJogos);
    console.groupEnd()

    return (
        <>
            <h1>Todos os jogos</h1>
            <Table idUsuario={2} games={array}></Table>
        </>
    );
  }