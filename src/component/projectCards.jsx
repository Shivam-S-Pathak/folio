import Styles from './projectsCards.module.css';

const Cards = (props) => {
    return <>
    <a href={props.actionLink} className={props.isDarkMode ? Styles.anchorLinkDark : Styles.anchorLinkLight}>
        <main className={props.isDarkMode ? Styles.mainContainerDark :Styles.mainContainerLight}>
            <img src={props.image} alt="result img" className={Styles.imgContainer} />
            <title className={Styles.title}>
                <label className={props.isDarkMode ? Styles.labelDark : Styles.labelLight}>{props.title}</label>
                <label className={props.isDarkMode ? Styles.discriptionDark : Styles.discriptionLight}>{props.description}</label>
            </title>
        </main >
    </a>
    </>
 
}
export default Cards;