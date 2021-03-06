import '../styles/offerFirstSection.scss';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import { ReactComponent as WaveSVG } from '../img/offerWave.svg';

function OfferFirstSection() {

    const history = useHistory();
    const headerHandleClick = () => {
        const location = {
            pathname: "/about",
        }

        history.push(location);
    }

    const title = "Let your pictures live.";
    const desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quod fugiat itaque laborum officia consectetur sed. Rem nostrum totam assumenda nemo et accusantium cum nesciunt aperiam adipisci, id inventore sit!";
    const buttonContent = "Meet us!";
    return (
        <section className="OfferfirstSection">
            <Header
                title={title}
                descContent={desc}
                buttonContent={buttonContent}
                headerHandleClick={headerHandleClick} />
            <div className="OfferfirstSection__svgContainer">
                < WaveSVG />
            </div>
        </section>

    )
}

export default OfferFirstSection;