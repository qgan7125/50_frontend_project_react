import React, { useState } from 'react';
import './splitLandingPage.css';

const SplitLandingPage = () => {
    const [expanded, setExpanded] = useState();

    const isActive = (current) => {
        if (!expanded) {
            return "";
        }

        if (expanded === current) {
            return "active";
        }

        return 'inactive';
    }

    const handleHover = (target) => {
        setExpanded(target)
    }
    return (
        <div className='splitLanding__container'>
            <div
                id='ps5'
                className={isActive("ps5")}
                onMouseEnter={() => handleHover('ps5')}
                onMouseLeave={() => handleHover("")}>
                <h2>PlayStation 5</h2>
                <button>BUY NOW</button>
            </div>
            <div
                id='xbox'
                className={isActive("xbox")}
                onMouseEnter={() => handleHover('xbox')}
                onMouseLeave={() => handleHover("")}>
                <h2>XBox Series X</h2>
                <button>BUY NOW</button>
            </div>
        </div>
    )
}

export default SplitLandingPage;