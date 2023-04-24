import React, { useEffect, useState } from "react";
import ciudades from "../../assets/ciudades.json";
import style from "./Carrousel.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const Carrousel = () => {
  const [images, setImages] = useState();

  return (
    <>
      <div className={style.containerCarrousel}>
        {ciudades.map((city) => (
          <div className={style.containerImages}>
            <div
              style={{ backgroundImage: `url(${city.url})` }}
              className={style.imageCarrousel}
            />
            <p className={style.p}>{city.name}</p>
          </div>
        ))}
      </div>
      <div>
        <IoIosArrowBack />
        <IoIosArrowForward />
      </div>
    </>
  );
};
