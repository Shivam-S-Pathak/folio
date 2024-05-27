import styles from './navigationBar.module.css'
import { RxCross2 } from "react-icons/rx";

import { CgMenuLeftAlt } from "react-icons/cg";
import SideBar from './sidePanel';
import { GrHomeRounded } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


import React, { useEffect, useState } from 'react';
const NavigationBar = ({ isDarkMode, onToggleDarkMode }) => {

    const scrollToComponent = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [isIconVisible, setIsIconVisible] = useState(true);
    const [isSideVisible, setIsSideVisible] = useState(false);

    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth <= 856) {
                setIsMenuVisible(false);
                setIsIconVisible(true);

            } else {
                setIsMenuVisible(true);
                setIsIconVisible(false);
                setIsSideVisible(false);
            }
        };

        window.addEventListener('resize', resizeHandler);
        resizeHandler();
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    const toggle = () => {
        setIsSideVisible(!isSideVisible); // it sets the opposite value of whatever isSideVisible is holding

    };
    return <>
        <nav className={styles.nagivate}>

            <aside className={`${isSideVisible ? styles.showMenu : styles.hideMenu}`}>
                <SideBar></SideBar>
            </aside>

            <div className={`${styles.menuIcon} ${isIconVisible ? styles.showMenu : styles.hideMenu}`} onClick={toggle}>
                {
                    isSideVisible ? <RxCross2 /> : <CgMenuLeftAlt />
                }
            </div>
            <div className={`${styles.portfolioname} ${isIconVisible ? styles.showMenu : styles.hideMenu}`}>
                Shivam's Portfolio
            </div>
            <div className={`${styles.anchorContainer} ${isMenuVisible ? styles.showMenu : styles.hideMenu}`}>

                <a href="#home" className={styles.anchor} onClick={(e) => {
                    e.preventDefault();
                    scrollToComponent("home")
                }} id="home1"><GrHomeRounded />
                    Home</a>

                <a href="#projects" className={styles.anchor} onClick={(e) => {
                    e.preventDefault();
                    scrollToComponent("projects")
                }} id='home2'><GoProjectSymlink />
                    Projects</a>
                <a href="#techStack" className={styles.anchor} onClick={(e) => {
                    e.preventDefault();
                    scrollToComponent("techStack")
                }} ><GrTechnology />
                    Tech Stack</a>
                <a href="#contactMe" className={styles.anchor} onClick={(e) => {
                    e.preventDefault();
                    scrollToComponent("contactMe")
                }} ><RiContactsLine />
                    Contact me</a>
                <a href="#connectMe" className={styles.anchor} onClick={(e) => {
                    e.preventDefault();
                    scrollToComponent("connectMe")
                }} ><MdConnectWithoutContact />
                    Social media</a>
            </div>
            <button onClick={onToggleDarkMode} className={styles.toddleButton}>
                {isDarkMode ? <MdLightMode className={styles.lightToddleButton} /> : <MdDarkMode className={styles.darkToddleButton} />}
            </button>
        </nav>
    </>
}

export default NavigationBar;