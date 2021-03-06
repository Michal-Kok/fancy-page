import '../styles/offerPlaces.scss';
import React, { } from 'react';
import { ReactComponent as EuropeSVG } from '../img/europe.svg';


function OfferPlaces() {

    const title = "We have travelled and helped people in so many places in Europe";
    const textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    return (
        <section className="offerPlaces">
            <div className="offerPlaces__mapContainer">
                <h2 className="offerPlaces__mapContainer__title">
                    {title}
                </h2>
                <div className="offerPlaces__mapContainer__svgContainer">
                    < EuropeSVG />
                </div>
            </div>
            <section className="offerPlaces__photosContainer">
                <h2 className="offerPlaces__photosContainer__textContent">
                    {textContent}
                </h2>
                <div className="offerPlaces__photosContainer__photos">
                    <h2 className="offerPlaces__photosContainer__photos__content">
                        See what we do
                    </h2>
                </div>
            </section>
            <div className="offerPlaces__opinionContainer">

            </div>

        </section>
    )
}

export default OfferPlaces;