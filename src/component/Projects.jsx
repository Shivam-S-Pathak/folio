import Styles from "./Projects.module.css";
import Cards from "./projectCards";
import { useEffect, useState, useRef } from "react";

const Projects = ({ isDarkMode, isSideVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  // Categorize the projects into Full-Stack and Others
  const fullStackProjects = [
    {
      title: "The ScoreBoard",
      image: "/result_img.jpg",
      description:
        "This platform displays academic results and important notices to the students made using Django, SQLite",
      codeLink: "https://github.com/Shivam-S-Pathak/The-Scoreboard",
      liveLink: "https://shivampathak.pythonanywhere.com/",
    },
    {
      title: "BloggIT",
      image: "/bloggit.jpg",
      description:
        "A blogging and journaling platform build using the modern technologies like MERN stack , material UI.",
      codeLink: "https://github.com/Shivam-S-Pathak/bloggitServer",
      liveLink: "https://bloggitstories.vercel.app/",
    },
    {
      title: "Eventify",
      image: "/eventify.png",
      description:
        "One stop solution for both organisers and participents , build using modern technologies like MERN stack , material UI.",
      codeLink: "https://github.com/Shivam-S-Pathak/eventify",
      liveLink: "https://eventify-nass.vercel.app/",
    },
  ];

  const otherProjects = [
    {
      title: "Currency convertor",
      image: "/currency_convertor.jpg",
      description:
        "A currency converter made using API, HTML, CSS, JavaScript.",
      codeLink: "https://github.com/Shivam-S-Pathak/CurrenncyConvertor",
      liveLink: "https://shivam-s-pathak.github.io/CurrenncyConvertor/",
    },
    {
      title: "To-do list",
      image: "/to_do_list_img.jpg",
      description:
        "This is a to-do list to make your working easier, made using HTML, CSS, Reactjs, JavaScript, Bootstrap.",
      codeLink: "https://github.com/Shivam-S-Pathak/toDo",
      liveLink: "https://to-do-list-shivam-pathak.vercel.app/",
    },
    {
      title: "Calculator",
      image: "/calculator_img.jpg",
      description:
        "An interactive web calculator made using HTML, CSS, Reactjs, JavaScript, Bootstrap.",
      codeLink: "https://github.com/Shivam-S-Pathak/calculator",
      liveLink: "",
    },
    {
      title: "Tic Tak Toe game",
      image: "/tic_tak_toe_img.jpg",
      description:
        "This is an interactive game with a bright and loud interface made using HTML, CSS, JavaScript.",
      codeLink: "https://github.com/Shivam-S-Pathak/Tic-Tak-Toe",
      liveLink: "https://shivam-s-pathak.github.io/Tic-Tak-Toe/",
    },
    {
      title: "Rock paper scissor",
      image: "/rock_paper_scissor.jpg",
      description: "Another interactive game made using HTML, CSS, JavaScript.",
      codeLink: "https://github.com/Shivam-S-Pathak/Stone-paper-scissors",
      liveLink: "https://shivam-s-pathak.github.io/Stone-paper-scissors/",
    },
  ];

  const renderCards = (data) =>
    data.map((card) => (
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
      setIsResponsive(window.innerWidth <= 1498);
    };
    window.addEventListener("resize", resizeHandle);
    resizeHandle();
    return () => window.removeEventListener("resize", resizeHandle);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
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
        }`}
        id="projects"
      >
        <div className={Styles.projectContainer}>
          {/* Section for Full-Stack Projects */}
          <div
            className={`${
              isDarkMode ? Styles.headingDark : Styles.headingLight
            }  ${isVisible ? Styles.visible : Styles.notVisible}`}
          >
            <h1>Full-Stack Projects</h1>
          </div>
          <main
            className={`${Styles.contentContainer} ${
              isResponsive ? Styles.responsive : Styles.notResponsive
            }`}
          >
            {renderCards(fullStackProjects)}
          </main>

          {/* Section for Other Projects */}
          <div
            className={`${
              isDarkMode ? Styles.headingDark : Styles.headingLight
            }  ${isVisible ? Styles.visible : Styles.notVisible}`}
          >
            <h1>Other Projects</h1>
          </div>
          <main
            className={`${Styles.contentContainer} ${
              isResponsive ? Styles.responsive : Styles.notResponsive
            }`}
          >
            {renderCards(otherProjects)}
          </main>
        </div>
      </div>
    </>
  );
};

export default Projects;
