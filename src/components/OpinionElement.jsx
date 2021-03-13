

function OpinionElement({ clientData: { name, location, picture } }) {

    const title = "Awesome team!";
    const description = "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.";
    return (
        <div className="opinionElement">
            <img src={picture.thumbnail} alt="clientImage" className="opinionElement__img" />
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
                <adress className="opinionElement__textContainer__adress">
                    {location.city}, {location.state} <br />
                </adress>
            </div>
        </div>
    );
}

export default OpinionElement;