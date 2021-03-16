import '../styles/opinions.scss'
import { clientData } from '../api';
import OpinionElement from '../components/OpinionElement';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function OpinionsList() {

    const errorMsg = "Our clients are so shy...";
    const [data, setData] = useState([]);

    useEffect(() => {
        clientData.get()
            .then(({ data }) => setData(data.results))
            .catch(err => console.error(err));
    }, []);

    // second useEffect created for animation

    useEffect(() => {
        const OpinionsList = document.querySelector('.opinions__list');

        gsap.registerPlugin(ScrollTrigger);
        gsap.set(OpinionsList.children, { opacity: 0, xPercent: -100 });

        const listTimeline = gsap.timeline({
            delay: .8,
            scrollTrigger: {
                trigger: OpinionsList,
                start: 'top 90%',
                // markers: true,
                toggleActions: "play pause resume reset",
            }
        });

        listTimeline.to(
            OpinionsList.children,
            {
                opacity: 1,
                xPercent: 0,
                duration: .5,
                stagger: .2,
                ease: "ease-in-out",
            }
        )
    })

    return (
        <div className="opinions__list">
            {data.length
                ? data.map(clientData => < OpinionElement
                    key={clientData.name.first}
                    clientData={clientData} />)
                : <h2 className="opinion__list__erorMsg">{errorMsg}</h2>}
        </div>
    );
}

export default OpinionsList;