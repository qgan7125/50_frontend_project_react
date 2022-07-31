import { FC, useState, ChangeEvent } from 'react';

type TCheckBoxs = {
    'Good'?: boolean,
    'Cheap'?: boolean,
    'Fast'?: boolean
}


const GoodCheapFast: FC = () => {
    const [checkBoxs, setChekBoxs] = useState<TCheckBoxs>({
        'Good': false,
        'Cheap': false,
        'Fast': false
    });

    const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        setChekBoxs(prev => ({ ...prev, [id]: checked }));

        if(checked){
            const others = Object.keys(checkBoxs).filter(e => e !== id);
            for(let other of others) {
                if(!checkBoxs[other as keyof TCheckBoxs]){
                    return
                } 
            }
            const randomBox = others[Math.floor(Math.random() * others.length)];
            setChekBoxs(prev => ({...prev, [randomBox]: false}));
        }
    }

    return (
        <div className='goodCheapFast__container'>
            <h2>How do you want your project to be?</h2>
            {
                Object.keys(checkBoxs).map(checkbox => (
                    <div key={checkbox} className="toggle__container">
                        <input
                            id={checkbox}
                            type="checkbox"
                            onChange={handleCheckBox}
                            checked={checkBoxs[checkbox as keyof TCheckBoxs]} />
                        <label htmlFor={checkbox}>
                            <div className="ball"></div>
                        </label>
                        {checkbox}
                    </div>
                ))
            }

        </div>
    )
}

export default GoodCheapFast;