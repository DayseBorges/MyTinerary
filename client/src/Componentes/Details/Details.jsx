import { useParams } from "react-router-dom"
import { IoMdBookmark } from "react-icons/io";
import { HiOutlineBookmark } from "react-icons/hi";
import styles from './styles/Details.module.css'
import React, { useState, useEffect } from "react";
import axios from "axios";

const Details = () => {
    const { id } = useParams()
    let [city, setCity] = useState('')
    const getCity = async (id) => {
        let {data} = await axios.get(`http://localhost:3001/api/city/${id}`)
        setCity(data.response)
    }
    useEffect(()=>{
        getCity(id)
    },[])

    return city 
    ? (
    <main className={styles.main}>
        <div className={styles.detailsContainer}>
            <img src={city.url} alt="" className={styles.img} />
            <div className={styles.textContainer}>
                <div className={styles.titleContainer}>
                    <p>{city.name}</p>
                    <p>Argentina</p>
                    <HiOutlineBookmark/>
                </div>
                <p>Recife es la capital del estado de Pernambuco
                en Brasil, famosa por sus playas, su arquitectura 
                colonial, su vibrante vida nocturna y su patrimonio cultural.
                 Con una mezcla única de influencias africanas, indígenas y 
                europeas, Recife es una ciudad vibrante y colorida que 
                ofrece una experiencia inolvidable a los visitantes.</p>
            </div>
        </div>
    </main>
    ) 
    : (<div>No hay city</div>);

}

export default Details;