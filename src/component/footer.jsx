import Styles from "./footer.module.css";
import { FaYoutube } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

const Footer = ({ isSideVisible }) => {
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
      <footer
        ref={observerRef}
        className={`${Styles.footer} ${
          isSideVisible ? Styles.footerBlur : ""
        } `}
        id="connectMe"
      >
        <section
          className={`${Styles.contentBox} ${
            isVisible ? Styles.visible : Styles.notVisible
          }`}
        >
          <figure className={Styles.iconRoom}>
            <a href="">
              <FaYoutube className={Styles.iconYT} />
            </a>
            <h5 className={Styles.figureCap}>YouTube</h5>
          </figure>
          <figure className={Styles.iconRoom}>
            <a href="https://www.linkedin.com/in/shivam-s-pathak/">
              <SiLinkedin className={Styles.iconLI} />
            </a>
            <h5 className={Styles.figureCap}>LinkedIn</h5>
          </figure>
          <figure className={Styles.iconRoom}>
            <a href="https://twitter.com/shivam_S_pathak">
              <RiTwitterXLine className={Styles.iconX} />
            </a>
            <h5 className={Styles.figureCap}>X</h5>
          </figure>
          <figure className={Styles.iconRoom}>
            <a href="https://github.com/Shivam-S-Pathak">
              <FaGithub className={Styles.iconGH} />
            </a>
            <h5 className={Styles.figureCap}>Github</h5>
          </figure>
          <figure className={Styles.iconRoom}>
            <a href="mailto:shivampathak5042@gmail.com">
              <MdAlternateEmail className={Styles.iconMAIL} />
            </a>
            <h5 className={Styles.figureCap}>Mail</h5>
          </figure>
        </section>
        <div className={Styles.copyrightNote}>
          <span>&copy; All copyright reserved, managed and Developed by</span>
          <p className={Styles.nameHighlight}>Shivam Pathak</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
