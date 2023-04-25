import React from "react";
import style from "./styles/Welcome.module.css";
import logo from "../../assets/images/logo.png";

export const Welcome = () => {

  return (
    <>
      <div className={style.containerWelcome}>
        <h1 className={style.name}>MyTinerary</h1>
        <p className={style.text}>
          Find your <span className={style.orange}>perfect trip</span>, designed <br />
          by insiders who know and <span className={style.orange}>love their cities</span> 
        </p>
      </div>
      <div className={style.imgLogo}>
        <img src={logo} alt="" />
      </div>
    </>
  );
};
