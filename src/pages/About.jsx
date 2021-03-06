import Header from '../components/Header';
import '../styles/about.scss';
import { useHistory } from 'react-router-dom';


function About() {

    const history = useHistory();

    const title = "We really look forward to meet you!";
    const descContent = "And we really know that you wanna know more about us, our little crew and all. Site will be readdy very soon. But not now."
    const buttonContent = "Contact us!";

    const headerHandleClick = () => {
        const location = {
            pathname: "/contact",
        }

        history.push(location);
    }

    return (
        <section className="aboutPage">
            < Header
                title={title}
                descContent={descContent}
                buttonContent={buttonContent}
                headerHandleClick={headerHandleClick} />
        </section>
    )
}

export default About;