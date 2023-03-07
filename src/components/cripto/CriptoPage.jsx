import { useParams } from "react-router-dom";
import usePetition from "../hooks/usePetition";
import CriptoHistory from "./info/CriptoHistoria";
import CriptoInfo from "./info/CriptoInfo";
import "./CriptoPage.css"

const CriptoPage = () => {
  const params = useParams();

  const cripto = usePetition(`assets/${params.id}`);
  const history = usePetition(`assets/${params.id}/history?interval=d1`);

  return (
    <>
      <h1>Soy una Criptomoneda {params.id}</h1>
      {cripto && ( <CriptoInfo  cripto={cripto}/> )}
      <h2>Historial</h2>
      {history && (<CriptoHistory history={history}/>)}
    </>
  );
};

export default CriptoPage;
