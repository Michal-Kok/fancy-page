import Map from '../components/Map';
import '../styles/findUsContainer.scss';
import { useState, useEffect } from 'react';
import { ReactComponent as MarkerSVG } from '../img/girlOnMarker.svg';


const coordinates = {
    parisCoords: {
        lon: 48.8566,
        lat: 2.3522,
    },
    newYorkCoords: {
        lon: 40.7128,
        lat: -74.0060,
    },
    londonCoords: {
        lon: 51.5074,
        lat: 0.1278,
    }
}

function FindUsContainer() {

    let cities = [];

    const [location, setLocation] = useState(coordinates.londonCoords);

    const handleClick = ({ target }) => {

        switch (target.name) {
            case 'london':
                setLocation(coordinates.londonCoords);
                break;
            case 'paris':
                setLocation(coordinates.parisCoords);
                break;
            case 'newYork':
                setLocation(coordinates.newYorkCoords);
                break
            default:
                break;
        }
        cities.forEach(city => city.classList.remove('activeLocation'));
        // console.log(target)
        target.classList.add('activeLocation');
        console.log(cities);
    }

    useEffect(() => {
        const london = document.querySelector('#london');
        const paris = document.querySelector('#paris');
        const newYork = document.querySelector('#newYork');

        cities = [...document.querySelectorAll('.citySwitchButton')];
    })

    return (
        <div className="findUsContainer">
            <div className="findUsContainer__info">
                <div className="findUsContainer__info__svgContainer">
                    < MarkerSVG />
                </div>
                <h3 className="findUsContainer__info__title">
                    Perfect title
                </h3>
                <p className="findUsContainer__info__description">
                    Do you want to receive more information?
                </p>
                <button className="findUsContainer__info__button button">
                    Contact us!
                </button>
                <h4 className="findUsContainer__info__options">
                    We have offices in few places... find us there!
                </h4>
                <ul className="findUsContainer__info__list">
                    <li className="findUsContainer__info__list__item" >
                        <button
                            className="citySwitchButton activeLocation"
                            name="london"
                            onClick={handleClick} >
                            London
                        </button>
                    </li>
                    <li className="findUsContainer__info__list__item">
                        <button
                            className="citySwitchButton"
                            name="paris"
                            onClick={handleClick} >
                            Paris
                     </button>
                    </li>
                    <li className="findUsContainer__info__list__item">
                        <button
                            className="citySwitchButton"
                            name="newYork"
                            onClick={handleClick} >
                            New York
                        </button>
                    </li>
                </ul>
            </div>
            <div className="findUsContainer__mapContainer">
                < Map location={location} />
            </div>
        </div>
    );
}

export default FindUsContainer;