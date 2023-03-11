import { useContext, useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import './Menu.css';

const Menu = () => {

    const usuario = useContext(UserContext)

    return(
       <nav className="main-menu">
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
            <li><NavLink to="/perfil">Perfil {usuario.name}</NavLink></li>
        </ul>
       </nav> 
    )
}

export default Menu;