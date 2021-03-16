import '../styles/contact.scss';
import Header from '../components/Header';
import Form from '../components/Form';
import React, { useState, useRef } from 'react';
import { gsap } from "gsap";

function Contact() {
    const [isActive, setIsActive] = useState(false);
    const overlayRef = useRef();

    const title = "Feel free to register";
    const buttonOpen = "Sign in";
    const buttonClose = "Close!";

    const headerHandleClick = () => {
        const overlay = overlayRef.current;
        const tl = gsap.timeline();
        let leftValue = "0%";
        let widthValue = "100vw";

        if (window.innerWidth > 1024) {
            leftValue = "50%";
            widthValue = "50vw"
        }

        if (!isActive) {
            tl.to(
                overlay,
                {
                    left: leftValue,
                    borderRadius: 0,
                    duration: .4,
                    width: widthValue,
                }
            );
        } else {
            tl.to(
                overlay,
                {
                    left: '90%',
                    borderRadius: '50%',
                    duration: .4,
                    width: '100vh',
                }
            );
        }
        setIsActive(!isActive);
    };

    return (
        <section className="contactPage">
            < Header
                title={title}
                buttonContent={isActive ? buttonClose : buttonOpen}
                headerHandleClick={headerHandleClick} />
            <div
                className="contactPage__overlayContainer"
                ref={overlayRef} >
                {isActive
                    ? < Form />
                    : null}
            </div>
        </section>
    )
}

export default Contact;