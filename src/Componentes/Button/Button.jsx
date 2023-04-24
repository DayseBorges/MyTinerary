import React from "react";
import {TbLocation} from "react-icons/tb";
import style from "./Button.module.css"

export const Button = () => {
    return (
        <div className={style.containerButton}>
            <button className={style.button}><TbLocation /> Explore Cities</button>
        </div>
    )
}

