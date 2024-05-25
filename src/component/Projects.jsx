import Styles from './Projects.module.css';
import Cards from './projectCards';
const Projects = () => {
    const CardsData = [
        {
            title: 'The ScoreBoard',
            image: '/result_img.jpg',
            description: 'This platform displays academic results and important notices to the students made using Django, SQLite',
            actionLink: "https://github.com/Shivam-S-Pathak/The-Scoreboard"
        },
        {
            title: 'Tic Tak Toe game',
            image: '/tic_tak_toe_img.jpg',
            description: 'This is a interactive game with bright and loud interface made using HTML , CSS , javaScript.',
            actionLink: "https://github.com/Shivam-S-Pathak/Tic-Tak-Toe"
        },
        {
            title: 'Rock paper scissor',
            image: '/rock_paper_scissor.jpg',
            description: 'Another interactive game made using HTML , CSS , javaScript.',
            actionLink: "https://github.com/Shivam-S-Pathak/Stone-paper-scissors"
        },
        {
            title: 'To-do list',
            image: '/to_do_list_img.jpg',
            description: 'this is a to do list for made your working easier made using HTML , CSS, Reactjs , javaScript , Bootstrap.',
            actionLink: "https://github.com/Shivam-S-Pathak/to_do_list"
        },
        {
            title: 'Calculator',
            image: '/calculator_img.jpg',
            description: 'An interractive web calculator made using HTML , CSS, Reactjs , javaScript , Bootstrap.',
            actionLink: "https://github.com/Shivam-S-Pathak/calculator"
        },
        {
            title: 'Currency convertor',
            image: '/currency_convertor.jpg',
            description: 'A currency convertor made using API , HTML , CSS , javaScript.',
            actionLink: "https://github.com/Shivam-S-Pathak/CurrenncyConvertor"
        },

    ];
    const cards = CardsData.map((card) => (
        <Cards
            key={card.title}
            title={card.title}
            image={card.image}
            description={card.description}
            actionLink={card.actionLink}
        />
    ));

    return <>
        <div className={Styles.project} id='projects'>
            <div className={Styles.heading}>
                <h1>Projects</h1>
                <hr className={Styles.line} />
            </div>
            <main className={Styles.contentContainer}>
               {cards}
            </main>
        </div>
    </>
}

export default Projects;