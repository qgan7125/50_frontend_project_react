import React, { useState, useEffect } from 'react';
import './dadJoke.css';

const DadJoke = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        fetchJoke()
    }, [])

    const fetchJoke = async () => {
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
        <div className='dadJoke__container'>
            <div className='dadJoke__content'>
                <h3>Don't Laugh Challenge</h3>
                <div className='Joke'>{joke}</div>
                <button onClick={handleClick}>Get Another Joke</button>
            </div>
        </div>
    )
}

export default DadJoke;