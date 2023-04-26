import React from 'react';
import styles from './styles/Footer.module.css'
import {FiGithub} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className={styles.containerMain}>
            <div className={styles.containerNavigation}>
                <button className={styles.button}>Home</button>
                <button className={styles.button}>Cities</button>
                <button className={styles.button}>Contact Us</button>
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