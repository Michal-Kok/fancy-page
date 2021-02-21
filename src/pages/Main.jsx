import "../styles/main.scss";
import { ReactComponent as Circle } from '../img/blueCircle.svg';
import Header from '../components/Header.jsx';

function Main() {
    console.log('im here');
    return (
        <main className='mainContainer'>
            <div className="mainContainer__SVG">
                <Circle />
            </div>
            < Header />
        </main>
    )
}

export default Main;