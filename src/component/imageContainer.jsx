import Styles from './imageContainer.module.css'

const ImgContainer = () => {
    return <>
        <div className={Styles.imageBox} id='home'>
            <div className={Styles.box1}>
                <img className={Styles.image} src="/bg_thumb-removebg-preview.png" alt="image" />
            </div>

            <div className={Styles.box2}>
                <p className={Styles.hii}>Hii guys !! I'm</p>
                <p className={Styles.name}>Shivam Pathak</p>
                <p className={Styles.side}>a passionate frontend and backend developer</p>
            </div>
        </div>
    </>
}

export default ImgContainer;