import Styles from './skills.module.css';
import { useEffect, useState } from 'react';

const Skills = ({isDarkMode ,isSideVisible}) => {
    const [isResponsive, setIsResponsive] = useState(false);

    useEffect(() => {
        const resizeHandle = () => {
            if (window.innerWidth <= 889) {
                setIsResponsive(true);
            } else {
                setIsResponsive(false);
            }
        };
        window.addEventListener('resize', resizeHandle);
        resizeHandle();
        return () => window.removeEventListener('resize', resizeHandle);
    }, []);


    return <>
        <div className={`${isDarkMode ? Styles.skillsDark :Styles.skillsLight} ${isSideVisible ? Styles.skillsBlur : ""}`} id='techStack' >
            <div className={Styles.mainContainer}>
                <div className={isDarkMode ? Styles.headingDark : Styles.headingLight}>
                    <h1>Tech Stack</h1>
                </div>
                <main className={`${Styles.contentSection} ${isResponsive ? Styles.responsive : Styles.notResponsive}`}>
                    <section className={Styles.Frontend} >
                        <label className={Styles.Techtitles}>Frontend</label>
                        <article className={Styles.technologyContainer}>
                            <label className={Styles.techHTML}>HTML</label>
                            <label className={Styles.techCSS}>CSS</label>
                            <label className={Styles.techJS}>javaScript</label>
                            <label className={Styles.techTailwind}>Tailwind</label>
                            <label className={Styles.techBootstrap}>Bootstrap</label>
                            <label className={Styles.techReact}>React.js</label>
                        </article>
                    </section>
                    <section className={Styles.Backend}>
                        <label className={Styles.Techtitles}>Backend</label>
                        <article className={Styles.technologyContainer}>
                            <label className={Styles.techDjango}>Django</label>
                            <label className={Styles.techNode}>Node.js</label>
                            <label className={Styles.techExpress}>Express.js</label>

                        </article>
                    </section>
                    <section className={Styles.Database}>
                        <label className={Styles.Techtitles}>Database</label>
                        <article className={Styles.technologyContainer}>
                            <label className={Styles.tecMySQLite}>MySQLite</label>
                            <label className={Styles.techMongo}>MongoDB</label>
                            <label className={Styles.techMySQL}>MySQL</label>
                            <label className={Styles.techPostgres}>PostgresSQL</label>
                        </article>
                    </section>
                </main>
            </div>
        </div>
    </>
}
export default Skills;