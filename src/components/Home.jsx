import {Link} from "react-router-dom";
import "./Home.css"
const Home = () =>{
    return(
        <>
            <h1>Hola, Bienvenido a EDmarket</h1>
            <p>Conoce las 100 Criptomonedas mas usadas</p>
           <Link to="/criptomonedas">Ver Criptomonedas</Link>
        </>
    );
}

export default Home;