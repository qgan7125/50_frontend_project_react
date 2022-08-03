import { FC, useState, useEffect } from 'react';

const DadJoke: FC = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        fetchJoke();
    }, [])

    const fetchJoke: () => void = async () => {
        fetch('https://icanhazdadjoke.com', {
            headers: {
                Accept: 'application/json',
            },
        })
            .then(res => res.json())
            .then(res => setJoke(res.joke))
    }

    const handleClick = () => {
        fetchJoke();
    }
    return (
        <main className='dadJoke__container'>
            <div className='dadJoke__content'>
                <h3>Don't Laugh Challenge</h3>
                <div className='Joke'>{joke}</div>
                <button onClick={handleClick}>Get Another Joke</button>
            </div>
        </main>
    )
}

export default DadJoke;