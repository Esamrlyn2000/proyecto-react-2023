import Cripto from "./cripto/Cripto";
import "./Cuadricula.css";
import usePetition from "./hooks/usePetition";


function Cuadricula() {

  const [criptos, Cargando] = usePetition("assets");

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
          id={id}
          />
        ))
        }
      </div>

    </div>
    
  )
}

export default Cuadricula;
