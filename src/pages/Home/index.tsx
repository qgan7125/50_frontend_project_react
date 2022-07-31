import { FC } from 'react';
import Project from './project';
import projectData from '../../projects.json';

const Home:FC = () => {

    return (
        <div>
            <main>
                <header style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/react-logo.png"})`
                }}>
                    <div className='blur'></div>
                    <h1>50 Projects in 50 Days</h1>
                    <p>50 mini Projects learned from <a href='https://50projects50days.com/' target='_blank' rel="noreferrer"><strong>50projects50days</strong></a> in react version</p>
                </header>
                <div className='projects__container'>
                    {projectData['projects']?.map(project => (
                        <Project key={project.name} name={project.name} backgroundImage={project.backgroundImage} day={project.day} link={project.link} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Home;