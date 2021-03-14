import '../styles/opinions.scss';
import OpinionsList from '../components/OpinionsList';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Opinions() {

    useEffect(() => {
        const opinionsSection = document.querySelector('.opinions');
        const OpinionsList = document.querySelector('.opinions__list');

        gsap.registerPlugin(ScrollTrigger);
        gsap.set(opinionsSection.children, { opacity: 0, y: 150 });
        gsap.set(OpinionsList, { opacity: 1, y: 0 });

        const sectionTimeline = gsap.timeline({
            delay: .4,
            scrollTrigger: {
                trigger: opinionsSection,
                start: 'top 70%',
                toggleActions: "play pause resume reset",
                // markers: true,
            }
        });

        sectionTimeline.to(
            opinionsSection.children,
            {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .4,
                ease: "ease-in-out",
            }
        );

    }, []);

    return (
        <section className="opinions">
            <h2 className="opinions__title">
                About
            </h2>
            <p className="opinions__textContent" >
                See what our clients think <strong>About</strong> us. Here are some opions from peope who trusted our team.
            </p>
            < OpinionsList />
        </section>
    );
}

export default Opinions;