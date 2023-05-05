import { useParams } from "react-router-dom";
import { IoMdBookmark } from "react-icons/io";
import { HiOutlineBookmark } from "react-icons/hi";
import styles from "./styles/Details.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CreateItinerary from "../CreateItinerary/CreateItinerary";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let [city, setCity] = useState("");
  const getCity = async (id) => {
    let { data } = await axios.get(`http://localhost:3001/api/city/${id}`);
    setCity(data.response);
  };
  useEffect(() => {
    getCity(id);
  }, []);

  const clickSave = (clickedSave) => {
    const updateCity =
      city.id === clickedSave.id ? { ...city, isSave: !city.isSave } : city;
    setCity(updateCity);
  };

  return city ? (
    <>
    
    <main className={styles.main}>
      <div className={styles.containerButton}>
        <button onClick={() => navigate("/cities")} className={styles.button}>
          Back
        </button>
      </div>
      <div className={styles.detailsContainer}>
        <img src={city.url} alt="city image" className={styles.img} />
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>
            <p className={styles.city}>{city.name}</p>
            <p className={styles.country}>{city.country}</p>
            <div className={styles.icon}>
              {city.isSave ? (
                <IoMdBookmark onClick={() => clickSave(city)} />
              ) : (
                <HiOutlineBookmark onClick={() => clickSave(city)} />
              )}
            </div>
          </div>
          <p>{city.longDescription}</p>
        </div>
      </div>
    </main>
    <CreateItinerary />
    </>
  ) : (
    <div>City not found</div>
  );
};

export default Details;
