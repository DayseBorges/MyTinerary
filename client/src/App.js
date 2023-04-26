
import {Header} from './Componentes/Header/Header';
import Cities from './pages/Cities/Cities';
import Contact from './pages/Contact/Contact';
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
        <Route path="/cities" element={<Cities />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
