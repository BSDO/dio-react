import {Link} from "react-router-dom";
import { Button } from "../../compenents/Button";
import { Titulo } from './style.js';
import { Header } from "../../compenents/Header/index.jsx";

const Home = () => {
    return (<>
       
        <Header>
            <Titulo> Estou na home</Titulo>
        </Header>
           
            <Button title="Ligfar agor"> </Button>

        <Link to="/login"> Voltar  </Link>
    </>);
}
  
export { Home };