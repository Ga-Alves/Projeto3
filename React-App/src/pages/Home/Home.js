import "./Home.css";
import Item from '../../components/Item/Item';
import Table from "../../components/Table/Table";
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
    const array = [
        <Item preco={20} titulo={'Teste'} genero={['terror','ação']} />,
        <Item preco={20} titulo={'Teste'} genero={['terror','ação']} />
    ]
    return (
        <>
            <h1>Meus os jogos</h1>
            <Table idUsuario={2} games={array}></Table>
        </>
    );
  }