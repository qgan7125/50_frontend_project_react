import React from 'react';
import Project from './projects';
import projectData from 'projects.json';

const Home = () => {
    return (
        <>
            <main>
                <header>
                    <div className='blur'></div>
                    <h1>50 Projects in 50 Days</h1>
                    <p>50 mini Projects learned from <a href='https://50projects50days.com/' target='_blank' rel="noreferrer"><strong>50projects50days</strong></a> in react version</p>
                </header>
                <div className='projects__container'>
                    {projectData['projects']?.map(project => (
                        <Project name={project.name} backgroundImage={project.backgroundImage} day={project.day} link={project.link} />
                    ))}
                </div>
            </main>
        </>
    )
}

export default Home;
