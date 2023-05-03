import React, {useState} from 'react';
import {BsSearch} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import styles from './styles/Filterbar.module.css'
import { motion } from "framer-motion";

const Filterbar = () => {
    const [deployCountrys, setDeployCountrys] = useState(false)
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };
    const countrys = [
        { name: "Argentina" },
        { name: "Brasil" },
        { name: "Canadá" },
        { name: "Dinamarca" },
        { name: "Egipto" },
        { name: "Francia" },
        { name: "Grecia" },
        { name: "Honduras" },
        { name: "India" },
        { name: "Japón" }
    ];
    return (
        <div className={styles.main}>
            <div className={styles.inputDiv}>
                <BsSearch/>
                <input className={styles.input} type='text'/>
            </div>
            <div className={styles.containerCountrys}>
                <button className={styles.countrysButton} onClick={()=>setDeployCountrys(!deployCountrys)}>
                    <p>Countrys</p>
                    <IoIosArrowDown className={`${styles.arrow} ${deployCountrys && styles.rotateArrow}`}/>
                </button>
                {deployCountrys && 
                    (<motion.div 
                    className={styles.deployDiv}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.10}} >
                        {countrys.map((el)=>(<div className={styles.checkboxContainer}>
                            <input type="checkbox" id={el.name} name={el.name}/>
                            <label for={el.name}>{el.name}</label>
                        </div>))}
                    </motion.div>)}
            </div>

        </div>
    );
};

export default Filterbar;