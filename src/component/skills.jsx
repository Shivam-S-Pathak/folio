import Styles from "./skills.module.css";
import { useEffect, useState, useRef } from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { SiMui } from "react-icons/si";

const Skills = ({ isDarkMode, isSideVisible }) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    const resizeHandle = () => {
      if (window.innerWidth <= 889) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
      }
    };
    window.addEventListener("resize", resizeHandle);
    resizeHandle();
    return () => window.removeEventListener("resize", resizeHandle);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <main
      ref={observerRef}
      className={`${isDarkMode ? Styles.skillsDark : Styles.skillsLight} ${
        isSideVisible ? Styles.skillsBlur : ""
      }`}
      id="techStack"
    >
      <div className={`${Styles.mainContainer}`}>
        <div
          className={`${
            isDarkMode ? Styles.headingDark : Styles.headingLight
          } ${isVisible ? Styles.visible : Styles.notVisible}`}
        >
          <h1>Tech Stack</h1>
        </div>
        <div
          className={`${Styles.contentSection} ${
            isResponsive ? Styles.responsive : Styles.notResponsive
          }`}
        >
          <section
            className={`${
              isDarkMode ? Styles.FrontendDark : Styles.FrontendLight
            } ${isVisible ? Styles.visible : Styles.notVisible}`}
          >
            <label
              className={`${Styles.Techtitles}`}
              style={{ color: isDarkMode ? "white" : "black" }}
            >
              Frontend
            </label>
            <hr className={Styles.techTitleUnderline} />
            <article className={Styles.technologyContainer}>
              <label className={Styles.techReact}>
                <RiReactjsFill style={{ fontSize: "4rem" }} />
                React.js
              </label>
              <label className={Styles.techHTML}>
                <IoLogoHtml5 style={{ fontSize: "4rem" }} />
                HTML
              </label>
              <label className={Styles.techCSS}>
                <FaCss3Alt style={{ fontSize: "4rem" }} />
                CSS
              </label>
              <label className={Styles.techJS}>
                <IoLogoJavascript style={{ fontSize: "4rem" }} />
                javaScript
              </label>
              <label className={Styles.techTailwind}>
                <SiTailwindcss style={{ fontSize: "4rem" }} />
                Tailwind
              </label>
              <label className={Styles.techBootstrap}>
                <FaBootstrap style={{ fontSize: "4rem" }} />
                Bootstrap
              </label>
              <label className={Styles.techMui}>
                <SiMui style={{ fontSize: "4rem" }} />
                Material UI
              </label>
            </article>
          </section>
          <section
            className={`${
              isDarkMode ? Styles.DatabaseDark : Styles.DatabaseLight
            } ${isVisible ? Styles.visible : Styles.notVisible}`}
          >
            <label
              className={Styles.Techtitles}
              style={{ color: isDarkMode ? "white" : "black" }}
            >
              Database
            </label>
            <hr className={Styles.techTitleUnderline} />
            <article className={Styles.technologyContainer}>
              <label className={Styles.tecMySQLite}>
                <SiSqlite style={{ fontSize: "4rem" }} />
                SQLite
              </label>
              <label className={Styles.techMongo}>
                <BiLogoMongodb style={{ fontSize: "4rem" }} />
                MongoDB
              </label>
              <label className={Styles.techMySQL}>
                <GrMysql style={{ fontSize: "4rem" }} />
                MySQL
              </label>
              <label className={Styles.techPostgres}>
                <DiPostgresql style={{ fontSize: "4rem" }} />
                PostgresSQL
              </label>
            </article>
          </section>
          <section
            className={`${
              isDarkMode ? Styles.BackendDark : Styles.BackendLight
            } ${isVisible ? Styles.visible : Styles.notVisible}`}
          >
            <label
              className={Styles.Techtitles}
              style={{ color: isDarkMode ? "white" : "black" }}
            >
              Backend
            </label>
             <hr className={Styles.techTitleUnderline} />
            <article className={Styles.technologyContainer}>
              <label className={Styles.techDjango}>
                <SiDjango style={{ fontSize: "4rem" }} />
                Django
              </label>

              <label className={Styles.techNode}>
                <FaNode style={{ fontSize: "4rem" }} />
                Node.js
              </label>
              <label className={Styles.techExpress}>
                <SiExpress style={{ fontSize: "4rem" }} />
                Express.js
              </label>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};
export default Skills;
