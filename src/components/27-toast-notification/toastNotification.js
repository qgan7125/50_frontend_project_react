import React, { useState } from 'react';
import './toastNotification.css';

const MESSAGE = ['Message one', "Message two", "Message three", "Message four"];
const TYPE = ['info', 'success', 'error']

const ToastNotification = () => {
    const [message, setMessage] = useState([]);

    const handleClick = () => {
        const randomType = TYPE[Math.floor(Math.random() * TYPE.length)];
        const randomMessage = MESSAGE[Math.floor(Math.random() * MESSAGE.length)];
        const newMessage = <div key={Math.random()} className={`toast ${randomType}`}>{randomMessage}</div>
        setMessage(preMessage => [...preMessage, newMessage]);
        setTimeout(()=> {
            setMessage(preMessage => [...preMessage.slice(1)]);
        }, 3000)
    }
    return (
        <div className='toastNotification__container'>
            <button className='btn' onClick={handleClick}>Show notification</button>
            <div id='toasts'>{message}</div>
        </div>
    )
}

export default ToastNotification;