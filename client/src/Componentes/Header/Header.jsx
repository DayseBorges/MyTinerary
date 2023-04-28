import React, { useState, useEffect } from "react";
import style from "./styles/Header.module.css";
import logo from "../../assets/images/logo.png";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import useWindowSize from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowSize();
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const navigate = useNavigate();
  const location = useLocation();


  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
        {width > 500 ? (
          <div className={style.containerHeader}>
            <img onClick={() => navigate("/")} className={style.logo} src={logo} alt="logo" />
            <ul className={style.navLinks}>
              <li onClick={() => navigate("/")} className={`${style.link} ${location.pathname === "/" && style.linkActive}`}>Home</li>
              <li onClick={() => navigate("/cities")} className={`${style.link} ${location.pathname === "/cities" && style.linkActive}`}>Cities</li>
              <li onClick={() => navigate("/contact")} className={`${style.link} ${location.pathname === "/contact" && style.linkActive}`}>Contact Us</li>
            </ul>
            <BsPerson className={style.profile} />
          </div>
        ) : (
          <div className={style.containerHeaderMobile}>
            <img onClick={() => navigate("/")} className={style.logoMobile} src={logo} alt="logo" />
            {showMenu && (
              <motion.ul                   
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}} 
                className={style.navLinksMobile}>
                <motion.li
                  onClick={() => navigate("/")}
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{delay: 0.05}}
                  className={`${style.linkMobile} ${location.pathname === "/" && style.linkMobileActive}`}
                >
                  Home
                </motion.li>
                <motion.li
                  onClick={() => navigate("/cities")}
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{delay: 0.10}}
                  className={`${style.linkMobile} ${location.pathname === "/cities" && style.linkMobileActive}`}
                >
                  Cities
                </motion.li>
                <motion.li
                  onClick={() => navigate("/contact")}
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{delay: 0.20}}
                  className={`${style.linkMobile} ${location.pathname === "/contact" && style.linkMobileActive}`}
                >
                  Contact Us
                </motion.li>
              </motion.ul>
            )}
            <div className={style.menuIcon} onClick={handleMenuClick}>
              {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
