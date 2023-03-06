import "./cripto.css";

const Cripto = ({name, priceUSD, symbol, changePercent24Hr}) => {
    return(
        <div className="cripto">
            <h3>{name}</h3>
            <div className="info">
                <p><span className="label">Precio: </span>{parseFloat(priceUSD).toFixed(4)}</p>
                <p><span className="label">Codigo: </span>{symbol}</p>
                <p>
                    <span className="label">Variacion 24hrs: </span>
                    <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
                        {parseFloat(changePercent24Hr).toFixed(3)}%
                    </span>
                    
                    </p>
            </div>
        </div>
    )
}

export default Cripto;