import Styles from "./imageContainer.module.css";
import React, { useState, useEffect, useRef } from "react";
import { RxDownload } from "react-icons/rx";

const ImgContainer = ({ isDarkMode, isSideVisible, isIconVisible }) => {
  const [isVisibleHorizontal, setIsVisibleHorizontal] = useState(false);
  const [isVisibleVertical, setIsVisibleVertical] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth <= 1420) {
        setIsVisibleVertical(false);
        setIsVisibleHorizontal(true);
      } else {
        setIsVisibleVertical(true);
        setIsVisibleHorizontal(false);
      }
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => window.removeEventListener("resize", resizeHandler);
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
      <header
        ref={observerRef}
        className={`${
          isDarkMode ? Styles.headerContainerDark : Styles.headerContainerLight
        } ${isSideVisible ? Styles.headerContainerBlur : ""} `}
      >
        <div
          className={`${Styles.imageBox}  ${
            isVisible ? Styles.visible : Styles.notVisible
          }`}
          id="home"
        >
          <div className={Styles.blurred}>
            <header className={Styles.dp}>
              <img
                src="\bg_thumb-removebg-preview.png"
                alt="Display picture"
                className={Styles.picture}
              />
            </header>
            <article className={Styles.NameContainer}>
              <h1 className={Styles.Name}>Shivam Pathak</h1>
              <h6 className={Styles.handle}>@shivamSpathak</h6>
            </article>

            <hr
              className={`${Styles.vertical_line} ${
                isVisibleVertical ? Styles.show : Styles.hide
              }`}
            ></hr>
            <hr
              className={`${Styles.horizontal_line} ${
                isVisibleHorizontal ? Styles.show : Styles.hide
              }`}
            ></hr>
            <article className={Styles.summary}>
              I'm a passionate front-end and back-end developer with a knack for
              translating creative visions into robust and user-centric web
              experiences. I thrive in environments that utilize both my
              front-end design sensibilities and back-end development prowess. I
              enjoy the challenge of crafting beautiful user interfaces that
              seamlessly integrate with powerful functionality.
              <br />
              <a
                href="src\assets\Resume_Shivam.pdf"
                download="Shivam_Resume.pdf"
              >
                {isIconVisible ? (
                  <button className={`${Styles.downloadButtonDark}`}>
                    <div style={{ display: "flex" }}>
                      <RxDownload
                        style={{ fontSize: "1.5vmax", marginRight: "5px" }}
                      />
                      Download Resume
                    </div>
                  </button>
                ) : (
                  ""
                )}
              </a>
            </article>
          </div>
        </div>
      </header>
    </>
  );
};

export default ImgContainer;
