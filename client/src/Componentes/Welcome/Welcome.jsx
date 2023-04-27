import React from "react";
import style from "./styles/Welcome.module.css";
import logo from "../../assets/images/logo.png";
import { TbLocation } from "react-icons/tb";

export const Welcome = () => {
  return (
    <>
      <div className={style.containerWelcome}>
        <div className={style.containerLeft}>
        <h1 className={style.name}>MyTinerary</h1>
        <p className={style.text}>
          Find your <span className={style.orange}>perfect trip</span>, designed{" "}
          <br />
          by insiders who know and{" "}
          <span className={style.orange}>love their cities</span>
        </p>
        <button className={style.button}>
          <TbLocation className={style.icon} /> Explore Cities
        </button>
        </div>
          <img className={style.imgLogo} src={logo} alt="" />
      </div>
    </>
  );
};
