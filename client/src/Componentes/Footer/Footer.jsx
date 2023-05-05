import React from 'react';
import styles from './styles/Footer.module.css'
import {FiGithub} from 'react-icons/fi'
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className={styles.containerMain}>
            <div className={styles.containerNavigation}>
                <button onClick={() => navigate("/")} className={styles.button}>Home</button>
                <button onClick={() => navigate("/cities")} className={styles.button}>Cities</button>
                <button onClick={() => navigate("/contact")} className={styles.button}>Contact Us</button>
            </div>
            <div className={styles.containerNavigation}>
                <a href='https://github.com/iancamudev' target="_blank" className={styles.a}>
                    <button className={styles.buttonGitHub}><FiGithub className={styles.gitHub} />iancamudev</button>
                </a>
                
                <a href='https://github.com/DayseBorges' target="_blank" className={styles.a}>
                    <button className={styles.buttonGitHub}><FiGithub className={styles.gitHub} />dayseborges</button>
                </a>
            </div>
        </footer>
    );
};

export default Footer;