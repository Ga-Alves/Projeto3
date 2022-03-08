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


export default function App() {
  return (
    <>
      <div className="App">
          <Routes >
            <Route path='/' element = {<Login/>} />
            <Route path='/cadastro' element = {<Cadastro/>} />
            <Route path='/DashBoard' element = {<DashBoard/>}>
                <Route path='account' element = {<MyAccount/>} />
                <Route path='home' element = {<Home/>} />
                <Route path='games' element = {<Games/>} />
            </Route>
          </Routes>
      </div>
      </>
  );
}
