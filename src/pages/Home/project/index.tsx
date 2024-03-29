import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProjectProps {
    name: string;
    backgroundImage?: string;
    day: number;
    link: string;
}

const Project: FC<IProjectProps> = ({ name, backgroundImage, day, link }) => {
    const navigate = useNavigate();
    return (
        <div data-testid="project_container" className='project__container' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/' + backgroundImage})` }}>
            <div className='day'>
                Day {day}
            </div>
            <div className='project__info'>
                <h2>{name}</h2>
                <button onClick={() => navigate("/" + link)}>Live Demo</button>
            </div>
        </div>
    )
}

export default Project;