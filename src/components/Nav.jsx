import '../styles/nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import NavigationOverlay from '../components/NavigationOverlay';
import { ReactComponent as Logo } from '../img/Logo.svg';

function Nav() {
    const [isActive, setIsActive] = useState(false);
    const burgerRef = useRef();
    const history = useHistory();

    const handleBurgerClick = () => {
        burgerRef.current.classList.toggle('activeBurger');
        setIsActive(!isActive);
    }

    const handleGoBackClick = () => history.goBack();

    return (
        <>
            <div className="navContainer">
                <button
                    className="navContainer__goBackButton button"
                    onClick={handleGoBackClick} >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div className="navContainer__logo">< Logo /></div>
                <div className="navContainer__burgerWrapper">
                    <button
                        onClick={handleBurgerClick}
                        className="navContainer__burgerWrapper__burger"
                        ref={burgerRef} >

                    </button>
                </div>
            </div>
            {isActive
                ? <NavigationOverlay
                    setIsActive={setIsActive}
                    burgerRef={burgerRef} />
                : null}
        </>
    )
}

export default Nav;