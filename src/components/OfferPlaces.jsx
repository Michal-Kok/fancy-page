import '../styles/offerPlaces.scss';
import React, { useEffect } from 'react';
import { ReactComponent as EuropeSVG } from '../img/europe.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function OfferPlaces() {

    const title = "We have travelled and helped people in so many places in Europe";
    const textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

    useEffect(() => {
        const title = document.querySelector('.offerPlaces__mapContainer__title');
        const pins = document.querySelectorAll('.pin');
        const container = document.querySelector('.offerPlaces__mapContainer');
        const europe = document.querySelector('#europeSVG');
        gsap.set(title, { opacity: 0, xPercent: -100 });
        gsap.set(pins, { opacity: 0, scale: 0 });
        gsap.set(europe, { opacity: 0, yPercent: 200 });


        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top 30%',
            }
        });

        tl.to(
            title,
            {
                opacity: 1,
                xPercent: 0,
                duration: .6,
                ease: "expo.out",
            }
        ).to(
            europe,
            {
                opacity: 1,
                yPercent: 0,
                duration: .6,
                ease: "expo.out",
            }
        ).to(
            pins,
            {

                opacity: 1,
                scale: 1,
                duration: .4,
                stagger: .4,
                ease: "expo.out",
            }
        );
    })

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