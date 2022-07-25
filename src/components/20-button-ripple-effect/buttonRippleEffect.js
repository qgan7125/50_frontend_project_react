import React, { useState } from 'react';
import './buttonRippleEffect.css';

const ButtonRippleEffect = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    const [clicked, setClicked] = useState(false)

    const handleClick = (e) => {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        setPosition({x: xInside, y: yInside});
        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        }, 500);
    }

    return (
        <div className='buttonRippleEfect__container'>
            <button onClick={handleClick}>
                Click me
                <span 
                className={clicked ? 'circle' : ''}
                style={{top: position.y + "px", left: position.x + "px", transform: "translate(-50%, -50%) scale(0)"}}></span>
            </button>
        </div>
    )
}


export default ButtonRippleEffect