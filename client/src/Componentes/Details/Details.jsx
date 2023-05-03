import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios from "axios";

const Details = () => {
    const { id } = useParams()
    const [city, setCity] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(`http://localhost:3001/api/city/${id}`);
            setCity(res.data.response);
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, []);

    return ( 
        <div>
           
                <div>
                    <h1>{city.name}</h1>
                </div>
        
        </div>
    );
}

export default Details;