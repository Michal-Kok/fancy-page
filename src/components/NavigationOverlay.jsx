import '../styles/navigationOverlay.scss';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ReactComponent as NavSVG } from '../img/navigationSVG.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';

function NavigationOverlay({ setIsActive, burgerRef }) {
    //const [isEnoughSpace, setIsEnoughSpace] = useState(false);

    const checkResolution = () => {
        if (window.innerWidth > 650) {
            return true;
        } else return false;
    };

    function navigationSVG() {
        return (
            <div className="overlayContainer__svgContainer">
                < NavSVG />
            </div>
        )
    }

    const handleLinkClick = () => {
        burgerRef.current.classList.toggle('activeBurger');
        setIsActive(false);
    }

    useEffect(() => {
        const leftPanel = document.querySelector('.navigation');
        const rightPanel = document.querySelector('.overlayContainer__svgContainer');
        const list = document.querySelector('.navigation__list');
        const skeletons = document.querySelector('#trees_skeletons');
        const crowns = document.querySelector('#trees_crown');
        const sun = document.querySelector('#sun');


        gsap.set(leftPanel, { yPercent: -100 });
        gsap.set(rightPanel, { yPercent: 100 });
        gsap.set(sun, { scale: 0, transformOrigin: 'center' });
        let tlLeft = gsap.timeline();
        let tlRight = gsap.timeline();

        tlLeft.to(
            leftPanel,
            { yPercent: 0 }
        ).fromTo(
            list.children,
            { xPercent: -200 },
            {
                xPercent: 0,
                ease: 'back',
                stagger: .1,
            }
        );

        tlRight.to(
            rightPanel,
            { yPercent: 0 }
        ).fromTo(
            skeletons,
            {
                scaleY: 0,
                transformOrigin: 'bottom'
            },
            { scaleY: 1 }
        ).fromTo(
            crowns,
            {
                scaleY: 0,
                transformOrigin: 'bottom'
            },
            { scaleY: 1 }
        ).to(
            sun,
            { scale: 1 }
        )

    }, [])

    // check if outside component only for SVG is worth it!!

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
                <div className="navigation__media">
                    <ul className="navigation__media__list">
                        <li className="navigation__media__list__item">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </li>
                        <li className="navigation__media__list__item">
                            <FontAwesomeIcon icon={faYoutube} />
                        </li>
                        <li className="navigation__media__list__item">
                            <FontAwesomeIcon icon={faGooglePlusSquare} />
                        </li>
                    </ul>
                </div>
            </nav>
            {checkResolution()
                ? navigationSVG()
                : null}
        </div>
    )
}

export default NavigationOverlay;