import '../styles/offerPlaces.scss';
import React, { useEffect } from 'react';
import { ReactComponent as EuropeSVG } from '../img/europe.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function OfferPlaces() {

    const title = "We provide our educational institutions all around the world.";

    const renderImages = () => {
        let images = [];
        for (let i = 0; i < 6; i++) {
            images.push(
                <img
                    src={`${process.env.PUBLIC_URL}/assets/photos/img${i + 1}.jpg`}
                    alt="image"
                    key={i}
                    className="offerPlaces__photosContainer__photos__item" />);
        }
        return images;
    }

    useEffect(() => {
        const title = document.querySelector('.offerPlaces__mapContainer__title');
        const pins = document.querySelectorAll('.pin');
        const container = document.querySelector('.offerPlaces__mapContainer');
        const europe = document.querySelector('#europeSVG');
        const photos = document.querySelectorAll('.offerPlaces__photosContainer__photos__item');
        const photosContainer = document.querySelectorAll('.offerPlaces__photosContainer__photos');
        console.log(photos)

        gsap.set(title, { opacity: 0, xPercent: -100 });
        gsap.set(pins, { opacity: 0, scale: 0 });
        gsap.set(europe, { opacity: 0, yPercent: 200 });
        gsap.set(photos, { opacity: 0, xPercent: -40 })


        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top 30%',
            }
        });
        const imgTimeline = gsap.timeline({
            delay: .7,
            scrollTrigger: {
                trigger: photosContainer,
                start: 'top 15%',
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
                ease: "bounce.out",
            }
        );

        imgTimeline.to(
            photos,
            {
                opacity: 1,
                xPercent: 0,
                duration: .4,
                stagger: .2,
            }
        )

    }, []);

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
                <div className="offerPlaces__photosContainer__photos">
                    <h2 className="offerPlaces__photosContainer__title">
                        See what we do
                    </h2>
                    {renderImages()}
                </div>
            </section>
        </section>
    )
}

export default OfferPlaces;