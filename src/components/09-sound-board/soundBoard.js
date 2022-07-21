import React from 'react';
import applause from './sounds/applause.mp3';
import boo from './sounds/boo.mp3';
import gasp from './sounds/gasp.mp3';
import tada from './sounds/tada.mp3';
import victory from './sounds/victory.mp3';
import wrong from './sounds/wrong.mp3';
import './soundBoard.css';

const SoundBoard = () => {
    const audios = {
        applause: new Audio(applause),
        boo: new Audio(boo),
        gasp: new Audio(gasp),
        tada: new Audio(tada),
        victory: new Audio(victory),
        wrong: new Audio(wrong)
    }

    const handleClick = (e) => {
        const { id } = e.target;
        Object.keys(audios).forEach(aud => {
            const audio = audios[aud];
            audio.pause();
            audio.currentTime = 0;
        })
        audios[id].play();
    }
    return (
        <div className='soundBoard__container'>
            <div className='soundBoard__content'>
                {Object.keys(audios).map(sound => (
                    <button id={sound} key={sound} onClick={handleClick}>{sound}</button>
                ))}
            </div>
        </div>
    )
}

export default SoundBoard;