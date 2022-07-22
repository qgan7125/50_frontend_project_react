import React, { useState } from 'react';
import './animatedNavigation.css';

const AnimatedNavigation = () => {
    const navBar = ['Home', 'Works', "About", "Contact"];
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }

    return (
        <div className='animatedNavigation__container'>
            <div className={'animatedNavigation__nav ' + ( expanded ? "active" : "")}>
                <ul>
                    {navBar.map(bar => (
                        <li key={bar}>{bar}</li>
                    ))}
                </ul>
                <button onClick={handleClick}>
                     
                    <div className='line line1'></div>
                    <div className='line line2'></div>
                </button>
            </div>
        </div>)
}

export default AnimatedNavigation;