import styles from './navigationBar.module.css'
const NavigationBar = () => {

    const scrollToComponent = (id) => {
        const element = document.getElementById(id);
       
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return <>
        <header className={styles.nagivate}>

            <div className={styles.anchorContainer}>
                <a href="#home" className={styles.anchor} onClick={(e) => {
                     e.preventDefault();
                    scrollToComponent("home")
                }} id="home1">Home</a>
                <a href="#projects" className={styles.anchor} onClick={(e) => {
                     e.preventDefault();
                    scrollToComponent("projects")
                }} id='home2'>Projects</a>
                <a href="#techStack" className={styles.anchor} onClick={(e) => {
                     e.preventDefault();
                    scrollToComponent("techStack")
                }} >Tech Stack</a>
                <a href="#contactMe" className={styles.anchor} onClick={(e) => {
                     e.preventDefault();
                    scrollToComponent("contactMe")
                }} >Contact me</a>
                <a href="#connectMe" className={styles.anchor} onClick={(e) => {
                     e.preventDefault();
                    scrollToComponent("connectMe")
                }} >Connect with me</a>
            </div>
        </header>
    </>
}

export default NavigationBar;