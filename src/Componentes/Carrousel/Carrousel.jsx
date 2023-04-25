import React, { useEffect, useState } from "react";
import ciudades from "../../assets/ciudades.json";
import style from "./styles/Carrousel.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useWindowSize from "../../hooks/useWindowSize";

export const Carrousel = () => {
  const {width} = useWindowSize()
  const [images, setImages] = useState(ciudades);
  
  let imagesPerSlide = width > 500 ? 4 : 2
  let totalSlides = ciudades.length / imagesPerSlide


  const slidesGenerator = () => {
    let ciudadesCopy = ciudades
    let slidesFunction = []
    for (let i = totalSlides; i > 0; i--) {
      let porcion = ciudadesCopy.slice(0, imagesPerSlide)
      ciudadesCopy = ciudadesCopy.slice(imagesPerSlide)
      slidesFunction.push(porcion)
    }
    return slidesFunction
  }

  let slides = slidesGenerator()

  let [currentSlide, setCurrentSlide] = useState(0)
  let [loaded, setLoaded] = useState(false)

  const forward = () => {
    setLoaded(false)
   
      if (currentSlide + 1 < totalSlides) {
      setCurrentSlide(currentSlide+1)
      
    } else {
      setCurrentSlide(0)
    }

  }

  const back = () => {

    if (currentSlide > 0) {
      setCurrentSlide(currentSlide-1)
      
    } else {
      setCurrentSlide(totalSlides-1)
    }
  }


  useEffect(()=>{
    let myInterval = setInterval(forward,4000)
    return () => clearInterval(myInterval)
  })

  return (
    <div className={style.containerMain}>
      <IoIosArrowForward className={`${style.arrowForward} ${style.arrow}`} onClick={forward}/>
      <div className={style.containerCarrousel}>
        {slides[currentSlide].map((city) => (
          <div className={`${style.containerImages}`}>
             <div
              style={{ backgroundImage: `url(${city.url})` }}
              className={style.imageCarrousel}
            /> 
            <p className={style.p}>{city.name}</p>
          </div>
        ))}
      </div>
      <IoIosArrowBack className={`${style.arrowBack} ${style.arrow}`} onClick={back}/>
      <div className={style.containerCounter}>
          {
            slides.map((el, index)=>(<div className={`${style.counter} ${index === currentSlide && style.counterActive}`}  onClick={()=>{setCurrentSlide(index)}}></div>))
          }
      </div>
    </div>
  );
};
