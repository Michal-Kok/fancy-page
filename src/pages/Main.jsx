import "../styles/main.scss";
import { ReactComponent as Circle } from '../img/blueCircle.svg';
import { ReactComponent as PlayingGirlSVG } from '../img/playingGirl.svg';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header.jsx';

function Main() {

    const history = useHistory();

    const title = "We're the best place for children!"
    const descContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quam nulla ipsam aperiam minima est fugiat, unde aliquid dolores.";
    const buttonContent = "Check us!";

    const headerHandleClick = () => {
        const location = {
            pathname: "/offer",
        }

        history.push(location);
    }

    console.log('im here');
    return (
        <main className='mainContainer'>
            <div className="mainContainer__SVG">
                <Circle />
                < PlayingGirlSVG className="mainContainer__SVG__girl" />
            </div>
            < Header
                title={title}
                descContent={descContent}
                buttonContent={buttonContent}
                headerHandleClick={headerHandleClick} />
        </main>
    )
}

export default Main;