import { FC, useState, useEffect } from 'react';

const scale: (
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number) => number
    = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

interface ITime {
    hour: number,
    minutes: number,
    seconds: number,
    month: number,
    day: number,
    date: number,
}

const getCurrentTime: () => ITime = () => {
    const time = new Date();

    return {
        hour: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds(),
        month: time.getMonth(),
        day: time.getDay(),
        date: time.getDate()
    }
}

const ThemeClock: FC = () => {
    const [theme, setTheme] = useState(false);
    const [time, setTime] = useState(getCurrentTime());

    const handleTheme = () => {
        setTheme(!theme);
    }

    useEffect(() => {
        setInterval(() => {
            setTime(getCurrentTime())
        }, 1000)
    }, [])

    return (
        <main className={'themeClock__container ' + (theme ? 'dark' : "")}>
            <button onClick={handleTheme}>{theme ? 'Light' : 'Dark'} mode</button>
            <div className='clock'>
                <div className='needle hour' style={{ transform: `translate(-50%, -100%) rotate(${scale(time.hour, 0, 12, 0, 360)}deg)` }}></div>
                <div className='needle minutes' style={{ transform: `translate(-50%, -100%) rotate(${scale(time.minutes, 0, 60, 0, 360)}deg)` }}></div>
                <div className='needle seconds' style={{ transform: `translate(-50%, -100%) rotate(${scale(time.seconds, 0, 60, 0, 360)}deg)` }}></div>
                <div className='center-point'></div>
                <div className='board'></div>
            </div>
            <div className='time'>
                {`${time.hour - 12 > 9 ? time.hour - 12 : time.hour}:${+time.minutes > 10 ? time.minutes : "0" + time.minutes} ${time.hour > 12 ? 'PM' : "AM"}`}
            </div>
            <div className='date'>
                {`${days[time.day]}, ${months[time.month]}`}
                <div className='circle'>{time.date}</div>
            </div>
        </main>
    )
}

export default ThemeClock;