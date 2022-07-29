import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProjectProps {
    name: string;
    backgroundImage?: string;
    day: number;
    link: string;
}

const Project: FC<IProjectProps> = ({ name, backgroundImage, day, link }) => {
    return (
        <div className='project__container' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assests/' + backgroundImage})` }}>
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