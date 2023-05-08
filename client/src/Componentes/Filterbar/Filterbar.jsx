import React, {useEffect, useState} from 'react';
import {BsSearch} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import styles from './styles/Filterbar.module.css'
import { motion } from "framer-motion";
import {useDispatch, useSelector} from 'react-redux'
import { backupCities, filterCities, formatPages, getCountrys, setPage } from '../../redux/store/slices/citiesSlice';

const Filterbar = () => {
    const [deployCountrys, setDeployCountrys] = useState(false)
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };
    const countrys = useSelector((store)=>store.cities.countrys)
    const dispatch = useDispatch()
    const [countrysCheck, setCountrysCheck] = useState([])
    return (
        <div className={styles.main}>
            <div className={styles.inputDiv}>
                <BsSearch/>
                <input className={styles.input} type='text' onChange={(e)=>{
                    !e.target.value.length && dispatch(backupCities())
                    dispatch(filterCities({input: e.target.value, countrys}))
                    dispatch(formatPages())
                    }}/>
            </div>
            <div className={styles.containerCountrys}>
                <button className={styles.countrysButton} onClick={()=>{setDeployCountrys(!deployCountrys); console.log(countrys)}}>
                    <p>Countrys</p>
                    <IoIosArrowDown className={`${styles.arrow} ${deployCountrys && styles.rotateArrow}`}/>
                </button>
                {deployCountrys && 
                    (<motion.div 
                    className={styles.deployDiv}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.10}} >
                        {countrys.map((el, index)=>(<div key={index} className={styles.checkboxContainer}>
                            <input type="checkbox" id={el} name={el} onChange={(e)=>{
                                console.log(e.target.checked)
                                if (e.target.checked) {
                                    setCountrysCheck(countrysCheck.concat(el))
                                    dispatch(filterCities({countrys: countrysCheck.concat(el)}))
                                    dispatch(formatPages())
                                } else {
                                    setCountrysCheck(countrysCheck.map((country)=>country !== el))
                                    dispatch(filterCities({countrys: countrysCheck.map((country)=>country !== el)}))
                                    dispatch(formatPages())
                                }
                                
                            }}/>
                            <label htmlFor={el}>{el}</label>
                        </div>))}
                    </motion.div>)}
            </div>

        </div>
    );
};

export default Filterbar;