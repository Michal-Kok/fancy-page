import '../styles/offerDescription.scss';
import { ReactComponent as PhotosSVG } from '../img/photos.svg';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function OfferDescription() {

    const title = "Our mission is to create safe space for children to learning and playing with others";
    const content = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloremque ab, incidunt dolor dolore dignissimos aliquid assumenda ut aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloremque ab, incidunt dolor dolore dignissimos aliquid assumenda ut aspernatur! Dolore voluptatibus asperiores eum nesciunt fuga, numquam magnam nisi sunt aliquid...";

    const renderSVG = () => {
        if (window.innerWidth > 1024) {
            return (
                <div className="offerDescription__svgContainer">
                    < PhotosSVG />
                </div>
            );
        } else return null;
    };

    useEffect(() => {
        const articleElements = document.querySelector('.offerDescription__article');
        const upperPhoto = document.getElementById('upperPhoto');
        let svgElement = document.querySelector('.offerDescription__svgContainer');
        svgElement = svgElement
            ? svgElement.firstChild
            : null;

        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: articleElements,
                start: 'top 20%',
            }
        });

        tl.from(
            articleElements.children,
            {
                opacity: 0,
                y: 100,
                stagger: 0.3,
                duration: 0.6,
                ease: "ease-in-out",
            }
        ).from(
            svgElement,
            {
                xPercent: -100,
                opacity: 0,
                duration: .4,
            }
        );

    }, [])

    return (
        <section className="offerDescription">
            {renderSVG()}
            <article className="offerDescription__article">
                <h2 className="offerDescription__article__title">
                    {title}
                </h2>
                <hr className="offerDescription__article__line" />
                <p className="offerDescription__article__content">
                    {content}
                </p>
            </article>
        </section>
    )
}

export default OfferDescription;