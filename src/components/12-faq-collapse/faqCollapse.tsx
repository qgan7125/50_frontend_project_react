import { FC, useState } from 'react';
import data from './data.json';

const FaqCollapse:FC = () => {
    const [Collapse, setCollapsee] = useState({});

    const handleClick = (e) => {
        const { id } = e.currentTarget;
        setCollapsee(prevCollapse => ({ ...prevCollapse, [id]: !prevCollapse[id] }));
    }

    return (
        <div className='faqCollpase__container'>
            <h1>Frequently Asked Questions</h1>
            {data.data.map(d => (
                <div key={d.quesiton} className={"faqCollpase__question " + (Collapse[d.quesiton] ? "active" : "")}>
                    <h3>{d.quesiton}</h3>

                    {Collapse[d.quesiton] && <p>{d.answer}</p>}


                    <button id={d.quesiton} onClick={handleClick}>
                        {
                            Collapse[d.quesiton]
                                ?
                                <i className="fas fa-times close"></i>
                                :
                                <i className="fas fa-chevron-down"></i>
                        }
                    </button>
                </div>
            ))}
        </div>
    )
}

export default FaqCollapse;