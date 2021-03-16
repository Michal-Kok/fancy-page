import FindUsContainer from '../components/FindUsContainer';
import '../styles/location.scss';


function Location() {


    return (
        <section className="location">
            <h2 className="location__title">
                Find us
            </h2>
            <p className="location__description">
                Pariatur impedit facilis ex deleniti eaque omnis a, ducimus, enim quam commodi dignissimos laboriosam eius velit!
            </p>
            <div className="location__svgContainer">

            </div>
            < FindUsContainer />
        </section>
    );
}

export default Location;