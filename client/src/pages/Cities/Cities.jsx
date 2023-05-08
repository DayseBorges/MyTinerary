import Filterbar from '../../Componentes/Filterbar/Filterbar'
import Card from "../../Componentes/Card/Card";

const Cities = () => {
    return ( 
        <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
            <Filterbar />
            <Card />
        </div>
   );
}
 
export default Cities;