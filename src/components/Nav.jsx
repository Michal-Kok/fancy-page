import '../styles/nav.scss';
import React, { useState, useRef } from 'react';
import NavigationOverlay from '../components/NavigationOverlay';
import { ReactComponent as Logo } from '../img/Logo.svg';

function Nav() {
    const [isActive, setIsActive] = useState(false);
    const burgerRef = useRef();

    const handleBurgerClick = () => {
        burgerRef.current.classList.toggle('activeBurger');
        setIsActive(!isActive);
    }

    return (
        <>
            <div className="navContainer">
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