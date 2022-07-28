import React, { useState, useEffect } from 'react';
import './autoTextEffect.css';

const TEXT = "We love programming!";
const AutoTextEffect = () => {
    const [speed, setSpeed] = useState(1);
    const [text, setText] = useState("")

    const handleSpeed = (e) => {
        setSpeed(e.target.value)
    }

    useEffect(() => {
        let idx = 1;

        const interval = setInterval(() => {
            setText(TEXT.slice(0, idx));
            idx++;
            if(idx > TEXT.length) {
                idx = 1;
            }
        }, 300 / speed)
        return () => clearInterval(interval);
    }, [speed])

    return (
        <div className='autoTextEffect__container'>
            <h1>{text || "Staring..."}</h1>
            <label >
                Speed:
                <input
                    type='number'
                    min={1}
                    max={10}
                    value={speed}
                    onChange={handleSpeed} />
            </label>
        </div>
    )
}

export default AutoTextEffect;