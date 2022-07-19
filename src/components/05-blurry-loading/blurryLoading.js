import React, { useState, useEffect } from 'react';
import './blurryLoading.css';

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const BlurryLoading = () => {
    const [loading, setLoading] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (loading < 99) {
                setLoading(loading + 1)
            }
        }, 40)
        return () => clearInterval(interval);
    }, [loading])

    return (
        <div className='blurryLoading__container'>
            <section className="bg" style={{ filter: `blur(${scale(loading, 0, 100, 30, 0)}px)` }}></section>
            <div className="loading-text" style={{ opacity: scale(loading, 0, 100, 1, 0) }}>{loading}%</div>
        </div>
    )
}

export default BlurryLoading;