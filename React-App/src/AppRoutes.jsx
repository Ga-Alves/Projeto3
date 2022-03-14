import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import Home from './pages/DashBoard/Home/Home';
import MyAccount from './pages/DashBoard/MyAccount/MyAccount';
import Games from './pages/DashBoard/Games/Games';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/DashBoard/DashBoard';

import { AuthProvider, AuthContext } from "./contexts/auth";
import React, { useState, useContext } from "react";



const AppRoutes = () =>{

    const Private = ({children}) =>{

        const {authenticated, loading} = useContext(AuthContext);

        if(loading){
            return <div>Carregando</div>;
        }


        if(!authenticated){
            return <Navigate to="/"></Navigate>;
        }

        return children;

    }

    return(
            <Router>
                <AuthProvider>
                    <Routes>
                    <Route exact path='/' element = {<Login/>} />
                    <Route path='/cadastro' element = {<Cadastro/>} />
                        <Route path='/dashboard' element = {<Private><Dashboard/></Private>}>
                            <Route path='account' element = {<MyAccount/>} />
                            <Route path='home' element = {<Home/>} />
                            <Route path='games' element = {<Games/>} />
                        </Route>          
                    </Routes>
                </AuthProvider>
            </Router>
    )
}

export default AppRoutes;