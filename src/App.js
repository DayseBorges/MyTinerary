
import {Header} from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import Home from "./pages/Home/Home"
import "./App.css"
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
