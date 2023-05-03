import { useParams } from "react-router-dom";
import { IoMdBookmark } from "react-icons/io";
import { HiOutlineBookmark } from "react-icons/hi";
import styles from "./styles/Details.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Details = () => {
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
    <main className={styles.main}>
      <div className={styles.detailsContainer}>
        <img src={city.url} alt="" className={styles.img} />
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
  ) : (
    <div>No hay city</div>
  );
};

export default Details;
