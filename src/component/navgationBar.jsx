import styles from "./navigationBar.module.css";
import { RxCross2, RxFontSize } from "react-icons/rx";
import { HiOutlineMenu } from "react-icons/hi";
import { RxDownload } from "react-icons/rx";

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
        {isSideVisible ? (
          <RxCross2 style={{ color: "white" }} />
        ) : (
          <HiOutlineMenu />
        )}
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
          <a href="/Resume_Shivam.pdf" download="Shivam_Resume.pdf">
            <button
              className={`${
                isDarkMode
                  ? styles.downloadButtonDark
                  : styles.downloadButtonLight
              }`}
            >
              <div style={{ display: "flex" }}>
                <RxDownload style={{ fontSize: "20px", marginRight: "5px" }} />
                Download Resume
              </div>
            </button>
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
