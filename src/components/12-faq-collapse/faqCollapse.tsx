import { FC, useState, MouseEvent } from 'react';
import data from './data.json';

interface IFaq {
    "Why shouldn't we trust atoms?"?: boolean,
    "What do you call someone with no body and no nose?"?: boolean,
    "What's the object-oriented way to become wealthy?"?: boolean,
    "How many tickles does it take to tickle an octopus?"?: boolean,
    "What is: 1 + 1?"?: boolean
}

const FaqCollapse: FC = () => {
    const [Collapse, setCollapsee] = useState<IFaq>({});

    const handleClick = (e: MouseEvent) => {
        const { id } = e.currentTarget;
        setCollapsee(prevCollapse => ({ ...prevCollapse, [id]: !prevCollapse[id as keyof IFaq] }));
    }

    return (
        <main className='faqCollpase__container'>
            <h1>Frequently Asked Questions</h1>
            {data.data.map(d => (
                <section key={d.quesiton} className={"faqCollpase__question " + (Collapse[d.quesiton as keyof IFaq] ? "active" : "")}>
                    <h3>{d.quesiton}</h3>

                    {Collapse[d.quesiton as keyof IFaq] && <p>{d.answer}</p>}

                    <button id={d.quesiton} onClick={handleClick}>
                        {
                            Collapse[d.quesiton as keyof IFaq]
                                ?
                                <i className="fas fa-times close"></i>
                                :
                                <i className="fas fa-chevron-down"></i>
                        }
                    </button>
                </section>
            ))}
        </main>
    )
}

export default FaqCollapse;