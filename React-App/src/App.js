<<<<<<< HEAD

import './App.css';
import AppRoutes from "./AppRoutes"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import './App.css';
import { Routes,Route } from 'react-router-dom'
import './App.css';

import Home from './pages/DashBoard/Home/Home';
import MyAccount from './pages/DashBoard/MyAccount/MyAccount'
import Games from './pages/DashBoard/Games/Games'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DashBoard from './pages/DashBoard/DashBoard';
>>>>>>> bae694b4963d39d4425c36e65ef749815e24f246


export default function App() {

  return (
    <>
      <div className="App">
          <AppRoutes/>
      </div>
    </>
  );
}
