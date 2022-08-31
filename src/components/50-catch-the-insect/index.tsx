import { FC, useState, MouseEvent, useEffect } from 'react';
import uuid from 'react-uuid';

const INSECTS = [
    {
        name: "Fly",
        img: "http://pngimg.com/uploads/fly/fly_PNG3946.png"
    },
    {
        name: "Mosquito",
        img: "http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png"
    },
    {
        name: "Spider",
        img: "http://pngimg.com/uploads/spider/spider_PNG12.png"
    },
    {
        name: "Roach",
        img: "http://pngimg.com/uploads/roach/roach_PNG12163.png"
    }
]

const getRandomLocation = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

type TInsects = {
    key: string,
    x: number,
    y: number
}

const CatchTheInsect: FC = () => {
    const [screens, setScreens] = useState(0);
    const [insectImage, setInsectImage] = useState({ name: "", img: "" });
    const [time, setTime] = useState(0);
    const [score, setScore] = useState(0);
    const [insects, setInsects] = useState<TInsects[]>([]);

    const handleNext = () => {
        setScreens(prev => prev + 1)
    }

    const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
        const { id } = e.currentTarget as HTMLButtonElement;
        const selectedInsect = INSECTS.filter(insect => insect.name === id)[0];
        setScreens(prev => prev + 1);
        setInsectImage(selectedInsect);
    }

    const handleClickInsect = (e: MouseEvent<HTMLDivElement>) => {
        const { id } = e.currentTarget;
        const idx = insects.findIndex(insect => insect.key === id);
        setInsects(prev => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
        setScore(prev => prev + 1);
        setTimeout(() => {
            Array(2).fill(0).forEach(i => {
                const { x, y } = getRandomLocation();
                setInsects(prev => [...prev, { key: uuid(), x, y }])
            })
        }, 100)
    }


    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (screens > 1) {

            setTimeout(() => {
                const { x, y } = getRandomLocation();
                setInsects([{ key: uuid(), x, y }])
            }, 500);

            interval = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }

        return () => clearInterval(interval);
    }, [screens])

    return (
        <main className="catchTheInsect__container">
            <section className={'screen' + (screens > 0 ? " up" : "")}>
                <h1>Catch The Insect</h1>
                <button className="btn" id="start-btn" onClick={handleNext}>Play Game</button>
            </section>
            <section className={'screen' + (screens > 1 ? " up" : "")}>
                <h1>What is your "favorite" insect?</h1>
                <ul className='insects-list'>
                    {
                        INSECTS.map(insect => (
                            <li key={insect.name}>
                                <button id={insect.name} className="choose-insect-btn" onClick={handleSelect}>
                                    <p>{insect.name}</p>
                                    <img src={insect.img} alt={insect.name} />
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section className='screen'>
                <h3 className='catchTheInsect__time'>Time: {`${Math.floor(time / 60)}:${time % 60 > 9 ? time % 60 : "0" + time % 60}`}</h3>
                <h3 className='catchTheInsect__score'>Score: {score}</h3>
                <h5 className={"catchTheInsect__message" + (score >= 20 ? " active" : "")}>
                    Are you annoyed yet? <br />
                    You are playing an impossible game!!
                </h5>
                {insects.map(insect => (
                    <div id={insect.key} key={insect.key} className='catchTheInsect__insect' style={{ top: insect.y, left: insect.x }} onClick={handleClickInsect}><img src={insectImage.img} alt={insectImage.name} /></div>
                ))}
            </section>
        </main>
    )
}

export default CatchTheInsect;