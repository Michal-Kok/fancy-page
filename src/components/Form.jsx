import '../styles/form.scss';
import React, { useState, useEffect } from 'react';
import useForm from './useForm';
import validate from './validate';
import gsap from 'gsap';
import { ReactComponent as EmailSVG } from '../img/email.svg';


function Form() {

    const sendEmail = () => {
        //send confirmation email
        // console.log(errors.state);
        // if (errors.state) return;

        window.Email.send({
            SecureToken: process.env.REACT_APP_SECURE_SMTP_TOKEN,
            To: values.email,
            From: "programistadobry@gmail.com",
            Subject: "Newsletter",
            Body: `<h3>Hello ${values.name}!</h3> I'm happy to meet you. It's my fictional adress. BUT i'm SURE that your biggest dream is to contact creator of this site. Use my GitHub's e-mail instead. Regards.`,
        }).then(() => setIsSubmitted(!isSubmitted));
    }

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [values, handleInputChange, handleSubmit, errors] = useForm(validate, sendEmail);

    const title = "Very kind title";
    const desc = "Sign in to our newsletter! We're gonna send you our weekly offers for trips. Stay in and go out with us!";
    const checkboxContent = "I agree to receive marketing informations to  my email.";

    useEffect(() => {
        const formContainer = document.querySelector('.formContainer');
        const lines = document.querySelectorAll('.line');
        const tickle = document.querySelector('#tickle');
        const letter = document.querySelector('#letter');

        const tl = gsap.timeline({ delay: 0.3 });
        gsap.set(formContainer, { xPercent: 150, opacity: 0 });
        gsap.set(formContainer.children, { opacity: 0, y: 150 });
        gsap.set(lines, { opacity: 0, scaleX: 0, transformOrigin: "left" });
        gsap.set(tickle, { display: 'none', y: -100 });
        gsap.set(letter, { opacity: 0, y: 100 });

        tl.to(
            formContainer,
            {
                opacity: 1,
                xPercent: -50,
                duration: 0.7,
                ease: "expo.out",
            }
        ).to(
            formContainer.children,
            {
                opacity: 1,
                y: 0,
                duration: .7,
                stagger: .2,
                ease: "expo.out",
            }
        ).to(
            letter,
            {
                opacity: 1,
                y: 0,
                duration: .3,
                ease: "expo.out",
            }
        ).to(
            lines,
            {
                opacity: 1,
                scaleX: 1,
                duration: .3,
                stagger: .2,
            }
        );


    }, []);

    useEffect(() => {
        const tickle = document.querySelector('#tickle');
        const lines = document.querySelectorAll('.line');

        if (isSubmitted) {
            gsap.timeline().to(
                lines,
                {
                    x: 50,
                    opacity: 0,
                    //display: "none",
                    duration: .3,
                    stagger: .2,
                }
            ).to(
                tickle,
                {
                    display: "block",
                    y: 0,
                    duration: .5,
                    ease: "bounce.out",
                }
            );
        }

    }, [isSubmitted])

    return (
        <div className="formContainer">
            <h2 className="formContainer__title">
                {title}
            </h2>
            <p className="formContainer__description">
                {desc}
            </p>
            <div className="formContainer__svgContainer"></div>
            <form
                className="formContainer__form"
                onSubmit={handleSubmit} >
                <input
                    className="formContainer__form__input"
                    type="text"
                    name="name"
                    placeholder="Type your name..."
                    onChange={handleInputChange}
                    value={values.name} />
                {errors.name && <p className="formContainer__form__input__error">{errors.name}</p>}
                <input
                    className="formContainer__form__input"
                    type="text"
                    name="email"
                    placeholder="Type your email..."
                    onChange={handleInputChange}
                    value={values.email} />
                {errors.email && <p className="formContainer__form__input__error">{errors.email}</p>}
                <input
                    className="formContainer__form__input"
                    type="text"
                    //inputMode="numeric"
                    name="location"
                    placeholder="Type your postal code..."
                    onChange={handleInputChange}
                    value={values.location} />
                {errors.location && <p className="formContainer__form__input__error">{errors.location}</p>}
                <label
                    htmlFor="terms"
                    className="formContainer__form__label" >
                    <input
                        className="formContainer__form__input--checkbox"
                        type="checkbox"
                        name="terms"
                        id="terms"
                        placeholder="Type your name..."
                        checked={values.terms}
                        onChange={handleInputChange} />
                    {checkboxContent}
                </label>
                {errors.terms && <p className="formContainer__form__input__error">{errors.terms}</p>}

                <button
                    className="formContainer__form__button button"
                    type="submit" >
                    Sign me!
                </button>
            </form>
            <div className="formContainer__svgContainer">
                < EmailSVG />
            </div>
        </div>

    )
}

export default Form;