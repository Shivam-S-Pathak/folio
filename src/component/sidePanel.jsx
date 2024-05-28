import Styles from "./sidePanel.module.css";
import { GrHomeRounded } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { MdConnectWithoutContact } from "react-icons/md";

const SideBar = ({ isSideVisible, toggle }) => {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <aside
        className={`${Styles.sideBar} ${
          isSideVisible ? Styles.showMenu : Styles.hideMenu
        }`}
      >
        <div className={Styles.sideBarContent}>
          <a
            className={Styles.labelNicon}
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToComponent("home");
              toggle();
            }}
          >
            <GrHomeRounded className={Styles.Icon} />
            <label className={Styles.label}>Home</label>
          </a>
          <a
            className={Styles.labelNicon}
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToComponent("projects");
              toggle();
            }}
          >
            <GoProjectSymlink className={Styles.Icon} />
            <label className={Styles.label}>Projects</label>
          </a>
          <a
            className={Styles.labelNicon}
            href="#techStack"
            onClick={(e) => {
              e.preventDefault();
              scrollToComponent("techStack");
              toggle();
            }}
          >
            <GrTechnology className={Styles.Icon} />
            <label className={Styles.label}>Tech Stack</label>
          </a>
          <a
            className={Styles.labelNicon}
            href="#contactMe"
            onClick={(e) => {
              e.preventDefault();
              scrollToComponent("contactMe");
              toggle();
            }}
          >
            <RiContactsLine className={Styles.Icon} />
            <label className={Styles.label}>Contact me</label>
          </a>
          <a
            className={Styles.labelNicon}
            href="#connectMe"
            onClick={(e) => {
              e.preventDefault();
              scrollToComponent("connectMe");
              toggle();
            }}
          >
            <MdConnectWithoutContact className={Styles.Icon} />
            <label className={Styles.label}>Social media</label>
          </a>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
