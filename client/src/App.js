
import {Header} from './Componentes/Header/Header';
import Cities from './pages/Cities/Cities';
import Contact from './pages/Contact/Contact';
import Details from './Componentes/Details/Details';
import Footer from './Componentes/Footer/Footer';
import Home from "./pages/Home/Home"
import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bulkCreateCities, formatPages, getCountrys } from './redux/store/slices/citiesSlice';
import axios from 'axios'

function App() {

  const dispatch = useDispatch()

  const location = useLocation()
  const cities = useSelector(store => store.cities.data)

  useEffect(()=>{
    axios.get("http://localhost:3001/api/city")
    .then((res)=>{
      if (!cities.length) {
        dispatch(bulkCreateCities(res.data.response))
        dispatch(formatPages(res.data.response))
        dispatch(getCountrys())
      }
    })
  }, [cities, dispatch, location.pathname])

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
