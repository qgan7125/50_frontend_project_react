import React, { useState, useEffect } from 'react';
import './eventKeycode.css';

const EventkeyCode = () => {
    const [keyCode, setKeyCode] = useState({});
    const pressed = Object.keys(keyCode).length > 0 ? true : false;

    const handleKeyDown = (e) => {
        setKeyCode(prevCode => ({ ...prevCode, 'key': e.key, 'keyCode': e.keyCode, 'code': e.code }))
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
    }, [])
    return (
        <div className='eventKeycode__container'>
            {
                pressed ?
                    <div className='eventKeycode__event'>
                        <div>
                            event.key
                            <div className='box'>{keyCode.key || ""}</div>
                        </div>
                        <div>
                            event.keyCode
                            <div className='box'>{keyCode.keyCode || ""}</div>
                        </div>
                        <div>
                            event.code
                            <div className='box'>{keyCode.code || ""}</div>
                        </div>
                    </div>
                    :
                    <div className='box'>
                        Press any key to get keyCode
                    </div>
            }
        </div>
    )
}

export default EventkeyCode;