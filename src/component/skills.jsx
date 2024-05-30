import Styles from "./skills.module.css";
import { useEffect, useState, useRef } from "react";

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
      className={`${isDarkMode ? Styles.skillsDark : Styles.skillsLight} ${
        isSideVisible ? Styles.skillsBlur : ""
      }`}
      id="techStack"
    >
      <div
        className={`${Styles.mainContainer}  ${
          isVisible ? Styles.visible : Styles.notVisible
        }`}
      >
        <div className={isDarkMode ? Styles.headingDark : Styles.headingLight}>
          <h1>Tech Stack</h1>
        </div>
        <div
          ref={observerRef}
          className={`${Styles.contentSection} ${
            isResponsive ? Styles.responsive : Styles.notResponsive
          }`}
        >
          <section className={`${Styles.Frontend} `}>
            <label className={Styles.Techtitles}>Frontend</label>
            <article className={Styles.technologyContainer}>
              <label className={Styles.techHTML}>HTML</label>
              <label className={Styles.techCSS}>CSS</label>
              <label className={Styles.techJS}>javaScript</label>
              <label className={Styles.techTailwind}>Tailwind</label>
              <label className={Styles.techBootstrap}>Bootstrap</label>
              <label className={Styles.techReact}>React.js</label>
            </article>
          </section>
          <section className={`${Styles.Backend} `}>
            <label className={Styles.Techtitles}>Backend</label>
            <article className={Styles.technologyContainer}>
              <label className={Styles.techDjango}>Django</label>
              <label className={Styles.techNode}>Node.js</label>
              <label className={Styles.techExpress}>Express.js</label>
            </article>
          </section>
          <section className={`${Styles.Database}`}>
            <label className={Styles.Techtitles}>Database</label>
            <article className={Styles.technologyContainer}>
              <label className={Styles.tecMySQLite}>MySQLite</label>
              <label className={Styles.techMongo}>MongoDB</label>
              <label className={Styles.techMySQL}>MySQL</label>
              <label className={Styles.techPostgres}>PostgresSQL</label>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};
export default Skills;
