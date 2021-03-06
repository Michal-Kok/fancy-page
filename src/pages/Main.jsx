import "../styles/main.scss";
import { ReactComponent as Circle } from '../img/blueCircle.svg';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header.jsx';

function Main() {

    const history = useHistory();

    const title = "Best photos only here!"
    const descContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quam nulla ipsam aperiam minima est fugiat, unde aliquid dolores. Unde dolorem modi eaque quasi suscipit hic numquam quae totam quibusdam!";
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