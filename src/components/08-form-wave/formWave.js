import React, { useState } from 'react';
import './formWave.css';

const FormWave = () => {
    const [inputs, setInput] = useState({});

    const handleInput = (e) => {
        setInput({...inputs, [e.target.id]: e.target.value });
    }

    return (
        <div className='formWave__container'>
            <form className='formWave__content'>
                <h1>Please login</h1>
                <div className='row'>
                    <input
                        id="email"
                        onChange={handleInput}
                        value={inputs['email'] || ''}
                        required />
                    <label>{
                        "Email".split("")
                            .map((ch, i) => <span key={ch + i} style={{transitionDelay: (i * 50) + "ms"}}>{ch}</span>)
                    }</label>
                </div>
                <div className='row'>
                    <input
                        id="password"
                        type="password"
                        onChange={handleInput}
                        value={inputs['password'] || ''}
                        required />
                    <label>{
                        "Password".split("")
                            .map((ch, i) => <span key={ch + i} style={{transitionDelay: (i * 50) + "ms"}}>{ch}</span>)
                    }</label>
                </div>
                <button>Login</button>
                <div>Don't have an account? <a>Register</a></div>
            </form>
        </div>
    )
}

export default FormWave;