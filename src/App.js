import {Carrousel} from './Componentes/Carrousel/Carrousel';
import {Welcome} from './Componentes/Welcome/Welcome';
import {Button} from './Componentes/Button/Button';
import {Header} from './Componentes/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Carrousel />
      <Welcome />
      <Button />
    </div>
  );
}

export default App;
