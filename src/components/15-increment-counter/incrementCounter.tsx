import { FC, useState, useEffect } from 'react';

const COUNTER = {
    'twitter': 12000,
    'youtube': 5000,
    'facebook': 7500
}
const IncrementCounter:FC = () => {
    const [counter, setCounter] = useState({
        'twitter': 0,
        'youtube': 0,
        'facebook': 0
    })

    useEffect(() => {
        for (let i = 1; i < 205; i++) {
            const twitter = i * Math.floor(COUNTER['twitter'] / 200);
            const youtube = i * Math.floor(COUNTER['youtube'] / 200);
            const facebook = i * Math.floor(COUNTER['facebook'] / 200);
            setTimeout(() => {
                setCounter({
                    twitter: twitter < COUNTER['twitter'] ? twitter : COUNTER['twitter'],
                    youtube: youtube < COUNTER['youtube'] ? youtube : COUNTER['youtube'],
                    facebook: facebook < COUNTER['facebook'] ? facebook : COUNTER['facebook']
                })
            }, i * 3)
        }
    }, [])

    return (
        <div className='incrementCounter__container'>
            <div className="incrementCounter__content">
                <i className="fab fa-twitter fa-3x"></i>
                <div className="counter">{counter["twitter"] || 0}</div>
                <span>Twitter Followers</span>
            </div>

            <div className="incrementCounter__content">
                <i className="fab fa-youtube fa-3x"></i>
                <div className="counter">{counter["youtube"] || 0}</div>
                <span>YouTube Subscribers</span>
            </div>

            <div className="incrementCounter__content">
                <i className="fab fa-facebook fa-3x"></i>
                <div className="counter">{counter["facebook"] || 0}</div>
                <span>Facebook Fans</span>
            </div>
        </div>
    )
}

export default IncrementCounter;