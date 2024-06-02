import styles from "./navigationBar.module.css";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenu } from "react-icons/hi";
import { GrHomeRounded } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { MdConnectWithoutContact } from "react-icons/md";

// import extra
import { PiSunFill } from "react-icons/pi";
import { PiSunLight } from "react-icons/pi";
import { PiMoonStarsFill } from "react-icons/pi";
import { PiMoonStarsLight } from "react-icons/pi";

import React, { useEffect, useState } from "react";
const NavigationBar = ({
  isDarkMode,
  onToggleDarkMode,
  onToggleLightMode,
  isIconVisible,
  isSideVisible,
  toggle,
}) => {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth <= 856) {
        setIsMenuVisible(false);
      } else {
        setIsMenuVisible(true);
      }
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <>
      <div
        className={`${styles.menuIcon} ${
          isIconVisible ? styles.showMenu : styles.hideMenu
        } ${isDarkMode ? styles.darkMode : styles.lightMode}`}
        onClick={toggle}
      >
        {isSideVisible ? <RxCross2  style={{color:'white'}}/> : <HiOutlineMenu />}
      </div>

      <nav
        className={`${styles.nagivate} ${
          isSideVisible ? styles.nagivateBlur : ""
        }`}
      >
        <div
          className={`${styles.portfolioname} ${
            isIconVisible ? styles.showMenu : styles.hideMenu
          } ${isDarkMode ? styles.darkMode : styles.lightMode}`}
        >
          Shivam's Portfolio
        </div>
        <div
          className={`${styles.anchorContainer} ${
            isMenuVisible ? styles.showMenu : styles.hideMenu
          }`}
        >
          <a
            href="#home"
            className={`${styles.anchor}  ${
              isDarkMode ? styles.darkMode : styles.lightMode
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToComponent("home");
            }}
            id="home1"
          >
            Home
          </a>

          <a
            href="#projects"
            className={`${styles.anchor}  ${
              isDarkMode ? styles.darkMode : styles.lightMode
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToComponent("projects");
            }}
            id="home2"
          >
            Projects
          </a>
          <a
            href="#techStack"
            className={`${styles.anchor}  ${
              isDarkMode ? styles.darkMode : styles.lightMode
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToComponent("techStack");
            }}
          >
            Tech Stack
          </a>
          <a
            href="#contactMe"
            className={`${styles.anchor}  ${
              isDarkMode ? styles.darkMode : styles.lightMode
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToComponent("contactMe");
            }}
          >
            Contact me
          </a>
          <a
            href="#connectMe"
            className={`${styles.anchor}  ${
              isDarkMode ? styles.darkMode : styles.lightMode
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToComponent("connectMe");
            }}
          >
            Social media
          </a>
        </div>
        <div
          className={`${
            isDarkMode
              ? styles.buttonContainerDark
              : styles.buttonContainerLight
          }`}
        >
          {isDarkMode ? (
            <button
              className={`${
                isDarkMode
                  ? styles.ButtonDisableDark
                  : styles.ButtonDisableLight
              }`}
              onClick={onToggleLightMode}
            >
              <PiSunLight />
            </button>
          ) : (
            <button
              className={`${
                isDarkMode ? styles.ButtonActiveDark : styles.ButtonActiveLight
              }`}
              onClick={onToggleLightMode}
            >
              <PiSunFill />
            </button>
          )}
          {isDarkMode ? (
            <button
              className={`${
                isDarkMode ? styles.ButtonActiveDark : styles.ButtonActiveLight
              }`}
              onClick={onToggleDarkMode}
            >
              <PiMoonStarsFill />
            </button>
          ) : (
            <button
              className={`${
                isDarkMode
                  ? styles.ButtonDisableDark
                  : styles.ButtonDisableLight
              }`}
              onClick={onToggleDarkMode}
            >
              <PiMoonStarsLight />
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
