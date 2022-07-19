import React, { useState } from 'react';
import './hiddenSearch.css';

const SearchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
</svg>;

const HiddenSearch = () => {
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleInput = (e) => {
        const { value } = e.target;
        setInput(value);
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className='hidden__container'>
            <div className={'input__container ' + (toggle ? "active" : "")}>
                <input onChange={handleInput} value={input} />
                <button onClick={handleToggle} className='btn_hidden--search'>{SearchIcon}</button>
            </div>
        </div>
    )
}

export default HiddenSearch;