import NavigationBar from "./component/navgationBar";
import ImgContainer from "./component/imageContainer";
import Projects from "./component/Projects";
import Contact from "./component/contactForm";
import Footer from "./component/footer";
import Skills from "./component/skills";
import { useState } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <NavigationBar
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      ></NavigationBar>
      <ImgContainer isDarkMode={isDarkMode}></ImgContainer>
      <Projects isDarkMode={isDarkMode}></Projects>
      <Skills isDarkMode={isDarkMode}></Skills>
      <Contact isDarkMode={isDarkMode}></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
