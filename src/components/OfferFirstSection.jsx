import '../styles/offerFirstSection.scss';
import Header from './Header';
import { ReactComponent as WaveSVG } from '../img/offerWave.svg';

function OfferFirstSection() {

    const title = "Let your pictures live.";
    const desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quod fugiat itaque laborum officia consectetur sed. Rem nostrum totam assumenda nemo et accusantium cum nesciunt aperiam adipisci, id inventore sit!";
    const buttonContent = "Meet us!";
    return (
        <section className="OfferfirstSection">
            <Header
                title={title}
                descContent={desc}
                buttonContent={buttonContent} />
            <div className="OfferfirstSection__svgContainer">
                < WaveSVG />
            </div>
        </section>

    )
}

export default OfferFirstSection;