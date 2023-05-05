
import {Header} from './Componentes/Header/Header';
import Cities from './pages/Cities/Cities';
import Contact from './pages/Contact/Contact';
import Details from './Componentes/Details/Details';
import Footer from './Componentes/Footer/Footer';
import Home from "./pages/Home/Home"
import "./App.css"
import {Routes, Route, useLocation} from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bulkCreateCities, formatPages } from './redux/store/slices/citiesSlice';
import axios from 'axios'

function App() {

  const dispatch = useDispatch()
  const location = useLocation()
  console.log(location);

  useEffect(()=>{
    console.log("se ejecutó el useEffect");
    axios.get("http://localhost:3001/api/city")
    .then((res)=>{
      console.log("se resolvió la promesa");
      dispatch(bulkCreateCities(res.data.response))
      dispatch(formatPages(res.data.response))
    })
  }, [dispatch, location.pathname])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cities" element={<Cities />}/>
        <Route path="/cities/:id" element={<Details />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
