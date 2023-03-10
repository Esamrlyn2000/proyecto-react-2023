import { useContext, useEffect, useState } from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import './Menu.css';

const Menu = () => {

    const navigation = useNavigate()

    const usuario = useContext(UserContext)

    return(
       <nav className="main-menu">
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
            <li><NavLink to="/perfil">Perfil {usuario.name}</NavLink></li>
            <li><a onClick={() => {
                localStorage.removeItem("tokenEDmarket")
                navigation("/login")
            }}>Cerrar sesion</a></li>
        </ul>
       </nav> 
    )
}

export default Menu;