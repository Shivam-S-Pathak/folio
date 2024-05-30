import Styles from "./projectsCards.module.css";
import { useState, useEffect, useRef } from "react";

const Cards = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();
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
    <>
      <a
        ref={observerRef}
        href={props.actionLink}
        className={`${
          props.isDarkMode ? Styles.anchorLinkDark : Styles.anchorLinkLight
        } ${isVisible ? Styles.visible : Styles.notVisible}`}
      >
        <main
          className={
            props.isDarkMode
              ? Styles.mainContainerDark
              : Styles.mainContainerLight
          }
        >
          <img
            src={props.image}
            alt="result img"
            className={Styles.imgContainer}
          />
          <title className={Styles.title}>
            <label
              className={
                props.isDarkMode ? Styles.labelDark : Styles.labelLight
              }
            >
              {props.title}
            </label>
            <label
              className={
                props.isDarkMode
                  ? Styles.discriptionDark
                  : Styles.discriptionLight
              }
            >
              {props.description}
            </label>
          </title>
        </main>
      </a>
    </>
  );
};
export default Cards;
