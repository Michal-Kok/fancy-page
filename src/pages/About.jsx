import Header from '../components/Header';
import '../styles/about.scss';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function About() {

    const history = useHistory();

    const title = "We really look forward to meet you!";
    const descContent = "And we really know that you wanna know more about us, our little crew and all. Site will be readdy very soon. But not now.";
    const buttonContent = "Contact us!";
    const description = "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.  Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors.";

    useEffect(() => {
        const article = document.querySelector(".aboutArticle");
        const list = document.querySelector('.aboutArticle__list');
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: article,
                start: 'top 15%',
                toggleActions: "play pause resume reset",
            }
        });
        const listTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: list,
                start: 'top 80%',
            }
        });
        const backgoroundTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: article,
                start: "-15% 50%",
                end: "50% 50%",
                scrub: true,
            }
        })
        gsap.set(article.children, { y: 100, opacity: 0 });
        gsap.set(list.children, { xPercent: -100, opacity: 0 });

        backgoroundTimeline.fromTo(
            article,
            { opacity: 0, },
            { opacity: 1, }
        );

        tl.to(
            article.children,
            {
                y: 0,
                opacity: 1,
                duration: .5,
                stagger: .4,
                ease: "ease-in-out",
            }
        );

        listTimeline.to(
            list.children,
            {
                xPercent: 0,
                opacity: 1,
                duration: .5,
                stagger: .3,
                ease: "ease-in-out",
            }
        );

    }, [])

    const headerHandleClick = () => {
        const location = {
            pathname: "/contact",
        }
        history.push(location);
    }

    return (
        <>
            <section className="aboutFirstSection">
                < Header
                    title={title}
                    descContent={descContent}
                    buttonContent={buttonContent}
                    headerHandleClick={headerHandleClick} />
            </section>
            <article className="aboutArticle">
                <h2 className="aboutArticle__title">
                    What We Do
                    </h2>
                <p className="aboutArticle__description">
                    {description}
                </p>
                <ul className="aboutArticle__list">
                    <li className="aboutArticle__list__item">Planning process</li>
                    <li className="aboutArticle__list__item">Guiding stuff</li>
                    <li className="aboutArticle__list__item">Unforgotable journey</li>
                    <li className="aboutArticle__list__item">Brilliant memories</li>
                </ul>
            </article>

        </>
    )
}

export default About;