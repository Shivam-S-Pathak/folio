import Styles from './imageContainer.module.css'
import React, { useState, useEffect } from 'react';

const ImgContainer = () => {
    const [isVisibleHorizontal, setIsVisibleHorizontal] = useState(false);
    const [isVisibleVertical, setIsVisibleVertical] = useState(true);

    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth <= 1480) {
                setIsVisibleVertical(false);
                setIsVisibleHorizontal(true);
            } else {
                setIsVisibleVertical(true);
                setIsVisibleHorizontal(false);
            }
        };

        window.addEventListener('resize', resizeHandler);
        resizeHandler();
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);
    return <>
        <header className={Styles.headerContainer}>
            <div className={Styles.imageBox} id='home'>

                <div className={Styles.blurred}>
                    <header className={Styles.dp}>
                        <img src="\bg_thumb-removebg-preview.png" alt="Display picture" className={Styles.picture} />
                    </header>
                    <article className={Styles.NameContainer}>
                        <h1 className={Styles.Name}>Shivam Pathak</h1>
                        <h6 className={Styles.handle}>@shivamSpathak</h6>
                    </article>
                    <hr className={`${Styles.vertical_line} ${isVisibleVertical ? Styles.show : Styles.hide}`}></hr>
                    <hr className={`${Styles.horizontal_line} ${isVisibleHorizontal ? Styles.show : Styles.hide}`}></hr>
                    <article className={Styles.summary}>
                        I'm a passionate front-end and back-end developer with a knack for translating creative visions into robust and user-centric web experiences. I thrive in environments that utilize both my front-end design sensibilities and back-end development prowess.  I enjoy the challenge of crafting beautiful user interfaces that seamlessly integrate with powerful functionality.
                    </article>
                </div>
            </div >
            </header> 
    </>
}

export default ImgContainer;