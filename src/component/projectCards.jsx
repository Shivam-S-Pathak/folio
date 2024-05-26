import Styles from './projectsCards.module.css';


const Cards = (props) => {

    return <a href={props.actionLink} className={Styles.anchorLink}>
        <main className={Styles.mainContainer}>
            <img src={props.image} alt="result img" className={Styles.imgContainer} />
            <title className={Styles.title}>
                <label className={Styles.label}>{props.title}</label>
                <label className={Styles.discription}>{props.description}</label>
            </title>
        </main >
    </a>

}
export default Cards;