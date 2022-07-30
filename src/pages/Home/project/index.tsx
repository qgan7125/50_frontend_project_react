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
        <div data-testid="project_container" className='project__container' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assests/' + backgroundImage})` }}>
            <div className='day'>
                Day {day}
            </div>
            <div className='project__info'>
                <h2>{name}</h2>
                <Link to={"/" + link}><button>Live Demo</button></Link>
            </div>
        </div>
    )
}

export default Project;