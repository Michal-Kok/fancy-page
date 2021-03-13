import '../styles/opinions.scss'
import { clientData } from '../api';
import OpinionElement from '../components/OpinionElement';
import { useEffect, useState } from 'react';

function OpinionsList() {

    const errorMsg = "Our clients are so shy...";
    const [data, setData] = useState([]);

    useEffect(() => {
        clientData.get()
            .then(({ data }) => setData(data.results))
            .catch(err => console.error(err));
    }, []);

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