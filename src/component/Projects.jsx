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
      codeLink: "https://github.com/Shivam-S-Pathak/The-Scoreboard",
      liveLink: "",
    },
    {
      title: "Currency convertor",
      image: "/currency_convertor.jpg",
      description:
        "A currency convertor made using API , HTML , CSS , javaScript.",
      codeLink: "https://github.com/Shivam-S-Pathak/CurrenncyConvertor",
      liveLink: "https://shivam-s-pathak.github.io/CurrenncyConvertor/",
    },
    {
      title: "Tic Tak Toe game",
      image: "/tic_tak_toe_img.jpg",
      description:
        "This is a interactive game with bright and loud interface made using HTML , CSS , javaScript.",
      codeLink: "https://github.com/Shivam-S-Pathak/Tic-Tak-Toe",
      liveLink: "https://shivam-s-pathak.github.io/Tic-Tak-Toe/",
    },
    {
      title: "Rock paper scissor",
      image: "/rock_paper_scissor.jpg",
      description:
        "Another interactive game made using HTML , CSS , javaScript.",
      codeLink: "https://github.com/Shivam-S-Pathak/Stone-paper-scissors",
      liveLink: "https://shivam-s-pathak.github.io/Stone-paper-scissors/",
    },
    {
      title: "To-do list",
      image: "/to_do_list_img.jpg",
      description:
        "this is a to do list for made your working easier made using HTML , CSS, Reactjs , javaScript , Bootstrap.",
      codeLink: "https://github.com/Shivam-S-Pathak/to_do_list",
      liveLink: "",
    },
    {
      title: "Calculator",
      image: "/calculator_img.jpg",
      description:
        "An interractive web calculator made using HTML , CSS, Reactjs , javaScript , Bootstrap.",
      codeLink: "https://github.com/Shivam-S-Pathak/calculator",
      liveLink: "",
    },
    
  ];
  const cards = CardsData.map((card) => (
    <Cards
      isDarkMode={isDarkMode}
      key={card.title}
      title={card.title}
      image={card.image}
      description={card.description}
      codeLink={card.codeLink}
      liveLink={card.liveLink}
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
        ref={observerRef}
        className={`${isDarkMode ? Styles.projectDark : Styles.projectLight} ${
          isSideVisible ? Styles.projectBlur : ""
        }  `}
        id="projects"
      >
        <div className={`${Styles.projectContainer}`}>
          <div
            className={`${
              isDarkMode ? Styles.headingDark : Styles.headingLight
            }  ${isVisible ? Styles.visible : Styles.notVisible}`}
          >
            <h1>Projects</h1>
            {/* <hr className={Styles.line} /> */}
          </div>
          <main
            className={`${Styles.contentContainer} ${
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
