import React, { useState, useEffect } from "react";
import style from "./styles/Header.module.css";
import logo from "../../assets/images/logo.png";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {width} = useWindowSize();

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
        {width > 500 ? (
          <div className={style.containerHeader}>
            <img className={style.logo} src={logo} alt="logo" />
            <ul className={style.navLinks}>
              <li className={style.link}>Home</li>
              <li className={style.link}>Cities</li>
              <li className={style.link}>Contact Us</li>
            </ul>
            <BsPerson className={style.profile} />
          </div>
        ) : (
          <div className={style.containerHeaderMobile}>
            <img className={style.logoMobile} src={logo} alt="logo" />
            {showMenu && (
            <ul className={style.navLinksMobile}>
              <li className={style.linkMobile}>Home</li>
              <li className={style.linkMobile}>Cities</li>
              <li className={style.linkMobile}>Contact Us</li>
            </ul>
            )}
            <div className={style.menuIcon} onClick={handleMenuClick}>
              <AiOutlineMenu />
            </div>
          </div>
        )}
      </header>
    </>
  );
};
