import { FC, useState, ChangeEvent } from 'react';

const HiddenSearch:FC = () => {
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInput(value);
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <main className='hidden__container'>
            <div className={'input__container ' + (toggle ? "active" : "")}>
                <input onChange={handleInput} value={input} />
                <button onClick={handleToggle} className='btn_hidden--search'><i className="fas fa-search"></i></button>
            </div>
        </main>
    )
}

export default HiddenSearch;