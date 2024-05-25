import NavigationBar from './component/navgationBar';
import ImgContainer from './component/imageContainer';
import Projects from './component/Projects';
import Contact from './component/contactForm';
import Footer from './component/footer';
import Skills from './component/skills';
import './App.css';

function App() {

  return (
    <>
      <NavigationBar></NavigationBar>
      <ImgContainer></ImgContainer>
      <Projects ></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
