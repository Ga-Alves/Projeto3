import "./Games.css";
import Table from "../../components/Table/Table";
import Item from '../../components/Item/Item';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Games() {
    const array = [
        <Item preco={20} titulo={'Teste'} genero={['terror','romance']} />,
        <Item preco={20} titulo={'Teste'} genero={['terror','ação']} />
    ]
    return (
        <>
            <h1>Todos os jogos</h1>
            <Table idUsuario={2} games={array}></Table>
        </>
    );
  }