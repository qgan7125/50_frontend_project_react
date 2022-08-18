import { FC, useState } from 'react';

const BoxesBackground: FC = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <main className='boxesBg__container'>
            <div className={'boxes' + (toggle ? " big" : "")} onClick={handleToggle}>
                {new Array(4).fill(0).map((e, i) => {
                    return new Array(4).fill(0).map((e1, j) => (
                        <div key={i + "" + j} className='box' style={{ backgroundPosition: `${-j * 125}px ${-i * 125}px` }}></div>
                    ))
                })}
            </div>
        </main>
    )
}

export default BoxesBackground;