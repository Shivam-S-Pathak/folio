import NavigationBar from "./component/navgationBar";
import ImgContainer from "./component/imageContainer";
import Projects from "./component/Projects";
import Contact from "./component/contactForm";
import Footer from "./component/footer";
import Skills from "./component/skills";
import SideBar from "./component/sidePanel";
import { useState, useEffect ,useRef } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [isSideVisible, setIsSideVisible] = useState(false);
  

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth <= 856) {
        setIsIconVisible(true);
      } else {
        setIsIconVisible(false);
        setIsSideVisible(false);
      }
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121319" : "#FFF";
  }, [isDarkMode]);

  const toggle = () => {
    setIsSideVisible(!isSideVisible); // it sets the opposite value of whatever isSideVisible is holding
  };

  

  return (
    <>
      <SideBar isSideVisible={isSideVisible} toggle={toggle}></SideBar>
      <NavigationBar
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        isIconVisible={isIconVisible}
        isSideVisible={isSideVisible}
        toggle={toggle}
      ></NavigationBar>
      <ImgContainer
        isDarkMode={isDarkMode}
        isSideVisible={isSideVisible}
       
      ></ImgContainer>
      <Projects
        isDarkMode={isDarkMode}
        isSideVisible={isSideVisible}
        
      ></Projects>
      <Skills
        isDarkMode={isDarkMode}
        isSideVisible={isSideVisible}
        
      ></Skills>
      <Contact
        isDarkMode={isDarkMode}
        isSideVisible={isSideVisible}
       
      ></Contact>
      <Footer isSideVisible={isSideVisible}></Footer>
    </>
  );
}

export default App;
