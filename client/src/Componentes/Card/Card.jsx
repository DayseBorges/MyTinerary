import React from "react";
import style from "./styles/Card.module.css";
import { HiOutlineBookmark } from "react-icons/hi";
import { IoMdBookmark } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bulkCreateCities } from "../../redux/store/slices/citiesSlice";
import Pagination from "../Pagination/Pagination";

const Card = () => {
  const cities = useSelector((store) => store.cities.data);
  const pages = useSelector((store) => store.cities.pages);
  const currentPage = useSelector((store) => store.cities.currentPage);
  const dispatch = useDispatch();

  const clickSave = (clickedSave) => {
    const updateCities = cities.map((city) =>
      city._id === clickedSave._id ? { ...city, isSave: !city.isSave } : city
    );
    dispatch(bulkCreateCities(updateCities));
  };

  return (
    <div className={style.main}>
      <div className={style.containerCities}>
        {pages && pages.length === 0 ? (
          <h1>Loading...</h1> 
        ) : 
          pages[currentPage - 1].map((city) => (
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
      <Pagination />
    </div>
  );
};

export default Card;
