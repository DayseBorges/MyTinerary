import {Carrousel} from './Componentes/Carrousel/Carrousel';
import {Welcome} from './Componentes/Welcome/Welcome';
import {Button} from './Componentes/Button/Button';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Carrousel />
      <Welcome />
      <Button />
      <Footer/>
    </div>
  );
}

export default App;
