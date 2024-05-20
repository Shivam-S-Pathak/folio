import Styles from './sidePanel.module.css';
import { BsInfoSquare } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { MdConnectWithoutContact } from "react-icons/md";


const SideBar = () => {
    const scrollToComponent = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return <>
        <aside className={Styles.sideBar}>
            <div className={Styles.sideBarContent}>
                <a className={Styles.labelNicon} href='#home' onClick={(e)=>{
                    e.preventDefault();
                    scrollToComponent("home");
                    
                }}>
                    <BsInfoSquare className={Styles.Icon} />
                    <label className={Styles.label}>About me</label>
                </a>
                <a className={Styles.labelNicon} href='#projects' onClick={(e)=>{
                    e.preventDefault();
                    scrollToComponent("projects");
                }}>
                    <GoProjectSymlink className={Styles.Icon} />
                    <label className={Styles.label}>Projects</label>
                </a>
                <a className={Styles.labelNicon} href='#techStack' onClick={(e)=>{
                    e.preventDefault();
                    scrollToComponent("techStack");
                }}>
                    <GrTechnology className={Styles.Icon} />
                    <label className={Styles.label}>Tech Stack</label>
                </a>
                <a className={Styles.labelNicon}href='#contactMe' onClick={(e)=>{
                    e.preventDefault();
                    scrollToComponent("contactMe");
                }}>
                    <RiContactsLine className={Styles.Icon} />
                    <label className={Styles.label}>Contact me</label>
                </a>
                <a className={Styles.labelNicon} href='#connectMe' onClick={(e)=>{
                    e.preventDefault();
                    scrollToComponent("connectMe");
                }}>
                    <MdConnectWithoutContact className={Styles.Icon} />
                    <label className={Styles.label}>Connect with me</label>
                </a>
            </div>
        </aside>
    </>
};

export default SideBar;
