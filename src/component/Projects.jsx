import Styles from "./Projects.module.css";
import Cards from "./projectCards";
import { useEffect, useState, useRef } from "react";
const Projects = ({ isDarkMode, isSideVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  const CardsData = [
    {
      title: "The ScoreBoard",
      image: "/result_img.jpg",
      description:
        "This platform displays academic results and important notices to the students made using Django, SQLite",
      actionLink: "https://github.com/Shivam-S-Pathak/The-Scoreboard",
    },
    {
      title: "Tic Tak Toe game",
      image: "/tic_tak_toe_img.jpg",
      description:
        "This is a interactive game with bright and loud interface made using HTML , CSS , javaScript.",
      actionLink: "https://github.com/Shivam-S-Pathak/Tic-Tak-Toe",
    },
    {
      title: "Rock paper scissor",
      image: "/rock_paper_scissor.jpg",
      description:
        "Another interactive game made using HTML , CSS , javaScript.",
      actionLink: "https://github.com/Shivam-S-Pathak/Stone-paper-scissors",
    },
    {
      title: "To-do list",
      image: "/to_do_list_img.jpg",
      description:
        "this is a to do list for made your working easier made using HTML , CSS, Reactjs , javaScript , Bootstrap.",
      actionLink: "https://github.com/Shivam-S-Pathak/to_do_list",
    },
    {
      title: "Calculator",
      image: "/calculator_img.jpg",
      description:
        "An interractive web calculator made using HTML , CSS, Reactjs , javaScript , Bootstrap.",
      actionLink: "https://github.com/Shivam-S-Pathak/calculator",
    },
    {
      title: "Currency convertor",
      image: "/currency_convertor.jpg",
      description:
        "A currency convertor made using API , HTML , CSS , javaScript.",
      actionLink: "https://github.com/Shivam-S-Pathak/CurrenncyConvertor",
    },
  ];
  const cards = CardsData.map((card) => (
    <Cards
      isDarkMode={isDarkMode}
      key={card.title}
      title={card.title}
      image={card.image}
      description={card.description}
      actionLink={card.actionLink}
    />
  ));
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const resizeHandle = () => {
      if (window.innerWidth <= 1498) {
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
    <>
      <div
        className= {`${isDarkMode ? Styles.projectDark : Styles.projectLight} ${
          isSideVisible ? Styles.projectBlur : ""
        }`}
        id="projects"
      >
        <div className={`${Styles.projectContainer}  ${isVisible ? Styles.visible : Styles.notVisible }`}>
          <div
            className={`${
              isDarkMode ? Styles.headingDark : Styles.headingLight
            }`}
          >
            <h1>Projects</h1>
            {/* <hr className={Styles.line} /> */}
          </div>
          <main ref={observerRef}
            className={ `${Styles.contentContainer} ${
              isResponsive ? Styles.responsive : Styles.notResponsive
            } `}
          >
            {cards}
          </main>
        </div>
      </div>
    </>
  );
};

export default Projects;
