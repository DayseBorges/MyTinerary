import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./styles/Card.module.css";
import { HiOutlineBookmark } from "react-icons/hi";
import { IoMdBookmark } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Card = () => {
  const [cities, setCities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [citiesPerPage] = useState(4);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3001/api/city");
        setCities(res.data.response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Array.from(
    { length: Math.ceil(cities.length / citiesPerPage) },
    (_, index) => index + 1
  );

  const indexOfLastCity = currentPage * citiesPerPage;
  const indexOfFirstCity = indexOfLastCity - citiesPerPage;
  const currentCities = cities.slice(indexOfFirstCity, indexOfLastCity);

  const clickSave = (clickedSave) => {
    const updateCities = cities.map((city) =>
      city._id === clickedSave._id ? { ...city, isSave: !city.isSave } : city
    );
    setCities(updateCities);
  };

  return (
    <>
      <div className={style.containerCities}>
        {currentCities.map((city) => (
          <div className={style.containerCard} key={city._id}>
            <div className={style.icon}>
              {city.isSave ? (
                <IoMdBookmark onClick={() => clickSave(city)} />
              ) : (
                <HiOutlineBookmark onClick={() => clickSave(city)} />
              )}
            </div>
            <img className={style.image} src={city.url} alt="city image" />
            <p className={style.country}>{city.country}</p>
            <h2 className={style.city}>{city.name}</h2>
            <p>{city.description}</p>
          </div>
        ))}
      </div>
      <div className={style.pagination}>
        <button
          className={style.arrow}
          onClick={(event) => handleClick(event, currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoMdArrowDropleftCircle />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={
              currentPage === number ? style.numberActive : style.NumberDisabled
            }
            onClick={(event) => handleClick(event, number)}
          >
            {number}
          </button>
        ))}
        <button
          className={style.arrow}
          onClick={(event) => handleClick(event, currentPage + 1)}
          disabled={currentPage >= pageNumbers.length}
        >
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </>
  );
};

export default Card;
