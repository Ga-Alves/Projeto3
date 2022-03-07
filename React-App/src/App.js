import './App.css';
import {Routes,Route} from 'react-router-dom'
import './App.css';

import Home from '../src/pages/Dashboard/Home/Home';
import MyAccount from '../src/pages/Dashboard/MyAccount/MyAccount'
import Games from '../src/pages/Dashboard/Games/Games'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './pages/Dashboard/Dashboard';


export default function App() {
  return (
    <>
      <div className="App">    
          <Routes >
            <Route path='/' element = {<Login/>} />
            <Route path='/cadastro' element = {<Cadastro/>} />
            <Route path='/dashboard' element = {<Dashboard/>}>
                <Route path='account' element = {<MyAccount/>} />
                <Route path='home' element = {<Home/>} />
                <Route path='games' element = {<Games/>} />
            </Route>           
          </Routes>          
      </div> 
      </>
  );
}
