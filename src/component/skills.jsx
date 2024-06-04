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
          className={`${isDarkMode ? Styles.headingDark : Styles.headingLight} ${
            isVisible ? Styles.visible : Styles.notVisible
          }`}
        >
          <h1>Tech Stack</h1>
        </div>
        <div
          className={`${Styles.contentSection} ${
            isResponsive ? Styles.responsive : Styles.notResponsive
          }`}
        >
          <section
            className={`${Styles.Frontend} ${
              isVisible ? Styles.visible : Styles.notVisible
            }`}
          >
            <label className={Styles.Techtitles}>Frontend</label>
            <article className={Styles.technologyContainer}>
              <label className={Styles.techHTML}>
                <IoLogoHtml5 style={{ fontSize: "14vmin" }} />
                HTML
              </label>
              <label className={Styles.techCSS}>
                <FaCss3Alt style={{ fontSize: "14vmin" }} />
                CSS
              </label>
              <label className={Styles.techJS}>
                <IoLogoJavascript style={{ fontSize: "14vmin" }} />
                javaScript
              </label>
              <label className={Styles.techTailwind}>
                <SiTailwindcss style={{ fontSize: "14vmin" }} />
                Tailwind
              </label>
              <label className={Styles.techBootstrap}>
                <FaBootstrap style={{ fontSize: "14vmin" }} />
                Bootstrap
              </label>
              <label className={Styles.techReact}>
                <RiReactjsFill style={{ fontSize: "14vmin" }} />
                React.js
              </label>
            </article>
          </section>
          <section
            className={`${Styles.Backend} ${
              isVisible ? Styles.visible : Styles.notVisible
            }`}
          >
            <label className={Styles.Techtitles}>Backend</label>
            <article className={Styles.technologyContainer}>
              <label className={Styles.techDjango}>
                <SiDjango style={{ fontSize: "14vmin" }} />
                Django
              </label>

              <label className={Styles.techNode}>
                <FaNode style={{ fontSize: "14vmin" }} />
                Node.js
              </label>
              <label className={Styles.techExpress}>
                <SiExpress style={{ fontSize: "14vmin" }} />
                Express.js
              </label>
            </article>
          </section>
          <section
            className={`${Styles.Database} ${
              isVisible ? Styles.visible : Styles.notVisible
            }`}
          >
            <label className={Styles.Techtitles}>Database</label>
            <article className={Styles.technologyContainer}>
              <label className={Styles.tecMySQLite}>
                <SiSqlite style={{ fontSize: "14vmin" }} />
                SQLite
              </label>
              <label className={Styles.techMongo}>
                <BiLogoMongodb style={{ fontSize: "14vmin" }} />
                MongoDB
              </label>
              <label className={Styles.techMySQL}>
                <GrMysql style={{ fontSize: "14vmin" }} />
                MySQL
              </label>
              <label className={Styles.techPostgres}>
                <DiPostgresql style={{ fontSize: "14vmin" }} />
                PostgresSQL
              </label>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};
export default Skills;
