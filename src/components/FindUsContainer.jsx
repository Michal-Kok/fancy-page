import Map from '../components/Map';
import '../styles/findUsContainer.scss';
import { useState, useEffect } from 'react';
import { ReactComponent as MarkerSVG } from '../img/girlOnMarker.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHistory } from 'react-router-dom';


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

    const history = useHistory();
    const [location, setLocation] = useState(coordinates.londonCoords);

    const handleContactClick = () => {
        const location = {
            pathname: "/contact",
        }
        history.push(location);
    }

    const handleCityClick = ({ target }) => {

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
        target.classList.add('activeLocation');
    }

    useEffect(() => {

        cities = [...document.querySelectorAll('.citySwitchButton')];
    });

    // useEffect(() => {
    //     const container = document.querySelector('.findUsContainer');
    //     const svg = document.querySelector('.findUsContainer__info__svgContainer');
    //     const dot = document.querySelector('#dot');

    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.set(svg, { y: -50, opacity: 0 });
    //     gsap.set(dot, { scale: 0, transformOrigin: 'center' });

    //     const timeline = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: container,
    //             start: 'top 60%',
    //             toggleActions: "play pause resume reset",
    //             markers: true,
    //         }
    //     });

    //     timeline.to(
    //         svg,
    //         {
    //             y: 0,
    //             opacity: 1,
    //             ease: "bounce.out",
    //         }).to(
    //             dot,
    //             {
    //                 scale: 1,
    //                 ease: "bounce.out",
    //             }
    //         );

    // }, []);

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
                <button
                    onClick={handleContactClick}
                    className="findUsContainer__info__button button">
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
                            onClick={handleCityClick} >
                            London
                        </button>
                    </li>
                    <li className="findUsContainer__info__list__item">
                        <button
                            className="citySwitchButton"
                            name="paris"
                            onClick={handleCityClick} >
                            Paris
                     </button>
                    </li>
                    <li className="findUsContainer__info__list__item">
                        <button
                            className="citySwitchButton"
                            name="newYork"
                            onClick={handleCityClick} >
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