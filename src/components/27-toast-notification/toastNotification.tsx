import { FC, useState, ReactNode } from 'react';

const MESSAGE = ['Message one', "Message two", "Message three", "Message four"];
const TYPE = ['info', 'success', 'error']

let counter = 0;
const ToastNotification: FC = () => {
    const [message, setMessage] = useState<ReactNode[]>([]);

    const handleClick = () => {
        const randomType = TYPE[Math.floor(Math.random() * TYPE.length)];
        const randomMessage = MESSAGE[Math.floor(Math.random() * MESSAGE.length)];
        const newMessage = <div key={counter++} className={`toast ${randomType}`}>{randomMessage}</div>
        setMessage(preMessage => [...preMessage, newMessage]);
        setTimeout(() => {
            setMessage(preMessage => [...preMessage.slice(1)]);
        }, 3000)
    }
    return (
        <main className='toastNotification__container'>
            <button className='btn' onClick={handleClick}>Show notification</button>
            <div id='toasts'>{message}</div>
        </main>
    )
}

export default ToastNotification;