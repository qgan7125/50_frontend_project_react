import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const { name, backgroundImage, day, link } = props;
    return (
        <div className='project__container' style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className='day'>
                Day {day}
            </div>
            <div className='project__info'>
                <h2>{name}</h2>
                <button><Link to={"/" + link}>Live Demo</Link></button>
            </div>
        </div>
    )
}

export default Project;