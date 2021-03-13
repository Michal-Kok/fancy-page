import '../styles/opinions.scss';
import OpinionsList from '../components/OpinionsList';

function Opinions() {

    return (
        <section className="opinions">
            <h2 className="opinions__title">
                About
            </h2>
            <p className="opinions__textContent" >
                See what our clients think <strong>About</strong> us. Here are some opions from peope who trusted our team.
            </p>
            < OpinionsList />
        </section>
    );
}

export default Opinions;