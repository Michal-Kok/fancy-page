import "../styles/main.scss";
import { ReactComponent as Circle } from '../img/blueCircle.svg';
import Header from '../components/Header.jsx';

function Main() {

    const title = "Best photos only here!"
    const descContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quam nulla ipsam aperiam minima est fugiat, unde aliquid dolores. Unde dolorem modi eaque quasi suscipit hic numquam quae totam quibusdam!";
    const buttonContent = "Check us!";

    console.log('im here');
    return (
        <main className='mainContainer'>
            <div className="mainContainer__SVG">
                <Circle />
            </div>
            < Header
                title={title}
                descContent={descContent}
                buttonContent={buttonContent} />
        </main>
    )
}

export default Main;