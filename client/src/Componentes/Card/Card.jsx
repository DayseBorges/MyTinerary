import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./styles/Card.module.css";
import { HiOutlineBookmark } from "react-icons/hi";
import { IoMdBookmark } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addOneCity, bulkCreateCities } from "../../redux/store/slices/citiesSlice";

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [citiesPerPage] = useState(4);
  const cities = useSelector((store)=>store.cities.data)
  const dispatch = useDispatch()

  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    if (pageNumber > currentPage && currentPage === pageNumbers.length) {
      setCurrentPage(1);
    } else if (pageNumber < 1 && currentPage === 1) {
      setCurrentPage(pageNumbers.length);
    } else {
      setCurrentPage(pageNumber);
    }
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
    dispatch(bulkCreateCities(updateCities))
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
            <Link to={`/cities/${city._id}`}>
            <img className={style.image} src={city.url} alt="city image" />
            </Link>
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
        >
          <IoMdArrowDropleftCircle />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={
              currentPage === number ? style.numberActive : style.numberDisabled
            }
            onClick={(event) => handleClick(event, number)}
          >
            {number}
          </button>
        ))}
        <button
          className={style.arrow}
          onClick={(event) => handleClick(event, currentPage + 1)}
        >
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </>
  );
};

export default Card;
