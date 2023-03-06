import { useEffect, useState } from "react"
import axios from "axios";
import Cripto from "./Cripto";
import "./App.css";


function App() {

  const API_URL = import.meta.env.VITE_API_URL;
  const [criptos, setCriptos] = useState();

  useEffect(() => {
    axios.get(`${API_URL}assets`)
    .then((data) => {
      setCriptos(data.data.data)
    })
    .catch(() => {
      console.error("la peticion fallo")
    })
  }, [] )

  if(!criptos) return <span> Cargando...</span>

return (
    <div className="app-container">
      <h2>Lista de Criptomonedas</h2>
      <div className="cripto-container">
        {
        criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
          <Cripto 
          key={id} 
          name={name} 
          priceUSD={priceUsd} 
          symbol={symbol} 
          changePercent24Hr={changePercent24Hr}
          />
        ))
        }
      </div>

    </div>
    
  )
}

export default App
