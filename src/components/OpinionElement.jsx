import '../styles/opinionElement.scss';

function OpinionElement({ clientData: { name, location, picture } }) {

    const title = "Awesome team!";
    const description = "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. ";
    return (
        <div className="opinionElement">
            <div className="opinionElement__imgContainer">
                <img src={picture.medium} alt="clientImage" className="opinionElement__imgContainer__img" />
            </div>
            <div className="opinionElement__textContainer">
                <h3 className="opinionElement__textContainer__title">
                    {title}
                </h3>
                <p className="opinionElement__textContainer__description">
                    {description}
                </p>
                <p className="opinionElement__textContainer__signature">
                    "{name.first} <br /> {name.last}"
                </p>
                <address className="opinionElement__textContainer__address">
                    {location.city}, {location.state}
                </address>
            </div>
        </div>
    );
}

export default OpinionElement;