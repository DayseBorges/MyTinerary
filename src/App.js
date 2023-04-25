import {Carrousel} from './Componentes/Carrousel/Carrousel';
import {Welcome} from './Componentes/Welcome/Welcome';
import {Button} from './Componentes/Button/Button';

import {Header} from './Componentes/Header/Header';

import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Carrousel />
      <Welcome />
      <Button />
      <Footer/>
    </div>
  );
}

export default App;
