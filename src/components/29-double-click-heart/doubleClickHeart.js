import React, { useState, useEffect } from 'react';
import './doubleClickHeart.css';

let count = 0;
let clickTime = 0;
const DoubleClickHeart = () => {
    const [position, setPosition] = useState();
    const [rippleArr, setRippleArr] = useState([]);

    const handleClick = (e) => {
        if(clickTime === 0) {
            clickTime = new Date().getTime()
        } else {
            if((new Date().getTime() - clickTime) < 800) {
                setPosition({ x: e.clientX - e.target.offsetLeft, y: e.clientY - e.target.offsetTop })
                clickTime = 0
            } else {
                clickTime = new Date().getTime();
                setPosition();
            }
        }
    }

    useEffect(() => {
        if (position) {
            const newRipple = (
                <i
                    key={count++}
                    className="fas fa-heart"
                    style={{ top: position.y, left: position.x }}
                    onAnimationEnd={() => {
                        setRippleArr(prev => {
                            let nextRippleArr = [...prev];
                            nextRippleArr.shift();
                            return nextRippleArr;

                        })
                    }} />
            )
            setRippleArr(prevRipple => [...prevRipple, newRipple])
        }
    }, [position])
    return (
        <div className='doubleClickHeart__container'>
            <h1>Double click on the image to <i className="fas fa-heart"></i> it</h1>
            <h3>You like it {count} times</h3>
            <div className="loveMe" onClick={handleClick}>
                {rippleArr}
            </div>
        </div>
    )
}

export default DoubleClickHeart;