import "./DashBoard.css";
import { Navbar, Container, Nav } from 'react-bootstrap';
import React,{useContext, useState} from "react";
import { AuthContext } from "../../contexts/auth";


import home from '../../images/home.svg';
import games from '../../images/games.svg';
import account from '../../images/count.svg';
import out from '../../images/out.svg';
import { Outlet } from "react-router";

// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

    return (
       <>
           <Navbar className="navbar">
            <Container>
            <Nav className="flex-column">
              <Nav.Link  href="/dashBoard/home" ><img src={home} alt="home"></img ></Nav.Link>
              <Nav.Link  href="/dashBoard/games"><img src={games} alt="games"></img></Nav.Link>
              <Nav.Link active href="/dashBoard/account" ><img src={account} alt="count"></img></Nav.Link>
              <Nav.Link className="xx" href="/">
                <img src={out} alt="out" onClick={handleLogout}/>
              </Nav.Link>
            </Nav>
            </Container>
          </Navbar>

          {<Outlet />}
       </>
    );
  }