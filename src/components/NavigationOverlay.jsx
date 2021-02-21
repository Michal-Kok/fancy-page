import '../styles/navigationOverlay.scss';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavigationSVG from './NavigationSVG';

function NavigationOverlay({ setIsActive }) {
    //const [isEnoughSpace, setIsEnoughSpace] = useState(false);

    const checkResolution = () => {
        if (window.innerWidth > 650) {
            return true;
        } else return false;
    };

    const handleLinkClick = () => setIsActive(false);

    // check if outside component only for SVG is worth it!!!

    return (
        <div className="overlayContainer">
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__list__item">
                        <NavLink
                            to='/'
                            className="navigation__list__item--link"
                            onClick={handleLinkClick} >
                            Home
                        </NavLink>
                    </li>
                    <li className="navigation__list__item" >
                        < NavLink
                            to='offer'
                            className="navigation__list__item--link"
                            onClick={handleLinkClick} >
                            Offer
                        </NavLink>
                    </li>
                    <li className="navigation__list__item">
                        < NavLink
                            to='/about'
                            className="navigation__list__item--link"
                            onClick={handleLinkClick} >
                            About us
                        </NavLink>
                    </li>
                    <li className="navigation__list__item">
                        < NavLink
                            to='/contact'
                            className="navigation__list__item--link"
                            onClick={handleLinkClick} >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {checkResolution()
                ? < NavigationSVG />
                : null}
        </div>
    )
}

export default NavigationOverlay;